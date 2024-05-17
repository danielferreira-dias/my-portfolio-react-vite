import React from 'react'

function Navbar() {
    return (
        <div className="h-screen stick top-0 w-1/3 md:w-1/4 lg:w-1/5 flex flex-col justify-center items-center text-white ">
            <div className="space-y-4 flex flex-col text-xl md:text-2xl font-serif gap-y-4">
                <a href="" className="hover:text-gray-300 transition-transform transform hover:scale-110">About Me</a>
                <a href="" className="hover:text-gray-300 transition-transform transform hover:scale-110">Experience</a>
                <a href="" className="hover:text-gray-300 transition-transform transform hover:scale-110">Projects</a>
                <a href="" className="hover:text-gray-300 transition-transform transform hover:scale-110">Contacts</a>
            </div>
        </div>
    );
}

export default Navbar
