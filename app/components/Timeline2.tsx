import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Bodytext from './Bodytext';
import ImageSlider from './ImageSlider';


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

    const timelineData = [
        {
            year: "2005-2010",
            period: "A Quiet Landscape",
            title: "The Beginning: A Clean Lake",
            description: <ul className="space-y-3">
                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Sampigehalli Lake, clean and clear, supports small-scale farming and dairy at Sampigehalli village
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />

                    <span>
                        Renamed Venkateshpura Lake as the village officially becomes Venkateshpura
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span
                        className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`}
                    />
                    <span>
                        Civic body plants native trees, erects partial fencing with community cooperation
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span
                        className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`}
                    />
                    <span>
                        Civic body gradually withdraws lake engagement
                    </span>
                </li>
            </ul>,

            color: "from-blue-400 to-[#087f9b]",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/2025_2010.JPG"]
        },
        {
            year: "2010-2014",
            period: "Urbanisation and crisis",
            title: "Community & Government Unite",
            description:
                <ul className="space-y-3">
                    <li className="text-slate-600 text-base flex items-start gap-3">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                        <span>
                            Built-up areas expand around the lake; sewage begins to drain in
                        </span>
                    </li>

                    <li className="text-slate-600 text-base flex items-start gap-3">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                        <span>
                            Residents repeatedly appeal to the elected local leader and civic body
                        </span>
                    </li>

                    <li className="text-slate-600 text-base flex items-start gap-3">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                        <span>
                            People file PILs; trace lake boundaries and buffer zones
                        </span>
                    </li>

                    <li className="text-slate-600 text-base flex items-start gap-3">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                        <span>
                            Residents procure official maps for watershed conservation
                        </span>
                    </li>
                </ul>


            ,


            color: "from-green-400 to-emerald-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/2014_2020.jpg"]
        },
        {
            year: "2014-2020",
            period: "Growing pressures",
            title: "Growing Pains",
            description: <ul className="space-y-3">
                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Apartments rise around the lake; sewage inflow intensifies
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Water hyacinth spreads; weeds overtake the bunds
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Cycle rally organised to save the lake
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Apartment associations join the movement
                    </span>
                </li>
            </ul>
            ,

            color: "from-orange-400 to-red-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/2010_2014.jpg"]
        },
        {
            year: "2020-2022",
            period: "COVID neglect and a turning point",
            title: "The Dark Years",
            description: <ul className="space-y-3">
                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Lake chokes under hyacinth during COVID
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Government body denotifies lake buffer for private buildings
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Community mobilisation intensifies
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Media takes note; residents again appeal to elected bodies
                    </span>
                </li>
            </ul>
            ,

            color: "from-green-400 to-green-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/2020_2022.JPG"]
        },
        {
            year: "2022",
            period: "Scientific restoration begins",
            title: "Crisis to Catalyst",
            description: <ul className="space-y-3">
                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Civic body recruits an infra company to implement design and part of the DPR
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        NGO ATREE joins hands, provides scientific inputs
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        ALCON Laboratories prepares detailed project report (DPR)
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        Restoration framework co-created with community
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        PLUS, a partner, develops expanded DPR
                    </span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>
                        VIMOS supports implementation of select design elements along with BBMP plans, draining, and dredging
                    </span>
                </li>
            </ul>
            ,

            color: "from-purple-400 to-pink-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/2022.jpg","https://atree-communication.s3.amazonaws.com/Storymap_media/2007.jpg"]
        },
        {
            year: "2022-2025",
            period: "Ecological and social restoration",
            title: "Hope Restored",
            description: <div className="space-y-6">

                {/* Rebuilding ecosystem */}
                <div>
                    <h3 className="text-slate-800 text-lg font-semibold mb-2">Rebuilding ecosystem</h3>
                    <ul className="space-y-3">
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Biodiversity surveys conducted</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Water monitored continuously</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Lantana removal initiated</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Butterfly trails established</span>
                        </li>
                    </ul>
                </div>











            </div>
            ,

            color: "from-blue-400 to-indigo-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/climber_over_lantana_seate_sm.jpg","https://atree-communication.s3.amazonaws.com/Storymap_media/2022_2025.jpg"]
        },

        {
            year: "2022 -2025",
            period: "",
            title: "0",
            description: <div className="space-y-6">



                {/* Community engagement and education */}
                <div>
                    <h3 className="text-slate-800 text-lg font-semibold mb-2">Community engagement and education</h3>
                    <ul className="space-y-3">
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Signages installed about GTS Tower and Temple</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Stakeholder meetings organised</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Nature education module developed</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Day and night walks conducted for community</span>
                        </li>
                    </ul>
                </div>



            </div>
            ,

            color: "from-blue-400 to-indigo-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/climber_over_lantana_seate_sm.jpg"]
        },
        {
            year: "2022 -2025",
            period: "",
            title: "0",
            description: <div className="space-y-6">





                {/* Design and innovation */}
                <div>
                    <h3 className="text-slate-800 text-lg font-semibold mb-2">Design and innovation</h3>
                    <ul className="space-y-3">
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>PLUS develops zoning and visualisation plans</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Tech-integrated nature-based solutions identified</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Plans roll for floating islands and aerators</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>VIMOS helps implement key design elements</span>
                        </li>
                    </ul>
                </div>




            </div>
            ,

            color: "from-blue-400 to-indigo-400",
           image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/climber_over_lantana_seate_sm.jpg"]
        },
        {
            year: "2022 -2025",
            period: "",
            title: "0",
            description: <div className="space-y-6">







                {/* Sustainable initiatives */}
                <div>
                    <h3 className="text-slate-800 text-lg font-semibold mb-2">Sustainable initiatives</h3>
                    <ul className="space-y-3">
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Lantana and tyres repurposed into seating</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Construction rubble used for biodiversity art</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Bee resort installed</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Pied kingfisher declared lake mascot</span>
                        </li>
                    </ul>
                </div>



            </div>
            ,

            color: "from-blue-400 to-indigo-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/climber_over_lantana_seate_sm.jpg"]
        },
        {
            year: "2022 -2025",
            period: "",
            title: "0",
            description: <div className="space-y-6">



                {/* Inclusive changes */}
                <div>
                    <h3 className="text-slate-800 text-lg font-semibold mb-2">Inclusive changes</h3>
                    <ul className="space-y-3">
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Grazing access maintained for villagers</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Edible grasses and summer water trough established</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Fishermen engaged in restoration process</span>
                        </li>
                        <li className="text-slate-600 text-base flex items-start gap-3">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                            <span>Native fishes reintroduced alongside commercial species</span>
                        </li>
                    </ul>
                </div>

            </div>
            ,

            color: "from-blue-400 to-indigo-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/climber_over_lantana_seate_sm.jpg"]
        },









        {
            year: "2023-2025",
            period: " A thriving common",
            title: "Transformation Unfolds",
            description: <ul className="space-y-3">
                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>Rock-based microhabitats created for reptiles</span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>Lake receives nearly seventy visitors daily</span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>Slow walk trails planned</span>
                </li>

                <li className="text-slate-600 text-base flex items-start gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                    <span>Visitor observation dashboard developed</span>
                </li>
            </ul>
            ,

            color: "from-teal-400 to-green-400",
            image: ["https://atree-communication.s3.amazonaws.com/Storymap_media/2023_2025.JPG"]
        },
        // {
        //     year: "",
        //     period: "Ecological and social restoration",
        //     title: "0",
        //     description: [
        //         "Rock based microhabitats created for reptiles.",
        //         " Daily footfall reaches fifty to seventy visitors.",
        //         "Slow walk trails planned.",
        //         "Visitor observation dashboard developed.",

        //     ],
        //     color: "from-green-400 to-lime-400",
        //     image: "https://atree-communication.s3.amazonaws.com/Storymap_media/2023_2025.JPG"
        // }
    ];

    const scrollToSection = (index: number) => {
        const section = document.querySelectorAll('.timeline-section')[index];
        section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
            <div className={`${spacing}`}>
                <Heading text='TimeLine' />
                <Bodytext text="Venkateshpura Nagar Lake Story (2005 to 2025)" />
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
                                    className={`w-20 h-20 rounded-full bg-white shadow-lg border-slate-200 scale-100 items-center justify-center border-4 transition-all duration-500 ${event.title === '0'
                                        ? 'hidden'
                                        : 'flex'
                                        }`}
                                >
                                    <div
                                        className={`w-18 h-18 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b]  items-center justify-center text-center text-white transition-all duration-500 ${event.title === '0'
                                            ? ' hidden'
                                            : 'flex'
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
                                            {event.description}
                                            {/* {event.description.map((item, i) => (
                                                <li key={i} className="text-slate-600 text-base flex items-start gap-3">
                                                    <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-[#087f9b] mt-2 flex-shrink-0`} />
                                                    <span>{item}</span>
                                                </li>
                                            ))} */}
                                        </ul>
                                    </div>

                                    {/* Image Card */}
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                        <div className="relative group w-full h-64 md:h-full">
                                            {/* <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full min-h-64 object-cover transform group-hover:scale-120 transition-transform duration-700"
                                            /> */}
                                            <ImageSlider
                                                images={event.image}
                                                autoPlay={false}
                                                interval={4000}
                                            />
                                            {/* <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-10 group-hover:opacity-20 transition-opacity`} /> */}
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