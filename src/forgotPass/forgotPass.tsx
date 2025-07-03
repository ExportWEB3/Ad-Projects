import React, { useState, useContext, useRef } from "react";
import { Button } from "../Components/Button/button";
import { GlobalUseContext } from "../Context/context";
import { useHttpFetcher } from "../hooks/customhooks";
import { useNavigate } from "react-router-dom";
import { OtpInputRefs, OtpKeyDownHandler } from "../utilities/typedec";

export function ForgotPassComponent() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(GlobalUseContext);
    const { fetchIt } = useHttpFetcher();
    const navigate = useNavigate();
    const inputs = useRef<OtpInputRefs>([]);
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    // Step 1: Send OTP to email
    const handleSendOtp = async () => {
        if (!email) {
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "Please enter your email.",
                    icon: "ri-error-warning-fill",
                    backgroundColor: "red",
                },
            });
            return;
        }
        setLoading(true);
        try {
            await fetchIt({
                apiEndPoint: "otp/resend",
                httpMethod: "post",
                reqData: { email },
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
                    notificationText: "OTP sent to your email.",
                    icon: "ri-check-fill",
                    backgroundColor: "green",
                    iconClassName: "text-white",
                },
            });
            setStep(2);
        } catch (error: any) {
            setLoading(false);
            const message = error?.message || "Failed to send OTP.";
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

    // Step 2: Verify OTP
    const handleVerifyOtp = async () => {
        const otpString = otp.join(""); // Join array to string
        if (!otpString || otpString.length !== 6) {
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "Please enter the 6-digit OTP.",
                    icon: "ri-error-warning-fill",
                    backgroundColor: "red",
                },
            });
            return;
        }
        setLoading(true);
        try {
            await fetchIt({
                apiEndPoint: "otp/verify",
                httpMethod: "post",
                reqData: { otp: otpString, email }, // Send as string
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
                    notificationText: "OTP verified!",
                    icon: "ri-check-fill",
                    backgroundColor: "green",
                    iconClassName: "text-white",
                },
            });
            setStep(3);
        } catch (error: any) {
            setLoading(false);
            const message = error?.message || "OTP verification failed.";
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

    // Password validation function
    const validatePassword = (password: string) => {
        if (password.length < 6) return "Password must be at least 6 characters.";
        if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
        if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter.";
        if (!/[0-9]/.test(password)) return "Password must contain a number.";
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Password must contain a special character.";
        return "";
    };

    // Step 3: Change password
    const handleChangePassword = async () => {
        setPasswordError("");
        setConfirmPasswordError("");
        if (!currentPassword || !newPassword || !confirmPassword) {
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "All fields are required.",
                    icon: "ri-error-warning-fill",
                    backgroundColor: "red",
                },
            });
            return;
        }
        // Validate new password
        const pwdError = validatePassword(newPassword);
        if (pwdError) {
            setPasswordError(pwdError);
            return;
        }
        if (newPassword !== confirmPassword) {
            setConfirmPasswordError("New passwords do not match.");
            return;
        }
        setLoading(true);
        try {
            await fetchIt({
                apiEndPoint: `change/password`,
                httpMethod: "post",
                reqData: { email, currentPassword, newPassword },
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
                    notificationText: "Account updated!",
                    icon: "ri-check-fill",
                    backgroundColor: "green",
                    iconClassName: "text-white",
                },
            });
        } catch (error: any) {
            console.log("Error changing password:", error);
            setLoading(false);
            const message = error?.message || "Failed to update password.";
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

        setTimeout(() => {
            navigate("/login");
        }, 2000);
    };


    
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
            setLoading(false);
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
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className=" flex items-center flex-col p-8 w-96 h-4/5">
                {step === 1 && (
                    <>
                        <img
                            src="/src/Images/password.png"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <h2 className="text-3xl font-semibold font-root mb-2">Forgot your Password?</h2>
                        <p className="font-root text-center">A code will be sent to your email to help reset your password.</p>
                        <label className="block text-left w-full mb-1 font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mb-4 p-2 border outline-none rounded"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={loading}
                        />
                        <Button
                            btnText="Proceed"
                            type="button"
                            className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-xl"
                            onClick={handleSendOtp}
                            disabled={loading}
                        >
                            Proceed
                        </Button>
                        <p onClick={() => navigate("/login")} className="font-root mt-5 underline hover:no-underline cursor-pointer">Back to Login</p>
                    </>
                )}
                {step === 2 && (
                    <>
                        <img
                            src="/src/Images/email-icon.png"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-semibold font-root mb-2">Check your Email</h2>
                        <p className="font-root">Input the code that was sent to your email</p>
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
                        <Button
                            btnText="Verify"
                            type="button"
                            className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 mt-5 rounded-xl"
                            onClick={handleVerifyOtp}
                            disabled={loading}
                        >
                            Verify
                        </Button>
                        <p className="font-root mt-5">Didnt get any code? <span className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer" onClick={handleResendOtp}>Click to resend</span></p>
                        <p onClick={() => navigate("/login")} className="font-root mt-5 underline hover:no-underline cursor-pointer">Back to Login</p>

                    </>
                )}
                {step === 3 && (
                    <>
                        <img
                            src="/src/Images/password.png"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <h2 className="text-3xl font-root font-semibold mb-2">Set a new Password</h2>
                        <p className="font-root text-center mb-4">Your new password must be different from your previously used password</p>
                        <label className="block text-left w-full mb-1 font-xs text-gray-700">
                            Current Password
                        </label>
                        <input
                            type="text"
                            placeholder="Current Password"
                            className="w-full mb-3 p-2 border rounded outline-none"
                            value={currentPassword}
                            onChange={e => setCurrentPassword(e.target.value)}
                            disabled={loading}
                        />
                        <label className="block text-left w-full mb-1 font-xs text-gray-700">
                            New Password
                        </label>
                        <input
                            type="text"
                            placeholder="New Password"
                            className="w-full mb-1 p-2 border rounded outline-none"
                            value={newPassword}
                            onChange={e => {
                                setNewPassword(e.target.value);
                                setPasswordError(validatePassword(e.target.value));
                            }}
                            disabled={loading}
                        />
                        {passwordError && (
                            <div className="text-red-600 text-sm mb-2">{passwordError}</div>
                        )}
                        <label className="block text-left w-full mb-1 font-xs text-gray-700">
                            Confirm New Password
                        </label>
                        <input
                            type="text"
                            placeholder="Confirm New Password"
                            className="w-full mb-1 p-2 border rounded outline-none"
                            value={confirmPassword}
                            onChange={e => {
                                setConfirmPassword(e.target.value);
                                setConfirmPasswordError(
                                    e.target.value !== newPassword ? "New passwords do not match." : ""
                                );
                            }}
                            disabled={loading}
                        />
                        {confirmPasswordError && (
                            <div className="text-red-600 text-sm mb-2">{confirmPasswordError}</div>
                        )}
                        <Button
                            btnText="Reset Password"
                            type="button"
                            className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-xl mt-5"
                            onClick={handleChangePassword}
                            disabled={loading}
                        >
                            Reset Password
                        </Button>
                        <p onClick={() => navigate("/login")} className="font-root mt-5 underline hover:no-underline cursor-pointer">Back to Login</p>
                    </>
                )}
            </div>
        </div>
    );
}
