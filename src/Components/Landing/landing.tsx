import React from 'react';
import './landing.css'
import { Button } from '../Button/button';
import { UseFadeUpOnScroll } from '../Fade-up/fadeUp';


export function LandingComponent() {
    UseFadeUpOnScroll();


    return  (
        <div className="w-full h-full flex mt-20 customContainerModified items-center flex-col">
            <div className='w-full h-full flex items-center'>
            <img src="\src\Images\Social.jpg" className="social rounded-lg" alt="" />
            <div className='w-1/2 h-80 ml-16'>
            <h1 className='font-bold fontR font-root wordSpacing text-fuchsia-950'>Save time and get REAL</h1>
            <h1 className='font-bold fontR font-root wordSpacing text-fuchsia-950 '>results on social media.</h1>
            <h1 className='font-bold fontR font-root wordSpacing text-red-700 '>Tildette makes it easy.</h1>

            <div className='w-3/4 h-20 mt-10 flex items-center space-x-10'>
            <Button
            btnText="Get Started"
            className="w-48 h-14 text-xl bg-fuchsia-950 rounded-xl font-semibold hover:bg-fuchsia-800"
            type="button"
            onClick={() => {}}
            >x</Button>
            <h1 className='text-base underline hover:no-underline font-semibold text-fuchsia-950 hover:text-fuchsia-800  cursor-pointer '>Book a Call</h1>
            </div>
            </div>
            </div>

            <div className='w-full h-40 mt-5 flex items-center space-x-28'>
                <img src="\src\Images\JetBlue.png" className='w-40 opacity-50 grayscale' />
                <img src="\src\Images\UniOfChi.png" className='w-40 opacity-50 grayscale' />
                <img src="\src\Images\UHaul.png" className='w-40 opacity-50 grayscale' />
                <img src="\src\Images\Adobe.png" className='w-40 opacity-50 grayscale' />
                <img src="\src\Images\ikea.png" className='w-40 grayscale' />
            </div>

            <div className='w-full h-40 mt-5 flex flex-col items-center justify-center space-y-5 fade-up'>
                <h2 className='text-4xl font-root text-gray-800 font-semibold'>Explore Hootsuite features: What’s in the dashboard?</h2>
                <p className='text-xl text-gray-800 font-root'>Schedule, engage, monitor, and analyze social media posts. All in one user-friendly dashboard.</p>
            </div>

            <hr className="w-full opacity-100 text-black" />

            <div className='w-full midInfo mt-5 flex items-center space-x-5 bg-gray-3 fade-up'>
                <div className='w-1/2 h-full flex justify-center flex-col space-y-2'>
                <hr className='w-full '/>
                <div className='w-full h-10 flex cursor-pointer text-gray-800 hover:text-red-400'>
                <h1 className='text-3xl font-bold '>Analyze social media performance</h1>
                </div>
                <hr className='w-full'/>
                <div className='w-full h-10 flex cursor-pointer text-gray-800 hover:text-red-400'>
                <h1 className='text-3xl font-bold'>Schedule posts and create content</h1>
                </div>
                <hr className='w-full '/>
                <div className='w-full h-10 flex cursor-pointer text-gray-800 hover:text-red-400'>
                <h1 className='text-3xl font-bold'>Respond to messages and comments</h1>
                </div>
                <hr className='w-full '/>
                <div className='w-full h-10 flex cursor-pointer text-gray-800 hover:text-red-400'>
                <h1 className='text-3xl font-bold'>Track mentions, keywords, and trends</h1>
                </div>
                <hr className='w-full '/>
                </div>

                <div className='w-1/2 h-full flex flex-col items-center overflow-hidden fade-up'>
                <img src="\src\Images\obarchart.jpg" className='rounded-xl'/>
                </div>

            </div>

            <div className='w-full midInfo2 flex flex-col items-center fade-up'>
                <h1 className='text-5xl font-bold mt-40 font-root text-gray-800'>What can Tildette do for you?</h1>
                <div className='w-full h-80 flex mt-10'>
                    <div className='w-1/3 h-full flex flex-col items-center space-y-10'>
                    <h1 className='text-7xl font-bold text-red-500'>80%</h1>
                    <p className='text-xl text-center font-root text-gray-800'>reduction in workload using Tildette's chatbot capabilities</p>
                    <img src="\src\Images\Logo.png" className='w-40 grayscale '/>
                    </div>

                    <hr className='h-full w-px bg-gray-400 mx-4'/>

                    <div className='w-1/3 h-full flex flex-col items-center space-y-10'>
                    <h1 className='text-7xl font-bold text-red-500'>500%</h1>
                    <p className='text-xl text-center font-root text-gray-800'>growth across all social channels using Hootsuite Enterprise</p>
                    <img src="\src\Images\wood-buffalo.png" className='w-44 grayscale'/>
                    </div>

                    <hr className='h-full w-px bg-gray-400 mx-4'/>

                    <div className='w-1/3 h-full flex flex-col items-center space-y-10'>
                    <h1 className='text-7xl font-bold text-red-500'>2M+</h1>
                    <p className='text-xl text-center font-root text-gray-800'>new followers on social media using Hootsuite Enterprise
                    </p>
                    <img src="\src\Images\Logo.png" className='w-40 grayscale'/>
                    </div>
                </div>
            </div>

            <div className='w-full h-96 flex bg-gray-100 mt-20 fade-up p-8 space-x-5'>
                <div className='w-1/2 h-full flex flex-col space-y-10'>
                <div className='w-4/5 h-fit'>
                <h1 className='text-4xl font-bold text-gray-800 font-root'>Discover the biggest social media trends shaping 2025</h1>
                </div>

                    <p className='text-base text-gray-800 font-root'>Do you know what the best social strategies have in common? 
                        Or what qualities drive social media performance? And how you can apply them to your organization? 
                        Dig into our Social Media Trends 2025 report for insights that'll help you drive action and make a real business impact.
                    </p>

                    <Button
                    btnText="Read the Report"
                    className="w-48 h-14 text-xl bg-fuchsia-950 rounded-xl font-semibold hover:bg-fuchsia-800"
                    type="button"

                    >x</Button>
                </div>
                <img src="\src\Images\brand.jpg" className='w-1/2' />
            </div>

            <div className='w-full h-40 mt-5 flex flex-col items-center justify-center space-y-5 fade-up'>
                <h2 className='text-4xl font-root text-gray-800 font-semibold'>Save time, simplify, and grow faster on social media</h2>
                <p className='text-xl text-gray-800 font-root'>Hootsuite is designed to help you manage social media faster, smarter, and with way less effort. </p>
            </div>
        </div>
    )
}