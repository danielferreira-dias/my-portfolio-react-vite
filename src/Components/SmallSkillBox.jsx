import '../index.css'

const SmallSkillBox = ({ skillName, iconSrc, isDarkMode }) => {
    return (
        <div className='flex w-9 h-9 rounded-lg'>
            <img src={iconSrc} alt={skillName} className=' w-9 h-9' />
        </div>
    );
};

export default SmallSkillBox