import '../index.css'
import SmallSkillBox from './SmallSkillBox';

const PortfolioBox = ({ portfolioImg, skillsUsed, isDarkMode }) => {
    return (
        <div className="group relative bg-white w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 2xl:w-64 2xl:h-64 overflow-hidden rounded-md">
            <img src={portfolioImg} alt="Portfolio" className="w-full h-full object-cover rounded-md" />
            <div className={`absolute w-full h-full bg-gray-900 opacity-85 top-full transition-all duration-300 ease-in-out group-hover:top-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
        </div>
    );
};

export default PortfolioBox