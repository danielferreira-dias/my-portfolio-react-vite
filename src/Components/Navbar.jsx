import React, { useState, useEffect } from 'react';
import '../index.css'

function Navbar() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [moonSrc, setMoonSrc] = useState('moon.svg'); // Light theme SVG
    const sunSrc = 'sun.svg'; // Dark theme SVG

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme');
        setMoonSrc(isDarkTheme ? 'moon.svg' : sunSrc);
    }

    // Add transition class to body after initial load
    useEffect(() => {
        document.body.classList.add('transition-bg-color');
    }, []);

    return (
        <div className="h-20 w-full flex justify-between sm:justify-center items-center p-5 font-sans">
            <div className="sm:flex-grow">
                <img src="react.svg" alt="" className="w-10 h-auto" />
            </div>
            <div className="hidden xs:flex xs:flex-grow justify-center lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl">
                <a href="" className="mx-2 text-gray-400 hover:text-white">About</a>
                <a href="" className="mx-2 text-gray-400 hover:text-white">Portfolio</a>
                <a href="" className="mx-2 text-gray-400 hover:text-white">Contact</a>
            </div>
            <div className="hidden sm:flex items-center justify-end space-x-2 ml-10">
                <button className={` text-white px-4 py-2 rounded w-fit h-12 
    ${isDarkTheme ? 'bg-gray-300 transition-colors duration-300 ease-in-out' : 'transition-colors bg-zinc-800 duration-300 ease-in-out'}`}
                    onClick={toggleDarkTheme}>
                    <img src={moonSrc} alt="" className='h-7' />
                </button>
                <button className={`  px-4 py-2 rounded w-fit h-12 
    ${isDarkTheme ? 'bg-gray-300 text-black transition-colors duration-300 ease-in-out' : 'transition-colors bg-zinc-800 text-white duration-300 ease-in-out'}`}>
                    <p>Resume</p>
                </button>
            </div>
        </div>
    );
}

export default Navbar
