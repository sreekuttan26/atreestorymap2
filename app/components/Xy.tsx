'use client'
import React, { useEffect } from 'react'

const Xy = () => {

    useEffect(() => {
        const img = document.getElementById('myImage');

        if (!img) return;

        const handleClick = (e: MouseEvent) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect();

            // Coordinates relative to the image
            const x = e.clientX - rect.left; // distance from left edge
            const y = e.clientY - rect.top;  // distance from top edge

            // Convert to percentage
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            console.log('x:', x, 'y:', y, 'xPercent:', xPercent, 'yPercent:', yPercent);
            alert(`x: ${x}, y: ${y}, xPercent: ${xPercent.toFixed(2)}, yPercent: ${yPercent.toFixed(2)}`);
        };

        img.addEventListener('click', handleClick);

        // Cleanup listener on unmount
        return () => {
            img.removeEventListener('click', handleClick);
        };
    }, []);



return (
    <div>

    </div>
)
}

export default Xy
