import { useState, useEffect } from 'react';

type windowHook = {
    width: number,
    height: number,
}

function getWindowDimensions() {
    const { innerHeight: height, innerWidth: width } = window;
    return {
        width,
        height
    }
}

export default function useWindowDimensions(): windowHook {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    return windowDimensions;
}