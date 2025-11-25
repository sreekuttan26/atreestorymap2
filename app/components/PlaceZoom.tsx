'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PlaceZoom = () => {
    const placeitems = [
        {
            id: "1",
            image: "/lake_sky.png",
            content: "Venkateshpura Lake is a relatively small lake in north Bangalore, extending a little over 10 acres. It is managed by the Greater Bengaluru Authority (GBA), Bengaluru’s civic body. Located in Sampigehalli in the Arkavathy Layout of Jakkur Ward, the lake is familiar to the locals as Sampigehalli Lake, its old name.",
        },
        {
            id: "2",
            image: "/place_2.png",
            content: "The estimated water spread is 8 acres. Venkateshpura Lake has an independent catchment area that leads to Hebbala Nagara Valley, one of the five valleys of Bangalore. Being at the apex of a series of lakes, its outlet joins Rachenahalli Lake on the downstream.",
        },
        {
            id: "3",
            image: "/place_3.png",
            content: "There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it and along its periphery. One of its rocky projections bears the nineteenth-century Sampigehalli Auxiliary Tower Station that stands to tell a story. Adjacent to the waterbody is the Jarabandemma Temple, built on a rock, which holds unique significance due to the distinct rituals observed there even today. The lake stands in the neighbourhood, amid residential buildings and schools.",
        },
    ];

    const zoomlist = [
        { x: 0, y: 0, scale: 2 },
        { x: -40, y: 0, scale: 2 },
        { x: -20, y: -10, scale: 2 },
        { x: 30, y: 40, scale: 2 },
        { x: 60, y: 50, scale: 3 },
        { x: 40, y: 70, scale: 4 },
        { x: 30, y: 40, scale: 2 },
        { x: 0, y: 0, scale: 1 },
    ];

    const imgRef = useRef<HTMLImageElement>(null);

    const zoomImg = (x: number, y: number, scale: number) => {
        if (!imgRef.current) return;

        gsap.to(imgRef.current, {
            scale,
            xPercent: -x,
            yPercent: -y,
            duration: 1,
            ease: 'power2.out',
        });
    };

    useEffect(() => {
        const items = document.querySelectorAll('.zoom-item');

        items.forEach((element, index) => {
            ScrollTrigger.create({
                trigger: element,
                start: 'top 50%',
                end: 'bottom 40%',
                onEnter: () => zoomImg(zoomlist[index].x, zoomlist[index].y, zoomlist[index].scale),
                onEnterBack: () => zoomImg(zoomlist[index].x, zoomlist[index].y, zoomlist[index].scale),
                onLeave: () => zoomImg(0, 0, 1),
                onLeaveBack: () => zoomImg(0, 0, 1),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="w-full relative overflow-visible">
            {/* Sticky Map Container */}
            <div className="sticky top-10 w-full h-screen overflow-hidden z-10">
                <img
                    ref={imgRef}
                    src="svgs/Place_map.svg"
                    className="w-full max-h-[40vh] md:max-h-full object-cover"
                    alt="map"
                />
            </div>

            {/* Scrollable Items */}
            <div className="flex flex-col relative z-20 gap-[100vh] p-4 md:pr-10">
                {placeitems.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full flex ${
                            item.id === "2"
                                ? "md:items-start md:justify-start"
                                : "md:items-end md:justify-end"
                        }`}
                    >
                        <div className="md:p-5 p-4 rounded-xl shadow-xl md:w-1/2 lg:w-1/3 zoom-item bg-white">
                            <img src={item.image} className="w-full h-[200px] object-cover rounded-md mb-4" />
                            <span className="text-sm leading-7">{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlaceZoom;
