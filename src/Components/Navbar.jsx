import React from 'react'

function Navbar() {

    return (
        <div className="h-20  w-full flex justify-between sm:justify-center items-center p-5">
            <div className="sm:flex-grow">
                <img src="react.svg" alt="" className="w-10 h-auto" />
            </div>
            <div className="sm:flex-grow flex justify-center lg:mr-10 space-x-4 lg:space-x-10 text-lg sm:text-2xl">
                <a href="" className="mx-2 text-gray-400 hover:text-white">About</a>
                <a href="" className="mx-2 text-gray-400 hover:text-white">Portfolio</a>
                <a href="" className="mx-2 text-gray-400 hover:text-white">Contact</a>
            </div>
            <div className="flex items-center">
                <input type="text" placeholder="Search..." className="border rounded px-2 py-1 bg-zinc-800 text-white w-20 lg:w-40" />
            </div>
        </div>
    );
}

export default Navbar
