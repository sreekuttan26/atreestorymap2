import React from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'

import {useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Place2 = () => {
    const imgref=useRef(null);
    const last_ref=useRef<HTMLDivElement>(null);

    useEffect(() => {
      const imgEl = imgref.current; 
        if (!imgEl) return;
         const mm = gsap.matchMedia();
         mm.add("(min-width: 1px)", () => {
        ScrollTrigger.create({
            trigger: imgEl,
            start: "top 10%",
            endTrigger: last_ref.current,
            end: "bottom 70%",
            pin: imgEl,
            pinSpacing: false,
            scrub: true,
        });});


    }, []);

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


    return (
        <div className='w-full md:h-[2520px] xl:h-[2520px] 2xl:h-[2520px] px-5 md:px-0'>
            <Heading text="Place" />
            <Bodytext text={
                    <span>
                        Where is Venkateshpura Lake?
                    </span>
                }
            />


            <div className="w-full  relative hidden md:flex"  >
                <img ref={imgref}
                    src="lake_drawing_ai.png"
                    className="w-full h-auto object-contain object-top "
                />

                <div className="md:absolute md:top-0 left-0 w-full h-full flex flex-col md:items-end xl:mt-100 2xl:mt-0 md:mt-120 lg:mt-0 items-center z-10 gap-15" >
                    {placeitems.map((item) => (
                        <div key={item.id} className={`md:w-[500px] `} >
                            <div className=' bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-300 '>
                                <img src={item.image} className=' w-full h-auto object-contain mb-2 ' />
                                <Bodytext text={item.content} />
                            </div>
                        </div>
                    ))}
                    <div ref={last_ref} className="h-[2px] w-full"></div>


                </div>

            </div>



            <div className="w-full  relative flex flex-col gap-4 md:hidden"  >
              
                <img 
                    src="Place_map_img.png"
                    className="w-full h-[350px] object-cover object-top "
                />

                <div className=" w-full h-full mt-20 flex flex-col md:items-end items-center z-10 gap-15" >
                    {placeitems.map((item) => (
                        <div key={item.id} className={`md:w-[500px] `} >
                            <div className=' bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-gray-300 '>
                                <img src={item.image} className=' w-full h-auto object-contain mb-2 ' />
                                <Bodytext text={item.content} />
                            </div>
                        </div>
                    ))}
                    


                </div>

            </div>


        </div>
    )
}

export default Place2
