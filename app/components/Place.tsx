'use client';

import React, { useEffect, useRef } from 'react';
import Heading from './Heading';
import Bodytext from './Bodytext';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Video from './Video';
gsap.registerPlugin(ScrollTrigger);

const Place = () => {
    const placeitems = [
        {
            id: "1",
            image: "/place_1.png",
            content: (
                <span>
                    Venkateshpura Lake is a relatively small lake, extending a little over 10 acres. It is managed by the Greater Bengaluru Authority (GBA), Bengaluru’s civic body. Located in Sampigehalli in the Arkavathy Layout of Jakkur Ward, the lake is familiar to the locals as Sampigehalli Lake, its old name.
                </span>
            ),
        },
        {
            id: "2",
            image: "/place_2.png",
            content: (
                <span>
                    Once standing amid open farmland, the lake area offered pasture and water to the livestock. As Bengaluru city spread outward, these fields made way for residential complexes and public utility buildings, transforming a pastoral landscape into a dense urban setting.

                </span>
            ),
        },
        {
            id: "3",
            image: "/place_3.png",
            content: (
                <span>
                    There is a ruggedness to the lake’s identity that comes from the rocky outgrowth both within it and along its periphery. One of its rocky projections bears the nineteenth-century Sampigehalli Auxiliary Tower Station – a site with a subcontinental story to tell. Adjacent to the waterbody is the Jarabandemma Temple, built on an imposing rock, which holds unique significance due to the distinct rituals observed even to this day. 
                </span>
            ),
        },
    ];

    const imgref = useRef(null);
    const last_ref = useRef(null);

    useEffect(() => {
        const imgEl = imgref.current;
        const lastEl = last_ref.current;
        if (!imgEl || !lastEl) return;

        // Only pin on large screens and above
        const mm = gsap.matchMedia();

        mm.add("(min-width: 761px)", () => {
            ScrollTrigger.create({
                trigger: imgEl,
                start: "top 10%",
                endTrigger: lastEl,
                end: "bottom bottom",
                pin: imgEl,
                pinSpacing: true,
                scrub: true,
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="w-full h-full">
            <Heading text="Place" />
            <Bodytext
                text={
                    <span>
                        Where is Venkateshpura Lake?
                    </span>
                }
            />

            <div className='relative w-full flex flex-col gap-2 ' >
                {/* <img ref={imgref}
                    src='place_map2.png'
                    className='w-full object-contain sticky top-12'
                /> */}
                <div className="w-full sticky top-12 " ref={imgref}>
                    <video
                        src="https://atree-communication.s3.amazonaws.com/Storymap_media/lake_eath2.mp4"
                        
                        muted
                        autoPlay
                        className="w-full  object-cover "
                    />
                </div>


                <div ref={last_ref} className='flex flex-col gap-5 mt-10 md:w-full md:absolute md:top-0 md:right-0  md:px-10 mt-20 '>
                    {placeitems.map((item, index) => (
                        <div key={index} className={`w-full flex flex-col  ${index % 2 === 0 ? "md:items-end" : "md:items-start "} `}>
                            <div className='md:w-1/3 p-4 border-2 bg-white border-gray-200 shadow-xl rounded-xl flex flex-col gap-2 md:z-10'>


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

                </div>

            </div>


        </div>
    );
};

export default Place;
