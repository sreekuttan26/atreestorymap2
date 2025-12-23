'use client'

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from './Heading';
import Bodytext from './Bodytext';

gsap.registerPlugin(ScrollTrigger);

<Heading text='Key actors'/>

const Keyactors = () => {
    const [activeSpotlight, setActiveSpotlight] = useState(-1);
    const containerRef = useRef(null);

    const spotlightData = [
        {
            id: 'biodiversity',
            title: 'Biodiversity',
            image: '/biodiversity_1.png',
            description:
                "Venkateshpura Lake – stagnant and overrun by invasives and waste – still supported life. Birds like grey-headed swamphens, Eurasian coots and black-winged stilts went about their business as usual, while a few cormorants lingered. Introduced fish survived, though native ones had vanished. Rock agamas basked, geckos slipped through crevices, butterflies flitted and keelbacks rippled the water. The lake’s flora was dominated by invasives.",
        },
        {
            id: 'fisher',
            title: 'Fisher folk',
            image: '/fisher_1.png',
            description:
                "The lake, a traditional fishing ground, is periodically leased by the municipal body to local fisherfolk. The current leaseholder had stocked the lake with commercial fish, such as rohu and catla. But the dense algal bloom and pollution rendered even these resilient fish vulnerable. As the lake’s health declined, so too did the fragile livelihood of the fisherfolk.",
        },
        {
            id: 'residents',
            title: 'Residents',
            image: '/residents.png',
            description:
                "For residents, the small lake, with its green grass, trees and rocky outcrops, was an oasis amid the bustling city. The rocks held traces of history. Though never really maintained, the lake kept the neighbourhood cool and fresh. Gradually, however, development choked its inlets and outlets, transforming the wetland into a wasteland. ",
        },
        {
            id: 'researcher',
            title: 'Researchers',
            image: '/researcher.png',
            description:
                "Researchers emerged as key allies when residents sought support to save the lake. They contributed scientific expertise to restore its fading health, helping to strengthen and accelerate the community’s own vision for the lake.",
        },
        {
            id: 'gov',
            title: 'Government',
            image: '/bbmp.jpeg',
            description:
                "Venkateshpura Lake came under the management of the Greater Bengaluru Authority in 2016. It faced several challenges like encroachments, quarrying, illegal dumping and algal bloom. Local conservation efforts to restore it, however, generated enough data and momentum that prompted government action. Krishna Byre Gowda, the local MLA and now the State Revenue Minister, publicly aligned himself with the restoration initiative. This move was crucial in galvanising all-round support for the lake’s revival.",
        },
        {
            id: 'pastoralists',
            title: 'Pastoralists',
            image: '/pastorial_1.png',
            description: "The grassland flanking the lake had been the grazing grounds for cattle, sheep and goats, known locally as gomala. It was among the last remaining patches in the neighbourhood with easy access to grass and water. Pastoralists who grazed their livestock here earned their livelihood by supplying milk in the surrounding areas.",
        },
        {
            id: 'migrant',
            title: 'Migrants',
            image: '/migrant.png',
            description:
                'Migrant workers living nearby, who otherwise had to scout around for water to wash their clothes and vessels, could access the open and unfenced lake. Their children were always up for a quick dip, especially with plenty of rocks serving as diving boards.',
        }
    ];

    // Spotlight positions (x, y as percentages of the image)
    const spotlightPositions = [
        { x: 30, y: 30 },  // biodiversity
        { x: 50, y: 38 },  // fisher
        { x: 73, y: 30 },  // residents
        { x: 68, y: 55 },  // researcher
        { x: 59, y: 73 },  // gov
        { x:32, y: 65 },  // pastoralists
        { x: 20, y:45 },  // migrant
        { x: 20, y: 45 },  // default
    ];

    const stakeholder_img_ref=useRef(null)

    useEffect(() => {

        const img=stakeholder_img_ref.current
        ScrollTrigger.create({
            

        })







        const items = document.querySelectorAll('.key-zoom-item');

        items.forEach((element, index) => {
            ScrollTrigger.create({
                trigger: element,
                start: 'top 60%',
                end: 'top 20%',
                onEnter: () => setActiveSpotlight(index),
                onEnterBack: () => setActiveSpotlight(index),
                onLeave: () => {
                    if (index === items.length - 1) setActiveSpotlight(-1);
                },
                onLeaveBack: () => {
                    if (index === 0) setActiveSpotlight(-1);
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="w-full relative overflow-visible">
            <div className='p-5 md:px-20 lg:px-40 md:pt-20 bg-white'>
                <Heading text={"Key actors"} />
                <Bodytext text={"Civilisations have evolved around waterbodies. Be it a pond or a lake, a waterbody is a shared resource. For its communities, it sustains livelihoods, shapes cultural practices and supports ecological balance."} />
            </div>

            {/* Sticky Map Container with Spotlight */}
            <div className="sticky top-10 w-full h-screen overflow-hidden z-10 flex  items-start md:items-center justify-center ">
                <div className=" md:w-[80%] w-full relative " ref={containerRef}>
                    <img 
                        src="\svgs\stakeholders0.svg"
                        className="w-full h-full object-contain  "
                        alt="map"
                    />
                    
                    {/* Spotlight Overlay */}
                     <svg
                        className={`absolute inset-0 w-full h-full pointer-events-none ${activeSpotlight>-1?'block':'hidden'}`}
                        
                        preserveAspectRatio="none"
                        style={{ transition: 'all 0.6s ease-out' }}
                    >
                        <defs>
                            {/* Radial gradient for soft edges */}
                            <radialGradient id="spotlight-gradient">
                                <stop offset="0%" stopColor="black" stopOpacity="1" />
                                <stop offset="50%" stopColor="black" stopOpacity="1" />
                                <stop offset="70%" stopColor="black" stopOpacity="0.8" />
                                <stop offset="85%" stopColor="black" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="black" stopOpacity="0" />
                            </radialGradient>
                            
                            {/* Gaussian blur filter for extra softness */}
                            <filter id="blur-filter">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                            </filter>
                            
                            <mask id="spotlight-mask">
                                <rect width="100%" height="100%" fill="white" />
                                {activeSpotlight >= 0 && (
                                    <circle
                                        cx={`${spotlightPositions[activeSpotlight].x}%`}
                                        cy={`${spotlightPositions[activeSpotlight].y}%`}
                                        r="10%"
                                        fill="url(#spotlight-gradient)"
                                        filter="url(#blur-filter)"
                                        style={{
                                            transition: 'cx 0.6s ease-out, cy 0.6s ease-out, r 0.6s ease-out'
                                        }}
                                    />
                                )}
                            </mask>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            fill="rgba(0, 0, 0, 0.3)"
                            mask="url(#spotlight-mask)"
                            style={{
                                transition: 'fill 0.6s ease-out'
                            }}
                        />
                    </svg>

                    {/* Spotlight Ring */}
                    {activeSpotlight >= 0 && (
                        <div
                            className="absolute rounded-full  pointer-events-none"
                            style={{
                                left: `${spotlightPositions[activeSpotlight].x}%`,
                                top: `${spotlightPositions[activeSpotlight].y}%`,
                                width: '10px',
                                height: '10px',
                                transform: 'translate(-50%, -50%)',
                                transition: 'all 0.6s ease-out',
                                boxShadow: '0 0 30px rgba(255, 255, 0, 0.5)'
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Scrollable Items */}
            <div>
                <div className="flex flex-col relative z-20 md:gap-[100vh] gap-[50vh] p-4 md:pr-10">
                    {spotlightData.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full flex ${["residents", "gov", "researcher"].includes(item.id)
                                ? "md:items-start md:justify-start"
                                : "md:items-end md:justify-end"
                                }`}
                        >
                            <div className="xl:p-10 p-4 rounded-xl shadow-xl md:w-1/2 lg:w-1/3 key-zoom-item bg-white">
                                <img src={item.image} className="w-full h-[200px] object-cover rounded-md mb-4" alt={item.title} />
                                <h1 className="w-full font-semibold text-blue-900">{item.title}</h1>
                                <span className="text-sm leading-7">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="key-zoom-item hidden md:flex h-[50vh] md:h-[70vh]  "></div>
            </div>
        </div>
    );
};

export default Keyactors;