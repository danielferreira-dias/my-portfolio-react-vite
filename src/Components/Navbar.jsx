import React from 'react'

function Navbar({ activeSection }) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="h-screen stick top-0 w-1/3 md:w-1/4 lg:w-1/5 flex flex-col justify-center items-center text-white ">
            <div className="space-y-4 flex flex-col text-xl md:text-2xl font-serif gap-y-4">
                <a href="#aboutme" onClick={() => scrollToSection('aboutme')} className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'aboutme' ? 'transition-transform transform scale-125' : ''}`}>About Me</a>
                <a href="#skills" onClick={() => scrollToSection('skills')} className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'skills' ? 'transition-transform transform scale-125' : ''}`}>Skills</a>
                <a href="#experience" onClick={() => scrollToSection('experience')} className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'experience' ? 'transition-transform transform scale-125' : ''}`}>Experience</a>
                <a href="#projects" onClick={() => scrollToSection('projects')} className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'projects' ? 'transition-transform transform scale-125' : ''}`}>Projects</a>
                <a href="#contacts" onClick={() => scrollToSection('contacts')} className={`text-lg md:text-xl hover:text-gray-300 ${activeSection === 'contacts' ? 'transition-transform transform scale-125' : ''}`}>Contacts</a>
            </div>
        </div>
    );
}

export default Navbar
