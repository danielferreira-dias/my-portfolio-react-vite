import '../index.css'
import Skillbox from '../Components/SkillBox';
import React, { useState, useRef, useEffect } from 'react';

const Skills = ({ isDarkMode }) => {

    const frontEndSkills = [
        { skillName: "Javascript", iconSrc: "javascript-light.svg" },
        { skillName: "React", iconSrc: "react.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "Tailwind", iconSrc: "tailwind.svg" },
        { skillName: "Kotlin", iconSrc: "kotlin.svg" },
    ];

    const backEndSkills = [
        { skillName: "Node.JS", iconSrc: "node.svg" },
        { skillName: "PHP", iconSrc: "php-light.svg" },
        { skillName: "Python", iconSrc: "python.svg" },
        { skillName: "MySQL", iconSrc: "mysql-light.svg" },
        { skillName: "SQL", iconSrc: "sql.svg" },
        { skillName: "MongoDB", iconSrc: "mongodb.svg" },
        { skillName: "Firebase", iconSrc: "firebase.svg" },
    ];

    const toolskills = [
        { skillName: "Github", iconSrc: "github-light.svg" },
        { skillName: "Fork", iconSrc: "fork.svg" },
        { skillName: "Postman", iconSrc: "postman.svg" },
        { skillName: "Jenkins", iconSrc: "jenkins.svg" },
        { skillName: "Docker", iconSrc: "docker.svg" },
    ];



    return (
        <>
            <h1 className='mt-10 mb-10 text-4xl xl:text-6xl arimo text-center'>Skills</h1>
            <div className='sm:flex sm:flex-col mb-10 hidden'>
                <div className='flex flex-col my-10 gap-y-10 sm:gap-y-8 h-fit px-2 2xs:px-0'>

                    <div className='flex flex-col sm:flex-row gap-x-4 gap-y-2 h-auto items-stretch'>
                        <div className="relative w-full 2xs:w-3/5 h-44 sm:w-3/5  lg:w-3/4 sm:h-auto bg-custom-black rounded-xl flex items-center justify-center overflow-hidden px-2">
                            <div className="w-full whitespace-nowrap my-20 relative overflow-x-hidden">
                                <div className="arimo-sec h-full gap-y-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6">
                                    {frontEndSkills.map((skill, index) => (
                                        <Skillbox
                                            key={index}
                                            skillName={skill.skillName}
                                            iconSrc={skill.iconSrc}
                                            isDarkMode={isDarkMode}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className='w-full 2xs:flex-1 h-44 sm:flex-1 flex justify-center items-center text-center sm:h-auto bg-custom-black rounded-xl'>
                            <p className='text-2xl lg:text-3xl'>Server Side</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-x-4 gap-y-2 h-auto items-stretch'>
                        <div className='w-full 2xs:flex-1 h-44 sm:flex-1 flex justify-center items-center text-center sm:h-auto bg-custom-black rounded-xl'>
                            <p className='text-2xl lg:text-3xl'>Server Side</p>
                        </div>
                        <div className="relative w-full 2xs:w-3/5 h-44 sm:w-3/5  lg:w-3/4 sm:h-auto bg-custom-black rounded-xl flex items-center justify-center overflow-hidden px-2">
                            <div className="w-full whitespace-nowrap my-20 relative overflow-x-hidden">
                                <div className="arimo-sec h-full gap-y-2 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7">
                                    {backEndSkills.map((skill, index) => (
                                        <Skillbox
                                            key={index}
                                            skillName={skill.skillName}
                                            iconSrc={skill.iconSrc}
                                            isDarkMode={isDarkMode}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col flex-wrap h-fit items-center sm:flex-row gap-x-4 gap-y-2'>
                        <div className='w-full 2xs:w-3/5 h-44 sm:flex-1 justify-center items-center flex text-center sm:h-60 bg-custom-black rounded-xl'>
                            <p className='text-2xl lg:text-3xl'>Technologies</p>
                        </div>
                        <div className='w-full 2xs:w-3/5 h-44 sm:flex-1 justify-center items-center flex text-center sm:h-60 bg-custom-black rounded-xl'>
                            <p className='text-2xl lg:text-3xl'>Development</p>
                        </div>
                        <div className="relative w-full 2xs:w-3/5 h-fit sm:w-full lg:w-1/2 sm:h-60 bg-custom-black rounded-xl flex items-center justify-center overflow-hidden px-5 ">
                            <div className="w-full my-20 relative overflow-x-hidden ">
                                <div className="arimo-sec h-full gap-y-2 grid grid-cols-5 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
                                    {toolskills.map((skill, index) => (
                                        <Skillbox
                                            key={index}
                                            skillName={skill.skillName}
                                            iconSrc={skill.iconSrc}
                                            isDarkMode={isDarkMode}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

            <div className='h-fit w-full my-10 gap-12 sm:hidden items-center justify-center flex flex-col'>

                {/* Front-End Skills */}
                <div className='flex flex-col justify-center text-center w-5/6 items-center bg-custom-black rounded-xl py-5 gap-y-4'>
                    <h1 className='text-2xl xl:text-3xl arimo text-center' >Client Side</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-3 sm:grid-cols-2 xs:gap-x-12 gap-y-2  w-fit h-max justify-center xs:justify-center">
                        {frontEndSkills.map((skill, index) => (
                            <Skillbox
                                key={index}
                                skillName={skill.skillName}
                                iconSrc={skill.iconSrc}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                    </div>
                </div>

                {/* Back-End Skills */}
                <div className='flex flex-col justify-center text-center w-5/6  items-center bg-custom-black rounded-xl py-5 gap-y-4'>
                    <h1 className='text-2xl xl:text-3xl arimo text-center' >Server Side</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-3 sm:grid-cols-2 xs:gap-x-12 gap-y-2  w-fit h-max justify-center xs:justify-center">
                        {backEndSkills.map((skill, index) => (
                            <Skillbox
                                key={index}
                                skillName={skill.skillName}
                                iconSrc={skill.iconSrc}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className='flex flex-col justify-center text-center w-5/6  items-center bg-custom-black rounded-xl py-5 gap-y-4'>
                    <h1 className='text-2xl xl:text-3xl arimo text-center px-2'>Development & Operations</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-3 sm:grid-cols-2 xs:gap-x-12 gap-y-2  w-fit h-max justify-center xs:justify-center">
                        {toolskills.map((skill, index) => (
                            <Skillbox
                                key={index}
                                skillName={skill.skillName}
                                iconSrc={skill.iconSrc}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills