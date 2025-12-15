'use client'
import React, { useEffect, useRef, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Heading from './Heading';


interface StoryEvent {
    id: number;
    date: string;
    title: string;
    location?: string;
    description: React.ReactNode;
    image: string;
}

const storyData: StoryEvent[] = [
    {
        id: 1,
        date: '2005 – 2010',
        title: 'A Quiet Landscape',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li>Venkateshpura Nagar slowly begins forming within Sampigehalli village.</li>
                <li>Sampigehalli Lake remains clean and clear during these years.</li>
                <li>Small-scale agriculture and a modest dairy unit operate until 2014.</li>
            </ul>
        ),
        image: '/timeline/2025_2010.JPG'
    },
    {
        id: 2,
        date: '2007',
        title: 'First BBMP Engagement',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li>BBMP plants Pongamia trees and appoints a caretaker.</li>
                <li>Partial fencing erected with community cooperation.</li>
                <li>BBMP withdraws soon after.</li>
            </ul>
        ),
        image: '/timeline/2007.jpg'
    },
    {
        id: 3,
        date: '2010 – 2014',
        title: 'Urbanisation and Crisis',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li>Built-up areas expand around the lake.</li>
                <li>Sewage begins entering the lake.</li>
                <li>Community makes repeated representations to MLA and BBMP.</li>
                <li>Residents trace lake boundaries and buffer zones.</li>
                <li>PILs filed to protect the lake.</li>
                <li>Official maps procured for watershed conservation.</li>
            </ul>
        ),
        image: '/timeline/2010_2014.jpg'
    },
    {
        id: 4,
        date: '2014 – 2020',
        title: 'Growing Pressures',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li>Apartments rise around the lake.</li>
                <li>Sewage inflow intensifies.</li>
                <li>Water hyacinth spreads.</li>
                <li>Bunds overgrown with <em>Lantana camara</em> and <em>Parthenium</em> species.</li>
                <li>Cycle rally organised to save the lake.</li>
                <li>Apartment associations join the movement.</li>
            </ul>
        ),
        image: '/timeline/2014_2020.jpg'
    },
    {
        id: 5,
        date: '2020 – 2022',
        title: 'Covid Neglect and a Turning Point',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li>Lake becomes fully covered by hyacinth during Covid.</li>
                <li>BDA denotifies lake buffer for Odisha Bhavan and a private school.</li>
                <li>Community mobilisation intensifies.</li>
                <li>Media engaged and representations made to elected members.</li>
            </ul>
        ),
        image: '/timeline/2020_2022.JPG'
    },
    {
        id: 6,
        date: '2022',
        title: 'Scientific Restoration Begins',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li>BBMP agrees to restore the six-acre lake.</li>
                <li>ATREE provides scientific inputs.</li>
                <li>Basic DPR prepared by ALCON.</li>
                <li>ATREE receives research permit and grant.</li>
                <li>Restoration framework co-created with the community.</li>
                <li>PLUS develops an expanded DPR, partially realised.</li>
                <li>VIMOS supports implementation alongside BBMP works, including draining and dredging.</li>
            </ul>
        ),
        image: '/timeline/2022.jpg'
    },
    {
        id: 7,
        date: '2022 – 2025',
        title: 'Ecological and Social Restoration',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li><strong>Baseline work:</strong> surveys on birds, butterflies, moths, bees, fishes, aquatic organisms, and water; midline assessments conducted.</li>
                <li><strong>Habitat restoration:</strong> Lantana removal, awareness film screening, butterfly trail creation, and trail diversification.</li>
                <li><strong>Water quality:</strong> continuous monitoring and significant improvement.</li>
                <li><strong>Cultural heritage:</strong> research on GTS tower and temple; two artistic heritage signages installed.</li>
                <li><strong>Community engagement:</strong> stakeholder meetings, nature education module, and guided walks.</li>
                <li><strong>Design innovation:</strong> zoning and visualisation plans; floating islands and aerators commissioned without microplastics.</li>
                <li><strong>Upcycling:</strong> Lantana seating, tyre seaters, and biodiversity-themed art using rubble.</li>
                <li><strong>Installations:</strong> Bee Resort installed; Pied Kingfisher adopted as mascot.</li>
                <li><strong>Inclusiveness:</strong> grazing access retained, fishermen engaged, and native fish reintroduced.</li>
            </ul>
        ),
        image: '/timeline/2022_2025.jpg'
    },
    {
        id: 8,
        date: '2023 – 2025',
        title: 'A Thriving Common',
        location: '',
        description: (
            <ul className="list-disc pl-5">
                <li>Rock-based microhabitats created for reptiles.</li>
                <li>Daily footfall reaches fifty to seventy visitors.</li>
                <li>Slow-walk trails planned.</li>
                <li>Visitor observation dashboard developed.</li>
            </ul>
        ),
        image: 'https://atree-communication.s3.amazonaws.com/Storymap_media/2023_2025.JPG'
    }
];

export default function StoryTimeline() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-10'

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < storyData.length - 1 ? prev + 1 : prev));
    };

    const currentEvent = storyData[currentIndex];
    const timelinecircle = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        timelinecircle.current[currentIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });



    }, [currentIndex])

    const scrollWithOffset = (id: string, offset: number = 100) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    };

    return (
        <div className="xl:px-20 mt-20 bg-gradient-to-br from-gray-100 via-white to-gray-100 pt-10">
            <div className={`${spacing}`}>
                <Heading text='TimeLine' />
            </div>



            <div className="min-h-screen  py-8 px-4 flex gap-1  items-center justify-center">
                <div className="">
                    {/* <button
                        onClick={goToPrevious}
                        disabled={currentIndex === 0}
                        className={` h-auto bg-slate-900/80 hover:bg-slate-800 text-white rounded-full p-3 backdrop-blur-sm transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 shadow-xl '
                            }`}
                        aria-label="Previous story"
                    >
                        <GrFormPrevious />
                    </button> */}
                </div>



                <div className="w-full md:px-20 md:mx-5 ">
                    <div className="text-center mb-8 text-slate-500 text-sm">
                        Use arrow buttons or click timeline points to navigate the story
                    </div>



                    <div className="relative w-full overflow-x-auto   hide-scrollbar ">
                        <div className="relative flex min-w-max items-center justify-around  px-4 md:px-8 mt-5">
                            {/* Horizontal Line */}
                            <div className="absolute  top-6 md:top-8 left-4 right-4 md:left-0 md:right-0 h-1 bg-gradient-to-r from-slate-700 via-cyan-500 to-slate-700" />

                            {storyData.map((event, index) => {
                                const isActive = index === currentIndex;
                                const isPast = index < currentIndex;

                                return (
                                    <button
                                        key={event.id}
                                        ref={(el) => {
                                            timelinecircle.current[index] = el;
                                        }}
                                        onClick={() => setCurrentIndex(index)}
                                        className="relative z-10 flex shrink-0 flex-col items-center group focus:outline-none"
                                    >
                                        {/* Circle */}
                                        <div
                                            className={`flex items-center justify-center rounded-full transition-all duration-300
                        w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16
                        ${isActive
                                                    ? 'bg-gradient-to-br from-[#087f9b] to-[#087f9b] scale-125 ring-4 ring-[#96e3f5] shadow-2xl shadow-cyan-500/50'
                                                    : isPast
                                                        ? 'bg-gradient-to-br from-[#087f9b] to-blue-400 hover:scale-110'
                                                        : 'bg-gradient-to-br from-slate-600 to-slate-700 hover:scale-105'
                                                }`}
                                        >
                                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-white/30 backdrop-blur-sm" />
                                        </div>

                                        {/* Labels */}
                                        <div className="mt-3 text-center max-w-[6rem] sm:max-w-none">
                                            <div
                                                className={`text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap transition-colors
                            ${isActive
                                                        ? 'text-[#0ca2c4]'
                                                        : isPast
                                                            ? 'text-[#087f9b]'
                                                            : 'text-slate-500'
                                                    }`}
                                            >
                                                {event.date}
                                            </div>

                                            <div
                                                className={`mt-1 text-[10px] sm:text-xs transition-opacity
                            ${isActive
                                                        ? 'text-white opacity-100'
                                                        : 'text-slate-400 opacity-0 group-hover:opacity-100'
                                                    }`}
                                            >
                                                {event.title}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>












                    <div className="relative md:px-8 overflow-y-scroll hidden">
                        <div className="relative flex  items-center justify-between gap-10">
                            {/* Horizontal Line - centered through circles */}
                            <div className="absolute top-6 md:top-8 left-0 right-0 h-1  bg-gradient-to-r from-slate-700 via-cyan-500 to-slate-700" />

                            {/* Timeline Points */}
                            {storyData.map((event, index) => {
                                const isActive = index === currentIndex;
                                const isPast = index < currentIndex;
                                const isFuture = index > currentIndex;

                                return (
                                    <button
                                        key={event.id}
                                        onClick={() => setCurrentIndex(index)}
                                        className="relative flex flex-col items-center group z-10 border-2"
                                    >
                                        {/* Circle Point */}
                                        <div
                                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isActive
                                                ? 'bg-gradient-to-br from-[#087f9b] to-[#087f9b] scale-125 ring-5 ring-[#96e3f5] shadow-2xl shadow-cyan-500/50 '
                                                : isPast
                                                    ? 'bg-gradient-to-br from-[#087f9b] to-blue-400 hover:scale-110'
                                                    : 'bg-gradient-to-br from-slate-600 to-slate-700 hover:scale-105'
                                                }`}
                                        >
                                            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/30 backdrop-blur-sm" />
                                        </div>

                                        {/* Label Below */}
                                        <div className="mt-4 text-center">
                                            <div
                                                className={`text-xs md:text-sm font-semibold transition-colors whitespace-nowrap ${isActive
                                                    ? 'text-[#0ca2c4]'
                                                    : isPast
                                                        ? 'text-[#087f9b]'
                                                        : 'text-slate-500'
                                                    }`}
                                            >
                                                {event.date}
                                            </div>
                                            <div
                                                className={`text-xs mt-1 transition-opacity ${isActive ? 'text-white opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                                                    }`}
                                            >
                                                {event.title}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Story Content Card */}
                    <div className="mb-12 mt-5 ">
                        <div className="relative bg-white backdrop-blur-xl rounded-3xl  border border-gray-200 shadow-2xl">
                            {/* Image Section */}
                            <div className="relative h-64 md:h-95 ">
                                <img
                                    src={currentEvent.image}
                                    alt={currentEvent.title}
                                    className="w-full h-full object-cover transition-transform duration-700 object-center"
                                />
                                <div className="absolute inset-0 " />

                                {/* Navigation Arrows on Image */}
                                {/* <button
                                onClick={goToPrevious}
                                disabled={currentIndex === 0}
                                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full p-3 backdrop-blur-sm transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 shadow-xl'
                                    }`}
                                aria-label="Previous story"
                            >
                                <GrFormPrevious />


                            </button>

                            <button
                                onClick={goToNext}
                                disabled={currentIndex === storyData.length - 1}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full p-3 backdrop-blur-sm transition-all ${currentIndex === storyData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 shadow-xl'
                                    }`}
                                aria-label="Next story"
                            >
                                <MdNavigateNext />
                            </button> */}
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12">
                                <div className="w-full  flex items-center gap-5 justify-center pb-5">
                                    <button
                                        onClick={goToPrevious}
                                        disabled={currentIndex === 0}
                                        className={` h-auto bg-slate-900/80 hover:bg-slate-800 text-white rounded-full p-3 backdrop-blur-sm transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 shadow-xl '
                                            }`}
                                        aria-label="Previous story"
                                    >
                                        <GrFormPrevious />
                                    </button>

                                    <button
                                        onClick={goToNext}
                                        disabled={currentIndex === storyData.length - 1}
                                        className={` bg-slate-900/80 hover:bg-slate-800 text-white rounded-full p-3 backdrop-blur-sm transition-all ${currentIndex === storyData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 shadow-xl'
                                            }`}
                                        aria-label="Next story"
                                    >
                                        <MdNavigateNext />
                                    </button>


                                </div>
                                {/* Date Badge */}
                                <div className="flex items-center gap-2 mb-4">

                                    <span className="text-[#087f9b] font-bold text-lg">
                                        {currentEvent.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl md:text-2xl font-bold text-black mb-4">
                                    {currentEvent.title}
                                </h2>

                                {/* Location */}
                                {currentEvent.location && (
                                    <div className="flex items-center gap-2 mb-6 text-slate-400">

                                        <span className="text-lg">{currentEvent.location}</span>
                                    </div>
                                )}

                                {/* Description */}
                                <span className="text-slate-500 text-sm md:text-xl leading-relaxed">
                                    {currentEvent.description}
                                </span>

                                {/* Counter */}
                                <div className="mt-8 flex items-center justify-between">
                                    <div className="text-slate-500 text-sm">
                                        Timeline {currentIndex + 1} of {storyData.length}
                                    </div>
                                    <div className="flex gap-2">
                                        {storyData.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? 'w-8 bg-[#087f9b]'
                                                    : index < currentIndex
                                                        ? 'w-1.5 bg-[#087f9b]'
                                                        : 'w-1.5 bg-slate-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Horizontal Timeline Below */}
                    <div className="relative px-8 hidden">
                        <div className="relative flex items-center justify-between">
                            {/* Horizontal Line - centered through circles */}
                            <div className="absolute top-6 md:top-8 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 via-cyan-500 to-slate-700" />

                            {/* Timeline Points */}
                            {storyData.map((event, index) => {
                                const isActive = index === currentIndex;
                                const isPast = index < currentIndex;
                                const isFuture = index > currentIndex;

                                return (
                                    <button
                                        key={event.id}
                                        onClick={() => setCurrentIndex(index)}
                                        className="relative flex flex-col items-center group z-10"
                                    >
                                        {/* Circle Point */}
                                        <div
                                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                                                ? 'bg-gradient-to-br from-[#087f9b] to-[#087f9b] scale-125 ring-5 ring-[#96e3f5] shadow-2xl shadow-cyan-500/50'
                                                : isPast
                                                    ? 'bg-gradient-to-br from-[#087f9b] to-blue-400 hover:scale-110'
                                                    : 'bg-gradient-to-br from-slate-600 to-slate-700 hover:scale-105'
                                                }`}
                                        >
                                            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white/30 backdrop-blur-sm" />
                                        </div>

                                        {/* Label Below */}
                                        <div className="mt-4 text-center">
                                            <div
                                                className={`text-xs md:text-sm font-semibold transition-colors whitespace-nowrap ${isActive
                                                    ? 'text-[#0ca2c4]'
                                                    : isPast
                                                        ? 'text-[#087f9b]'
                                                        : 'text-slate-500'
                                                    }`}
                                            >
                                                {event.date}
                                            </div>
                                            <div
                                                className={`text-xs mt-1 transition-opacity ${isActive ? 'text-white opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                                                    }`}
                                            >
                                                {event.title}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Keyboard Navigation Hint */}

                </div>
                {/* <div className="">
                    <button
                        onClick={goToNext}
                        disabled={currentIndex === storyData.length - 1}
                        className={` bg-slate-900/80 hover:bg-slate-800 text-white rounded-full p-3 backdrop-blur-sm transition-all ${currentIndex === storyData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 shadow-xl'
                            }`}
                        aria-label="Next story"
                    >
                        <MdNavigateNext />
                    </button>
                </div> */}
            </div>
        </div>

    );
}