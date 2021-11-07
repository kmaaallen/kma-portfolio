import { useState, useLayoutEffect } from "react";

export const useCheckWindowWidth = () => {
    const [width, setWidth] = useState([0]);
    useLayoutEffect(() => {
        function updateWidth() {
            setWidth([window.innerWidth]);
        }
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return width;
}