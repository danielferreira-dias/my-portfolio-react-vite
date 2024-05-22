import './App.css'
import Navbar from './Components/Navbar'
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';

function App() {



  return (
    <div className="flex h-screen px-5 sm:px-10 xl:px-40 2xl:px-60 py-5">
      <Navbar></Navbar>
    </div>
  );
}

export default App
