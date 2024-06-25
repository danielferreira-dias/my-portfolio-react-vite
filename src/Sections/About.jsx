import '../index.css'

const About = () => {
    return (
        <div>
            <h1 className='text-2xl xl:text-4xl '>About</h1>
            <div className='flex flex-row mt-10'>
                <div className="flex mt-3 ">
                    <span className="block w-8 h-1 bg-primary mr-2"></span>
                </div>
                <div className='flex flex-col gap-y-2' data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-left" >
                        As a game developer with 3 years of experience, I have increased my skills in creating engaging and innovative digital experiences.
                        My journey in game development has equipped me with a strong foundation in programming, problem-solving, and creative thinking.
                        However, I am now looking to transition into the another area which is <span className="text-primary font-semibold">Full Stack Web Development or Artificial Intelligence</span>.
                    </p>
                    <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-left" >
                        Regarding <span className="text-primary font-semibold"> Web Development </span>, I have already gained some experience in this area, working on various projects that have allowed me to apply my skills.
                        I am currently committed to expanding my knowledge in Full Stack Development, continuously learning and staying up-to-date with the latest trends and best practices.
                    </p>
                    <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-left">
                        I am an <span className="text-primary font-semibold">effective communicator who values efficiency in teamwork</span>.
                        I always strive to thrive in collaborative environments by helping others and contributing to the team's success.
                        I also perform my best under pressure, maintaining a calm and focused approach to meet tight deadlines and challenging objectives.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About