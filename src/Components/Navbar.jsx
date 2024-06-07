import React, { useState, useEffect } from 'react';
import '../index.css'

function Navbar({ onDataFromChild }) {

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

    return (
        <div className="h-20 w-full flex justify-center 2xs:justify-between sm:justify-center items-center p-5 font-sans">
            <div className="sm:flex-grow hidden 2xs:flex">
                <img src="react.svg" alt="" className="w-10 h-auto" />
            </div>
            {isSmallScreen ? (
                <div className="flex flex-row xs:flex-grow justify-end lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-2 py-2 rounded w-fit h-9 flex items-center justify-center border border-gray-300 shadow-sm ${isDarkTheme ? 'bg-gray-300 text-black transition-colors duration-300 ease-in-out' : 'transition-colors bg-zinc-800 text-white duration-300 ease-in-out'}`}
                    >
                        <p>Resume</p>
                    </a>
                    <button
                        className={` flex items-center justify-center px-4 py-2 border ${isDarkTheme ? 'bg-gray-300 transition-colors duration-300 ease-in-out' : 'transition-colors bg-zinc-800 duration-300 ease-in-out'}`}
                        onClick={toggleDarkTheme}
                    >
                        <img src={moonSrc} alt="" className='h-4' />
                    </button>
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleMenu}
                            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        >
                            <img src="menu.52609857.svg" alt="Menu" />
                        </button>
                        {isMenuOpen && (
                            <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white transition-all   ${isMenuOpen ? 'transition-opacity ease-in-out duration-300 opacity-100' : 'transition-opacity ease-in-out duration-300 opacity-0'}`}>
                                <div className="gap-y-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div className='flex flex-row items-center px-5'>
                                        <span className="w-7 h-1 xs:h-16 bg-primary"></span>
                                        <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">About</a>
                                    </div>
                                    <div className='flex flex-row items-center px-5'>
                                        <span className="w-7 h-1 xs:h-16 bg-primary"></span>
                                        <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Portfolio</a>
                                    </div>
                                    <div className='flex flex-row items-center px-5'>
                                        <span className="w-7 h-1 xs:h-16 bg-primary"></span>
                                        <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Contact</a>
                                    </div>


                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="hidden xs:flex xs:flex-grow justify-center lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl">
                    <a href="#" className={`mx-2 text-gray-400 ${isDarkTheme ? 'hover:text-black' : 'hover:text-white'}`}>About</a>
                    <a href="#" className={`mx-2 text-gray-400 ${isDarkTheme ? 'hover:text-black' : 'hover:text-white'}`}>Portfolio</a>
                    <a href="#" className={`mx-2 text-gray-400 ${isDarkTheme ? 'hover:text-black' : 'hover:text-white'}`}>Contact</a>
                </div>
            )}
            <div className=" hidden sm:flex xs:flex-row items-center justify-end space-x-2 ml-10">
                <button className={` px-4 py-2 rounded w-fit h-12 flex items-center justify-center border border-gray-300 shadow-sm 
    ${isDarkTheme ? 'bg-gray-300 transition-colors duration-300 ease-in-out' : 'transition-colors bg-zinc-800 duration-300 ease-in-out'}`}
                    onClick={toggleDarkTheme}>
                    <img src={moonSrc} alt="" className='h-7' />
                </button>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded w-fit h-12 flex items-center justify-center border border-gray-300 shadow-sm
          ${isDarkTheme ? 'bg-gray-300 text-black transition-colors duration-300 ease-in-out' : 'transition-colors bg-zinc-800 text-white duration-300 ease-in-out'}`}
                >
                    <p>Resume</p>
                </a>
            </div>
        </div>
    );
}

export default Navbar
