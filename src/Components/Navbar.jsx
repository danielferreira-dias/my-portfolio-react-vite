import React from 'react'

function Navbar({ activeSection }) {
    return (
        <div className="h-screen stick top-0 w-1/3 md:w-1/4 lg:w-1/5 flex flex-col justify-center items-center text-white ">
            <div className="space-y-4 flex flex-col text-xl md:text-2xl font-serif gap-y-4">
                <a href="#aboutme" className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'aboutme' ? 'scale-125' : ''}`}>About Me</a>
                <a href="#experience" className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'skills' ? 'scale-125' : ''}`}>Skills</a>
                <a href="#experience" className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'experience' ? 'scale-125' : ''}`}>Experience</a>
                <a href="#projects" className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'projects' ? 'scale-125' : ''}`}>Projects</a>
                <a href="#contacts" className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'contacts' ? 'scale-125' : ''}`}>Contacts</a>
            </div>
        </div>
    );
}

export default Navbar
