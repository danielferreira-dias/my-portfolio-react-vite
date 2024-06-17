import '../index.css'

const SmallSkillBox = ({ skillName, iconSrc, isDarkMode }) => {
    return (
        <div className='flex w-9 h-9 rounded-lg'>
            <img src={iconSrc} alt={skillName} className=' w-fit h-fit' />
        </div>
    );
};

export default SmallSkillBox