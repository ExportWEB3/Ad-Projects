
import React from 'react';

export function RegisterComponent () {
    return (
        <div className='w-full h-screen flex'>
            <div className='w-1/3 h-full'>
            <img src="\src\Images\registerPag.png" className='h-full w-full' />
            </div>

            <div className='w-8/12 h-full p-20'>
            <h1 className='text-4xl font-root font-bold mt-10'>Let's create your account</h1>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-w48 h-full'>
                <p className='mt-10 text-base'>Sign up with social and add your first social account in one step</p>
                </div>
            </div>
            </div>
        </div>
    )
}