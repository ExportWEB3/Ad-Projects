import { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OtpInputRefs, OtpKeyDownHandler } from "../../utilities/typedec";
import { Button } from "../Button/button";
import { GlobalUseContext } from "../../Context/context";
import { useHttpFetcher } from "../../hooks/customhooks";

export function OtpComponent () {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputs = useRef<OtpInputRefs>([]);
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");
    const [userId] = useState(location.state?.userId || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showRedirectCard, setShowRedirectCard] = useState(false);
    const navigate = useNavigate();
    const { dispatch } = useContext(GlobalUseContext);
    const { fetchIt } = useHttpFetcher();

    // Handle OTP input change
    const handleChange = (value: string, idx: number) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[idx] = value.slice(-1);
        setOtp(newOtp);
        if (value && idx < 5) {
            inputs.current[idx + 1]?.focus();
        }
    };

    // Handle OTP paste
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const paste = e.clipboardData.getData("text").replace(/\D/g, "");
        if (paste.length === 0) return;
        const pasteArr = paste.slice(0, 6).split("");
        const newOtp = [...otp];
        pasteArr.forEach((digit, idx) => {
            newOtp[idx] = digit;
            if (inputs.current[idx]) {
                inputs.current[idx]!.value = digit;
            }
        });
        setOtp(newOtp);
        const lastIdx = pasteArr.length - 1;
        if (inputs.current[lastIdx]) {
            inputs.current[lastIdx]!.focus();
        }
        e.preventDefault();
    };

    // Handle keyboard navigation
    const handleKeyDown: OtpKeyDownHandler = (e, idx) => {
        if (e.key === "Backspace" && !otp[idx] && idx > 0) {
            inputs.current[idx - 1]?.focus();
        }
    };

    // Verify OTP
    const handleVerifyOtp = async () => {
        setLoading(true);
        setError("");
        try {
            const otpCode = otp.join("");
            if (otpCode.length !== 6) {
                setError("Please enter the 6-digit OTP code.");
                setLoading(false);
                return;
            }
            const res = await fetchIt({
                apiEndPoint: "otp/verify",
                httpMethod: "post",
                reqData: { otp: otpCode, email },
                isSuccessNotification: {
                    notificationText: "",
                    notificationState: false,
                }
            });
            setLoading(false);
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: res?.message || "Account verified!",
                    icon: "ri-check-fill",
                    backgroundColor: "green",
                    iconClassName: "text-white",
                },
            });
            // Show redirect card after toast clears (3s for toast + 0.5s for transition)
            setTimeout(() => {
                setShowRedirectCard(true);
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }, 3500);
        } catch (error: any) {
            setLoading(false);
            let message =
                (error?.response?.data?.message && typeof error.response.data.message === "string" && error.response.data.message) ||
                (error?.response?.data?.text && typeof error.response.data.text === "string" && error.response.data.text) ||
                (error?.message && typeof error.message === "string" && error.message) ||
                "OTP verification failed. Please try again.";
            setError(message);
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: message,
                    icon: "ri-error-warning-fill",
                    backgroundColor: "red",
                },
            });
        }
    };

    // Resend OTP
    const handleResendOtp = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetchIt({
                apiEndPoint: "otp/resend",
                httpMethod: "post",
                reqData: { email },
                isSuccessNotification: {
                    notificationText: "",
                    notificationState: false,
                }
            });
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: res?.message || "OTP code resent!",
                    icon: "ri-check-fill",
                    backgroundColor: "green",
                    iconClassName: "text-white",
                },
            });
        } catch (error: any) {
            setLoading(false);
            console.log("Resend OTP error:", error);
            let message =
                (error?.response?.data?.errors?.email?.message) ||
                (error?.response?.data?.message && typeof error.response.data.message === "string" && error.response.data.message) ||
                (error?.response?.data?.text && typeof error.response.data.text === "string" && error.response.data.text) ||
                (error?.message && typeof error.message === "string" && error.message) ||
                "Failed to resend OTP. Please try again.";
            setError(message);
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: message,
                    icon: "ri-error-warning-fill",
                    backgroundColor: "red",
                },
            });
        }
    };

    return (
        <div className="h-screen w-full flex ">
            <img src="/src/Images/registerPag.png" className="hidden md:block h-full w-1/3 object-cover" />
            <div className='w-full md:w-8/12 h-full p-4 md:p-20 flex items-center justify-center absolute md:static top-0 left-0'>
                <div className='w-full h-4/5 rounded-xl p-6 flex flex-col justify-center'>
                    <h1 className='text-4xl font-root font-bold text-center mb-4'>Authentication</h1>
                    <p className='text-center text-xl'>Please enter the OTP sent to your email</p>
                    <div className='flex justify-center items-center mt-6'>
                        {otp.map((digit, idx) => (
                            <input
                                key={idx}
                                ref={el => { inputs.current[idx] = el; }}
                                type="text"
                                inputMode="numeric"
                                value={digit}
                                onChange={e => handleChange(e.target.value, idx)}
                                onPaste={handlePaste}
                                onKeyDown={e => handleKeyDown(e, idx)}
                                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded mx-1 focus:outline-none focus:border-blue-500"
                                maxLength={1}
                            />
                        ))}
                    </div>
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                    <div className="w-full flex justify-center h-10 mt-10">
                        <Button
                            type="button"
                            btnText="Verify"
                            className="w-20 h-full bg-gray-900 text-white hover:bg-blue-900 transition-colors duration-300"
                            disabled={loading}
                            onClick={handleVerifyOtp}
                        >Verify</Button>
                    </div>
                    <p className="text-center text-sm mt-4">
                        Didn't receive the code?{" "}
                        <span
                            className="text-blue-500 cursor-pointer hover:underline"
                            onClick={handleResendOtp}
                        >
                            Resend
                        </span>
                    </p>
                    {/* Redirect Card */}
                    {showRedirectCard && (
                        <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg px-8 py-6 flex flex-col items-center animate-fadeIn">
                            <span className="text-green-600 text-3xl mb-2">
                                <i className="ri-check-fill"></i>
                            </span>
                            <p className="text-lg font-semibold mb-1">Account Verified</p>
                            <p className="text-gray-600">Redirecting to login...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}