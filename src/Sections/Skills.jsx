import '../index.css'
import Skillbox from '../Components/SkillBox';
import React, { useState, useEffect } from 'react';

const Skills = ({ isDarkMode }) => {

    const frontEndSkills = [
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "Javascript", iconSrc: "javascript.svg" },
        { skillName: "React", iconSrc: "react.svg" },
        { skillName: "Tailwind", iconSrc: "tailwind.svg" },
        { skillName: "Kotlin", iconSrc: "kotlin.svg" },
    ];

    const backEndSkills = [
        { skillName: "Node.JS", iconSrc: "node.svg" },
        { skillName: "PHP", iconSrc: "php.svg" },
        { skillName: "Python", iconSrc: "python.svg" },
    ];

    const dataBaseskills = [
        { skillName: "MySQL", iconSrc: "mysql.svg" },
        { skillName: "MongoDB", iconSrc: "mongodb.svg" },
        { skillName: "Firebase", iconSrc: "firebase.svg" },
    ];

    const toolskills = [
        { skillName: "Github", iconSrc: "github-dark.svg" },
        { skillName: "Fork", iconSrc: "fork.svg" },
        { skillName: "Postman", iconSrc: "postman.svg" },
        { skillName: "Slack", iconSrc: "slack.svg" },
        { skillName: "Jenkins", iconSrc: "jenkins.svg" },
    ];

    return (
        <div>
            <h1 className='text-2xl xl:text-4xl '>Skills</h1>
            <div className='h-fit mt-10 gap-12 xl:gap-20 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-2 justify-center items-start'>

                {/* Front-End Skills */}
                <div className='flex flex-col justify-center text-center w-full  items-center'>
                    <h1 className='text-xl'>Front End</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-2 xs:gap-x-12 xl:gap-x-24 xl:grid-cols-3 w-fit h-max justify-center xs:justify-center">
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
                    <h1 className='text-xl'>Back End</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-2 xs:gap-x-12 xl:gap-x-24 xl:grid-cols-3 w-fit h-max justify-center xs:justify-center">
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

                {/* Databases */}
                <div className='flex flex-col justify-center text-center w-full  items-center '>
                    <h1 className='text-xl'>Databases</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-2 xs:gap-x-12 xl:gap-x-24 xl:grid-cols-3 w-fit h-max justify-center xs:justify-center">
                        {dataBaseskills.map((skill, index) => (
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
                    <h1 className='text-xl'>Tools/Technologies</h1>
                    <div className="p-4 grid grid-cols-2 gap-x-5 xs:grid-cols-2 xs:gap-x-12 xl:gap-x-24 xl:grid-cols-3 w-fit h-max justify-center xs:justify-center">
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