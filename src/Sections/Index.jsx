import React, { useEffect, useState } from 'react';


const messages = ["Hello", "Bonjour", "Ola", "Hola", "Hallo", "Ciao"];

const Index = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-card-color rounded-lg py-5 md:py-10 lg:py-12 xl:py-14 2xl:py-18 md:px-10 lg:px-12 xl:px-14 2xl:px-18 h-full'>
            <div className='w-full flex flex-col gap-y-5 md:flex-row items-center justify-evenly md:justify-between md:gap-x-5 h-full relative'>
                {/* <!-- Profile Image for Small Screens --> */}
                <div className='flex w-full items-center justify-center md:hidden '>
                    <div className='relative h-fit '>
                        <div className='w-60 h-60 xs:w-72 xs:h-72 border-4 absolute top-2 left-4'></div>
                        <img src="profile.jpg" alt="Profile" className='w-60 h-60 xs:w-72 xs:h-72 z-10 relative rounded-lg' data-aos="flip-right" data-aos-duration="1000" />
                    </div>
                </div>

                {/* <!-- Text Content --> */}
                <div className="flex flex-col w-fit h-fit text-white my-10">
                    <div className=" arimo text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl fade-in-out">
                        {messages[currentIndex]}
                    </div>
                    <div className='mt-4 flex flex-col'>
                        <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl arimo-sec'>I'm Daniel Dias</p>
                        <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl arimo-sec text-custom-gold'>Full Stack Developer</p>
                        <button className='w-40 xl:w-60 xl:h-22 text-lg sm:text-xl xl:text-2xl border-4 mt-10 rounded border-white text-white p-2 animate-bounce arimo-sec' onClick={() => scrollToSection(contactRef)}>Contact Me</button>
                    </div>
                </div>

                {/* <!-- Profile Image for Medium and Larger Screens --> */}
                <div className='md:flex md:items-center  md:justify-center hidden'>
                    <div className='relative h-fit '>
                        <div className='w-60 h-60 xs:w-72 xs:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96  border-4 absolute top-2 left-4'></div>
                        <img src="profile.jpg" alt="Profile" className='w-60 h-60 xs:w-72 xs:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 z-10 relative' data-aos="flip-right" data-aos-duration="1000" />
                    </div>
                </div>


                {/* <!-- Social Icons --> */}
                <div className="relative w-fit h-fit md:hidden">
                    <div className="flex flex-row justify-center md:justify-end md:absolute bottom-0 right-0 md:flex-col items-center gap-2">
                        <span className="w-1 h-8 md:h-16 bg-custom-gold rotate-90 md:rotate-0"></span>
                        <img src="linkedin-light.svg" alt="LinkedIn" className="w-10 h-5 ml-5 md:ml-0" />
                        <img src="github-light.svg" alt="GitHub" className="w-10 h-10" />
                    </div>
                </div>
            </div>

            {/* <!-- Social Icons --> */}
            <div className="hidden md:relative h-24 bottom-10 md:bottom-0 -right-10">
                <div className="flex flex-row justify-center md:justify-end md:absolute bottom-0 right-0 md:flex-col items-center gap-2">
                    <span className="w-1 h-8 md:h-16 bg-custom-gold rotate-90 md:rotate-0"></span>
                    <img src="linkedin-light.svg" alt="LinkedIn" className="w-10 h-5 ml-5 md:ml-0" />
                    <img src="github-light.svg" alt="GitHub" className="w-10 h-10" />
                </div>
            </div>

        </div>
    )
}

export default Index
