import './App.css'
import Navbar from './Components/Navbar'
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';

function App() {

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

  return (
    <div className="flex flex-col px-5 sm:px-10 xl:px-40 2xl:px-60 py-5">
      <Navbar onDataFromChild={handleDataFromChild}></Navbar>

      <section className={`w-full h-screen  ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
        <div className="w-full h-full justify-between xs:justify-normal flex flex-col p-5">
          {/* Introduction Div */}
          <div className='flex items-center xs:items-starts xs:items-center justify-center xs:justify-between h-fit xs:h-full mx-5 my-5 lg:mx-10 flex-col xs:flex-row'>
            <div className='flex flex-col gap-y-4 my-10 xs:my-0'>
              <p className="text-xl sm:text-2xl lg:text-5xl">I'm <span className="text-2xl sm:text-3xl lg:text-6xl text-primary">Daniel Dias</span></p>
              <p className="text-lg sm:text-xl lg:text-3xl">Full Stack Web Developer</p>
              <button className='w-40 text-sm sm:text-xl border-4 rounded border-primary text-primary p-2'>Contact Me</button>
            </div>

            {/* Image Div */}
            <div className="relative w-56 xs:flex xs:w-60 md:w-72 lg:w-80 xl:w-96 xs:ml-5">
              <img src="profile.jpg" alt="Profile" className=" rounded border-2" />
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

      <section className={`w-full h-fit my-5  ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
        <h1 className='text-2xl xl:text-4xl '>About</h1>
        <div className='flex flex-row mt-4'>
          <div className="flex mt-3 ">
            <span className="block w-8 h-1 bg-primary mr-2"></span>
          </div>
          <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed  text-left">
            I have acquired and sharpened my ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum vn organization. I am <span className="text-primary font-semibold">trustworthy, creative, and an effective communicator</span>. I fondly anticipate working in a challenging yet rewarding organization to attain its visions for personal growth.
          </p>
        </div>
      </section>

      <section className={`w-full h-fit my-5 bg-white  ${dataFromChild ? ' transition-colors duration-300 ease-in-out text-white' : ' transition-colors duration-300 ease-in-out text-black'}`}>
      </section>

    </div>
  );
}

export default App
