'use client'
import React, { useEffect, useRef, useState } from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'
import Accordion from './Accordion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Video from './Video'
gsap.registerPlugin(ScrollTrigger)

const Restoration = () => {

    const scrollWithOffset = (id: string, offset: number = 100) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    };

    const steps = [
        {
            id: 1,
            title: "Identifying key issues ",
            width: "w-5/13",
            content: (
                <span>

                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Declined water quality with untreated sewage inflow.</li>
                        <li>Overgrowth of invasives, such as lantana and parthenium.</li>
                        <li>Loss of ecosystem services, like groundwater recharge and biodiversity support.</li>
                        <li>Haven for illegal activities.</li>
                        <li>Inconducive for human use and recreation.</li>
                        <li>Need to involve the local community.</li>

                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/Key%20issues.mp4" />



                </span>
            ),

            creature: "/famingo.png",

        },
        {
            id: 2,
            title: "Lake health check-up",
            width: "w-6/13",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Secchi depth: A method of noting how clear the lake water is, using a disc attached to a rope.</li>
                        <li>Dissolved oxygen: A handheld probe with a metre and a sensor measures the amount of dissolved oxygen available for aquatic life – plants, fish and other organisms.</li>
                        <li>Shoreline vegetation: Carefully planned and planted shoreline vegetation filters run-off, absorbs excess nutrients and provides shelter for small fish and zooplankton.</li>

                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/How%20healthy%20is%20your%20lake.mp4" />




                </span>
            ),

            creature: "/kingfisher.png",

        },
        {
            id: 3,
            title: "Biodiversity survey: A peek",
            width: "w-7/13",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">

                        <li>Butterfly: A total of 31 species were recorded, with Lycaenidae and Nymphalidae families exhibiting the maximum species richness and abundance. Among the most frequently observed were the common cerulean and common four-ring.</li>

                        <li>Fish: Six species from two orders – Cypriniformes and Perciformes – were documented through samples from local fishers’ nets and dip nets. Exotic species included <em>Oreochromis niloticus</em> and <em>Cyprinus carpio</em>. Several dead fish were observed, particularly <em>Labeo</em> sp. The lake was nearly bereft of native species.</li>

                        <li>Reptiles: Visual encounter surveys conducted during both day and night identified 14 species, including geckos and lizards associated with rocky habitats.</li>

                        <li>Amphibians: Night-time audio-visual encounter surveys recorded five anuran species. Notably, frogs with restricted distribution across Bengaluru, such as the common pond frog, were found at the lake.</li>

                        <li>Birds: A total of 93 bird species were recorded, including black-headed ibis, red-wattled lapwing, alexandrine parakeet, Indian paradise flycatcher and bronze-winged jacana.</li>

                        <li>Bees: Invertebrate sampling yielded 373 insect specimens, among which were 18 individual bees from four species. The most abundant insect order was Diptera, which included flies.</li>

                        <li>Macroinvertebrates: A total of 2,824 aquatic macroinvertebrate individuals were collected post-monsoon. They belonged to 26 families, of which 96% were predators.</li>

                        <li>Plants: By the time the baseline survey commenced, aquatic and emergent vegetation had been cleared as part of the ongoing lake management. Grasses and herbaceous plants occupied the bunds. Invasive species, such as parthenium and lantana, were prevalent throughout. <em>Pongamia pinnata</em> was the most common tree species.</li>




                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/biodiversity.mp4" />

                </span>
            ),

            creature: "/rockagama.png",

        },
        {
            id: 4,
            title: "Lake clean-up",
            width: "w-8/13",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Removal of water hyacinth, plastic and other accumulated waste.</li>
                        <li>Uprooting of lantana and parthenium from the area surrounding the lake.</li>
                        <li>Collecting quarry and construction waste to be repurposed.</li>


                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/Lake_cleanup.mp4" />

                </span>
            ),

            creature: "/rockagama.png",

        },
        {
            id: 5,
            title: "Installing tech-integrated nature-based solutions",
            width: "w-9/13",
            content: (
                <span>
                    <ul className="list-disc mb-4 space-y-2">
                        <li>Aerators, by circulating water, increase dissolved oxygen levels.</li>
                        <li>Floating islands, with native vegetation like <em>Centella asiatica</em> and <em>Typha angustifolia</em>, filter contaminants and prevent nutrient build-up.</li>
                        <li>Removing water hyacinth and other weeds along the shore and planting native species facilitate soil stability and support biodiversity.</li>


                    </ul>

                    <video


                        src="https://atree-communication.s3.amazonaws.com/Storymap_media/nbs.mp4"
                        className="w-full max-h-[50vh] rounded-xl object-contain handle-video"
                        muted
                        playsInline
                        controls
                        autoPlay
                    />


                </span>
            ),

            creature: "🦅",

        },
        {
            id: 6,
            title: "Rewilding the lake",
            width: "w-10/13",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Butterfly mounds layered with stones, logs, soil and compost to grow host plants for caterpillars and nectar plants for adult butterflies.</li>
                        <li>A “bee hotel” made of natural materials like dead wood, bamboo and twigs, to attract solitary bees that thrive in cityscapes and are vital for pollination, but increasingly lack nesting and foraging spaces.</li>
                        <li>Unpaved walking trails instead of conventional cemented paths to encourage slower, mindful walking.</li>
                        <li>Trails that mimic dry Deccan gardens, with the grasses Bengaluru historically had.</li>



                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/rewilding%20the%20lake.mp4" />


                </span>
            ),

            creature: "🦅",

        },
        {
            id: 7,
            title: "Formation of lake trust",
            width: "w-11/13",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Pressure from residents prompts the civic body to take action to restore the lake.</li>
                        <li>When restoration efforts lag, residents shift focus to the heritage value of the lake, citing the GTS tower through rallies and collective actions.</li>
                        <li>Residents form a trust – Chokkanahalli Sampigehalli Abhivriddhi Forum – attracting significant media attention.</li>



                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/Resident_trust%20formation.mp4" />



                </span>
            ),

            creature: "🦅",

        },
        {
            id: 8,
            title: "Engaging youth through schools",
            width: "w-12/13",
            content: (
                <span>

                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Games, biodiversity walks and other activities introduce schoolchildren to the concept of a wetland and its importance, as well as the diversity of flora and fauna present at the lake.</li>
                        <li>Schoolchildren engage in a game of metaphors to understand the importance of the lake.</li>
                        <li>Students learn to keep a nature journal and record their observations of the wildlife around the lake.</li>


                    </ul>

                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/The%20Lake%20Explorers.mp4" />

                </span>
            ),

            creature: "🦅",

        },
        {
            id: 9,
            title: "Participatory water quality monitoring",
            width: "w-full",
            content: (
                <span>

                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Residents take part in step-by-step restoration activities, including water quality monitoring.</li>
                        <li>Infomercials and water-quality monitoring kits equip them to conduct systematic water-quality checks.</li>
                        <li>Equipped with the right skills, residents take ownership of the lake’s responsibilities.</li>


                    </ul>


                </span>
            ),

            creature: "🦅",

        }

    ]

    const [activeitem, Setactiveitem] = useState('')
    const [birdtop, Setbirdtop] = useState(0)
    const [birdside, Setbirdside] = useState(0)

    const stepRefs = useRef<HTMLDivElement[]>([]);
    stepRefs.current = []; // reset length on each render

    const birdside_list = [-220, -180, -160, -140, -120, -100, -80, -60, -40, -20, 0]
    const [currentbird, Setcurrentbird] = useState('/bird-sit.gif')


    const handleActive = (index: number) => {
        Setactiveitem(steps[index].title);

        const stepEl = stepRefs.current[index];
        const container = document.querySelector('.restoration-container')!;

        if (stepEl && container) {
            const containerTop = container.getBoundingClientRect().top + window.scrollY;
            const elementTop = stepEl.getBoundingClientRect().top + window.scrollY;

            const containerside = container.getBoundingClientRect().top + window.scrollX;
            const elementside = stepEl.getBoundingClientRect().top + window.scrollX;

            const top = elementTop - containerTop + stepEl.offsetHeight / 2 - 85; // 25 = half bird height
            const side = elementside - containerside + stepEl.offsetHeight / 2 - 25; // 25 = half bird height

            Setcurrentbird('/bird-fly.gif')
            setTimeout(() => {
                Setcurrentbird('/bird-sit.gif')
            }, 500);





            Setbirdtop(top);
            Setbirdside(birdside_list[index]);

        }
    };




    useEffect(() => {
        if (typeof window === 'undefined') return; // Ensure code runs only on client

        const items = document.querySelectorAll<HTMLElement>('.item_container');

        const triggers: ScrollTrigger[] = [];

        items.forEach((element, index) => {
            const trigger = ScrollTrigger.create({
                trigger: element,
                start: 'top 30%',
                end: 'bottom 30%',
                onEnter: () => handleActive(index),
                onEnterBack: () => handleActive(index),
            });

            triggers.push(trigger);
        });

        // Cleanup on unmount
        return () => {
            triggers.forEach(trigger => trigger.kill());
        };
    }, []);











    return (

        <div className="w-full relative">
            <Heading text="Restoration" />
            <Bodytext text="Venkateshpura Lake presented several challenges, and addressing them needed to be done step by step." />

            <div className="relative flex flex-col md:flex-row gap-6 mt-5">

                {/* Left column: sticky steps */}
                <div className="md:w-1/3 relative">
                    <div className="md:sticky md:top-20 flex flex-col gap-4 relative">
                        <div className='bg-[#087f9b] h-[90%] absolute top-0 left-0 w-1 my-5 -z-10 mx-10  '></div>


                        {steps.map((step, index) => (
                            <div ref={el => { stepRefs.current[index] = el! }} onClick={(() => { scrollWithOffset('step' + index) })}
                                key={index}
                                className={`bg-[#087f9b] ${step.width} ${activeitem === step.title ? "bg-[#087f9b]" : "md:bg-gray-400"}  rounded-xl p-2 md:p-4 text-white font-semibold restoration-container cursor-pointer`}
                            >
                                <h1 className="text-[12px] font-normal"> </h1>
                                <div> {index + 1}. {step.title} </div>
                            </div>
                        ))}

                        <img
                            src={currentbird}
                            alt="flying bird"
                            className="w-[8vw] absolute left-[20vw] transition-transform duration-300 ease-out opacity-0 sm:opacity-100"
                            style={{ transform: `translateY(${birdtop}px) translatex(${birdside}px)` }}
                        />




                    </div>


                </div>

                {/* Right column: Accordion */}
                <div className="md:w-2/3 flex flex-col gap-5 md:gap-[40vh]">
                    {steps.map((step, index) => (
                        <div id={'step' + index} key={index} className="p-4 border-2 bg-white px-6 rounded-xl shadow-xl border-gray-200 item_container">
                            <h1 className='w-full color-b font-semibold text-lg py-2'>{step.title}</h1>
                            <span className='text-sm'>{step.content}</span>

                        </div>
                    ))}
                </div>

            </div>


        </div>



    )
}

export default Restoration
