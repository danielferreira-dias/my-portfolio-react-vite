import '../index.css'
import SmallSkillBox from '../Components/SmallSkillBox';

const Experience = ({ isDarkMode }) => {

    let firstExperience_light = [
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "Javascript", iconSrc: "javascript.svg" },
        { skillName: "React", iconSrc: "react.svg" },
        { skillName: "Kotlin", iconSrc: "kotlin.svg" },
        { skillName: "PHP", iconSrc: "php.svg" },
        { skillName: "Python", iconSrc: "python.svg" },
        { skillName: "MySQL", iconSrc: "mysql.svg" },
        { skillName: "MongoDB", iconSrc: "mongodb.svg" },
        { skillName: "Firebase", iconSrc: "firebase.svg" },
        { skillName: "Postman", iconSrc: "postman.svg" },
        { skillName: "NodeJS", iconSrc: "node.svg" },
        { skillName: "Docker", iconSrc: "docker.svg" },
    ];

    const firstExperience_dark = [
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "Javascript", iconSrc: "javascript-light.svg" },
        { skillName: "React", iconSrc: "react.svg" },
        { skillName: "Kotlin", iconSrc: "kotlin.svg" },
        { skillName: "PHP", iconSrc: "php-light.svg" },
        { skillName: "Python", iconSrc: "python.svg" },
        { skillName: "MySQL", iconSrc: "mysql-light.svg" },
        { skillName: "MongoDB", iconSrc: "mongodb.svg" },
        { skillName: "Firebase", iconSrc: "firebase.svg" },
        { skillName: "Postman", iconSrc: "postman.svg" },
        { skillName: "NodeJS", iconSrc: "node.svg" },
        { skillName: "Docker", iconSrc: "docker.svg" },
    ];

    const secondExperience_light = [
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "Javascript", iconSrc: "javascript.svg" },
    ];

    const secondExperience_dark = [
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "Javascript", iconSrc: "javascript-light.svg" },
    ];

    const thirdExperience_light = [
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "Javascript", iconSrc: "javascript.svg" },
        { skillName: "React", iconSrc: "react.svg" },
    ];

    const thirdExperience_dark = [
        { skillName: "HTML", iconSrc: "html.svg" },
        { skillName: "CSS", iconSrc: "css.svg" },
        { skillName: "Javascript", iconSrc: "javascript-light.svg" },
        { skillName: "React", iconSrc: "react.svg" },
    ];

    const firstExperience = isDarkMode ? firstExperience_dark : firstExperience_light;
    const secondExperience = isDarkMode ? secondExperience_dark : secondExperience_light;
    const thirdExperience = isDarkMode ? thirdExperience_dark : thirdExperience_light;


    return (
        <div className='mb-10'>
            <h1 className='px-5 sm:px-10 xl:px-40 2xl:px-64 text-2xl xl:text-4xl mb-12'>Experience</h1>
            <div className='px-5 sm:px-10 xl:px-40 2xl:px-64 md:hidden'>

                <div className='flex flex-row w-full gap-8 h-fit'>
                    <div className="relative w-fit mt-10 md:top-1/2 ">
                        <span className="absolute flex h-3 w-3 z-10 -top-1 -left-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-950"></span>
                        </span>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-950"></div>
                    </div>
                    <div className='justify-between  flex flex-col overflow-hidden p-2' data-aos="fade-up" data-aos-duration="1000">
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>Luduscristaltec</h1>
                            <p>06/09/2021 - Present</p>
                            <p className='text-sm italic'>Game/Front-End Developer</p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <p className='mt-2'> Primarily, I developed the game feed which is an integral component that offers users a view of previous gameplay.
                                Further more, I also developed an extensive "info" section, implementing a system to recieve JSON data and dynamically build elements using JS functions based on JSON values. This section serves as a guide to the many features of the
                                game to better understanding of the user.
                            </p>
                            <p>I also specialize in <span className="text-primary font-semibold"> developing casino slot games for both mobile and laptop platforms </span> using the
                                company proprietary language, which is rooted in C.
                            </p>
                        </div>
                        <div className='flex flex-col w-full h-fit '>
                            <p className='font-bold mt-2'>Technologies</p>
                            <div className='flex flex-row flex-wrap w-full h-9  p-0.5 gap-2 mt-2'>
                                {thirdExperience.map((skill, index) => (
                                    <SmallSkillBox
                                        key={index}
                                        skillName={skill.skillName}
                                        iconSrc={skill.iconSrc}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full gap-8 h-fit'>
                    <div className="relative w-fit ">
                        <span className="absolute flex h-3 w-3 z-10 -top-1 -left-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-950"></span>
                        </span>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-950"></div>
                    </div>
                    <div className=' justify-between  flex flex-col overflow-hidden p-2' data-aos="fade-up" data-aos-duration="1000">
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>ITSector</h1>
                            <p>06/2019 - 12/2019</p>
                            <p className='text-sm italic'>Front-End Developer</p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <p className='mt-2'> I took on the role of developing the company internal website, focusing on <span className="text-primary font-semibold">Front-End Development</span> to improve its
                                interactivity and visual appeal. My responsibilities involved redesigning some of its aspects and improving the user
                                interface to create a more engaging experience to ITSector. </p>
                            <p>This was the opportunity to further improve my knowledge going towards my second year of University.</p>
                        </div>                        <div className='flex flex-col w-full h-fit'>
                            <p className='font-bold mt-2'>Technologies</p>
                            <div className='flex flex-row w-full h-fit  p-0.5 gap-2 mt-2'>
                                {secondExperience.map((skill, index) => (
                                    <SmallSkillBox
                                        key={index}
                                        skillName={skill.skillName}
                                        iconSrc={skill.iconSrc}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full gap-8 h-fit'>
                    <div className="relative w-fit xs:h-96 sm:h-80">
                        <span className="absolute flex h-3 w-3 z-10 -top-1 -left-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-950"></span>
                        </span>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-950"></div>
                    </div>
                    <div className=' justify-between  flex flex-col overflow-hidden p-2' data-aos="fade-up" data-aos-duration="1000">
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>Universidade da Maia</h1>
                            <p>09/2018 - 06/2022</p>
                            <p className='text-sm italic'>Sudent</p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <p className='mt-2'> During my time at Unviersidade da Maia, I developed a strong foundation in both theoretical and practical aspects of computer science.
                                My coursework and projects provided me with extensive experience in <span className="text-primary font-semibold">Front-End and Back-End Web Development</span>,
                                as well as <span className="text-primary font-semibold">mobile application development.</span></p>
                            <p className='mt-2'> Key academic Coursework included Operating Systems, Discrete Mathematics, Object-Oriented Programming.  </p>
                        </div>                        <div className='flex flex-col w-full h-fit'>
                            <p className='font-bold mt-2'>Technologies</p>
                            <div className='flex flex-row flex-wrap w-fullh-fit p-0.5 gap-2 mt-2'>
                                {firstExperience.map((skill, index) => (
                                    <SmallSkillBox
                                        key={index}
                                        skillName={skill.skillName}
                                        iconSrc={skill.iconSrc}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-5 sm:px-10 xl:px-40 2xl:px-64 h-fit w-full hidden md:block'>

                <div className='flex flex-row justify-start gap-8'>
                    <div className='flex flex-row w-1/2 h-96 lg:h-80 '>
                        <div className=' justify-between  flex  flex-col p-2' data-aos="fade-up" data-aos-duration="1000">
                            <div className='flex flex-col'>
                                <h1 className='text-xl'>Luduscristaltec</h1>
                                <p>06/09/2021 - Present</p>
                                <p className='text-sm italic'>Game/Front-End Developer</p>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='mt-2'> Primarily, I developed the game feed which is an integral component that offers users a view of previous gameplay.
                                    Further more, I also developed an extensive "info" section, implementing a system to recieve JSON data and dynamically build elements using JS functions based on JSON values. This section serves as a guide to the many features of the
                                    game to better understanding of the user.
                                </p>
                                <p>I also specialize in <span className="text-primary font-semibold"> developing casino slot games for both mobile and laptop platforms </span> using the
                                    company proprietary language, which is rooted in C.</p>
                            </div>
                            <div className='flex flex-col w-full h-fit '>
                                <p className='font-bold mt-2'>Technologies</p>
                                <div className='grid grid-cols-8 2xl:grid-cols-9 w-full h-fit  p-0.5 gap-2 mt-2'>
                                    {thirdExperience.map((skill, index) => (
                                        <SmallSkillBox
                                            key={index}
                                            skillName={skill.skillName}
                                            iconSrc={skill.iconSrc}
                                        />
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="relative w-fit ">
                            <span className="absolute flex h-3 w-3 z-10 -top-1 -left-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-950"></span>
                            </span>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-950"></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-end gap-8'>
                    <div className='flex flex-row w-1/2  h-96 lg:h-80 '>
                        <div className="relative w-fit ">
                            <span className="absolute flex h-3 w-3 z-10 -top-1 -left-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-950"></span>
                            </span>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-950"></div>
                        </div>
                        <div className=' justify-between  flex flex-col p-2 ml-5' data-aos="fade-up" data-aos-duration="1000">
                            <div className='flex flex-col'>
                                <h1 className='text-xl'>ITSector</h1>
                                <p>06/2019 - 12/2019</p>
                                <p className='text-sm italic'>Front-End Developer</p>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='mt-2'> I took on the role of developing the company internal website, focusing on <span className="text-primary font-semibold">Front-End Development</span> to improve its
                                    interactivity and visual appeal. My responsibilities involved redesigning some of its aspects and improving the user
                                    interface to create a more engaging experience to ITSector. </p>
                                <p>This was the opportunity to further improve my knowledge going towards my second year of University.</p>
                            </div>
                            <div className='flex flex-col w-full '>
                                <p className='font-bold mt-2'>Technologies</p>
                                <div className='grid grid-cols-8 2xl:grid-cols-9 w-full h-9  p-0.5 gap-2 mt-2'>
                                    {secondExperience.map((skill, index) => (
                                        <SmallSkillBox
                                            key={index}
                                            skillName={skill.skillName}
                                            iconSrc={skill.iconSrc}
                                        />
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-start gap-8'>
                    <div className='flex flex-row w-1/2 h-fit '>
                        <div className=' justify-between flex  flex-col p-2' data-aos="fade-up" data-aos-duration="1000">
                            <div className='flex flex-col'>
                                <h1 className='text-xl'>Universidade da Maia</h1>
                                <p>09/2018 - 06/2022</p>
                                <p className='text-sm italic'>Sudent</p>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='mt-2'> During my time at Unviersidade da Maia, I developed a strong foundation in both theoretical and practical aspects of computer science.
                                    My coursework and projects provided me with extensive experience in <span className="text-primary font-semibold">Front-End and Back-End Web Development</span>,
                                    as well as <span className="text-primary font-semibold">mobile application development.</span></p>
                                <p className='mt-2'> Key academic Coursework included Operating Systems, Discrete Mathematics, Object-Oriented Programming.  </p>
                            </div>
                            <div className='flex flex-col  w-full '>
                                <p className='font-bold mt-2'>Technologies</p>
                                <div className='grid grid-cols-8 2xl:grid-cols-9  w-full  h-9  p-0.5 gap-2 mt-2'>
                                    {firstExperience.map((skill, index) => (
                                        <SmallSkillBox
                                            key={index}
                                            skillName={skill.skillName}
                                            iconSrc={skill.iconSrc}
                                        />
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="relative w-fit h-96 lg:h-80">
                            <span className="absolute flex h-3 w-3 z-10 -top-1 -left-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-950"></span>
                            </span>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-950"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience