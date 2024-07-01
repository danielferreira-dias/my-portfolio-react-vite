import React, { useState, useEffect } from 'react';
import '../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = ({ onDataFromChild, scrollToSection, refs }) => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuItems = [
        { id: 1, label: 'About' },
        { id: 2, label: 'Skills' },
        { id: 3, label: 'Experience' },
        { id: 4, label: 'Portfolio' },
        { id: 5, label: 'Contact' },
    ];

    return (
        <>
            <div className='h-18 w-full py-2 px-8 sm:px-12 xl:px-40 2xl:px-64 sticky lg:relative bg-custom-black opacity-95 lg:opacity-100 top-0 z-50'>
                <div className="flex justify-between items-center z-10">
                    <div className='w-24 sm:w-28 mdlg:w-36 lg:w-44'>
                        <img src="LOGO.png" alt="" />
                    </div>
                    <div className='arimo hidden mdlg:flex flex-row text-2xl lg:text-3xl text-white gap-x-9'>
                        {menuItems.map(item => (
                            <div key={item.id} className="py-5 text-white  font-semibold hover:transform hover:scale-105 transition-transform">
                                <a href="" className=''>{item.label}</a>
                            </div>
                        ))}
                    </div>
                    <div className='mdlg:hidden'>
                        <svg onClick={toggleMenu} className="h-12 w-fit cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round">
                            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                                <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                            </path>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                            </rect>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                                <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                            </rect>
                        </svg>
                    </div>
                </div >
            </div>
            <div className={`fixed text-lg lg:text-xl xl:text-2xl mdlg:hidden top-16 xs:top-16 lg:top-20 xl:top-28 2xl:top-32 right-0 h-screen bg-neutral-800 text-white font-semibold shadow-lg p-2 py-0 z-40 w-2/3 xs:w-80 transition ease-in-out delay-150 duration-300 overflow-auto ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='py-3 arimo text-2xl'>
                    {menuItems.map(item => (
                        <li key={item.id} className="py-2 border-b-2  border-neutral-900 border-opacity-30 hover:transform hover:scale-105 transition-transform">
                            <a href="#" className="p-4 block">{item.label}</a>
                        </li>
                    ))}
                    <li className="py-2 hover:transform hover:scale-105 transition-transform">
                        <a href="#" className="p-4 block"></a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar
