import '../index.css'
import SmallSkillBox from './SmallSkillBox';

const PortfolioBox = ({ workName, workDescription, workGitHub, portfolioImg, skillsUsed, stateType, liveState, urlLive, isDarkMode }) => {
    return (
        <div className='w-full h-96 xs:w-5/6 sm:w-5/6 md:w-5/6 lg:w-4/6 sm:h-128 2xl:h-176 2xl:w-1/2 bg-custom-black-sec rounded-sm relative hover:scale-105 transition-transform duration-300 ease-in-out'>
            <div className='w-full h-full pt-4 px-4'>
                <img src={portfolioImg} alt={workName} className='object-cover w-full h-full grayscale hover:grayscale-0 rounded-sm transition-all duration-300 ease-in-out' />
            </div>
            <div className='flex h-24 bg-black opacity-90 absolute bottom-0 w-full'>
                <div className='flex flex-col w-full p-5 justify-evenly'>
                    <h3>{workName}</h3>
                    <div className='flex flex-row w-full flex-wrap justify-between items-center'>
                        <div className='flex flex-row gap-x-4 flex-1 text-neutral-500'>
                            {skillsUsed.map((skill, index) => (
                                <p key={index}>{skill}</p>
                            ))}
                        </div>
                        <a href={workGitHub} className='z-20'>
                            <img src="arrow_light.svg" alt="arrow icon" className='w-6 h-6' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PortfolioBox