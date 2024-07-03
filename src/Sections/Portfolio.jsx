import React from 'react';
import PortfolioBox from '../Components/PortfolioBox';

const Portfolio = () => {


    const realLifePortfolios = [
        {
            name: "Barber Shop",
            description: "Description",
            link: "https://github.com/danielferreira-dias/rikbarber-react-project",
            portfolioImg: "Screenshot_1.png",
            skills: ["HTML", "Tailwind", "Typescript", "React"],
            stateCompleted: false,
            notLive: true,
            liveLink: null
        },

        // Add more real-life projects
    ];

    const isDark = false;

    return (
        <div className='flex flex-col w-full h-full'>
            <div className='h-2 border-t-2 border-custom-gold w-1/2 mb-10 mx-auto'></div>
            <h1 className='mb-20 text-4xl xl:text-6xl arimo text-center arimo'>Portfolio</h1>
            <div className='w-full h-full flex flex-col items-center mdlg:flex-row gap-5 mdlg:justify-center mdlg:items-start 2xl:justify-start arimo-sec'>
                {realLifePortfolios.map((portfolio, index) => (
                    <PortfolioBox
                        key={index}
                        workName={portfolio.name}
                        workDescription={portfolio.description}
                        workGitHub={portfolio.link}
                        portfolioImg={portfolio.portfolioImg}
                        skillsUsed={portfolio.skills}
                        stateType={portfolio.stateCompleted}
                        liveState={portfolio.liveState}
                        urlLive={portfolio.liveLink}
                        isDarkMode={isDark}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;