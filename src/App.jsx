import './App.css'
import Navbar from './Components/Navbar'
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';

function App() {



  return (
    <div className="flex flex-col h-screen px-5 sm:px-10 xl:px-40 2xl:px-80 py-5">
      <Navbar></Navbar>
      <section className="w-full h-svh my-5 ">
        <div className="w-full h-full bg-white">
          <div className='flex items-start xs:items-center justify-center xs:justify-normal h-fit xs:h-full mx-5 lg:mx-10'>
            <div className='flex flex-col gap-y-4 my-10 xs:my-0'>
              <p className="text-xl sm:text-2xl lg:text-5xl">I'm <span className="text-2xl sm:text-3xl lg:text-6xl text-primary">Daniel Dias</span></p>
              <p className="text-lg sm:text-xl lg:text-3xl">Full Stack Web Developer</p>
              <button className='w-40 text-sm sm:text-xl border-4 rounded border-primary text-primary p-2'>Contact Me</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
