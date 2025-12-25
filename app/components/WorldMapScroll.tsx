// 'use client'

// import React, { useRef, useState } from 'react'
// import useTailwindBreakpoint from '../hooks/useTailwindBreakpoint';

// const WorldMapScroll = () => {


//     const [transform, setTransform] = useState("scale(1) translate(0px, 0px)");
//     const [iszoomed, setIsZoomed] = useState(false);

//     const [bp, setBp] = useState('sm');

//     const countryList: { [key: string]: any } = {
//         "El Salvador": {
//             name: "El Salvador",
//             sm: { x: 90, y: 0 },
//             md: { x: 140, y: 5 },
//             lg: { x: 180, y: 0 },
//             xl: { x: 220, y: 10 },
//             xl2: { x: 286, y: 15 }
//         },
//         "Brazil": {

//             sm: { x: 200, y: 100 },
//             md: { x: 260, y: 130 },
//             lg: { x: 320, y: 160 },
//             xl: { x: 400, y: 200 },
//             xl2: { x: 480, y: 240 }
//         },

//         // Add more countries as needed
//     };

//     const zoomToMarker = async (country:string) => {

//         if (iszoomed) {
//             // Reset zoom
//             setTransform("scale(1) translate(0px, 0px)");
//             setIsZoomed(false);
//             return;
//         }


//         const scale = 3;

//         const update = () => {
//             const w = window.innerWidth;

//             if (w >= 1536) setBp('2xl');
//             else if (w >= 1280) setBp('xl');
//             else if (w >= 1024) setBp('lg');
//             else if (w >= 768) setBp('md');
//             else setBp('sm');
//         };



//         update();        window.addEventListener('resize', update);
//         let translateX;
//         let translateY;

//         switch (bp) {
//             case "sm":
//                 translateX = countryList[country].sm.x;
//                 translateY = countryList[country].sm.y;
//                 break;
//             case "md":
//                 translateX = countryList[country].md.x;
//                 translateY = countryList[country].md.y;
//                 break;
//             case "lg":
//                 translateX = countryList[country].lg.x;
//                 translateY = countryList[country].lg.y;
//                 break;
//             case "xl":
//                 translateX = countryList[country].xl.x;
//                 translateY = countryList[country].xl.y;
//                 break;
//             case "2xl":
//                 translateX = countryList[country].xl2.x;
//                 translateY = countryList[country].xl2.y;
//                 break;
//             case "base":
//                 translateX = countryList[country].sm.x;
//                 translateY = countryList[country].sm.y;
//                 // Handle small screens
//                 break;

//             default:
//                 break;
//         }

//         // const translateX = 276;
//         // const translateY = 15;

//         // const translateX = 90;
//         // const translateY = 0;

//         setTransform(
//             `scale(${scale}) translate(${translateX}px, ${translateY}px)`
//         );

//         const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

//         await delay(2000);
//         setIsZoomed(true);
//     };

//     return (
//         <div

//             className="w-full h-full bg-gray-200 relative overflow-hidden"
//         >
//             {/* Zoomable map */}
//             <div

//                 className="transition-transform duration-[2000ms]  "
//                 style={{ transform }}
//             >
//                 <img
//                     src="/svgs/world_edited.svg"
//                     alt="World Map"
//                     className="w-full h-auto"
//                 />
//             </div>

//             {/* Marker */}
//             <div

//                 onClick={() => zoomToMarker("El Salvador")}
//                 className="absolute w-15 h-15 bg-yellow-300 rounded-full  opacity-100
//                    cursor-pointer top-25 left-25 md:top-35 md:left-40 lg:top-45 lg:left-55 
//                     xl:top-60 xl:left-73  border-4 border-white "
//             />

//             {/* Marker */}
//             <div

//                 onClick={() => zoomToMarker("Brazil")}
//                 className="absolute w-15 h-15 bg-green-300 
//                 xl:h-40 xl:w-40 
//                 rounded-full  opacity-100
//                    cursor-pointer top-25 left-25 md:top-35 md:left-40 lg:top-45 lg:left-55 
//                     xl:top-75 xl:left-90  border-4 border-white "
//             />



//             {iszoomed &&
//                 <div className="absolute  right-30 top-10  bottom-10 max-h-screen overflow-y-auto w-1/2 transform  bg-white bg-opacity-80  px-4 py-2 rounded shadow flex flex-col gap-2 hide-scrollbar">
//                     <p className="text-xl font-semibold text-gray-800">El Salvador
//                     </p>
//                     <p className="text-lg text-gray-800">More Trees, Less Water Stress. </p>
//                     <p className="text-sm text-gray-800">Location: Dry Corridor, El Salvador </p>

//                     <p className="text-sm text-gray-800">Semi arid rural landscapes experiencing recurrent droughts, erratic rainfall, land degradation, and declining agricultural productivity </p>

//                     <div className="flex flex-col xl:flex-row gap-4  mt-2 mb-4 items-center">
//                         <img
//                             src="/world/elsalvador_2.jpg"
//                             alt=""
//                             className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
//                         />
//                         <div className="flex flex-col  ">
//                             <h1 className=' text-xl font-semibold '>Context</h1>
//                             <p className="  ">
//                                 Prolonged drought and rainfall variability, combined with deforestation and soil degradation, have reduced soil moisture, groundwater recharge, and crop yields, increasing climate vulnerability for smallholder farming communities.
//                             </p>

//                         </div>

//                     </div>

//                     <div className="flex flex-col xl:flex-row gap-4  mt-2 mb-4 items-center">

//                         <div className="flex flex-col  ">
//                             <h1 className=' pb-2 text-xl font-semibold '>What was done?</h1>
//                             <ul className="list-disc px-4 mb-4 space-y-2">
//                                 <li>
//                                     Led by the Food and Agriculture Organization of the United Nations through the RECLIMA programme.
//                                 </li>
//                                 <li>
//                                     Degraded landscapes were restored through tree planting, agroforestry, and sustainable land management practices.
//                                 </li>
//                                 <li>
//                                     Community-managed nurseries were established to supply native and multipurpose species.
//                                 </li>
//                                 <li>
//                                     Soil and water conservation measures were integrated to improve infiltration and moisture retention.
//                                 </li>
//                             </ul>

//                         </div>
//                         <img
//                             src="/world/elsalvador_1.jpg"
//                             alt=""
//                             className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
//                         />

//                     </div>
//                     <div>
//                         <button
//                             onClick={() => zoomToMarker("")}
//                             className=" items-center w-auto px-4 py-2 text-sm font-medium rounded-lg bg-[#087f9b] text-white hover:bg-[#056379] transition cursor-pointer"
//                         >
//                             ← Back to world
//                         </button>
//                     </div>

//                 </div>
//             }



//         </div>


//     );

// };

// export default WorldMapScroll
'use client';

import React, { useEffect, useState } from 'react';

type Country = {
    name: string;
    x: number; // percentage
    y: number; // percentage
};

const countries: Record<string, Country> = {
    'El Salvador': {
        name: 'El Salvador',
        x: 24.3,
        y: 46.5,
    },
    'Brazil': {
        name: 'Brazil',
        x: 35,
        y: 64,
    },
    'Uganda': {
        name: 'Uganda',
        x: 59,
        y: 55,
    },
    'Tanzania': {
        name: 'Tanzania',
        x: 59,
        y: 62,
    },

    'Mouritius': {
        name: 'Mouritius',
        x: 66,
        y: 72,
    },
    'India': {
        name: 'India',
        x:71,
        y: 40,
    },
    'Srilanka': {
        name: 'Srilanka',
        x:72.0,
        y: 52.5,
    },
    'Indonesia': {
        name: 'Indonesia',
        x:81.5,
        y: 57.5,
    },
    'Papua': {
        name: 'Papua New Guinea',
        x:90.5,
        y: 58.5,
    },
};

const WorldMapScroll = () => {
    const [activeCountry, setActiveCountry] = useState<Country | null>(null);
    const [active_x, setActive_x] = useState<number | null>(null);
    const [active_y, setActive_y] = useState<number | null>(null);

    useEffect(() => {
        if (activeCountry) {
            setActive_x(activeCountry.x);
            setActive_y(activeCountry.y);
        }
    }, [activeCountry]);

    const scale = 3;

    const manageActiveCountry = (country: Country | null) => {
        setActiveCountry(country);
        setActive_x(country ? country.x : null);
        setActive_y(country ? country.y : null);
    }
    const getPanX = (x: number | null) => {
        if (x === null) return 0;

        // if (x > 50) return -15;   // pan left
        // if (x > 60) return 20;    // pan right
        return 0;                // centre
    };




    return (
        <div className="relative w-full overflow-hidden bg-gray-200">
            {/* Map container */}
            <div
                className="relative w-full transition-transform duration-[2000ms]"
                style={
                    activeCountry
                        ? {
                            transform: `translateX(${getPanX(activeCountry.x)}%) scale(${scale})`,
                            transformOrigin: `${activeCountry.x}% ${activeCountry.y}%`,
                        }
                        : {
                            transform: 'scale(1)',
                            transformOrigin: `${active_x !== null ? active_x : 50}% ${active_y !== null ? active_y : 50}%`,
                        }
                }
            >
                <img
                    src="/svgs/world_edited.svg"
                    alt="World Map"
                    className="w-full h-auto block"
                />

                {/* Markers */}
                {Object.values(countries).map((country) => (
                    <button
                        key={country.name}
                        onClick={() => manageActiveCountry(country)}
                        className="absolute cursor-pointer "
                        style={{
                            left: `${country.x}%`,
                            top: `${country.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        aria-label={country.name}
                    >
                        <img
                            src="/svgs/map_pin.svg"
                            alt=""
                            className={`w-3 h-3 drop-shadow-lg animate-bounce hover:w-6 hover:h-6 transition-all ${activeCountry?'opacity-0' : 'opacity-100'}`}
                        />
                    </button>
                ))}
            </div>

            {/* Info panel */}
            {
                activeCountry && (
                    <div className={`absolute ${activeCountry.x < 50 ? 'right-4' : 'left-4'} top-4 bottom-4 w-full max-w-1/2 bg-white/90 backdrop-blur rounded-xl shadow-lg overflow-y-auto p-4 flex flex-col gap-4`}>
                        <h2 className="text-xl font-semibold">
                            {activeCountry.name}
                        </h2>

                        <p className="text-sm">
                            More Trees, Less Water Stress.
                        </p>

                        <p className="text-sm">
                            Semi-arid rural landscapes experiencing recurrent droughts, erratic rainfall,
                            land degradation, and declining agricultural productivity.
                        </p>

                        <img
                            src="/world/elsalvador_1.jpg"
                            alt=""
                            className="w-full h-48 object-cover rounded-lg"
                        />

                        <button
                            onClick={() => setActiveCountry(null)}
                            className="mt-auto self-start px-4 py-2 text-sm rounded-lg bg-[#087f9b] text-white hover:bg-[#056379] transition"
                        >
                            ← Back to world
                        </button>
                    </div>
                )
            }
        </div >
    );
};

export default WorldMapScroll;

