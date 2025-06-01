import React from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';

export function RegisterComponent () {
    const navigate = useNavigate();


    const handleGoogleSignUp = () => {
        // Simulate Google Authentication
        const email = prompt("Enter your Google email for authentication:"); // Replace with real Google OAuth flow
        if (email) {
            // Retrieve existing users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]'); // Ensure default is an empty array

            // Check if the email already exists
            if (users.includes(email)) {
                alert(`Email already exists. Redirecting to login page...`);
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000);
                return;
            }

            // Save new email to localStorage
            users.push(email);
            localStorage.setItem('users', JSON.stringify(users));
            alert(`Signed up successfully with email: ${email}`);

            // Redirect to login page after 1 second
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
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
            <div className='w-full md:w-8/12 h-full p-4 md:p-20 flex items-center justify-center absolute md:static top-0 left-0 z-10'>
                <div className='w-full md:w-w48 bg-white register-container md:bg-opacity-100 rounded-xl md:rounded-none p-6 md:p-0 shadow-lg md:shadow-none h-full md:h-auto'>
                    <h1 className='text-3xl md:text-4xl font-root font-bold mt-4 md:mt-10'>Let's create your account</h1>
                    <p className='mt-6 md:mt-10 text-base'>Sign up with social and add your first social account in one step</p>
                    <button 
                        className='w-full flex items-center justify-center mt-8 mb-8 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition buttonOx'
                        onClick={handleGoogleSignUp}
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className='w-6 h-6 mr-3 buttonImg' />
                        <span className='text-base font-semibold text-gray-700'>Sign up with Google</span>
                    </button>

                <div className='continue-to-login'>                    
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 font-semibold cursor-pointer' onClick={() => navigate('/login')}>Continue to Login</p>
                </div>
                </div>
            </div>
        </div>
    )
}