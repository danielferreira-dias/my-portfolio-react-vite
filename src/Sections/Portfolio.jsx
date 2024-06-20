import React from 'react';
import PortfolioBox from '../Components/PortfolioBox';

const Portfolio = () => {

    const academicPortfolios = [
        {
            name: "Academic Project 1",
            description: "Description",
            link: "https://github.com/ProgramacaoWebGrupo1/M2?tab=readme-ov-file",
            portfolioImg: "car_dealership.png",
            skills: ["html.svg", "css.svg", "javascript.svg"],
            stateCompleted: true
        },
        // Add more academic projects
    ];

    const realLifePortfolios = [
        {
            name: "Barber Shop",
            description: "Description",
            link: "https://github.com/ProgramacaoWebGrupo1/M2?tab=readme-ov-file",
            portfolioImg: "barber_shop_layout.png",
            skills: ["html.svg", "css.svg", "javascript.svg"],
            stateCompleted: false
        },
        // Add more real-life projects
    ];

    const isDark = false;

    return (
        <div>
            <h1 className='text-2xl xl:text-4xl'>Portfolio</h1>
            <div className='mt-10'>
                <p>
                    Welcome to my portfolio, showcasing a collection of websites I've built from the ground up.
                    Each project reflects my dedication to utilizing diverse technologies and my commitment to creating user-friendly interfaces.
                    Explore the innovative solutions and unique designs that demonstrate my passion for web development and my attention to detail.
                </p>
                <p className='mt-4'>
                    My portfolio is divided into two sections: Academic Projects and Real-Life Projects.
                    Academic projects highlight my work during my educational journey, focusing on learning and experimentation.
                    Real-life projects demonstrate my professional experience and practical applications of my skills in real-world scenarios.
                </p>

                <div className='mt-10 flex flex-col items-center xs:items-start'>
                    <h2 className='text-xl xl:text-2xl'>Academic Projects</h2>
                    <div className='mt-4 grid grid-cols-1 gap-4'>
                        {academicPortfolios.map((portfolio, index) => (
                            <PortfolioBox
                                key={index}
                                workName={portfolio.name}
                                workDescription={portfolio.description}
                                workGitHub={portfolio.link}
                                portfolioImg={portfolio.portfolioImg}
                                skillsUsed={portfolio.skills}
                                stateType={portfolio.stateCompleted}
                                isDarkMode={isDark}
                            />
                        ))}
                    </div>
                </div>

                <div className='mt-10 flex flex-col items-center xs:items-start'>
                    <h2 className='text-xl xl:text-2xl'>Real-Life Projects</h2>
                    <div className='mt-4 grid grid-cols-1 gap-4'>
                        {realLifePortfolios.map((portfolio, index) => (
                            <PortfolioBox
                                key={index}
                                workName={portfolio.name}
                                workDescription={portfolio.description}
                                workGitHub={portfolio.link}
                                portfolioImg={portfolio.portfolioImg}
                                skillsUsed={portfolio.skills}
                                stateType={portfolio.stateCompleted}
                                isDarkMode={isDark}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;