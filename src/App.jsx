import './App.css'
import Navbar from './Components/Navbar'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import About from './Sections/About';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';

import React, { useState, useRef, useEffect } from 'react';

const AnimatedText = ({ text, textColored }) => {
  return (
    < span className={`${textColored ? ' text-2xl sm:text-3xl lg:text-6xl text-primary ' : ''}`} >
      {splitTextIntoWordSpans(text)}
    </span >
  );
};

const splitTextIntoWordSpans = (text) => {
  return text.split(' ').map((word, index) => (
    <span key={index} className="inline-block animated-word" style={{ animationDelay: `${index * 0.2}s` }}>
      {word}&nbsp;
    </span>
  ));
};

function App() {

  useEffect(() => {
    AOS.init({
      duration: 300, // Animation duration
    });
  }, []);

  const [dataFromChild, setDataFromChild] = useState(true);

  const [linkedinMode, setLinkedinMode] = useState('linkedin-light.svg');; // Dark theme SVG Linkedin
  const linkedinDark = 'linkedin-dark.svg'

  const [gitHubMode, setGitHubMode] = useState('github-light.svg'); // Dark theme SVG Gitub
  const githubDark = 'github-dark.svg'

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    setLinkedinMode(dataFromChild ? linkedinDark : 'linkedin-light.svg');
    setGitHubMode(dataFromChild ? githubDark : 'github-light.svg');
  };

  // Define refs for each section
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling to a section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="flex flex-col pt-2 font-montserrat">
      <Navbar onDataFromChild={handleDataFromChild} scrollToSection={scrollToSection} refs={{ skillsRef, experienceRef, portfolioRef }}></Navbar>

      <section className={`w-full h-screen px-5 sm:px-10 xl:px-40 2xl:px-64  ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
        <div className="w-full h-full justify-between xs:justify-normal flex flex-col p-5">
          {/* Introduction Div */}
          <div className='flex items-center xs:items-starts xs:items-center justify-center xs:justify-between h-fit xs:h-full mx-5 my-5 lg:mx-10 flex-col xs:flex-row'>
            <div className='flex flex-col gap-y-4 my-10 xs:my-0'>
              <p className="text-xl sm:text-2xl lg:text-5xl">
                <AnimatedText text="I'm" textColored={false} /> <AnimatedText text="Daniel Dias" textColored={true} />
              </p>
              <p className="text-lg sm:text-xl lg:text-3xl">
                <AnimatedText text="Full Stack Web Developer" textColored={false} />
              </p>
              <button className='w-40 text-sm sm:text-xl border-4 mt-10 rounded border-primary text-primary p-2 animate-bounce' onClick={() => scrollToSection(contactRef)}>Contact Me</button>
            </div>

            {/* Image Div */}
            <div className="relative w-56 xs:flex xs:w-60 md:w-72 lg:w-80 xl:w-96 xs:ml-5">
              <div data-aos="fade-up" data-aos-duration="1000" className={` w-1/2 h-full absolute z-10 opacity-80 ${dataFromChild ? ' bg-gradient-to-r from-gray-950 to-transparent' : ' bg-gradient-to-r from-gray-100 to-transparent'}`} ></div>
              <img src="profile.jpg" alt="Profile" className=" rounded" data-aos="fade-up" data-aos-duration="1000" />
            </div>
          </div>

          {/* Symbol Div */}
          <div className="relative h-fit">
            <div className="flex flex-row justify-center xs:justify-normal xs:absolute bottom-0 right-0 xs:flex-col items-center gap-5">
              <span className="w-1 h-4 xs:h-16 bg-primary rotate-90 xs:rotate-0"></span>
              <img src={linkedinMode} alt="" className="w-10 h-5" />
              <img src={gitHubMode} alt="" className="w-10 h-10" />
            </div>
          </div>

        </div>
      </section>

      <section className={`w-full h-fit my-5 px-5 sm:px-10 xl:px-40 2xl:px-64  ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
        <About />
      </section>

      <section ref={skillsRef} className={`w-full h-fit my-8 px-5 sm:px-10 xl:px-40 2xl:px-64 ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
        <Skills
          isDarkMode={dataFromChild}
        />
      </section>

      <section ref={experienceRef} className={`w-full h-fit my-8 ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
        <Experience
          isDarkMode={dataFromChild}
        />
      </section >

      <section ref={portfolioRef} className={`w-full h-fit my-8 px-5 sm:px-10 xl:px-40 2xl:px-64 ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
        <Portfolio />
      </section >

      <section ref={contactRef} className={`w-full h-fit mt-5   ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white bg-slate-900' : ' transition-colors duration-300 ease-in-out text-black bg-gray-200'}`}>
        <Contact
          isDarkMode={dataFromChild}
        />
      </section>

    </div >
  );
}

export default App
