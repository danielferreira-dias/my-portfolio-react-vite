import '../index.css'
import SmallSkillBox from './SmallSkillBox';

const PortfolioBox = ({ portfolioImg, skillsUsed, stateType, isDarkMode }) => {
    return (
        <div className={`group relative bg-white w-44 h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 2xl:w-72 2xl:h-72 overflow-hidden rounded-md`}>
            <img src={portfolioImg} alt="Portfolio" className="w-full h-full object-cover rounded-md" />
            <div className={`w-full h-full bg-gray-900 opacity-85 top-full transition-all duration-300 ease-in-out group-hover:top-0 ${stateType ? 'absolute' : 'hidden '} ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="text-white p-2 flex flex-col justify-between h-full gap-y-2">
                    <h1>Barber Shop</h1>
                    <p>This is a Website designed to be a Barber Shop</p>
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
                    <p className='font-bold'>Coming Soon...</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBox