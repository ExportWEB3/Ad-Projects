import { useContext, useState } from 'react';
import { GlobalUseContext } from '../../Context/context';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { loginAttributes, LoginResponse, userAttributes } from '../../utilities/typedec';
import { Input } from '../Input/Input.component';
import { Button } from '../Button/button';
import { useHttpFetcher } from '../../hooks/customhooks';

export function LoginComponent() {
    const { dispatch } = useContext(GlobalUseContext);
    const navigate = useNavigate();
    const { fetchIt } = useHttpFetcher();
    const [unverifiedUser, setUnverifiedUser] = useState<{ email: string; userId: any } | null>(null);


    const [loginState, setLoginState] = useState<loginAttributes>({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleOnChange = (text: string, payload: keyof loginAttributes) => {
        setLoginState((prev) => ({
            ...prev,
            [payload]: text,
        }));
    };

const handleVerify = async () => {
    const loginObj = {
        email: loginState.email,
        password: loginState.password
    }

    try {
        const res = await fetchIt ({
            apiEndPoint: `otp/resend`,
            httpMethod: `post`,
            reqData: loginObj,
            isSuccessNotification: {
                notificationText: '',
                notificationState: false,
            }
        })
         dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "OTP code sent!",
                    icon: "ri-check-fill",
                    backgroundColor: "green",
                    iconClassName: "text-white",
                },
            });
    } catch (error: any) {
        const message = error?.message || "failed to send OTP. Please try again.";
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
}

const handleLogin = async () => {
  if (!loginState.email.trim() || !loginState.password.trim()) {
    dispatch({
      type: 'SET_TOAST',
      payload: {
        notificationState: true,
        notificationText: 'Please fill in both email and password.',
        icon: 'ri-error-warning-fill',
        iconClassName: 'text-red-500',
        backgroundColor: 'red',
      }
    });
    return;
  }

  const loginObj = {
    email: loginState.email,
    password: loginState.password,
  };

  try {
    const res = await fetchIt({
      apiEndPoint: `auth/login`,
      httpMethod: 'post',
      reqData: loginObj,
      isSuccessNotification: {
        notificationText: '',
        notificationState: false,
      },
    }) as LoginResponse

    // Login successful
    localStorage.setItem("onlineId", res?.payload?._id);
        navigate("/dashboard");
    dispatch({
      type: "SET_TOAST",
      payload: {
        notificationState: true,
        notificationText: "Login successful!",
        icon: "ri-check-fill",
        iconClassName: "text-white",
        backgroundColor: "green",
      },
    });


  } catch (error: any) {
    //  Unverified account
    if (error?.response?.status === 401) {
      const rawError = error?.response?.data;
      dispatch({
        type: "SET_TOAST",
        payload: {
          notificationState: true,
          notificationText: "Account not verified,Click Verify to Proceed",
          icon: "ri-error-warning-fill",
          backgroundColor: "yellow",
          iconClassName: "text-yellow-600",
        },
      });

      setUnverifiedUser({
        email: loginState.email,
        userId: rawError?.payload,
      });

      return;
    }

    //  User not found
    if (error?.response?.status === 404) {
      const errorText = error.response.data?.text || "User not found";
      dispatch({
        type: "SET_TOAST",
        payload: {
          notificationState: true,
          notificationText: errorText,
          icon: "ri-error-warning-fill",
          backgroundColor: "red",
        },
      });
      return;
    }

    // Default/general error
    const message = error?.message || "Login failed. Please try again.";
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
        <div className='w-full h-screen flex'>
            <img src="\src\Images\login.png" className="hidden-below-1000 w-2/3" />
            <div className='w-1/2 h-full p-10'>
                <h1 className='text-root font-bold text-4xl mt-10 login-signin-heading'>Sign in</h1>

                <div className='w-full h-fit mt-16 relative'>
                    <Input
                        displayText='Email'
                        displayTextClassName='text-gray-800 font-semibold text-base font-root mobileX'
                        placeHolder='Enter your email'
                        className='border-dashed border-black outline-1 outline-black'
                        type='text'
                        value={loginState.email}
                        onChange={(text: string) => handleOnChange(text, 'email')}
                    />

                    <Input
                        displayText='Password'
                        displayTextClassName='text-gray-800 font-semibold text-base font-root mt-10 mobileF'
                        placeHolder='Enter your Password'
                        className='border-dashed border-black outline-1 outline-black'
                        type={showPassword ? 'text' : 'password'}
                        value={loginState.password}
                        onChange={(text: string) => handleOnChange(text, 'password')}
                    />

                    <span
                        className="absolute right-3 top-36 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m1.414-1.414A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                            </svg>
                        )}
                    </span>

                    <p onClick={() => navigate('/forgot/password')} className='text-gray-800 font-semibold font-root absolute right-3 cursor-pointer underline hover:no-underline mt-5 forgotP'>Forgot Password</p>

                    <Button
                        type='button'
                        btnText='Sign in'
                        onClick={handleLogin}
                        className='w-full h-10 bg-gray-800 mt-20 text-gray-400 cursor-pointer font-semibold mobileSignIn'
                    >x</Button>

{unverifiedUser && (
<Button
    type='button'
    btnText='Verify Account'
    onClick={async () => {
        await handleVerify();
        navigate('/otp', { state: unverifiedUser });
    }}
    className='w-full h-10 mt-5 text-yellow-600 border border-yellow-600 font-semibold hover:bg-yellow-100'
>x</Button>
)}



                    <Button
                        type='button'
                        btnText='Sign Up'
                        onClick={() => navigate('/register')}
                        className='w-full h-10 mt-5 text-gray-800 cursor-pointer font-semibold'
                    >x</Button>

                    <p className='text-gray-800 text-center mt-5 mobileLowTxt'>
                        By selecting Sign in, I agree to <a className='font-semibold font-root text-gray-800 hover:underline cursor-pointer'> Hootsuite's Terms</a>, including the payment terms, and <a className='font-semibold font-root text-gray-800 hover:underline cursor-pointer'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
