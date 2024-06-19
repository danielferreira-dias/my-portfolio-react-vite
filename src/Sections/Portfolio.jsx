import React from 'react';
import PortfolioBox from '../Components/PortfolioBox';

const Portfolio = () => {
    const portfolios = [
        {
            name: "Barber Shop",
            portfolioImg: "github-dark.svg",
            skills: ["html.svg", "css.svg", "javascript.svg"]
        },
    ];

    const isDark = false;

    return (
        <div>
            <h1 className='text-2xl xl:text-4xl '>Portfolio</h1>
            <div className='mt-6 flex flex-col'>
                <div className='flex flex-col gap-y-4'>
                    <p>Welcome to my portfolio, showcasing a collection of websites I've built from the ground up.
                        Each project reflects my dedication to utilizing diverse technologies and my commitment to creating user-friendly interfaces.
                        Explore the innovative solutions and unique designs that demonstrate my passion for web development and my attention to detail.
                    </p>
                    <p>
                        Each project is built using different technologies to display a diverse showcase of what I'm capable to do and to further improve. You can hover each project to further see
                        what each project used.
                    </p>
                </div>
                <div className='mt-10 grid grid-cols-1 gap-4'>
                    {portfolios.map((portfolio, index) => (
                        <PortfolioBox
                            key={index}
                            portfolioImg={portfolio.portfolioImg}
                            skillsUsed={portfolio.skills} // Assuming you want to display skills as a comma-separated string
                            isDarkMode={isDark}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;