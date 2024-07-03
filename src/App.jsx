import './App.css'
import Navbar from './Components/Navbar'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import About from './Sections/About';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';
import Loading from './Sections/Loading';
import Index from './Sections/Index';

import React, { useState, useRef, useEffect } from 'react';


function App() {

  // States for loading, dark mode, and social media icons
  const [isLoading, setIsLoading] = useState(true);
  const [dataFromChild, setDataFromChild] = useState(true);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);


  // Function to handle data from child component
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    // Assume you have logic to set social media icons based on dark mode here
  };

  // Define refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Conditional rendering based on loading state
  if (isLoading) {
    return (
      <div className="w-full h-svh overflow-hidden p-0 m-0">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-2 font-montserrat transition duration-300 ease-in w-full">


      <Navbar
        onDataFromChild={handleDataFromChild}
        scrollToSection={scrollToSection}
        refs={{ aboutRef, skillsRef, experienceRef, portfolioRef, contactRef }}
      />

      <section className="h-fit sm:h-fit w-full px-8 sm:px-12 md:px-6 mdlg:px-14 xl:px-40 2xl:px-52 py-2 my-5">
        <Index
          scrollToSection={scrollToSection}
          refs={{ contactRef }}
        />
      </section>

      <section ref={aboutRef} className={`w-full h-fit my-5 px-8 sm:px-12 md:px-6 mdlg:px-14 xl:px-40 2xl:px-52 ${dataFromChild ? 'transition-colors duration-300 ease-in-out text-white' : 'transition-colors duration-300 ease-in-out text-black'}`}>
        <About />
      </section>

      <section ref={skillsRef} className={`w-full bg-gradient-to-r bg-custom-black-sec h-fit my-8 px-2 sm:px-10 xl:px-40 2xl:px-52 ${dataFromChild ? 'transition-colors duration-300 ease-in-out text-white' : 'transition-colors duration-300 ease-in-out text-black'}`}>
        <Skills isDarkMode={dataFromChild} />
      </section>

      <section ref={experienceRef} className={`w-full h-fit my-8 ${dataFromChild ? 'transition-colors duration-300 ease-in-out text-white' : 'transition-colors duration-300 ease-in-out text-black'}`}>
        <Experience isDarkMode={dataFromChild} />
      </section>

      <section ref={portfolioRef} className={`w-full h-fit sm:h-fit my-8 px-5 sm:px-10 xl:px-40 2xl:px-52 ${dataFromChild ? 'transition-colors duration-300 ease-in-out text-white' : 'transition-colors duration-300 ease-in-out text-black'}`}>
        <Portfolio />
      </section>

      <section ref={contactRef} className={`w-full h-fit mt-5 ${dataFromChild ? 'transition-colors duration-300 ease-in-out text-white' : 'transition-colors duration-300 ease-in-out text-black'}`}>
        <Contact isDarkMode={dataFromChild} />
      </section>
    </div>
  );
}

export default App
