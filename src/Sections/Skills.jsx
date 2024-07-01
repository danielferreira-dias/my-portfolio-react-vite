import '../index.css'
import Skillbox from '../Components/SkillBox';
import React, { useState, useEffect } from 'react';

const Skills = ({ isDarkMode }) => {

    const frontEndSkills = [
        { skillName: "Javascript", iconSrc: "javascript.svg" },
        { skillName: "React", iconSrc: "react.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "Tailwind", iconSrc: "tailwind.svg" },
        { skillName: "Kotlin", iconSrc: "kotlin.svg" },
    ];

    const backEndSkills = [
        { skillName: "Node.JS", iconSrc: "node.svg" },
        { skillName: "PHP", iconSrc: "php.svg" },
        { skillName: "Python", iconSrc: "python.svg" },
        { skillName: "MySQL", iconSrc: "mysql.svg" },
        { skillName: "SQL", iconSrc: "sql.svg" },
        { skillName: "MongoDB", iconSrc: "mongodb.svg" },
        { skillName: "Firebase", iconSrc: "firebase.svg" },
    ];

    const toolskills = [
        { skillName: "Github", iconSrc: "github-dark.svg" },
        { skillName: "Fork", iconSrc: "fork.svg" },
        { skillName: "Postman", iconSrc: "postman.svg" },
        { skillName: "Jenkins", iconSrc: "jenkins.svg" },
        { skillName: "Docker", iconSrc: "docker.svg" },
    ];

    return (
        <div className=''>
            <div className='h-fit my-10 gap-12 xl:gap-20 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-2 justify-center items-start'>

                {/* Front-End Skills */}
                <div className='flex flex-col justify-center text-center w-full  items-center'>
                    <h1 className='text-3xl xl:text-4xl arimo text-center' >Client Side</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-3 sm:grid-cols-2 xs:gap-x-12 xl:gap-x-24 xl:grid-cols-2  w-fit h-max justify-center xs:justify-center">
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
                <div className='flex flex-col justify-center text-center w-full  items-center'>
                    <h1 className='text-3xl xl:text-4xl arimo text-center' >Server Side</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-3 sm:grid-cols-2 xs:gap-x-12 xl:gap-x-24 xl:grid-cols-2  w-fit h-max justify-center xs:justify-center">
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
                <div className='flex flex-col justify-center text-center w-full  items-center'>
                    <h1 className='text-3xl xl:text-4xl arimo text-center'>Development & Operations</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-3 sm:grid-cols-2 xs:gap-x-12 xl:gap-x-24 xl:grid-cols-2  w-fit h-max justify-center xs:justify-center">
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
    );
};

export default Skills