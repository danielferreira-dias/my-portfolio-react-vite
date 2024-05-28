import './App.css'
import Navbar from './Components/Navbar'
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';

function App() {

  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log('Data received from child:', dataFromChild);
  };

  return (
    <div className="flex flex-col h-screen px-5 sm:px-10 xl:px-40 2xl:px-80 py-5">
      <Navbar onDataFromChild={handleDataFromChild}></Navbar>
      <section className="w-full h-svh bg-white">
        <div className="w-full h-full justify-between xs:justify-normal flex flex-col p-5">
          {/* Introduction Div */}
          <div className='flex items-start xs:items-center justify-center xs:justify-normal h-fit xs:h-full mx-5 my-5 lg:mx-10'>
            <div className='flex flex-col gap-y-4 my-10 xs:my-0'>
              <p className="text-xl sm:text-2xl lg:text-5xl">I'm <span className="text-2xl sm:text-3xl lg:text-6xl text-primary">Daniel Dias</span></p>
              <p className="text-lg sm:text-xl lg:text-3xl">Full Stack Web Developer</p>
              <button className='w-40 text-sm sm:text-xl border-4 rounded border-primary text-primary p-2'>Contact Me</button>
            </div>
          </div>
          {/* Symbol Div */}
          <div className="relative h-fit">
            <div className="flex flex-row justify-center xs:justify-normal xs:absolute bottom-0 right-0 xs:flex-col items-center gap-5">
              <span className="w-1 h-4 xs:h-16 bg-primary rotate-90 xs:rotate-0"></span>
              <img src="linkedin-dark.svg" alt="" className="w-10 h-5" />
              <img src="github.svg" alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
