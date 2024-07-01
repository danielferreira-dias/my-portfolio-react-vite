import '../index.css'

const Skillbox = ({ skillName, iconSrc, isDarkMode }) => {
    return (
        <div className={`flex items-center relative rounded-lg w-32 h-24 mdlg:h-32 mdlg:w-48 lg:w-56 overflow-hidden shadow-md my-2 bg-gradient-to-r from-custom-black to-neutral-900 shadow-neutral-900 hover:shadow-custom-gold`} data-aos="zoom-in">
            <div className='flex items-center h-full ml-5'>
                <span className={`text-xl mdlg:text-2xl xl:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>{skillName}</span>
            </div>
            <img src={iconSrc} alt="" className='absolute left-50 top-0 ml-10 lg:ml-18 opacity-30 w-32 h-32 mdlg:w-40 mdlg:left-8' />
        </div>
    );
};

export default Skillbox