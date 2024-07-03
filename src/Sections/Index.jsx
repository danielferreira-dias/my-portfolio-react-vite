import React, { useEffect, useState } from 'react';


const messages = ["Hello", "Bonjour", "Olá", "Hola", "Ciao"];

const Index = ({ scrollToSection, refs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = (section) => {
        scrollToSection(refs[section]);
    };

    return (
        <>
            <div className='bg-card-color rounded-lg py-5 sm:py-10 lg:py-12 xl:py-14 2xl:py-18 sm:px-10 lg:px-12 xl:px-14 2xl:px-18 h-full'>
                <div className='w-full flex flex-col gap-y-5 sm:flex-row items-center justify-evenly sm:justify-between md:gap-x-5 h-full relative'>
                    {/* <!-- Profile Image for Small Screens --> */}
                    <div className='flex w-full items-center justify-center sm:hidden h-full'>
                        <div className='relative w-60 h-60 xs:w-72 xs:h-72 sm:w-40 sm:h-40'>
                            <div className='w-60 h-60 xs:w-72 xs:h-72 sm:w-40 sm:h-40 border-4 absolute top-2 left-4'></div>
                            <img src="profile.jpg" alt="Profile" className='w-60 h-60 xs:w-72 xs:h-72 sm:w-40 sm:h-40 z-10 relative rounded-lg' data-aos="flip-right" data-aos-duration="1000" />
                        </div>
                    </div>

                    {/* <!-- Text Content --> */}
                    <div className="flex flex-col w-fit h-fit text-white my-10">
                        <div className=" arimo text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl fade-in-out">
                            {messages[currentIndex]}
                        </div>
                        <div className='mt-4 flex flex-col ' data-aos="fade-in" data-aos-duration="1000">
                            <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl arimo-sec'>I'm Daniel Dias</p>
                            <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl arimo-sec text-custom-gold'>Full Stack Developer</p>
                            <button className='w-40 xl:w-60 xl:h-22 text-lg sm:text-xl xl:text-2xl border-4 mt-10 rounded border-white text-white p-2 animate-bounce arimo-sec' onClick={() => handleClick("contactRef")}>Contact Me</button>
                        </div>
                    </div>

                    {/* <!-- Profile Image for Medium and Larger Screens --> */}
                    <div className='sm:flex sm:items-center  sm:justify-center hidden'>
                        <div className='relative h-fit '>
                            <div className='w-60 h-60 xs:w-72 xs:h-72 sm:w-60 sm:h-60 md:w-80 md:h-80 xl:w-96 xl:h-96  border-4 absolute top-2 left-4'></div>
                            <img src="profile.jpg" alt="Profile" className='w-60 h-60 xs:w-72 xs:h-72 sm:w-60 sm:h-60 md:w-80 md:h-80 xl:w-96 xl:h-96 z-10 relative' data-aos="flip-right" data-aos-duration="1000" />
                        </div>
                    </div>


                    {/* <!-- Social Icons --> */}
                    <div className="relative w-fit h-fit sm:hidden">
                        <div className="flex flex-row justify-center md:justify-end md:absolute bottom-0 right-0 md:flex-col items-center gap-2">
                            <span className="w-1 h-8 md:h-16 bg-custom-gold rotate-90 md:rotate-0"></span>
                            <img src="linkedin-light.svg" alt="LinkedIn" className="w-10 h-5 ml-5 md:ml-0" />
                            <img src="github-light.svg" alt="GitHub" className="w-10 h-10" />
                        </div>
                    </div>
                </div>

                {/* <!-- Social Icons --> */}
                <div className="hidden sm:relative h-24 bottom-10 md:bottom-0 -right-10">
                    <div className="flex flex-row justify-center md:justify-end md:absolute bottom-0 right-0 md:flex-col items-center gap-2">
                        <span className="w-1 h-8 md:h-16 bg-custom-gold rotate-90 md:rotate-0"></span>
                        <img src="linkedin-light.svg" alt="LinkedIn" className="w-10 h-5 ml-5 md:ml-0" />
                        <img src="github-light.svg" alt="GitHub" className="w-10 h-10" />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='flex flex-col items-center xs:flex-row xs:flex-wrap mdlg:flex-nowrap xs:justify-center gap-y-5 gap-x-5 text-white'>
                    <a href="https://www.linkedin.com/in/daniel-dias-ismai/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="1000" className='bg-card-color w-4/5 xs:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/4 flex p-5 text-center items-center justify-evenly rounded-lg'>
                        <img src="linkedin-light.svg" alt="" className='w-6 2xl:w-8 mb-2' />
                        <p className='arimo-sec text-2xl 2xl:text-4xl'>Linkedin</p>
                    </a>
                    <a href="mailto:danieldias.it98@gmail.com" data-aos="zoom-in" data-aos-duration="1000" className='bg-card-color w-4/5 xs:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/4 flex p-5 text-center items-center justify-evenly rounded-lg'>
                        <img src="email-light.svg" alt="" className='w-6 2xl:w-8' />
                        <p className='arimo-sec text-2xl 2xl:text-4xl'>Email</p>
                    </a>
                    <a href="https://github.com/danielferreira-dias" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="1000" className='bg-card-color w-4/5 xs:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/4 flex p-5 text-center items-center justify-evenly rounded-lg'>
                        <img src="github-light.svg" alt="" className='w-7 2xl:w-9' />
                        <p className='arimo-sec text-2xl 2xl:text-4xl'>Github</p>
                    </a>
                    <a href="resume.pdf" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="1000" className='bg-custom-gold w-4/5 xs:w-2/5 lg:w-1/3 xl:w-1/3 2xl:w-1/4 flex p-5 text-center items-center justify-evenly rounded-lg opacity-90 border-white border-2'>
                        <p className='arimo-sec text-2xl 2xl:text-4xl'>Resume</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Index
