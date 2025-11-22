'use client';

import React, { useEffect, useRef } from 'react';
import Heading from './Heading';
import Bodytext from './Bodytext';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Place = () => {
    const placeitems = [
        {
            id: "1",
            image: "/lake_sky.png",
            content: (
                <span>
                    Venkateshpura Lake is a relatively small lake, extending a little over
                    10 acres. It is managed by the Bruhat Bangalore Mahanagara Palike
                    (BBMP), Bengaluru’s civic body. Located in Sampigehalli in the
                    Arkavathy Layout of Jakkur Ward, the lake is sometimes more familiar
                    to the locals as Sampigehalli Lake, its old name.
                </span>
            ),
        },
        {
            id: "2",
            image: "/place_2.png",
            content: (
                <span>
                    The estimated water spread is 8 acres. Venkateshpura Lake has an
                    independent catchment area that leads to Hebbala Nagara Valley, one of
                    the five valleys of Bangalore. Being at the apex of a series of lakes,
                    its outlet joins Rachenahalli Lake downstream.
                </span>
            ),
        },
        {
            id: "3",
            image: "/place_3.png",
            content: (
                <span>
                    There is a ruggedness to the lake’s identity that comes from the rocky
                    outgrowth within and around its periphery. Most of the rock faces that
                    covered the lake are gone. Only the rocky projection bearing the
                    nineteenth-century Sampigehalli Auxiliary Tower Station remains as a
                    reminder. Adjacent to the waterbody is the Jarabandemma Temple, built
                    on a rock, which holds unique significance due to distinct rituals
                    still observed. The lake stands amidst towering buildings as a
                    testament to the struggle put up by residents living around it.
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

            <div className='relative w-full flex flex-col gap-2 md:flex-row' >
                <img ref={imgref}
                    src='lake_drawing_ai.png'
                    className='w-full object-contain sticky top-12'
                />

                <div ref={last_ref} className='flex flex-col gap-5 mt-10 md:w-full md:absolute md:top-0 md:right-0   '>
                    {placeitems.map((item, index) => (
                        <div key={index} className={`w-full flex flex-col  ${index%2===0?"md:items-end":"md:items-start "} `}>
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
