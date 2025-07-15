import React, { useState, useEffect } from 'react';
import './landing.css'
import { Button } from '../Button/button';
import { UseFadeUpOnScroll } from '../Fade-up/fadeUp';
import { Icon } from '../Icon.component/Icon';
import { reviews } from '../../utilities/data';
import { Input } from '../Input/Input.component';
import { Footer } from '../footer/footer';
import { HeaderComponent } from '../Header/header';
import { useNavigate } from 'react-router-dom';
import socialImg from '../../Images/Social.png';
import jetBlueImg from '../../Images/JetBlue.png';
import uniOfChiImg from '../../Images/UniOfChi.png';
import uHaulImg from '../../Images/UHaul.png';
import adobeImg from '../../Images/Adobe.png';
import ikeaImg from '../../Images/ikea.png';
import obarChartImg from '../../Images/obarchart.png';
import logoImg from '../../Images/Logo.png';
import woodBuffaloImg from '../../Images/wood-buffalo.png';
import midImg from '../../Images/mid.png';
import scheduleImg from '../../Images/schedule.png';
import reportImg from '../../Images/report.jpg';
import messageSendImg from '../../Images/message-send.png';
import suspendPostsImg from '../../Images/suspend-posts.png';
import metricImg from '../../Images/metric.png';
import logoxImg from '../../Images/logox.png';
import starsImg from '../../Images/stars.png';
import pluginImg from '../../Images/plugin.png';
import bagsImg from '../../Images/bags.png';
import cloudImg from '../../Images/cloud.png';
import awardImg from '../../Images/award.png';
import lastPicImg from '../../Images/lastPic.png';
import appStoreImg from '../../Images/d on appstore.png';
import googlePlayImg from '../../Images/get it on google play.webp';



export function LandingComponent() {
const [current, setCurrent] = useState(0);
const [direction, setDirection] = useState('');
const navigate = useNavigate();


const prev = () => {
  setDirection('left');
  setTimeout(() => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    setDirection('');
  }, 500);
};

const next = () => {
  setDirection('right');
  setTimeout(() => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    setDirection('');
  }, 500);
};


// Custom hook to apply fade-up effect on scroll 
    UseFadeUpOnScroll();


// Effect to restore scroll position on component mount
    // This effect runs once when the component mounts and restores the scroll position if it was saved
    useEffect(() => {
      const saved = sessionStorage.getItem("landing-scroll");
      if (saved) {
        window.scrollTo(0, parseInt(saved, 10));
        sessionStorage.removeItem("landing-scroll");
      }
    }, []);
    // Save scroll position and navigate
    const navigateWithScroll = (to: string) => {
      sessionStorage.setItem("landing-scroll", String(window.scrollY));
      navigate(to);
    };

    return  (
      <>
      <HeaderComponent />
       <div className="w-full h-full flex mt-20 customContainerModified items-center flex-col overflow-hidden">
            <div className='w-full h-full flex items-center overflow-hidden'>
<img src={socialImg} className="social" alt="" />
            <div className='w-1/2 h-80 ml-16'>
            <h1 className='font-bold fontR font-root wordSpacing text-gray-800 hero-title'>Save time and get REAL</h1>
            <h1 className='font-bold fontR font-root wordSpacing text-gray-800 hero-title'>results on social media.</h1>
            <h1 className='font-bold fontR font-root wordSpacing text-red-700 hero-title'>Tildette makes it easy.</h1>

            <div className='w-3/4 h-20 mt-10 flex items-center space-x-10'>
            <Button
            btnText="Get Started"
            className="w-48 h-14 text-xl bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700"
            type="button"
            onClick={() => navigateWithScroll('/register')}
            >x</Button>
            <h1 className='text-base underline hover:no-underline font-semibold text-fuchsia-950 hover:text-fuchsia-800  cursor-pointer '>Book a Call</h1>
            </div>
            </div>
            </div>

            <div className='w-full h-40 mt-5 flex items-center space-x-28 brand-logos-row'>
<img src={jetBlueImg} className='w-40 opacity-50 grayscale' />
<img src={uniOfChiImg} className='w-40 opacity-50 grayscale' />
<img src={uHaulImg} className='w-40 opacity-50 grayscale' />
<img src={adobeImg} className='w-40 opacity-50 grayscale' />
<img src={ikeaImg} className='w-40 grayscale' />
            </div>

            <div className='w-full h-40 mt-5 flex flex-col items-center justify-center space-y-5 fade-up'>
                <h2 className='text-4xl font-root text-gray-800 font-semibold'>Explore Tildette features: What’s in the dashboard?</h2>
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
<img src={obarChartImg} className='rounded-xl w-full'/>
                </div>

            </div>

            <div className='w-full midInfo2 flex flex-col items-center fade-up'>
                <h1 className='text-5xl font-bold mt-40 font-root text-gray-800 midInfo2-title'>What can Tildette do for you?</h1>
                <div className='w-full h-80 flex mt-10 midInfo2-row fade-up'>
                    <div className='w-1/3 h-full flex flex-col items-center space-y-10 midInfo2-col'>
                    <h1 className='text-7xl font-bold text-red-500'>80%</h1>
                    <p className='text-xl text-center font-root text-gray-800'>reduction in workload using Tildette's chatbot capabilities</p>
<img src={logoImg} className='w-40 grayscale '/>
                    </div>

                    <hr className='h-full w-px bg-gray-400 mx-4 midInfo2-hr'/>

                    <div className='w-1/3 h-full flex flex-col items-center space-y-10 fade-up midInfo2-col'>
                    <h1 className='text-7xl font-bold text-red-500'>500%</h1>
                    <p className='text-xl text-center font-root text-gray-800'>growth across all social channels using Tildette Enterprise</p>
<img src={woodBuffaloImg} className='w-44 grayscale'/>
                    </div>

                    <hr className='h-full w-px bg-gray-400 mx-4 midInfo2-hr'/>

                    <div className='w-1/3 h-full flex flex-col items-center space-y-10 fade-up midInfo2-col'>
                    <h1 className='text-7xl font-bold text-red-500'>2M+</h1>
                    <p className='text-xl text-center font-root text-gray-800'>new followers on social media using Tildette Enterprise
                    </p>
<img src={logoImg} className='w-40 grayscale'/>
                    </div>
                </div>
            </div>

            <div className='w-full h-96 flex bg-gray-100 mt-20 mt-20-trends fade-up p-8 space-x-5'>
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
<img src={midImg} className='w-1/2 rounded-md ' />
            </div>

            <div className='w-full h-40 mt-28 flex flex-col items-center justify-center space-y-5 fade-up feature-section'>
                <div className='w-1/2 h-fit'>
                <h2 className='text-4xl font-root text-gray-800 font-semibold text-center'>Save time, simplify, and grow faster on social media</h2>
                </div>
                <p className='text-xl text-gray-800 font-root'>Tildette is designed to help you manage social media faster, smarter, and with way less effort. </p>
            </div>

            <div className='w-full h-80 flex space-x-10 mt-14 fade-up feature-section'>
                <div className='w-1/2 h-full bg-gray-400 rounded-lg' >
<img src={scheduleImg} className='w-full' />
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

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up feature-section'>
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
                    onClick={() => navigateWithScroll('/register')}
                    >x</Button>

                    </div>
                </div>

                <div className='w-1/2 h-full overflow-hidden' >
<img src={reportImg} className='w-full rounded-lg' />
                </div>
            </div>

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up feature-section'>
                <div className='w-1/2 h-full' >
<img src={messageSendImg} className='w-full rounded-lg' />
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

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up feature-section'>
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
<img src={suspendPostsImg} className='w-full rounded-lg' />
                </div>
            </div>

            <div className='w-full h-80 mt-36 space-x-10 flex fade-up feature-section'>
                <div className='w-1/2 h-full' >
<img src={metricImg} className='w-full rounded-lg' />
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

            <div className='w-full h-40 mt-28 flex flex-col items-center justify-center space-y-5 fade-up feature-section'>
                <div className='w-1/2 h-fit'>
                <h2 className='text-4xl font-root text-gray-800 font-semibold text-center'>Why Tildette?</h2>
                </div>
                <p className='text-xl text-gray-800 font-root text-center'>Don’t worry, we won’t make you read our 2,000+ five-star reviews. 
                    A few highlights: superior customer service, top-notch security features, and the best blog, webinars, and social media academy in the industry.</p>
            </div>

            <div className='w-full hPx flex space-x-10 overflow-hidden fade-up'>
                <div className='w-1/3 h-full flex flex-col items-center  space-y-5'>
<img src={logoxImg} className='w-40 grayscale' />
                <h1 className='text-3xl font-bold text-gray-800 font-root'>17 years and 25 million users</h1>
                <p className='text-xl text-gray-800 font-root text-center'>Tildette was the first, and we’re still the most popular 17 years later. Over 25 million users have used Tildette to post, track, and out-perform their competitors on social media.</p>
                    <Button
                    btnText="More About us"
                    className="w-40 h-14 text-base border-gray-800 text-gray-800 border bg-transparent rounded-xl font-bold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                </div>

                <div className='w-1/3 h-full flex flex-col items-center  space-y-5 mt-5 fade-up'>
<img src={starsImg} className='w-44 grayscale' />
                <h1 className='text-4xl font-bold text-gray-800 font-root text-center'>The ultimate social media AI</h1>
                <p className='text-xl text-gray-800 font-root text-center'>Tildette helps you automate every part of social media management — posting, writing, messaging, and social listening. 
                    Our AI was designed by social pros for social pros.</p>
                    <Button
                    btnText="Learn more"
                    className="w-40 h-14 text-base border-gray-800 text-gray-800 border bg-transparent rounded-xl font-bold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                </div>

                <div className='w-1/3 h-full flex flex-col items-center  space-y-5 mt-5 fade-up'>
<img src={pluginImg} className='w-40 grayscale' />
                <h1 className='text-4xl font-bold text-gray-800 font-root text-center'>The ultimate social media AI</h1>
                <p className='text-xl text-gray-800 font-root text-center'>Connect over 100 integrations to bring all your favorite tools into the Tildette dashboard. 
                    That’s more than any other social media management platform (by far).</p>
                    <Button
                    btnText="Explore Integrations"
                    className="w-46 h-14 text-base border-gray-800 text-gray-800 border bg-transparent rounded-xl font-bold hover:bg-gray-200"
                    type="button"
                    >x</Button>
                </div>
            </div>

            <div className='w-full hPx mt-20 flex flex-col items-center fade-up feature-section'>
                <h1 className='text-5xl text-gray-800 font-root font-bold reasons-header'>Reasons for social media Pros</h1>
                <div className='w-full h-full flex space-x-10 mt-10 feature-section-cards fade-up'>
                  <div className='w-1/3 h-full space-y-2 feature-card fade-up'>
<img src={bagsImg} />
                    <h1 className='text-3xl font-bold text-gray-800 font-root'>How a retail brand used Tildette to increase sales by 750%</h1>
                    <p className='text-base text-gray-800 font-semibold'>See how legendary candy-maker Stuckey’s leveraged Tildette Professional to skyrocket their online sales and following.</p>
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 cursor-pointer font-semibold'>Read more <span>
                      <Icon
                        icon="ri-arrow-right-line"
                        className="text-gray-800 hover:text-blue-800 cursor-pointer"
                      />
                    </span> 
                    </p>
                  </div>
                  <div className='w-1/3 h-full space-y-2 feature-card fade-up'>
<img src={cloudImg} />
                    <h1 className='text-3xl font-bold text-gray-800 font-root'>8 social media competitor analysis tools to help you get ahead</h1>
                    <p className='text-base text-gray-800 font-semibold'>Find out how to beat the competition with the right social media competitor analysis tools. Get the scoop on the Tildette blog.</p>
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 cursor-pointer font-semibold'>Read more <span>
                      <Icon
                        icon="ri-arrow-right-line"
                        className="text-gray-800 hover:text-blue-800 cursor-pointer"
                      />
                    </span> 
                    </p>
                  </div>
                  <div className='w-1/3 h-full bg-white space-y-2 feature-card fade-up'>
<img src={awardImg} />
                    <h1 className='text-3xl font-bold text-gray-800 font-root'>Take the Tildette Social Media Marketing Certification Course</h1>
                    <p className='text-base text-gray-800 font-semibold'>Become a social media expert — and slap a shiny new certification on your resumé — with the industry standard in social media education.</p>
                    <p className='underline hover:no-underline text-gray-800 hover:text-blue-800 cursor-pointer' onClick={() => navigateWithScroll('/register')}>Sign Up Now <span>
                      <Icon
                        icon="ri-arrow-right-line"
                        className="text-gray-800 hover:text-blue-800 cursor-pointer"
                      />
                    </span> 
                    </p>
                  </div>
                </div>
            </div>

            <div className="w-full review-carousel-section flex flex-col items-center mt-16 mb-16">
              <h2 className="text-5xl font-bold text-gray-800 font-root mb-8 text-center">What our users say</h2>
              <div className="review-carousel-wrapper w-full flex justify-center items-center relative">
                <div className={`review-card-animate ${direction === 'left' ? 'review-card-slide-left' : direction === 'right' ? 'review-card-slide-right' : 'review-card-active'} w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center transition-all duration-500`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={reviews[current].img} alt={reviews[current].user} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-200" />
                    <div className="flex flex-col">
                      <span className="font-bold text-lg md:text-xl text-gray-800">{reviews[current].user}</span>
                      <span className="text-sm md:text-base text-gray-500">{reviews[current].role}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-2 review-stars-row">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        icon={i < reviews[current].stars ? 'ri-star-fill' : 'ri-star-line'}
                        className={`text-xl md:text-2xl ${i < reviews[current].stars ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-2">{reviews[current].text}</p>
                  <p className="text-base md:text-lg text-gray-600 text-center mb-4">{reviews[current].desc}</p>
                  <span className="text-xs md:text-sm text-gray-400">{reviews[current].date}</span>
                </div>
                {/* Carousel Arrows: Only 2, always below the card, for all views */}
                <div className="review-carousel-arrows flex justify-center items-center gap-8 mt-6 w-full">
                  <button
                    className="review-carousel-arrow bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
                    onClick={prev}
                    aria-label="Previous review"
                  >
                    <Icon icon="ri-arrow-left-s-line" className="text-3xl text-gray-800" />
                  </button>
                  <button
                    className="review-carousel-arrow bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
                    onClick={next}
                    aria-label="Next review"
                  >
                    <Icon icon="ri-arrow-right-s-line" className="text-3xl text-gray-800" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-6 space-x-2 md:space-x-3 review-dots-row">
                {reviews.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-2 h-2 md:w-3 md:h-3 rounded-full ${current === idx ? 'bg-gray-800' : 'bg-gray-300'} transition-all`}
                    style={{ margin: '0 2px' }}
                  ></span>
                ))}
              </div>
            </div>
            

            <div className='w-full h-96 mt-14 bg-gray-100 px-5 space-x-5 items-center flex fade-up'>
<img src={lastPicImg} className='' />
              <div className='w-1/2 h-80 flex flex-col space-y-10'>
              <h1 className='text-4xl font-semibold font-root text-gray-800'>Try Tildette for free. No strings attached.</h1>
              <p className='text-xl font-medium font-root text-gray-800 '>With your free Tildette trial, you get instant access to social media scheduling, analytics, messaging, and social listening. Completely free.</p>
              <div className='w-full h-14 flex items-center'> 
              <Button
              btnText="Start your Free 30-day Trial"
              className="w-72 h-14 text-base bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700"
              type="button"
              onClick={() => navigateWithScroll('/register')}
              >x</Button>
              <p className='text-xl font-semibold cursor-pointer hover:text-blue-800 text-gray-800 underline hover:no-underline ml-7'>Request a Demo</p>
              </div>
              </div>
            </div>


            <div className='w-full lastDiv flex flex-col bg--100 mt-20 items-center newsletter-section fade-up'>
              <div className='w-2/3 h-80 mt-20 flex fade-up newsletter-content'>
              <div className='w-w40 h-full'>
                <h1 className='text-4xl font-root text-gray-800 font-bold newsletter-title'><a className='text-5xl font-root text-red-600'>The Perch</a> newsletter: Get smarter about social.</h1>
                <p className='mt-8 font-root font-medium text-xl text-gray-800 newsletter-desc'>The Perch is your inside source for what’s happening in social media — and why it matters to you.</p>
              </div>
              <div className='w-1/2 h-full ml-32 newsletter-form'>
              <Input
              type='text'
              placeHolder='Enter your email address'
              displayText='Email address: *'
              displayTextClassName='text-gray-800 font-semibold'
              className='w-full h-12 border-gray-300 shadow outline-none px-3 py-2'
               />

               <Button 
              btnText="Subscribe"
              className="w-36 h-12 mt-10 text-base bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700"
              type="button"
               >x</Button>
              </div>
              </div>
              <hr className='w-2/3 lastLine bg-black mt-10 opacity-40'/>

            
            <div className='w-2/3 h-1/2 bg-gray-20 mt-10 flex fade-up footer-links-section'>
            <div className='w-48 h-96 flex flex-col space-y-5'>
              <h1 className='text-xl font-bold text-gray-800 font-root'>About</h1>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Why Tildette</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>About Us</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Careers</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Leadership</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Customers</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold' data-footer-link-news>News Room</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold' data-footer-link-dei>Social Impact and DEI</p>
            </div>

            <div className='w-48 h-96 flex flex-col ml-20 space-y-5 fade-up'>
              <h1 className='text-xl font-bold text-gray-800 font-root'>Price</h1>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Pricing</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Standard</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Advanced</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Enterprise</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Features</p>
            </div>

            <div className='w-48 h-96 flex flex-col ml-20 space-y-5 fade-up'>
              <h1 className='text-xl font-bold text-gray-800 font-root'>Support</h1>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Need help?</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Product Updates</p>
              <p className='font-root text-gray-800 cursor-pointer hover:text-gray-600 hover:font-semibold'>Contact Us</p>
            </div>

            <div className='w-48 h-48 flex flex-col space-y-5 appstore-imgs fade-up'>

<img src={appStoreImg} className='cursor-pointer appstore-img'/>
<img src={googlePlayImg} className='cursor-pointer appstore-img'/>

            </div>
          </div>
          <hr className='w-full lastLine bg-black opacity-70' />

              <Footer />

            </div>

            
        </div>
      </>
       
    )
}