import React, { useEffect } from 'react'
import "./header.css"
import { Button } from '../Button/button'
import { useNavigate } from 'react-router-dom';
import logoImg from '../../Images/Logo.png'

export function HeaderComponent () {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpenDropdown(null);  
        }
    }
    
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Mobile menu toggle
    const handleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

    return (
        <header className="customContainer w-full h-14 border-b-2 flex bg-white fixed z-10 top-0 left-0">
            {/* Desktop Nav */}
            <div className="w-3/4 h-full items-center justify-center hidden lg:flex">
                <img src={logoImg} className="w-16 hover:w-20 "/>
                <div className='h-full w-4/5 flex items-center ml-20 space-x-10' ref={dropdownRef}>
                    {/* Pricing Dropdown */}
                    <div className="relative">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => toggleDropdown('Pricing')}
                        >
                            <h1 
                                className={`text-base font-medium hover:text-blue-800 ${openDropdown === 'Pricing' ? 'text-blue-800' : 'text-gray-800'}`}
                            >
                                Pricing
                            </h1>
                            <svg 
                                className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'Pricing' ? 'rotate-180' : 'rotate-0'}`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div
                            className={`absolute top-8 left-0 w-80 bg-white border rounded shadow-lg transition-all duration-300 ease-in-out ${openDropdown === 'Pricing' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}
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
                                className={`text-base font-medium hover:text-blue-800 ${openDropdown === 'Company' ? 'text-blue-800' : 'text-gray-800'}`}
                            >
                                Company
                            </h1>
                            <svg 
                                className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'Company' ? 'rotate-180' : 'rotate-0'}`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div
                            className={`absolute top-8 left-0 w-40 bg-white border rounded shadow-lg transition-all duration-300 ease-in-out ${openDropdown === 'Company' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}
                        >
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Careers</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
                            </ul>
                        </div>
                    </div>
                    {/* Resources Dropdown */}
                    <div className="relative ">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => toggleDropdown('Resources')}
                        >
                            <h1 
                                className={`text-base font-medium hover:text-blue-800 ${openDropdown === 'Resources' ? 'text-blue-800' : 'text-gray-800'}`}
                            >
                                Resources
                            </h1>
                            <svg 
                                className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'Resources' ? 'rotate-180' : 'rotate-0'}`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                         </div>
                        <div
                            className={`absolute top-8 left-0 w-40 bg-white border rounded shadow-lg transition-all duration-300 ease-in-out ${openDropdown === 'Resources' ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}
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
            <div className='w-1/4 h-full  items-center justify-center hidden lg:flex'>
                <h1 className='text-base font-semibold text-gray-800 hover:text-blue-800 cursor-pointer' onClick={() => navigate('/login')}>Login</h1>
                <Button 
                    btnText="Start your free trial" 
                    className="ml-10 w-44 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700" 
                    type="button" 
                    onClick={() => navigate('/register')}>x</Button>
            </div>
            {/* Mobile Nav */}
            <div className="w-full flex lg:hidden items-center justify-between px-4 h-14">
                <img src={logoImg} className="w-14"/>
                <button className="focus:outline-none" onClick={handleMobileMenu} aria-label="Open menu">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile Dropdown */}
            <div className={`fixed inset-0 z-50 bg-black bg-opacity-40 flex lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'mobile-menu-anim open' : 'mobile-menu-anim'}`}
                style={{
                  pointerEvents: mobileMenuOpen ? 'auto' : 'none',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
            >
                <div className={`bg-white w-4/5 max-w-xs h-full shadow-lg p-6 flex flex-col overflow-y-auto menu-scrollable transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'slide-in' : 'slide-out'}`}
                    style={{
                      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                      opacity: mobileMenuOpen ? 1 : 0.5,
                      transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)',
                    }}
                >
                    <button className="self-end mb-6" onClick={handleMobileMenu} aria-label="Close menu">
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col space-y-4">
                        <li className="font-semibold text-lg text-gray-800">Menu</li>
                        {/* Pricing Dropdown */}
                        <li>
                          <div onClick={() => toggleDropdown('Pricing')} className="flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
                            <span>Pricing</span>
                            <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'Pricing' ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className={`mobile-dropdown-anim${openDropdown === 'Pricing' ? ' open' : ''}`}
                            style={{
                              maxHeight: openDropdown === 'Pricing' ? '200px' : '0',
                              overflow: 'hidden',
                              marginBottom: openDropdown === 'Pricing' ? '0.5rem' : '0',
                              background: '#f9fafb',
                              borderRadius: '0.5rem',
                              borderLeft: openDropdown === 'Pricing' ? '2px solid #e5e7eb' : 'none',
                              paddingLeft: openDropdown === 'Pricing' ? '0.75rem' : '0',
                              marginTop: openDropdown === 'Pricing' ? '0.25rem' : '0',
                            }}>
                            <ul className="flex flex-col space-y-2 py-2">
                              {openDropdown === 'Pricing' && (
                                <>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Plan 1</li>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Plan 2</li>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Plan 3</li>
                                </>
                              )}
                            </ul>
                          </div>
                        </li>
                        {/* Company Dropdown */}
                        <li>
                          <div onClick={() => toggleDropdown('Company')} className="flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
                            <span>Company</span>
                            <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'Company' ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className={`mobile-dropdown-anim${openDropdown === 'Company' ? ' open' : ''}`}
                            style={{
                              maxHeight: openDropdown === 'Company' ? '200px' : '0',
                              overflow: 'hidden',
                              marginBottom: openDropdown === 'Company' ? '0.5rem' : '0',
                              background: '#f9fafb',
                              borderRadius: '0.5rem',
                              borderLeft: openDropdown === 'Company' ? '2px solid #e5e7eb' : 'none',
                              paddingLeft: openDropdown === 'Company' ? '0.75rem' : '0',
                              marginTop: openDropdown === 'Company' ? '0.25rem' : '0',
                            }}>
                            <ul className="flex flex-col space-y-2 py-2">
                              {openDropdown === 'Company' && (
                                <>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">About Us</li>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Careers</li>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Contact</li>
                                </>
                              )}
                            </ul>
                          </div>
                        </li>
                        {/* Resources Dropdown */}
                        <li>
                          <div onClick={() => toggleDropdown('Resources')} className="flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
                            <span>Resources</span>
                            <svg className={`w-4 h-4 ml-1 transform transition-transform ${openDropdown === 'Resources' ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className={`mobile-dropdown-anim${openDropdown === 'Resources' ? ' open' : ''}`}
                            style={{
                              maxHeight: openDropdown === 'Resources' ? '200px' : '0',
                              overflow: 'hidden',
                              marginBottom: openDropdown === 'Resources' ? '0.5rem' : '0',
                              background: '#f9fafb',
                              borderRadius: '0.5rem',
                              borderLeft: openDropdown === 'Resources' ? '2px solid #e5e7eb' : 'none',
                              paddingLeft: openDropdown === 'Resources' ? '0.75rem' : '0',
                              marginTop: openDropdown === 'Resources' ? '0.25rem' : '0',
                            }}>
                            <ul className="flex flex-col space-y-2 py-2">
                              {openDropdown === 'Resources' && (
                                <>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Blog</li>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Guides</li>
                                  <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Webinars</li>
                                </>
                              )}
                            </ul>
                          </div>
                        </li>
                        <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Support</li>
                        <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Enterprise</li>
                        <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">FAQs</li>
                        <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Book a call</li>
                    </ul>
                    <div className="mt-auto flex flex-col space-y-4">
                        <Button 
                            btnText="Start your free trial" 
                            className="w-full bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700" 
                            type="button" 
                            onClick={() => navigate('/register')}>x</Button>
                        <h1 className='text-base font-semibold text-gray-800 hover:text-blue-800 cursor-pointer text-center' onClick={() => navigate('/login')}>Login</h1>
                    </div>
                </div>
                <div className="flex-1" onClick={handleMobileMenu}></div>
            </div>
        </header>
    )
}