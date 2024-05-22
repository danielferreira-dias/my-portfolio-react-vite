import React from 'react'

function Navbar() {

    return (
        <div className="h-20  w-full flex justify-between items-center p-5 text-white">
            <div className="flex-grow">
                <img src="react.svg" alt="" className="w-10 h-auto" />
            </div>
            <div className="flex-grow flex justify-center">
                <a href="" className="mx-2">About</a>
                <a href="" className="mx-2">Portfolio</a>
                <a href="" className="mx-2">Contact</a>
            </div>
        </div>
    );
}

export default Navbar
