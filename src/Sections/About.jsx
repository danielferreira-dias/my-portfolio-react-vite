import '../index.css'

const About = () => {
    return (
        <div>
            <h1 className='text-2xl xl:text-4xl '>About</h1>
            <div className='flex flex-row mt-4'>
                <div className="flex mt-3 ">
                    <span className="block w-8 h-1 bg-primary mr-2"></span>
                </div>
                <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed  text-left">
                    I have acquired and sharpened my ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum vn organization. I am <span className="text-primary font-semibold">trustworthy, creative, and an effective communicator</span>. I fondly anticipate working in a challenging yet rewarding organization to attain its visions for personal growth.
                </p>
            </div>
        </div>
    );
};

export default About