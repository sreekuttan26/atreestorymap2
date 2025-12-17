import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Bodytext from './Bodytext';


interface TimelineEvent {
    year: string;
    period: string;
    title: string;
    description: string[];

    color: string;
    image: string;
}

const LakeStoryMap = () => {
    const [activeSection, setActiveSection] = useState(-1);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);

    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-10'

    useEffect(() => {
        const handleScroll = () => {
            const timeline = document.querySelector('.timeline-container');
            if (!timeline) return;

            const rect = timeline.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const visible =
                viewportHeight - rect.top; // how much has entered view
            const total = rect.height;

            const progress = Math.max(
                0,
                Math.min(100, (visible / total) * 95)
            );

            setLineHeight(progress);

            // top progress bar (this part is fine)
            const totalScrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((window.scrollY / totalScrollHeight) * 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const timelineData: TimelineEvent[] = [
        {
            year: "2005",
            period: "A Quiet Landscape",
            title: "The Beginning: A Clean Lake",
            description: [
                "Sampigehalli village renamed to Venkateshpura",
                "Lake remains clean and clear",
                "Small-scale agriculture and modest dairy operations"
            ],

            color: "from-blue-400 to-[#087f9b]",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2025_2010.JPG"
        },
        {
            year: "2007",
            period: "First BBMP Engagement",
            title: "Community & Government Unite",
            description: [
                "BBMP adopts tree-planting measures and appoints a caretaker",
                "Partial fencing is erected with community cooperation",
                "BBMP work at the lake takes a back seat"
            ],


            color: "from-green-400 to-emerald-400",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2007.jpg"
        },
        {
            year: "2010-2014",
            period: "Urbanisation and Crisis",
            title: "Growing Pains",
            description: [
                "Built-up areas expand around the lake",
                "Sewage begins entering the lake",
                "The community makes repeated representations to the MLA and BBMP",
                "Residents trace the lake boundaries and buffer zones",
                "PILs are filed to protect the lake",
                "Official maps are procured for watershed conservation"
            ],

            color: "from-orange-400 to-red-400",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2010_2014.jpg"
        },
        {
            year: "2014-2020",
            period: "Growing Pressures",
            title: "The Dark Years",
            description: [
                "Apartments rise around the lake",
                "Sewage inflow intensifies",
                "Water hyacinth spreads",
                "Bunds become overgrown with Lantana and Parthenium",
                "A cycle rally is organised to save the lake",
                "Apartment associations join the movement"
            ],

            color: "from-amber-400 to-orange-400",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2014_2020.jpg"
        },
        {
            year: "2020-2022",
            period: "Covid Neglect & Turning Point",
            title: "Crisis to Catalyst",
            description: [
                "The lake becomes fully covered by hyacinth during Covid",
                "BDA denotifies the lake buffer for Odisha Bhavan and a private school",
                "Community mobilisation intensifies",
                "The media takes note, and representations are made to elected members"
            ],

            color: "from-purple-400 to-pink-400",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2020_2022.JPG"
        },
        {
            year: "2022",
            period: "Scientific Restoration Begins",
            title: "Hope Restored",
            description: [
                "BBMP agrees to restore the six-acre lake",
                "ATREE provides scientific inputs",
                "A basic DPR is prepared by ALCON",
                "ATREE receives the research permit and grant",
                "The restoration framework is co-created with the community",
                "PLUS develops an expanded DPR, partially realised",
                "VIMOS supports the implementation of select design elements alongside BBMP plans, including draining and dredging"
            ],

            color: "from-blue-400 to-indigo-400",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2022.jpg"
        },
        {
            year: "2022-2025",
            period: "Ecological & Social Restoration",
            title: "Transformation Unfolds",
            description: [
                "Baseline Work",
                "Habitat Restoration",
                "Water quality monitoring shows improvement",
                "Heritage signages installed for GTS tower and temple"
            ],

            color: "from-teal-400 to-green-400",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2022_2025.jpg"
        },
        {
            year: "2023-2025",
            period: "A Thriving Common",
            title: "A Living Legacy",
            description: [
                "Rock based microhabitats created for reptiles.",
                " Daily footfall reaches fifty to seventy visitors.",
                "Slow walk trails planned.",
                "Visitor observation dashboard developed.",

            ],
            color: "from-green-400 to-lime-400",
            image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2023_2025.JPG"
        }
    ];

    const scrollToSection = (index: number) => {
        const section = document.querySelectorAll('.timeline-section')[index];
        section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
            <div className={`${spacing}`}>
                <Heading text='TimeLine' />
                <Bodytext text="Venkateshpura Nagar Lake Story (2005 to 2025)"/>
            </div>
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50 ">
                <div
                    className="h-full bg-gradient-to-r from-blue-400 to-[#087f9b] transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>




            {/* Timeline Container */}
            <div className="timeline-container relative py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center">
                {/* Left Side Timeline Line - Gray background with colored progress */}


                {/* Timeline Sections */}
                <div className="max-w-5xl ml-0 md:ml-8 lg:ml-16 relative ">

                    <div className="absolute left-5  top-0 bottom-0 w-1 lg:left-0 md:left-4">
                        {/* Full gray line */}
                        <div className="absolute inset-0 left-5 bg-slate-300 lg:left-0 md:left-1" />
                        {/* Colored progress line */}

                        <div
                            className="absolute top-0 left-5 w-full bg-gradient-to-b from-blue-400 to-[#087f9b] transition-all duration-300 md:left-1 lg:left-0"
                            style={{ height: `${lineHeight}%` }}
                        />
                    </div>






                    {timelineData.map((event, index) => (
                        <div
                            key={index}
                            className="timeline-section mb-12 md:mb-20 relative "
                        >
                            {/* Timeline Icon - On the left line */}
                            <div className="absolute -left-0 md:-left-4 lg:-left-8 top-8 timeline-icon">
                                <div
                                    className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 transition-all duration-500 ${activeSection === index
                                        ? 'border-white scale-125 shadow-2xl'
                                        : 'border-slate-200 scale-100'
                                        }`}
                                >
                                    <div
                                        className={`w-18 h-18 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] flex items-center justify-center text-center text-white transition-all duration-500 ${activeSection === index
                                            ? ' animate-pulse'
                                            : ''
                                            }`}
                                        style={{
                                            // boxShadow: activeSection === index
                                            //     ? '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)'
                                            //     : 'none'
                                        }}
                                    >
                                        {event.year}
                                    </div>
                                </div>
                                {/* Light beam effect */}
                                {activeSection === index && (
                                    <div
                                        className="absolute inset-0 rounded-full animate-ping opacity-75"
                                        style={{
                                            background: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)`
                                        }}
                                    />
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="ml-20 md:ml-24 lg:ml-28">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Content Card */}
                                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] text-white mb-4`}>
                                            <span className="font-bold text-sm">{event.year}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-800">{event.period}</h3>
                                        <p className="text-lg text-slate-500 mb-6 font-medium">{ }</p>
                                        <ul className="space-y-3">
                                            {event.description.map((item, i) => (
                                                <li key={i} className="text-slate-600 text-base flex items-start gap-3">
                                                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Image Card */}
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                        <div className="relative group w-full h-64 md:h-full">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full min-h-64 object-cover transform group-hover:scale-120 transition-transform duration-700"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default LakeStoryMap;