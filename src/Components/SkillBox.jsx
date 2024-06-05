import '../index.css'

const Skillbox = ({ skillName, iconSrc, isDarkMode }) => {
    return (
        <div className={`flex items-center relative rounded-lg w-32 h-14 lg:w-40 2xl:w-60 overflow-hidden shadow-md my-2 ${isDarkMode ? 'bg-gradient-to-r from-black to-blue-900' : 'bg-gradient-to-r from-white to-gray-300'}`}>
            <div className='flex items-center h-full ml-5'>
                <span className={`text-lg lg:text-xl 2xl:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>{skillName}</span>
            </div>
            <img src={iconSrc} alt="" className='absolute left-50 top-0 ml-10 opacity-30 w-32 h-32' />
        </div>
    );
};

export default Skillbox