import React, { useEffect } from 'react'
import "./header.css"
import { Button } from '../Button/button'

export function HeaderComponent () {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpenDropdown(null);  
        }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);




    return (
        <div className="customContainer w-full h-14 border-b-2 flex bg-white fixed z-10">
            <div className="w-3/4 h-full flex items-center justify-center">
                <img src="\src\Images\Logo.png" className="w-16 hover:w-20 " />
                <div className='h-full w-4/5 flex items-center ml-20 space-x-10' ref={dropdownRef}>
                    {/* Pricing Dropdown */}
                    <div className="relative">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => toggleDropdown('Pricing')}
                        >
                            <h1 
                                className={`text-base font-medium hover:text-blue-800 ${
                                    openDropdown === 'Pricing' ? 'text-blue-800' : 'text-gray-800'
                                }`}
                            >
                                Pricing
                            </h1>
                            <svg 
                                className={`w-4 h-4 ml-1 transform transition-transform ${
                                    openDropdown === 'Pricing' ? 'rotate-180' : 'rotate-0'
                                }`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div
                            className={`absolute top-8 left-0 w-40 bg-white border rounded shadow-lg transition-all duration-300 ease-in-out ${
                                openDropdown === 'Pricing' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                            } overflow-hidden`}
                        >
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Plan 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Plan 2</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Plan 3</li>
                            </ul>
                        </div>
                    </div>


                    {/* Company Dropdown */}
                    <div className="relative">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => toggleDropdown('Company')}
                        >
                            <h1 
                                className={`text-base font-medium hover:text-blue-800 ${
                                    openDropdown === 'Company' ? 'text-blue-800' : 'text-gray-800'
                                }`}
                            >
                                Company
                            </h1>
                            <svg 
                                className={`w-4 h-4 ml-1 transform transition-transform ${
                                    openDropdown === 'Company' ? 'rotate-180' : 'rotate-0'
                                }`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div
                            className={`absolute top-8 left-0 w-40 bg-white border rounded shadow-lg transition-all duration-300 ease-in-out ${
                                openDropdown === 'Company' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                            } overflow-hidden`}
                        >
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Careers</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
                            </ul>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => toggleDropdown('Resources')}
                        >
                            <h1 
                                className={`text-base font-medium hover:text-blue-800 ${
                                    openDropdown === 'Resources' ? 'text-blue-800' : 'text-gray-800'
                                }`}
                            >
                                Resources
                            </h1>
                            <svg 
                                className={`w-4 h-4 ml-1 transform transition-transform ${
                                    openDropdown === 'Resources' ? 'rotate-180' : 'rotate-0'
                                }`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                         </div>
                        <div
                            className={`absolute top-8 left-0 w-40 bg-white border rounded shadow-lg transition-all duration-300 ease-in-out ${
                                openDropdown === 'Resources' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                            } overflow-hidden`}
                        >
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Guides</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Webinars</li>
                            </ul>
                        </div>
                </div>
                        <h1 className='text-base font-medium text-gray-800 cursor-pointer hover:text-blue-800'>Support</h1>
                        <h1 className='text-base font-medium text-gray-800 cursor-pointer hover:text-blue-800'>Enterprise</h1>
                        <h1 className='text-base font-medium text-gray-800 cursor-pointer hover:text-blue-800'>FAQs</h1>
                        <h1 className='text-base font-medium text-gray-800 cursor-pointer hover:text-blue-800'>Book a call</h1>
                </div>
            </div>

            <div className='w-1/4 h-full flex items-center justify-center'>
            <h1 className='text-base font-semibold text-gray-800 hover:text-blue-800 cursor-pointer'>Login</h1>
            <Button 
            btnText="Start your free trial" 
            className="ml-10 w-44 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700" 
            type="button" 
            onClick={() => {}}> 
            x</Button>
            </div>
        </div>
    )
}