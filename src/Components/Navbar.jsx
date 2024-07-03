import React, { useState, useRef, useEffect } from 'react';
import '../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = ({ onDataFromChild, scrollToSection, refs }) => {

    const [menuVisible, setMenuVisible] = useState(false);
    const svgRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuItems = [
        { id: 1, label: 'About', section: 'aboutRef' },
        { id: 2, label: 'Skills', section: 'skillsRef' },
        { id: 3, label: 'Experience', section: 'experienceRef' },
        { id: 4, label: 'Portfolio', section: 'portfolioRef' },
        { id: 5, label: 'Contact', section: 'contactRef' },
    ];

    const handleClick = (section) => {
        scrollToSection(refs[section]);
        toggleMenu();
        triggerSvgAnimation();
    };

    const triggerSvgAnimation = () => {
        if (svgRef.current) {
            const reverseAnimation = svgRef.current.querySelector('#reverse');
            const startAnimation = svgRef.current.querySelector('#start');
            if (menuVisible) {
                reverseAnimation.beginElement();
            } else {
                startAnimation.beginElement();
            }
        }
    };

    return (
        <>
            <div className='h-18 w-full py-2 px-8 sm:px-12 xl:px-40 2xl:px-52 sticky mdlg:relative bg-custom-black opacity-95 lg:opacity-100 top-0 z-40'>
                <div className="flex w-full justify-between items-center z-10">
                    <div className='w-24 sm:w-28 mdlg:w-36 lgxl:w-40'>
                        <img src="LOGO.png" alt="" className='w-24 sm:w-28 mdlg:w-36 lgxl:w-40' />
                    </div>
                    <div className='arimo hidden mdlg:flex flex-row text-2xl text-white gap-x-2 2xl:gap-x-4'>
                        {menuItems.map(item => (
                            <div key={item.id} onClick={() => handleClick(item.section)} className="py-5 text-white items-center flex flex-row font-semibold hover:transform hover:scale-105 transition-transform hover:text-custom-gold cursor-pointer"
                            >
                                <p className='text-lg lg:text-lg lgxl:text-xl 2xl:text-2xl mr-1 text-custom-gold font-bold'>&lt;</p>
                                <p className='text-2xl lg:text-2xl lgxl:text-3xl 2xl:text-4xl'>{item.label}</p>
                                <p className='text-lg lg:text-lg lgxl:text-xl 2xl:text-2xl ml-1 text-custom-gold font-bold'>&gt;</p>
                            </div>
                        ))}
                    </div>
                    <div className='mdlg:hidden'>
                        <svg ref={svgRef} onClick={toggleMenu} className="h-12 w-fit cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round">
                            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                                <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                            </path>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="0.001s" id="reverse" attributeName="width" begin="click" />
                            </rect>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                                <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                            </rect>
                        </svg>
                    </div>
                </div >
            </div>
            <div className={`fixed text-lg lg:text-xl xl:text-2xl mdlg:hidden top-16 xs:top-14 sm:top-14 md:top-14 lg:top-20 xl:top-28 2xl:top-32 right-0 h-screen bg-neutral-800 text-white font-semibold shadow-lg p-2 py-0 z-30 w-2/3 xs:w-80 transition ease-in-out delay-150 duration-300 overflow-auto ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='py-3 arimo text-2xl'>
                    {menuItems.map(item => (
                        <li
                            key={item.id}
                            onClick={() => handleClick(item.section)}
                            className="py-2 border-b-2 border-neutral-950 border-opacity-30 hover:transform hover:scale-105 transition-transform hover:text-custom-gold cursor-pointer"
                        >
                            <p className="p-4 block">{item.label}</p>
                        </li>
                    ))}
                    <li onClick={() => handleClick(item.section)} className="py-2  border-opacity-30 hover:transform hover:scale-105 transition-transform hover:text-custom-gold cursor-pointer">
                        <p className="p-4 block"></p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar
