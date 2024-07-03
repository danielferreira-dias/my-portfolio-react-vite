import React, { useEffect } from 'react';
import '../index.css';

const About = () => {
    const skills = ["Communication", "Teamwork", "Autonomy", "Curious", "Determination", "Problem Solving"];


    return (
        <>
            <div className='h-2 border-t-2 border-custom-gold w-1/2 mb-10 mx-auto'></div>
            <h1 className='mb-20 text-4xl xl:text-6xl arimo text-center' data-aos="fade-up" data-aos-duration="1000">About Me</h1>
            <div className='h-full flex flex-row justify-between items-start'>
                <div className='h-full flex flex-col items-left w-full'>
                    <div className='flex flex-row arimo-sec'>
                        <div className='flex flex-col gap-y-2' data-aos="fade-up" data-aos-duration="1000">
                            <p className="text-xl lg:text-2xl xl:text-2xl leading-relaxed text-left">
                                As a game developer with 3 years of experience, I have increased my skills in creating engaging and innovative digital experiences.
                                My journey in game development has equipped me with a strong foundation in programming, problem-solving, and creative thinking.
                                However, I am now looking to transition into another area which is <span className="text-custom-gold arimo">Full Stack Web Development or Artificial Intelligence</span>.
                            </p>
                            <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-left">
                                Regarding <span className="text-custom-gold arimo"> Web Development </span>, I have already gained some experience in this area, working on various projects academically wise.
                                I am currently committed to expanding my knowledge in Full Stack Development, continuously learning and staying up-to-date with the latest trends and best practices.
                            </p>
                            <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-left">
                                I am an <span className="text-custom-gold arimo">effective communicator who values efficiency in teamwork</span>.
                                I always strive to thrive in collaborative environments by helping others and contributing to the team's success.
                                I also perform my best under pressure, maintaining a calm and focused approach to meet tight deadlines and challenging objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-scroll my-20 relative overflow-hidden ">
                <div className="absolute inset-0 z-10">
                    <div className="absolute -left-2 top-0 w-1/3 h-full bg-gradient-to-r from-custom-black to-transparent"></div>
                    <div className="absolute -right-1 top-0 w-1/3 rotate-180 h-full bg-gradient-to-l from-transparent to-custom-black"></div>
                </div>
                <div className="skill-scroll-inner arimo-sec h-16 flex items-center relative">
                    {skills.concat(skills).map((skill, index) => (
                        <div key={index} className="px-2 xs:px-8 text-2xl lg:text-3xl xl:text-4xl">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
            <div className='h-2 border-t-2 border-custom-gold w-1/2 mt-10 mx-auto'></div>
        </>
    );
};

export default About;