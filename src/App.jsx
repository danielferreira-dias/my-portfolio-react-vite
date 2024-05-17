import './App.css'
import Navbar from './Components/Navbar'
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';

function App() {

  const [activeSection, setActiveSection] = useState('');

  const { ref: aboutMeRef, inView: isAboutMeInView } = useInView({ threshold: 0.5, onChange: inView => inView && setActiveSection('aboutme') });
  const { ref: skillsRef, inView: isSkillsInView } = useInView({ threshold: 0.5, onChange: inView => inView && setActiveSection('skills') });
  const { ref: experienceRef, inView: isExperienceInView } = useInView({ threshold: 0.5, onChange: inView => inView && setActiveSection('experience') });
  const { ref: projectsRef, inView: isProjectsInView } = useInView({ threshold: 0.5, onChange: inView => inView && setActiveSection('projects') });
  const { ref: contactsRef, inView: isContactsInView } = useInView({ threshold: 0.5, onChange: inView => inView && setActiveSection('contacts') });

  return (
    <div className="flex h-screen">
      <Navbar activeSection={activeSection} />
      <div className="w-full font-serif overflow-auto p-5">
        <section id="aboutme" ref={aboutMeRef} className="h-screen flex flex-col items-center justify-center gap-y-5 text-white">
          <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-64 lg:h-64 rounded-full overflow-hidden">
            <img src="profile.jpg" alt="Profile Image" className="w-full h-full object-cover" />
          </div>
          <h1 className='text-center text-4xl'>About me</h1>
          <div>
            <div className='text-l md:text-2xl'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
        <section id="skills" ref={skillsRef} className="h-screen flex items-center justify-center text-white">
          <div >
            <h1 className='text-center text-4xl'>Skills</h1>
            <div className='text-l md:text-2xl'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
        <section id="experience" ref={experienceRef} className="h-screen flex items-center justify-center text-white">
          <div >
            <h1 className='text-center text-4xl'>Experience</h1>
            <div className='text-l md:text-2xl'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
        <section id="projects" ref={projectsRef} className="h-screen flex items-center justify-center text-white">
          <div >
            <h1 className='text-center text-4xl'>Projects</h1>
            <div className='text-l md:text-2xl'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
        <section id="contacts" ref={contactsRef} className="h-screen flex items-center justify-center text-white">
          <div >
            <h1 className='text-center text-4xl'>Contacts</h1>
            <div className='text-l md:text-2xl'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App
