import React from 'react'
import '../index.css'

function Navbar() {

    const toggleDarkTheme = () => {
        document.body.classList.toggle('dark-theme');
    }

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
                <button className="bg-zinc-800 px-2 text-white rounded w-fit h-12" onClick={toggleDarkTheme}>
                    <img src="moon.svg" alt="" className='h-7' />
                </button>
                <button className="bg-zinc-800 text-white px-4 py-2 rounded w-fit h-12" >
                    <p>Resume</p>
                </button>
            </div>
        </div>
    );
}

export default Navbar
