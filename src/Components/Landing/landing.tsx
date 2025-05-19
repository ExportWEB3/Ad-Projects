import React from 'react';
import './landing.css'
import { Button } from '../Button/button';
import { UseFadeUpOnScroll } from '../Fade-up/fadeUp';
import { Icon } from '../Icon.component/Icon';


export function LandingComponent() {
    UseFadeUpOnScroll();


    return  (
        <div className="w-full h-full flex mt-20 customContainerModified items-center flex-col">
            <div className='w-full h-full flex items-center'>
            <img src="\src\Images\Social.jpg" className="social rounded-lg" alt="" />
            <div className='w-1/2 h-80 ml-16'>
            <h1 className='font-bold fontR font-root wordSpacing text-gray-800'>Save time and get REAL</h1>
            <h1 className='font-bold fontR font-root wordSpacing text-gray-800 '>results on social media.</h1>
            <h1 className='font-bold fontR font-root wordSpacing text-red-700 '>Tildette makes it easy.</h1>

            <div className='w-3/4 h-20 mt-10 flex items-center space-x-10'>
            <Button
            btnText="Get Started"
            className="w-48 h-14 text-xl bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700"
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

                <div className='w-1/2 h-full flex flex-col items-center fade-up'>
                <img src="\src\Images\obarchart.png" className='rounded-xl w-full'/>
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
                    className="w-48 h-12 text-xl bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700"
                    type="button"

                    >x</Button>
                </div>
                <img src="\src\Images\brand.jpg" className='w-1/2 rounded-md' />
            </div>

            <div className='w-full h-40 mt-28 flex flex-col items-center justify-center space-y-5 fade-up'>
                <div className='w-1/2 h-fit'>
                <h2 className='text-4xl font-root text-gray-800 font-semibold text-center'>Save time, simplify, and grow faster on social media</h2>
                </div>
                <p className='text-xl text-gray-800 font-root'>Tildette is designed to help you manage social media faster, smarter, and with way less effort. </p>
            </div>

            <div className='w-full h-80 flex space-x-10 mt-14 fade-up'>
                <div className='w-1/2 h-full bg-gray-400 rounded-lg' >
                <img src="\src\Images\schedule.png" className='w-full' />
                </div>

                <div className='w-1/2 h-full space-y-8'>
                <div className='w-11/12 h-fit'>
                <h1 className='text-4xl font-bold text-gray-800 font-root'>Save hours posting, creating, and analyzing content</h1>
                </div>

                    <p className='text-base text-gray-800 font-root'>Do you know what the best social strategies have in common? 
                        Or what qualities drive social media performance? And how you can apply them to your organization? 
                        Dig into our Social Media Trends 2025 report for insights that'll help you drive action and make a real business impact.
                    </p>

                    <Button
                    btnText="Learn more"
                    className="w-36 h-12 text-xl border-gray-800 text-gray-800 border bg-transparent rounded-xl font-semibold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                </div>
            </div>

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up'>
                <div className='w-1/2 h-full space-y-8'>
                <div className='w-11/12 h-fit'>
                <h1 className='text-4xl font-bold text-gray-800 font-root'>Boost engagement, reach, and follower count with less effort</h1>
                </div>

                    <p className='text-base text-gray-800 font-root'>See the content that brings in the most engagement and revenue and measure how you’re performing against your competitors. 
                        Plus, get personalized suggestions for how to win in your industry.
                         And, with reports that show you the best time to post for every network, you can say goodbye to hop-scotching between network tabs for good.
                    </p>

                    <div className='w-3/4 h-12 flex items-center'>
                    <Button
                    btnText="Try it for free"
                    className="w-36 h-12 text-base bg-gray-800 text-white border rounded-xl font-semibold hover:bg-gray-600"
                    type="button"
                    >x</Button>

                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 cursor-pointer ml-5 text-base'>Learn more</p>
                    </div>
                </div>

                <div className='w-1/2 h-full overflow-hidden' >
                <img src="\src\Images\report.jpg" className='w-full rounded-lg' />
                </div>
            </div>

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up'>
            <div className='w-1/2 h-full' >
                <img src="\src\Images\message-send.png" className='w-full rounded-lg' />
                </div>

                <div className='w-1/2 h-full space-y-8'>
                <div className='w-11/12 h-fit'>
                <h1 className='text-4xl font-bold text-gray-800 font-root'>Deliver a better customer experience and keep your inbox tidy</h1>
                </div>

                    <p className='text-base text-gray-800 font-root'>Reduce the clutter and eliminate DM dread with a unified social media inbox.
                         Reply to comments and messages across platforms in one convenient hub and never leave your followers on read again.
                         Cut your team’s message volume with saved replies or level up with our AI chatbot add-on. 
                    </p>

                    <div className='w-3/4 h-12 flex items-center'>
                    <Button
                    btnText="Learn more"
                    className="w-36 h-12 text-xl border-gray-800 text-gray-800 border bg-transparent rounded-xl font-semibold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                    </div>
                </div>
            </div>

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up'>
                <div className='w-1/2 h-full space-y-8'>
                <div className='w-11/12 h-fit'>
                <h1 className='text-4xl font-bold text-gray-800 font-root'>Safeguard your reputation and never miss a chance to engage</h1>
                </div>

                    <p className='text-base text-gray-800 font-root'>Keep an eye on what people are saying about your brand or industry with social listening tools.
                         Track mentions and conversations to find opportunities to engage, discover new trends, or get ahead of feedback.
                         Plus, easily suspend scheduled posts in case of a potential crisis or unexpected opportunity.
                    </p>

                    <div className='w-3/4 h-12 flex items-center'>
                    <Button
                    btnText="Learn more"
                    className="w-36 h-12 text-xl border-gray-800 text-gray-800 border bg-transparent rounded-xl font-semibold hover:bg-gray-200"
                    type="button"
                    >x</Button>

                    </div>
                </div>

                <div className='w-1/2 h-full' >
                <img src="\src\Images\suspend-posts.png" className='w-full rounded-lg' />
                </div>
            </div>

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up'>
            <div className='w-1/2 h-full' >
                <img src="\src\Images\metric.png" className='w-full rounded-lg' />
                </div>

                <div className='w-1/2 h-full space-y-8'>
                <div className='w-11/12 h-fit'>
                <h1 className='text-4xl font-bold text-gray-800 font-root'>Stay ahead of the latest trends and boost your chances of going viral</h1>
                </div>

                    <p className='text-base text-gray-800 font-root'>Figure out exactly what engages your audience with trend tracking and discovery streams. 
                        View hot topics by industry and then have AI instantly draft posts based on those trends.
                         You can also search by topic, company, and hashtag to discover what’s getting the most action in your niche.
                    </p>

                    <div className='w-3/4 h-12 flex items-center'>
                    <Button
                    btnText="Learn more"
                    className="w-36 h-12 text-xl border-gray-800 text-gray-800 border bg-transparent rounded-xl font-semibold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                    </div>
                </div>
            </div>

            <div className='w-full h-40 mt-28 flex flex-col items-center justify-center space-y-5 fade-up'>
                <div className='w-1/2 h-fit'>
                <h2 className='text-4xl font-root text-gray-800 font-semibold text-center'>Why Tildette?</h2>
                </div>
                <p className='text-xl text-gray-800 font-root text-center'>Don’t worry, we won’t make you read our 2,000+ five-star reviews. 
                    A few highlights: superior customer service, top-notch security features, and the best blog, webinars, and social media academy in the industry.</p>
            </div>

            <div className='w-full hPx flex space-x-10 overflow-hidden fade-up'>
                <div className='w-1/3 h-full flex flex-col items-center  space-y-5'>
                <img src="\src\Images\logox.png" className='w-40 grayscale' />           
                <h1 className='text-3xl font-bold text-gray-800 font-root'>17 years and 25 million users</h1>
                <p className='text-xl text-gray-800 font-root text-center'>Hootsuite was the first, and we’re still the most popular 17 years later. Over 25 million users have used Hootsuite to post, track, and out-perform their competitors on social media.</p>
                    <Button
                    btnText="More About us"
                    className="w-40 h-14 text-base border-gray-800 text-gray-800 border bg-transparent rounded-xl font-bold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                </div>

                <div className='w-1/3 h-full flex flex-col items-center  space-y-5 mt-5'>
                <img src="\src\Images\stars.png" className='w-44 grayscale' />           
                <h1 className='text-4xl font-bold text-gray-800 font-root text-center'>The ultimate social media AI</h1>
                <p className='text-xl text-gray-800 font-root text-center'>Hootsuite helps you automate every part of social media management — posting, writing, messaging, and social listening. 
                    Our AI was designed by social pros for social pros.</p>
                    <Button
                    btnText="Learn more"
                    className="w-40 h-14 text-base border-gray-800 text-gray-800 border bg-transparent rounded-xl font-bold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                </div>

                <div className='w-1/3 h-full flex flex-col items-center  space-y-5 mt-5'>
                <img src="\src\Images\plugin.png" className='w-40 grayscale' />           
                <h1 className='text-4xl font-bold text-gray-800 font-root text-center'>The ultimate social media AI</h1>
                <p className='text-xl text-gray-800 font-root text-center'>Connect over 100 integrations to bring all your favorite tools into the Hootsuite dashboard. 
                    That’s more than any other social media management platform (by far).</p>
                    <Button
                    btnText="Explore Integrations"
                    className="w-46 h-14 text-base border-gray-800 text-gray-800 border bg-transparent rounded-xl font-bold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                </div>
            </div>

            <div className='w-full hPx mt-20 flex flex-col items-center fade-up'>
                <h1 className='text-5xl text-gray-800 font-root font-bold'>Reasons for social media Pros</h1>
                <div className='w-full h-full flex space-x-10 mt-10'>
                    <div className='w-1/3 h-full space-y-2'>
                    <img src="\src\Images\bags.png"/>
                    <h1 className='text-3xl font-bold text-gray-800 font-root'>How a retail brand used Hootsuite to increase sales by 750%</h1>
                    <p className='text-base text-gray-800 font-semibold'>See how legendary candy-maker Stuckey’s leveraged Hootsuite Professional to skyrocket their online sales and following.</p>
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 cursor-pointer font-semibold'>Read more <span>
                        <Icon
                        icon="ri-arrow-right-line"
                        className="text-gray-800 hover:text-blue-800 cursor-pointer"
                         />
                         </span> 
                         </p>
                    </div>

                    <div className='w-1/3 h-full space-y-2'>
                    <img src="\src\Images\cloud.png"/>
                    <h1 className='text-3xl font-bold text-gray-800 font-root'>8 social media competitor analysis tools to help you get ahead</h1>
                    <p className='text-base text-gray-800 font-semibold'>Find out how to beat the competition with the right social media competitor analysis tools. Get the scoop on the Hootsuite blog.</p>
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 cursor-pointer font-semibold'>Read more <span>
                        <Icon
                        icon="ri-arrow-right-line"
                        className="text-gray-800 hover:text-blue-800 cursor-pointer"
                         />
                         </span> 
                         </p>
                    </div>


                    <div className='w-1/3 h-full bg-white space-y-2'>
                    <img src="\src\Images\award.png"/>
                    <h1 className='text-3xl font-bold text-gray-800 font-root'>Take the Hootsuite Social Media Marketing Certification Course</h1>
                    <p className='text-base text-gray-800 font-semibold'>Become a social media expert — and slap a shiny new certification on your resumé — with the industry standard in social media education.</p>
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 cursor-pointer font-semibold'>Sign Up Now <span>
                        <Icon
                        icon="ri-arrow-right-line"
                        className="text-gray-800 hover:text-blue-800 cursor-pointer"
                         />
                         </span> 
                         </p>
                    </div>

                </div>
            </div>

            <div className='w-full h-80'></div>
        </div>
    )
}