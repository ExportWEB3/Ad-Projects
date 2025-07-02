import React, { useState, useContext } from "react";
import { Button } from "../Components/Button/button";
import { GlobalUseContext } from "../Context/context";
import { useHttpFetcher } from "../hooks/customhooks";

export function ForgotPassComponent() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(GlobalUseContext);
    const { fetchIt } = useHttpFetcher();

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
        if (!otp || otp.length !== 6) {
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
                reqData: { otp, email },
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

    // Step 3: Change password
    const handleChangePassword = async () => {
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
        if (newPassword !== confirmPassword) {
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "New passwords do not match.",
                    icon: "ri-error-warning-fill",
                    backgroundColor: "red",
                },
            });
            return;
        }
        setLoading(true);
        try {
            await fetchIt({
                apiEndPoint: "/change/password",
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
            // Optionally redirect to login or clear form
        } catch (error: any) {
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
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                {step === 1 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mb-4 p-2 border rounded"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={loading}
                        />
                        <Button
                            btnText="Proceed"
                            type="button"
                            className="w-full bg-blue-600 text-white py-2 rounded"
                            onClick={handleSendOtp}
                            disabled={loading}
                        >
                            Proceed
                        </Button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
                        <input
                            type="text"
                            placeholder="Enter 6-digit OTP"
                            className="w-full mb-4 p-2 border rounded"
                            value={otp}
                            maxLength={6}
                            onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
                            disabled={loading}
                        />
                        <Button
                            btnText="Verify"
                            type="button"
                            className="w-full bg-blue-600 text-white py-2 rounded"
                            onClick={handleVerifyOtp}
                            disabled={loading}
                        >
                            Verify
                        </Button>
                    </>
                )}
                {step === 3 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
                        <input
                            type="password"
                            placeholder="Current Password"
                            className="w-full mb-3 p-2 border rounded"
                            value={currentPassword}
                            onChange={e => setCurrentPassword(e.target.value)}
                            disabled={loading}
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            className="w-full mb-3 p-2 border rounded"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            disabled={loading}
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="w-full mb-4 p-2 border rounded"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            disabled={loading}
                        />
                        <Button
                            btnText="Update Password"
                            type="button"
                            className="w-full bg-green-600 text-white py-2 rounded"
                            onClick={handleChangePassword}
                            disabled={loading}
                        >
                            Update Password
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}