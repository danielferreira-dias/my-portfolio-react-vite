import '../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ isDarkMode }) => {
    return (
        <div className='flex flex-col w-full h-fit justify-center items-center gap-y-6 text-xs sm:text-sm md:text-lg py-5'>
            <div className='h-fit flex flex-col text-center items-center'>
                <div className='border-t-2 border-t-custom-gold w-1/2'></div>
                <div className='flex flex-col gap-y-5 px-5 xs:px-20 lg:px-0 lg:w-1/2 items-center'>
                    <h1 className='text-2xl xl:text-4xl my-4'>Get in Touch</h1>
                    <p>I'm eager to join a collaborative team where I can contribute my skills and learn from others.
                        If you have an exciting project, let's discuss how I can be a valuable asset.
                        I'm actively seeking a new opportunity to apply my skills and continue growing!</p>
                    <button className='w-40 text-sm sm:text-xl sm:w-60 border-4 mt-10 rounded border-custom-gold text-custom-gold p-2 animate-bounce'>Contact Me Below</button>
                    <div className={`flex flex-row justify-center gap-x-8 items-center w-60 h-28 rounded-md border-custom-gold border-2 mt-8 bg-custom-black`}>
                        <a href="https://www.linkedin.com/in/daniel-dias-ismai/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={isDarkMode ? "linkedin-light.svg" : "linkedin-dark.svg"} alt="LinkedIn" className="w-4 h-4" />
                        </a>
                        <a href="https://github.com/danielferreira-dias" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={isDarkMode ? "github-light.svg" : "github-dark.svg"} alt="GitHub" className="w-6 h-6" />
                        </a>
                        <a href="mailto:danieldias.it98@gmail.com" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={isDarkMode ? "email-light.svg" : "email-dark.svg"} alt="Email" className="w-5 h-5" />
                        </a>
                    </div>
                    <p className='w-fit my-10'>Page fully developed by Daniel Dias using React, Tailwind and Data-AOS. Deployed with Vercel. </p>
                </div>
            </div>
        </div>
    );
};

export default Contact