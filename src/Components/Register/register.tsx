import React, { useContext, useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { GlobalUseContext } from '../../Context/context';
import { Input } from '../Input/Input.component';
import { RegisterData } from '../../utilities/data';
import { userAttributes } from '../../utilities/typedec';
import { Icon } from '../Icon.component/Icon';
import { Button } from '../Button/button';

export function RegisterComponent () {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(GlobalUseContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerUser, setRegisterUser] = useState<userAttributes>({
        password: "",
        email: "",
        confirmPassword: "",
    });


    const handleOnchange = (text: string, payload: keyof userAttributes) => {
        const userObj = registerUser;

        setRegisterUser((prev) => ({
            ...prev,
            [payload]: text,
        }));
    };
    
    const isEmailValid = registerUser.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerUser.email);
    const isPasswordValid = registerUser.password.length >= 12 && /[A-Z]/.test(registerUser.password) && /[a-z]/.test(registerUser.password) && /[^A-Za-z0-9]/.test(registerUser.password);
    const isConfirmPasswordValid = registerUser.confirmPassword === registerUser.password && registerUser.confirmPassword.length > 0;
    const isFormValid = isEmailValid && isPasswordValid && isConfirmPasswordValid;

     const handleRegister = () => {
            if (!registerUser.email || !registerUser.password || !registerUser.confirmPassword) {
                dispatch({
                    type: "SET_TOAST",
                    payload: {
                        state: true,
                        text: "All fields are required!",
                        icon: "ri-error-warning-fill",
                        backgroundColor: "red",
                    },
                });
                return;
            }
             if (registerUser.password !== registerUser.confirmPassword) {
                                dispatch({
                                    type: "SET_TOAST",
                                    payload: {
                                        state: true,
                                        text: "Passwords do not match!",
                                        icon: "ri-error-warning-fill",
                                        backgroundColor: "red ",
                                    },
                                });
                                return;
                            }
                            // Save user data to localStorage
                            const users = JSON.parse(localStorage.getItem('users') || '[]');
                            // Check if the email already exists
                            if (users.some((user: any) => user.email === registerUser.email)) {
                                dispatch({
                                    type: "SET_TOAST",
                                    payload: {
                                        state: true,
                                        text: "Account already exists! Redirecting to Login......",
                                        icon: "ri-error-warning-fill",
                                        backgroundColor: "red ",
                                    },
                                });
                                setTimeout(() => {
                                    navigate('/login');
                                }, 3000);
                                return;
                            }
                            // Save the full user object
                            users.push({
                                email: registerUser.email,
                                password: registerUser.password,
                                confirmPassword: registerUser.confirmPassword
                            });
                            localStorage.setItem('users', JSON.stringify(users));
                            
                            dispatch({
                                type: "SET_TOAST",
                                payload: {
                                    state: true,
                                    text: "Registration successful! Redirecting to Login......",
                                    icon: "ri-check-fill",
                                    iconClassName: ""
                                },
                            });
                            
                            setTimeout(() => {
                                navigate('/login');
                            }, 3000);
           }

    const handleGoogleSignUp = () => {
        // Simulate Google Authentication
        const email = prompt("Enter your Google email for authentication:"); 
        if (email) {
            // Retrieve existing users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]'); // Ensure default is an empty array

            // Check if the email already exists
            if (users.includes(email)) {
                dispatch({
                    type: "SET_TOAST",
                    payload: { 
                        state: true, 
                        text: "Account already exists! Redirecting to Login......", 
                        icon: "ri-error-warning-fill",
                        backgroundColor: "red ",
                    },
                });  
               setTimeout(() => {
                    navigate('/login');
                }, 3000); 
                return;
            }

           const regObj = {
           pmail: registerUser?.email,
           password: registerUser?.password,
           confirmPassword: registerUser?.confirmPassword,
           };

          



            // Save new email to localStorage
            users.push(email);
            localStorage.setItem('users', JSON.stringify(users));
              dispatch({
              type: "SET_TOAST",
            payload: { 
                state: true,  
                text: "Email Confirmed! Redirecting to Login......", 
                icon: "ri-check-fill",
                iconClassName: ""
            },
             });
            // Redirect to login page after 1 second
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } else {
            alert("Sign up canceled or failed."); 
        } 
    };

    return (
        <div className='w-full h-screen flex relative '>
            {/* Background image for mobile */}
            <img src="/src/Images/registerPag.png" className="hidden md:block h-full w-1/3 object-cover" />
            <img src="/src/Images/registerPag.png" className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-30 z-0" style={{ pointerEvents: 'none' }} />
            {/* Content */}
            <div className='w-full md:w-8/12 h-full p-4 md:p-20 flex items-center justify-center absolute md:static top-0 left-0 z-10 overflow-y-auto'>
                <div className='w-full md:w-w48 bg-white register-container md:bg-opacity-100 rounded-xl md:rounded-none p-6 md:p-0 shadow-lg md:shadow-none h-full md:h-auto'>
                    <h1 className='text-3xl md:text-4xl font-root font-bold mt-4 md:mt-10 register-title-mobile'>Let's create your account</h1>
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
                                                <div className={registerUser.password.length >= 12 ? "text-green-600" : "text-red-600"}>
                                                    • At least 12 characters
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

                <div className='continue-to-login'>                    
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 font-semibold cursor-pointer' onClick={() => navigate('/login')}>Continue to Login</p>
                </div>
                </div>
            </div>
        </div>
    )
}