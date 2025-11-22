'use client'
import React, { useEffect, useState } from 'react'

type probs = {
    update_img: (img: string) => void
}


interface StorySection {
    id: string;
    title: string;
    content: string | React.ReactNode;
    imageUrl: string;
}

const storySections: StorySection[] = [
    {
        id: '1',
        title: 'Improved Quality of Water ',

        content: (

            <div>

                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Water tests showed higher dissolved oxygen levels. </li>
                    <li>Invasive water hyacinth disappeared.</li>
                    <li>Native aquatic plants recovered. </li>
                    <li>Water surface became clear and free. </li>
                    <li>Algal blooms reduced considerably. </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap1.png'
    },
    {
        id: '2',
        title: 'Walking pathways along the lake ',

        content: (
            <div>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Uncemented pathways allow visitors to connect closely with the landscape. </li>
                    <li>Repurposed rocks along the pathway serve as canvases showcasing the lake’s biodiversity.</li>
                    <li>Artworks, retaining the natural texture of the rocks, help people anticipate what they might encounter at the lake. </li>
                    <li>Wood from lantana and trimmed Pongamia trees form mounds for the butterfly garden. </li>
                    <li>Repurposed tyres, debris and lantana serve as seats.</li>

                </ul>




            </div>
        ),


        imageUrl: '/plusmap2.png'
    },
    {
        id: '3',
        title: 'Introduction of native species',



        content: (

            <div>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Native fish species are once again part of the lake, thanks to the local fisherfolk. </li>
                    <li>Native plant species, prioritised for all vegetation efforts, thrive under people’s care.</li>
                    <li>Orchids that were carefully planted on trees bloom seasonally.</li>
                   

                </ul>


            </div>
        ),


        imageUrl: '/plusmap3.png'
    },
    {
        id: '4',
        title: ' Pollinators Thrive',



        content: (

            <div>

                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Carefully curated butterfly host and nectar plants, along with bee-friendly species, welcome diverse wildlife visitors.</li>
                    <li>Bee hotels provide ample nesting spaces for solitary bees. </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap4.png'
    },
    {
        id: '5',
        title: 'Biodiversity  Improves',


        content: (

            <div>
                  <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>Bird species, like cormorants, Oriental darters, stilts, ducks and even pelicans, throng to the lake in healthy numbers.</li>
                    <li>The floating islands are occasionally used by the resident water birds for nesting.  </li>
                    <li>The crowning moment, however, has been the return of the Pied kingfisher, which had vanished during the lake’s polluted years. </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap5.png'
    },
    {
        id: '6',
        title: 'Community Stewardship',


        content: (

            <div>
                  <ul className="list-disc px-4  mb-4 space-y-2">
                    <li>Sustained community-driven efforts transformed Venkateshpura Lake from a neglected waterbody into a vibrant socio-ecological space.</li>
                    <li>The lake attracts a lot of footfall and active daily use by residents. </li>
                    <li>The Lake Forum is well-informed about potential pollution sources and knows whom to alert during issues like algal blooms.</li>
                    <li>Members regularly document and share photos of birds, sunrises and sunsets, building pride and a sense of connection. </li>
                    <li>They participate in education programmes and attend stakeholder meetings, ensuring that citizen voices remain central to lake management.  </li>

                </ul>

            </div>
        ),


        imageUrl: '/plusmap6.png'
    }
];

const Accordion_transformation = ({ update_img }: probs) => {

    const [openId, setOpenId] = useState<string | null>(null);

    const toggleSection = (id: string, index:number) => {
        setOpenId(prev => (prev === id ? null : id));
        if(openId===null){
            update_img( storySections[index].imageUrl)

        }else{
            update_img( '/goal.png')
        }
         


    };

    useEffect(()=>{
       

        
    },[openId])

    return (
        <div className=" max-w-4xl mx-auto mt-0">
            <div className="text-center mt-12 pb-8">
                <p className="text-slate-400 text-sm">
                    Click on each section to expand and explore the story
                </p>
            </div>

            <div className="space-y-4">
                {storySections.map((section, index) => {
                    const isOpen = openId === section.id;

                    return (
                        <div
                            key={section.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl "
                        >
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleSection(section.id, index)}
                                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer z-100"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#087f9b] text-white flex items-center justify-center font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    <h2 className="md:text-xl text-sm font-bold text-slate-800">{section.title}</h2>
                                </div>
                                {/* Rotating Arrow */}
                                <div
                                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-slate-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6">
                                    {section.imageUrl && (
                                        <img
                                            src={section.imageUrl}
                                            alt={section.title}
                                            className="w-full h-64 object-cover rounded-lg mb-4"
                                        />
                                    )}
                                    <div className="text-slate-700 leading-relaxed text-sm">{section.content}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Accordion_transformation 
