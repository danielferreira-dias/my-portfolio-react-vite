import '../index.css'

const PortfolioBox = ({ portfolioImg, skillsUsed, isDarkMode }) => {
    return (
        <div className="group relative bg-white w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 2xl:w-64 2xl:h-64 overflow-hidden rounded-md">
            <img src={portfolioImg} alt="Portfolio" className="w-full h-full object-cover rounded-md" />
            <div className={`absolute w-full h-1/2 bg-gray-900 top-full transition-all duration-300 ease-in-out group-hover:top-1/2 ${isDarkMode ? 'bg-white' : 'bg-white'}`}>
                <div className="text-white text-center p-2">{skillsUsed}</div>
            </div>
        </div>
    );
};

export default PortfolioBox