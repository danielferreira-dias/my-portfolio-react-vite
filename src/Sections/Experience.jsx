import '../index.css'
import SmallSkillBox from '../Components/SmallSkillBox';

const Experience = ({ isDarkMode }) => {

    return (
        <div className=''>
            <h1 className='mb-20 text-4xl xl:text-6xl arimo text-center'>Experience</h1>
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
                            <h1 className='text-2xl'>Luduscristaltec</h1>
                            <p>06/09/2021 - Present</p>
                            <p className='text-sm italic'>Game/Front-End Developer</p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <p className='mt-2'> Primarily, I developed the game feed which is an integral component that offers users a view of previous gameplay.
                                Further more, I also developed an extensive "info" section, implementing a system to recieve JSON data and dynamically build elements using JS functions based on JSON values. This section serves as a guide to the many features of the
                                game to better understanding of the user.
                            </p>
                            <p>I also specialize in <span className="text-custom-gold font-semibold"> developing casino slot games for both mobile and laptop platforms </span> using the
                                company proprietary language, which is rooted in C.
                            </p>
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
                            <p className='mt-2'> I took on the role of developing the company internal website, focusing on <span className="text-custom-gold font-semibold">Front-End Development</span> to improve its
                                interactivity and visual appeal. My responsibilities involved redesigning some of its aspects and improving the user
                                interface to create a more engaging experience to ITSector. </p>
                            <p>This was the opportunity to further improve my knowledge going towards my second year of University.</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className='px-5 sm:px-10 xl:px-40 2xl:px-52 h-fit w-full hidden md:block'>

                <div className='flex flex-row justify-start gap-8'>
                    <div className='flex flex-row w-1/2 h-fit '>
                        <div className=' justify-between  flex  flex-col p-2' data-aos="fade-up" data-aos-duration="1000">
                            <div className='flex flex-col'>
                                <h1 className='text-4xl'>Luduscristaltec</h1>
                                <p className='text-lg'>06/09/2021 - Present</p>
                                <p className='text-lg'>Game/Front-End Developer</p>
                            </div>
                            <div className="text-xl lg:text-2xl xl:text-2xl arimo-sec ">
                                <p className='mt-2'> Primarily, I developed the game feed which is an integral component that offers users a view of previous gameplay.
                                    Further more, I also developed an extensive "info" section, implementing a system to recieve JSON data and dynamically build elements using JS functions based on JSON values. This section serves as a guide to the many features of the
                                    game to better understanding of the user.
                                </p>
                                <p>I also specialize in <span className="text-custom-gold font-semibold"> developing casino slot games for both mobile and laptop platforms </span> using the
                                    company proprietary language, which is rooted in C.</p>
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
                    <div className='flex flex-row w-1/2  h-fit '>
                        <div className="relative w-fit ">
                            <span className="absolute flex h-3 w-3 z-10 -top-1 -left-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-950"></span>
                            </span>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-blue-950"></div>
                        </div>
                        <div className=' justify-between  flex flex-col p-2 ml-5' data-aos="fade-up" data-aos-duration="1000">
                            <div className='flex flex-col'>
                                <h1 className='text-4xl'>ITSector</h1>
                                <p className='text-lg'>06/2019 - 12/2019</p>
                                <p className='text-lg' >Front-End Developer</p>
                            </div>
                            <div className='flex flex-col gap-y-2 text-xl lg:text-2xl xl:text-2xl arimo-sec'>
                                <p className='mt-2'> I took on the role of developing the company internal website, focusing on <span className="text-custom-gold font-semibold">Front-End Development</span> to improve its
                                    interactivity and visual appeal. My responsibilities involved redesigning some of its aspects and improving the user
                                    interface to create a more engaging experience to ITSector. </p>
                                <p>This was the opportunity to further improve my knowledge going towards my second year of University.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience