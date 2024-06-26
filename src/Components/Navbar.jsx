import React, { useState, useEffect } from 'react';
import '../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = ({ onDataFromChild, scrollToSection, refs }) => {

    // Dark Theme 
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [moonSrc, setMoonSrc] = useState('moon.svg'); // Light theme SVG
    const sunSrc = 'sun.svg'; // Dark theme SVG

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme');
        setMoonSrc(isDarkTheme ? 'moon.svg' : sunSrc);
        onDataFromChild(isDarkTheme);

        // Reinitialize AOS to respect data-aos-once="true"
        setTimeout(() => {
            AOS.refresh(); // Use AOS.refresh() to reinitialize the animations
        }, 0); // Slight delay to ensure the DOM updates are completed before reinitializing
    }

    // Add transition class to body after initial load
    useEffect(() => {
        document.body.classList.add('transition-bg-color');
    }, []);

    // Check Screen Size
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
        };
        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleClick = (section) => {
        scrollToSection(refs[section]);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="h-20 w-full px-5 sm:px-10 xl:px-40 2xl:px-64 flex justify-center 2xs:justify-between sm:justify-center items-center font-sans z-10">
            <div className="sm:flex-grow hidden 2xs:flex">
                <img src="react.svg" alt="" className="w-10 h-auto 2xl:w-14" />
            </div>
            {isSmallScreen ? (
                <div className="flex flex-row xs:flex-grow justify-end lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl">
                    <button
                        className={`relative flex items-center justify-between w-16 h-9 p-1 border rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-300 shadow-blue-900 hover:shadow-blue-700' : 'bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700'}`}
                        onClick={toggleDarkTheme}
                    >
                        <div className={`w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex justify-center ${isDarkTheme ? 'translate-x-6 bg-gradient-to-r from-white to-gray-300' : '-translate-x-0.5 bg-blue-900 shadow-blue-900'}`}>
                            <img src={moonSrc} alt="" className='h-4 w-4 m-auto' />
                        </div>
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-2 py-2 rounded w-fit h-9 flex items-center justify-center border border-gray-300 shadow-sm ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-300 text-black transition-colors duration-300 ease-in-out' : 'transition-colors bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700 text-white duration-300 ease-in-out'}`}
                    >
                        <p>Resume</p>
                    </a>
                    <div className="relative inline-block">
                        {/* Dropdown toggle button */}
                        <button onClick={toggleDropdown} className={`relative z-10 block p-2 text-gray-700 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-opacity-40 dark:focus:ring-blue-400 focus:ring dark:focus:border-blue-500 focus:outline-none ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-300 text-black transition-colors duration-300 ease-in-out text-gray-800 dark:text-white' : 'bg-gray-800 text-white dark:text-white'}`}>
                            <svg className={`w-5 h-5 ${isDarkTheme ? 'text-gray-800 dark:text-black' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {isOpen && (
                            <div onClick={closeDropdown}
                                className={`absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right rounded-md shadow-xl ${isDarkTheme ? 'bg-white text-black' : 'bg-gray-800 text-gray-300'}`}>
                                <a href="#" className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handleClick('skillsRef')}>Skills</a>
                                <a href="#" className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handleClick('experienceRef')}>Experience</a>
                                <a href="#" className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handleClick('portfolioRef')}>Portfolio</a>
                                <a href="#" className="block px-4 py-3 text-sm  capitalize transition-colors duration-300 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handleClick('contactRef')}>Contact</a>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="hidden xs:flex xs:flex-grow justify-center lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl 2xl:text-4xl">
                    <a href="#" className={`mx-2  ${isDarkTheme ? ' text-gray-500 hover:text-black' : ' text-gray-300 hover:text-white'}`} onClick={() => handleClick('skillsRef')}>Skills</a>
                    <a href="#" className={`mx-2  ${isDarkTheme ? ' text-gray-500 hover:text-black' : ' text-gray-300 hover:text-white'}`} onClick={() => handleClick('experienceRef')}>Experience</a>
                    <a href="#" className={`mx-2  ${isDarkTheme ? ' text-gray-500 hover:text-black' : ' text-gray-300 hover:text-white'}`} onClick={() => handleClick('portfolioRef')}>Portfolio</a>
                </div>
            )
            }
            <div className=" hidden sm:flex xs:flex-row items-center justify-end space-x-3 ml-10">
                <button
                    className={`relative flex items-center justify-between w-20 h-12 p-1 border rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-300 shadow-blue-900 hover:shadow-blue-700' : 'bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700'}`}
                    onClick={toggleDarkTheme}
                >
                    <div className={`flex justify-center w-10 h-10 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isDarkTheme ? 'translate-x-8 bg-gradient-to-r from-white to-gray-300' : '-translate-x-0.5 bg-blue-900 shadow-blue-900'}`}>
                        <img src={moonSrc} alt="" className='h-7 w-7 m-auto' />
                    </div>
                </button>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded w-fit h-12 flex items-center justify-center border border-gray-300 shadow-sm
          ${isDarkTheme ? ' bg-gradient-to-r from-white to-gray-300 text-black transition-colors duration-300 ease-in-out' : 'transition-colors bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700 text-white duration-300 ease-in-out'}`}
                >
                    <p>Resume</p>
                </a>
            </div>
        </div >
    );
}

export default Navbar
