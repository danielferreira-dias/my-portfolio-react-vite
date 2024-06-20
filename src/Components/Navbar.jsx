import React, { useState, useEffect } from 'react';
import '../index.css'


const Navbar = ({ onDataFromChild, scrollToSection, refs }) => {

    // Dark Theme 
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [moonSrc, setMoonSrc] = useState('moon.svg'); // Light theme SVG
    const sunSrc = 'sun.svg'; // Dark theme SVG

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme');
        setMoonSrc(isDarkTheme ? 'moon.svg' : sunSrc);
        onDataFromChild(isDarkTheme)
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

    // Open Menu Variables
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClick = (section) => {
        scrollToSection(refs[section]);
    };

    return (
        <div className="h-20 w-full px-5 sm:px-10 xl:px-40 2xl:px-64 flex justify-center 2xs:justify-between sm:justify-center items-center font-sans">
            <div className="sm:flex-grow hidden 2xs:flex">
                <img src="react.svg" alt="" className="w-10 h-auto 2xl:w-14" />
            </div>
            {isSmallScreen ? (
                <div className="flex flex-row xs:flex-grow justify-end lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-2 py-2 rounded w-fit h-9 flex items-center justify-center border border-gray-300 shadow-sm ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-300 text-black transition-colors duration-300 ease-in-out' : 'transition-colors bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700 text-white duration-300 ease-in-out'}`}
                    >
                        <p>Resume</p>
                    </a>
                    <button
                        className={` flex items-center justify-center px-4 py-2 border ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-300 transition-colors duration-300 ease-in-out' : 'transition-colors bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700 duration-300 ease-in-out'}`}
                        onClick={toggleDarkTheme}
                    >
                        <img src={moonSrc} alt="" className='h-4' />
                    </button>
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleMenu}
                            className={` flex items-center justify-center px-4 py-2 border ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-300 transition-colors duration-300 ease-in-out' : 'transition-colors bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700 duration-300 ease-in-out'}`}                        >
                            <img src="menu.52609857.svg" alt="Menu" />
                        </button>
                        {isMenuOpen && (
                            <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white transition-all   ${isMenuOpen ? 'transition-opacity ease-in-out duration-300 opacity-100' : 'transition-opacity ease-in-out duration-300 opacity-0'}`}>
                                <div className="gap-y-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div className='flex flex-row items-center px-5'>
                                        <span className="w-7 h-1 bg-primary"></span>
                                        <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleClick('skillsRef')}>Skills</a>
                                    </div>
                                    <div className='flex flex-row items-center px-5'>
                                        <span className="w-7 h-1 bg-primary"></span>
                                        <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleClick('experienceRef')}>Experience</a>
                                    </div>
                                    <div className='flex flex-row items-center px-5'>
                                        <span className="w-7 h-1 bg-primary"></span>
                                        <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleClick('portfolioRef')}>Portfolio</a>
                                    </div>


                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="hidden xs:flex xs:flex-grow justify-center lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl 2xl:text-4xl">
                    <a href="#" className={`mx-2 text-gray-300 ${isDarkTheme ? 'hover:text-black' : 'hover:text-white'}`} onClick={() => handleClick('skillsRef')}>Skills</a>
                    <a href="#" className={`mx-2 text-gray-300 ${isDarkTheme ? 'hover:text-black' : 'hover:text-white'}`} onClick={() => handleClick('experienceRef')}>Experience</a>
                    <a href="#" className={`mx-2 text-gray-300 ${isDarkTheme ? 'hover:text-black' : 'hover:text-white'}`} onClick={() => handleClick('portfolioRef')}>Portfolio</a>
                </div>
            )}
            <div className=" hidden sm:flex xs:flex-row items-center justify-end space-x-2 ml-10">
                <button className={` px-4 py-2 rounded w-fit h-12  flex items-center justify-center border border-gray-300 shadow-sm 
    ${isDarkTheme ? 'bg-gradient-to-r from-white to-gray-200 transition-colors duration-300 ease-in-out' : 'transition-colors bg-gradient-to-r from-black to-blue-900 shadow-blue-900 hover:shadow-blue-700 duration-300 ease-in-out'}`}
                    onClick={toggleDarkTheme}>
                    <img src={moonSrc} alt="" className='h-7' />
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
        </div>
    );
}

export default Navbar
