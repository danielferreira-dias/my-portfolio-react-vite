import '../index.css'

const Skillbox = ({ skillName, iconSrc, isDarkMode }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-y-2 mx-4' data-aos="zoom-in">
            <img src={iconSrc} alt="" className='w-14 h-14 xl:w-18 xl:h-18' />
            <div className='flex items-center h-full'>
                <span className={`text-xl mdlg:text-2xl xl:text-2xl text-neutral-600`}>{skillName}</span>
            </div>
        </div>
    );
};

export default Skillbox