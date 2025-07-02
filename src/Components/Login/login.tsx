import { useContext, useState } from 'react';
import { GlobalUseContext } from '../../Context/context';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { loginAttributes, userAttributes } from '../../utilities/typedec';
import { Input } from '../Input/Input.component';
import { Button } from '../Button/button';


export function LoginComponent () {
    const { state, dispatch } = useContext(GlobalUseContext);
    const navigate = useNavigate()

    


    const [loginState, setLoginState] = useState<loginAttributes>({
        email: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(false);


    const handleOnChange = (text: string, payload: keyof loginAttributes) => {
        

        setLoginState((prev) => ({
            ...prev,
            [payload]: text,
        }));
    }

    const handleLogin = () => {
        // Check if inputs are empty first
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
        const fetchUsers = localStorage.getItem("users");
        if (!fetchUsers) {
            dispatch({
                type: 'SET_TOAST',
                payload: {
                    notificationState: true,
                    notificationText: 'Email or password is incorrect.',
                    icon: 'ri-error-warning-fill',
                    iconClassName: 'text-red-500',
                    backgroundColor: 'red',
                }
            });
            return;
        }

        const parsedUsers = JSON.parse(fetchUsers) as userAttributes[];
        const findUser = parsedUsers?.find(
            (item) => loginState.email === item.email && loginState.password === item.password
        );
        if (!findUser) {
            dispatch({
                type: "SET_TOAST",
                payload: {
                    notificationState: true,
                    notificationText: "Invalid email or password.",
                    backgroundColor: 'red',
                },
            });
            return;
        }

    // update the global state with the user object
    dispatch({ type: "STORE_USER", payload: findUser });

    navigate("/dashboard");
    return;
    }

  /*  const isFormValid = () => {
      return loginState.email.trim().length > 0 && loginState.password.trim().length > 0;
    } */

    return (
        <div className='w-full h-screen flex'>
            <img src="\src\Images\login.png" />
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

             <p onClick={() => navigate('/forgot/password')} className='text-gray-800 font-semibold font-root absolute right-3 cursor-pointer underline hover:no-underline mt-5'>Forgot Password</p>

             <Button 
             type='button'
             btnText='Sign in'
             onClick={handleLogin}
             className='w-full h-10 bg-gray-800 mt-20 text-gray-400 cursor-pointer font-semibold mobileSignIn'
             >x</Button>

            <Button 
             type='button'
             btnText='Sign Up'
             onClick={() => navigate('/register')}
             className='w-full h-10 mt-5 text-gray-800 cursor-pointer font-semibold'
             >x</Button>


             <p className='text-gray-800 text-center mt-5 mobileLowTxt'>By selecting Sign in, I agree to <a className='font-semibold font-root text-gray-800 hover:underline cursor-pointer'> Hootsuite's Terms</a>, including the payment terms, and <a className='font-semibold font-root text-gray-800 hover:underline cursor-pointer'>Privacy Policy</a> </p>
            </div>

            </div>
        </div>
    )
}