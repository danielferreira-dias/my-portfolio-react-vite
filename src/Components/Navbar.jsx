import React from 'react'

function Navbar() {
    return (
        <div className="h-screen w-1/3 md:w-1/4 lg:w-1/5 flex flex-col justify-center items-center bg-zinc-800 text-white">
            <div className="space-y-4 flex flex-col text-xl md:text-2xl font-serif gap-y-4">
                <a href="" className="hover:text-gray-300">About Me</a>
                <a href="" className="hover:text-gray-300">Experience</a>
                <a href="" className="hover:text-gray-300">Projects</a>
                <a href="" className="hover:text-gray-300">Contacts</a>
            </div>
        </div>
    );
}

export default Navbar
