'use client'

import React, { useRef, useState } from 'react'

const WorldMapScroll = () => {


    const [transform, setTransform] = useState("scale(1) translate(0px, 0px)");
    const [iszoomed, setIsZoomed] = useState(false);

    const zoomToMarker = async () => {

        if (iszoomed) {
            // Reset zoom
            setTransform("scale(1) translate(0px, 0px)");
            setIsZoomed(false);
            return;
        }


        const scale = 3;

        const translateX = 276;
        const translateY = 15;

        setTransform(
            `scale(${scale}) translate(${translateX}px, ${translateY}px)`
        );

        const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

        await delay(2000);
        setIsZoomed(true);
    };

    return (
        <div

            className="w-full h-full bg-gray-200 relative overflow-hidden"
        >
            {/* Zoomable map */}
            <div

                className="transition-transform duration-[2000ms]  "
                style={{ transform }}
            >
                <img
                    src="/svgs/world_edited.svg"
                    alt="World Map"
                    className="w-full h-auto"
                />
            </div>

            {/* Marker */}
            <div

                onClick={zoomToMarker}
                className="absolute w-5 h-5 bg-yellow-300 rounded-full  opacity-0
                   cursor-pointer top-29 left-35 xl:top-83 xl:left-103  border-4 border-white "
            />



            {iszoomed &&
                <div className="absolute  right-30 top-10  bottom-10 max-h-screen overflow-y-auto w-1/2 transform  bg-white bg-opacity-80  px-4 py-2 rounded shadow flex flex-col gap-2 hide-scrollbar">
                    <p className="text-xl font-semibold text-gray-800">El Salvador
                    </p>
                    <p className="text-lg text-gray-800">More Trees, Less Water Stress. </p>
                    <p className="text-sm text-gray-800">Location: Dry Corridor, El Salvador </p>

                    <p className="text-sm text-gray-800">Semi arid rural landscapes experiencing recurrent droughts, erratic rainfall, land degradation, and declining agricultural productivity </p>

                    <div className="flex flex-col xl:flex-row gap-4  mt-2 mb-4 items-center">
                        <img
                            src="/world/elsalvador_2.jpg"
                            alt=""
                            className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                        />
                        <div className="flex flex-col  ">
                            <h1 className=' text-xl font-semibold '>Context</h1>
                            <p className="  ">
                                Prolonged drought and rainfall variability, combined with deforestation and soil degradation, have reduced soil moisture, groundwater recharge, and crop yields, increasing climate vulnerability for smallholder farming communities.
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-col xl:flex-row gap-4  mt-2 mb-4 items-center">

                        <div className="flex flex-col  ">
                            <h1 className=' pb-2 text-xl font-semibold '>What was done?</h1>
                            <ul className="list-disc px-4 mb-4 space-y-2">
                                <li>
                                    Led by the Food and Agriculture Organization of the United Nations through the RECLIMA programme.
                                </li>
                                <li>
                                    Degraded landscapes were restored through tree planting, agroforestry, and sustainable land management practices.
                                </li>
                                <li>
                                    Community-managed nurseries were established to supply native and multipurpose species.
                                </li>
                                <li>
                                    Soil and water conservation measures were integrated to improve infiltration and moisture retention.
                                </li>
                            </ul>

                        </div>
                        <img
                            src="/world/elsalvador_1.jpg"
                            alt=""
                            className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                        />

                    </div>
                    <div>
                        <button
                            onClick={zoomToMarker}
                            className=" items-center w-auto px-4 py-2 text-sm font-medium rounded-lg bg-[#087f9b] text-white hover:bg-[#056379] transition cursor-pointer"
                        >
                            ← Back to world
                        </button>
                    </div>

                </div>
            }



        </div>


    );

};

export default WorldMapScroll
