import '../index.css'
import SmallSkillBox from './SmallSkillBox';

const PortfolioBox = ({ workName, workDescription, workGitHub, portfolioImg, skillsUsed, stateType, isDarkMode }) => {
    return (
        <div className={`group relative bg-white w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 2xl:w-80 2xl:h-80 overflow-hidden rounded-md`}>
            <img src={portfolioImg} alt="Portfolio" className="w-full h-full object-cover rounded-md" />
            <div className={`w-full h-full bg-gray-900 opacity-85 top-full transition-all duration-300 ease-in-out group-hover:top-0 ${stateType ? 'absolute' : 'hidden '} ${isDarkMode ? 'bg-gray-800' : 'bg-gray-800'}`}>
                <div className="text-white p-2 flex flex-col justify-between h-full gap-y-2">
                    <h1>{workName}</h1>
                    <div className='flex flex-col gap-y-2'>
                        <p>{workDescription}</p>
                        <p>You can check out the github repository!</p>
                        <a href={workGitHub}>Repository</a>
                    </div>
                    <div className='flex flex-row'>
                        {skillsUsed.map((skill, index) => (
                            <SmallSkillBox
                                key={index}
                                skillName={skill}
                                iconSrc={skill}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={`w-full h-full bg-gray-900 top-0 opacity-70 ${stateType ? 'hidden' : 'absolute '}`}>
                <div className='w-full h-full text-center flex justify-center items-center'>
                    <p className='font-bold text-white'>Coming Soon...</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBox