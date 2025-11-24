'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Bodytext from './Bodytext';

gsap.registerPlugin(ScrollTrigger);

const PlaceZoom = () => {

     const placeitems = [
        {
            id: "1",
            image: "/lake_sky.png",
            content: (
                <span>
                    Venkateshpura Lake is a relatively small lake in north Bangalore, extending a little over 10 acres. It is managed by the Greater Bengaluru Authority (GBA), Bengaluru’s civic body. Located in Sampigehalli in the Arkavathy Layout of Jakkur Ward, the lake is familiar to the locals as Sampigehalli Lake, its old name. 
                </span>
            ),
        },
        {
            id: "2",
            image: "/place_2.png",
            content: (
                <span>
                    The estimated water spread is 8 acres. Venkateshpura Lake has an independent catchment area that leads to Hebbala Nagara Valley, one of the five valleys of Bangalore. Being at the apex of a series of lakes, its outlet joins Rachenahalli Lake on the downstream.

                </span>
            ),
        },
        {
            id: "3",
            image: "/place_3.png",
            content: (
                <span>
                   There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it and along its periphery. One of its rocky projections bears the nineteenth-century Sampigehalli Auxiliary Tower Station that stands to tell a story. Adjacent to the waterbody is the Jarabandemma Temple, built on a rock, which holds unique significance due to the distinct rituals observed there even today. The lake stands in the neighbourhood, amid residential buildings and schools.
                </span>
            ),
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
            scale: scale,
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
                onEnter: () => {
                    zoomImg(zoomlist[index].x, zoomlist[index].y, zoomlist[index].scale);
                },
                onEnterBack: () => {
                    zoomImg(zoomlist[index].x, zoomlist[index].y, zoomlist[index].scale);
                },
                onLeave: () => {
                    zoomImg(0, 0, 1);
                },
                onLeaveBack: () => {
                    zoomImg(0, 0, 1);
                }

            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="w-full h-full relative">

            {/* Map image */}
            <img
                ref={imgRef}
                src="svgs/Place_map.svg"
                className="w-full h-[30vh] top-10 md:h-screen sticky md:top-0 object-cover z-0"
                alt="map"
            />

            {/* Scrollable items */}
            <div className="w-full flex flex-col  relative z-0 md:z-20 gap-[100vh]  p-4 md:pr-10">
                {placeitems.map((item, index)=>(
                    <div  key={index} className={`w-full flex ${item.id==="2"?"md:items-start md:justify-start":"md:items-end md:justify-end "}`} >

                    <div className="md:p-10 p-4 rounded-xl shadow-xl md:w-1/3  zoom-item mb-screen bg-white">
                       <img
                                    src={item.image}
                                    className="w-full h-[200px] object-cover"
                                />
                                <span className="text-sm leading-7">
                                    {item.content}
                                </span>
                    </div>

                    </div>
                   

                ))}
                 <div className='zoom-items h-[10px] '></div>
                
            </div>

        </div>
    );
};

export default PlaceZoom;
