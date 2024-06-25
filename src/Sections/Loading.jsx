// Loading.jsx
import React from 'react';
import '../Loader.css'

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;