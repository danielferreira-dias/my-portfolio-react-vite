import '../index.css'

const Contact = () => {
    return (
        <div className='flex flex-col w-full h-fit justify-center items-center gap-y-6 text-xs sm:text-sm md:text-lg py-5'>
            <div className='flex flex-row justify-center h-fit items-center gap-x-4'>
                <p className='w-fit'>Page fully developed by myself using React.</p>
                <img src="react.svg" alt="React" className="w-6 h-auto 2xl:w-10" />
            </div>
            <div className='flex flex-col w-max gap-y-1'>
                <div className='flex flex-row justify-center h-fit items-center gap-x-2'>
                    <img src="email-dark.svg" alt="Email" className="w-5 h-auto 2xl:w-10" />
                    <p className='w-fit'>daniel.dias@example.com</p>
                </div>
                <div className='flex flex-row justify-center h-fit items-center gap-x-4'>
                    <img src="linkedin-light.svg" alt="LinkedIn" className="w-4 h-auto 2xl:w-8" />
                    <a href="https://www.linkedin.com/in/daniel-dias-ismai/" className='w-fit text-blue-600'>Linkedin Link</a>
                </div>

            </div>
        </div>
    );
};

export default Contact