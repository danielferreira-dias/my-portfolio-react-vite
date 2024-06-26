// Loading.jsx
import React, { useState, useEffect } from 'react';
import '../Loader.css'
import { useTrail, a } from '@react-spring/web'

const Trail = ({ open, children, onAnimationComplete }) => {
    const items = React.Children.toArray(children);
    const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 500, // Delay before each animation starts
        onRest: () => {
            if (!firstAnimationComplete) {
                onAnimationComplete();
                setFirstAnimationComplete(true);
            }
        },
    });

    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className="trailsText" style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    );
};

export default function Loading() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationComplete = () => {
        setOpen(false);
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Trail open={open} onAnimationComplete={handleAnimationComplete}>
                <span>Daniel</span>
                <span>Dias</span>
            </Trail>
        </div>
    )
};
