'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Keyactors = () => {

    const spotlightData = [
        {
            id: 'biodiversity',
            title: 'Biodiversity',
            image: '/biodiversity_1.png',
            description:
                "Venkateshpura Lake – stagnant and overrun by invasives and waste, still supported life. Grey-headed swamphens, Eurasian coots and Black-winged stilts went about their business as usual, while a few cormorants lingered. Introduced fish survived though native ones had vanished. Rock agamas basked, geckos slipped through crevices, butterflies flitted and keelbacks rippled the water. The lake’s flora was dominated by invasives.",
            map: '/stakeholdermap_biodiversity.png'

        },
        {
            id: 'fisher',
            title: 'Fisher folk',
            image: '/fisher_1.png',
            description:
                "The lake, a traditional fishing ground, is periodically leased by the municipal body to local fisherfolk. The current leaseholder had stocked the lake with commercial fishes, such as Rohu and Catla. But the dense algal bloom and pollution rendered even these resilient fish vulnerable. As the lake’s health declined, so too did the fisherman’s fragile livelihood.",
            map: '/stakeholdermap_fisher.png'

        },
        {
            id: 'residents',
            title: 'Residents',
            image: '/residents.png',
            description:
                "For residents, the small lake with its green grass, trees and rocky outcrops was an oasis amid the bustling city. The rocks held traces of history. Though never really maintained, the lake kept the neighbourhood cool and fresh. Gradually, however, development choked its inlets and outlets, transforming the wetland into a wasteland. The tipping point arrived when illegal burning consumed a tree to clear for development.",
            map: "stakeholdermap_residence.png"
        },
        {
            id: 'researcher',
            title: 'Researchers',
            image: '/researcher.png',
            description:
                "Researchers emerged as key allies when residents sought support to save the lake. They contributed scientific expertise to restore its fading health, helping to strengthen and accelerate the community’s own vision for the lake.",
            map: "/stakeholdermap_researcher.png"
        },
        {
            id: 'gov',
            title: 'Government',
            image: '/bbmp.jpeg',
            description:
                "Venkateshpura Lake came under the management of Greater Bengaluru Authority in 2016. It faced several challenges like encroachments, quarrying, illegal dumping and algal bloom. Local conservation efforts to restore it, however, generated enough data and momentum that prompted government action. Krishna Byre Gowda, the local MLA and now the State Revenue Minister, publicly aligned himself with the restoration initiative. This move was crucial in galvanising all-rounded support for the lake’s revival.",
            map: "/stakeholdermap_gov.png"
        },
        {
            id: 'pastoralists',
            title: 'Pastoralists',
            image: '/pastorial_1.png',
            description: (<span>
                The grassland flanking the lake had been the grazing grounds for cattle, sheep and goat, known locally as <i>gomala</i>. It was among the last remaining patches in the neighbourhood with easy access to grass and water. Pastoralists who brought their livestock here not only sustained their livelihoods but supplied milk to the surrounding city.</span>),
            map: "/stakeholdermap_pastorial.png"
        },
        {
            id: 'migrant',
            title: 'Migrants',
            image: '/migrant.png',
            description:
                'Migrant workers living nearby, who otherwise had to scout around for water to wash their clothes and vessels, could access the open and unfenced lake. Their children were always up for a quick dip, especially with plenty of rocks serving as diving boards.',
            map: "/stakeholdermap_migrant.png"
        }
    ];

    const zoomlist = [

        { x: -20, y: -40, scale: 2 },//biodiversity
        { x: 20, y: -40, scale: 2 },//fisher
        { x: 30, y: -50, scale: 2 },// residence
        { x: 25, y: 0, scale: 2 },//research
        { x: 0, y: 50, scale: 2 },//gov
        { x: -20, y: 30, scale: 2 },//pastorial       
        { x: -50, y: -28, scale: 2 },//migrant
        { x: 0, y: 0, scale: 1 },//default



    ];

    const stake_Ref = useRef<HTMLImageElement>(null);

    const zoomImgx = (x: number, y: number, scale: number) => {
        if (!stake_Ref.current) return;

        console.log('x:' + x + " y:" + y)

        gsap.to(stake_Ref.current, {
            scale,
            xPercent: -x,
            yPercent: -y,
            duration: 1,
            ease: 'power2.out',
        });
    };

    useEffect(() => {
        const items = document.querySelectorAll('.key-zoom-item');

        items.forEach((element, index) => {
            ScrollTrigger.create({
                trigger: element,
                start: 'top 50%',
                end: 'bottom 40%',
                onEnter: () => zoomImgx(zoomlist[index].x, zoomlist[index].y, zoomlist[index].scale),
                onEnterBack: () => zoomImgx(zoomlist[index].x, zoomlist[index].y, zoomlist[index].scale),
                onLeave: () => zoomImgx(0, 0, 1),
                onLeaveBack: () => zoomImgx(0, 0, 1),
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
                    id="myImage"
                    ref={stake_Ref}
                    src="\svgs\stakeholders0.svg"
                    className="w-full max-h-[40vh] md:max-h-full object-cover myImage "
                    alt="map"
                />
            </div>

            {/* Scrollable Items */}
            <div>
                <div className="flex flex-col relative z-20 gap-[100vh] p-4 md:pr-10">
                {spotlightData.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full flex ${["residents", "gov", "researcher"].includes(item.id)
                                ? "md:items-start md:justify-start"
                                : "md:items-end md:justify-end"
                            }`}
                    >
                        <div className="md:p-10 p-4 rounded-xl shadow-xl md:w-1/2 lg:w-1/3 key-zoom-item bg-white">
                            <img src={item.image} className="w-full h-[200px] object-cover rounded-md mb-4" />
                            <h1 className="w-full font-semibold color-b">{item.title}</h1>
                            <span className="text-sm leading-7">
                                {item.description}
                            </span>
                        </div>
                    </div>
                ))}
                

            </div>
            <div className="key-zoom-item h-10px"></div>


            </div>
            
        </div>
    );
};

export default Keyactors;



//
