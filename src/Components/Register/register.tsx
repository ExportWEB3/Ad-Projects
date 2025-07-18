import React, { useContext, useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { GlobalUseContext } from '../../Context/context';
import { Input } from '../Input/Input.component';
import { RegisterData } from '../../utilities/data';
import { errorResponse, userAttributes } from '../../utilities/typedec';
import { Icon } from '../Icon.component/Icon';
import { Button } from '../Button/button';
import { useHttpFetcher } from '../../hooks/customhooks';
import registerImage from '../../Images/registerPag.png';


export function RegisterComponent () {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(GlobalUseContext);
    const [showPassword, setShowPassword] = useState(false);
    const { fetchIt } = useHttpFetcher();
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerUser, setRegisterUser] = useState<userAttributes>({
        password: "",
        email: "",
        confirmPassword: "",
        fullName: "",
    });

    const handleOnchange = (text: string, payload: keyof userAttributes) => {
        setRegisterUser((prev) => ({
            ...prev,
            [payload]: text,
        }));
    };

    const isEmailValid = registerUser.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerUser.email);
    const isPasswordValid =
        registerUser.password.length >= 6 &&
        /[A-Z]/.test(registerUser.password) &&
        /[a-z]/.test(registerUser.password) &&
        /[^A-Za-z0-9]/.test(registerUser.password);
    const isConfirmPasswordValid =
        registerUser.confirmPassword === registerUser.password && registerUser.confirmPassword.length > 0;
    const isFormValid = isEmailValid && isPasswordValid && isConfirmPasswordValid;

    const handleRegister = async () => {
        const regObj = {
            email: registerUser.email,
            password: registerUser.password,
            fullName: registerUser.fullName,
            confirmPassword: registerUser.confirmPassword, 
        };

        if (!registerUser.email || !registerUser.password || !registerUser.confirmPassword || !registerUser.fullName) {
            // Show toast using your notification system
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "All fields are required!",
                    icon: "ri-error-warning-fill",
                    backgroundColor: "red",
                },
            });
            return;
        }


        try {
            const res = await fetchIt({
                apiEndPoint: `register/create`,
                httpMethod: 'post',
                reqData: regObj,
                isSuccessNotification: {
                    notificationText: '',
                    notificationState: false,
                }
            }) as errorResponse;
            console.log(res);
            setRegisterUser({
                password: "",
                email: "",
                confirmPassword: "",
                fullName: "",
            });

            // Show custom toast on success
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "Account created successfully..",
                    icon: "ri-check-fill",
                    backgroundColor: "green",
                    iconClassName: "text-white",
                },
            });
            navigate('/otp', { state: { email: registerUser.email, userId: res?.payload } }); return;
        } catch (error: any) {
            // Handle error and show toast notification
            const message = error?.message || "Registration failed. Please try again.";
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

    const handleGoogleSignUp = () => {
        // Open Google OAuth in a popup window
        const googleAuthUrl = "http://localhost:4000/auth/google";
        const width = 500;
        const height = 600;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;
        const popup = window.open(
            googleAuthUrl,
            "GoogleSignUp",
            `width=${width},height=${height},left=${left},top=${top},status=no,toolbar=no,menubar=no`
        );

        // Listen for message from backend (token or user info)
        const handleMessage = (event: MessageEvent) => {
            // Only accept messages from your backend origin
            if (event.origin !== "http://localhost:4000") return;
            if (event.data && event.data.type === "GOOGLE_AUTH_SUCCESS") {
                // You can store token, user info, etc.
                dispatch({
                    type: "SET_TOAST",
                    payload: {
                        notificationState: true,
                        notificationText: "Google sign up successful! Redirecting to dashboard...",
                        icon: "ri-check-fill",
                        backgroundColor: "green",
                        iconClassName: "text-white",
                    },
                });
                // Optionally redirect after a short delay
                setTimeout(() => {
                    window.location.href = "/dashboard"; // or navigate("/dashboard")
                }, 2000);
            } else if (event.data && event.data.type === "GOOGLE_AUTH_ERROR") {
                dispatch({
                    type: "SET_TOAST",
                    payload: {
                        notificationState: true,
                        notificationText: "Google sign up failed.",
                        icon: "ri-error-warning-fill",
                        backgroundColor: "red",
                    },
                });
            }
            window.removeEventListener("message", handleMessage);
            if (popup) popup.close();
        };

        window.addEventListener("message", handleMessage);
    };

    return (
<div className="w-screen h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Background image for mobile */}
            <div className='w-2/6 h-full bg-slate-600'>
                 {/* Background image for desktop */}
  <img
    src={registerImage}
    className="hidden md:block md:h-screen w-full object-cover"
    alt="register"
  />

  {/* Background image for mobile */}
  <img
    src={registerImage}
    className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-30 z-0"
    alt="register"
    style={{ pointerEvents: 'none' }}
  /> 
            </div>

            {/* Content */}
            <div className='w-full md:w-8/12 h-full p-4 md:p-20 flex items-center justify-center absolute md:static top-0 left-0 overflow-y-auto'>
                <div className='w-full md:w-w48 bg-white mt-40 register-container md:bg-opacity-100 rounded-xl md:rounded-none p-6 md:p-0 shadow-lg md:shadow-none h-full md:h-auto'>
                    <h1 className='text-3xl md:text-4xl font-root font-bold mt-10 register-title-mobile'>Let's create your account</h1>
                    <p className='mt-6 md:mt-10 text-base'>Sign up with social and add your first social account in one step</p>
                    <button
                        className='w-full flex items-center justify-center mt-8 mb-8 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition buttonOx'
                        onClick={handleGoogleSignUp}
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className='w-6 h-6 mr-3 buttonImg' />
                        <span className='text-base font-semibold text-gray-700'>Sign up with Google</span>
                    </button>

                    <div className='w-full h-fit flex flex-col mt-4'>
                        {RegisterData?.map((item, index) => (
                            <div key={index} className="relative w-full">
                                <Input
                                    displayText={item.field}
                                    displayTextClassName="text-gray-800 font-semibold text-base"
                                    type={
                                        item?.name === 'password'
                                            ? (showPassword ? 'text' : 'password')
                                            : item?.name === 'confirmPassword'
                                                ? (showConfirmPassword ? 'text' : 'password')
                                                : 'text'
                                    }
                                    placeHolder={item.field}
                                    payload={item.name}
                                    className='w-full h-12'
                                    onChange={handleOnchange}
                                    value={registerUser[item.name] as keyof userAttributes}
                                />
                                {(item?.name === 'password' || item?.name === 'confirmPassword') && (
                                    <>
                                        <span
                                            className="absolute right-3 top-16 transform -translate-y-1/2 cursor-pointer"
                                            onClick={() => {
                                                if (item?.name === 'password') setShowPassword((prev) => !prev);
                                                if (item?.name === 'confirmPassword') setShowConfirmPassword((prev) => !prev);
                                            }}
                                        >
                                            {((item?.name === 'password' && showPassword) || (item?.name === 'confirmPassword' && showConfirmPassword)) ? (
                                                // Eye open icon (visible)
                                                <Icon
                                                    icon='ri-eye-fill'
                                                    className="text-xl text-gray-500 cursor-pointer"
                                                />
                                            ) : (
                                                // Eye closed icon (hidden)
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m1.414-1.414A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                                                </svg>
                                            )}
                                        </span>
                                        {/* Password requirements and validation */}
                                        {item?.name === 'password' && (
                                            <div className="mt-2 text-xs text-gray-600 space-y-1">
                                                <div className={registerUser.password.length >= 6 ? "text-green-600" : "text-red-600"}>
                                                    • At least 6 characters
                                                </div>
                                                <div className={/[A-Z]/.test(registerUser.password) ? "text-green-600" : "text-red-600"}>
                                                    • An uppercase letter
                                                </div>
                                                <div className={/[a-z]/.test(registerUser.password) ? "text-green-600" : "text-red-600"}>
                                                    • A lowercase letter
                                                </div>
                                                <div className={/[^A-Za-z0-9]/.test(registerUser.password) ? "text-green-600" : "text-red-600"}>
                                                    • A special character
                                                </div>
                                            </div>
                                        )}
                                        {/* Confirm password validation */}
                                        {item?.name === 'confirmPassword' && (registerUser.confirmPassword || '').length > 0 && registerUser.confirmPassword !== registerUser.password && (
                                            <div className="mt-2 text-xs text-red-600">
                                                Passwords do not match
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    <Button
                        btnText='Register'
                        type='button'
                        className='w-full h-12 mt-10 mb-4 bg-gray-800 text-white rounded-md transition duration-200 register-mobile-btn'
                        onClick={handleRegister}
                        disabled={!isFormValid}
                    >
                        Register
                    </Button>

                    <div className='text-center mt-4'>
                        <p>Already have an Account?</p>
                    </div>

                    <div className='continue-to-login'>
                        <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 font-semibold cursor-pointer' onClick={() => navigate('/login')}>Continue to Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
}