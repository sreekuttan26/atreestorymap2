'use client';
import { FaMapMarkerAlt } from "react-icons/fa";


import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
} from 'react-simple-maps';
import { useEffect, useState } from 'react';
import MapLabel from './MapLabel';
import Bodytext from './Bodytext';
import Heading from "./Heading";

type Position = {
    coordinates: [number, number];
    zoom: number;
};

const geoUrl =
    'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

/* Story content mapped by ISO numeric country code */

const countryData: Record<string, { countryName: string; coordinates: [number, number]; zoom: number; story: React.ReactNode; img?: string; font_color: string, font_size: number }> = {

    '690': {
        countryName: 'Republic of Seychelles',
        coordinates: [55.4915, -4.6796],
        zoom: 6.2,
        story: <>
            The Republic of Seychelles is an archipelago of granitic and coral islands in the Indian
            Ocean, renowned for pristine beaches, coral reefs, and marine biodiversity. The islands
            play a significant role in ocean conservation, hosting important seabird colonies and
            extensive marine protected areas.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#000'
    },

    '480': {
        countryName: 'Mauritius',
        coordinates: [57.5522, -20.3484],
        zoom: 6,
        story: <>
            Mauritius is a volcanic island nation in the south-west Indian Ocean, surrounded by coral
            reefs, lagoons, and sandy beaches. Its ecosystems range from coastal wetlands to upland
            forests, and the island is globally recognised for its conservation history, including
            efforts to protect endemic species such as the Mauritius kestrel.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#000'
    },

    '598': {
        countryName: 'Papua New Guinea',
        coordinates: [143.9555, -6.3149],
        zoom: 4.2,
        story: <>
            Papua New Guinea is one of the world’s most culturally and biologically diverse countries,
            with rugged mountains, dense rainforests, and extensive coral reefs. Home to hundreds of
            Indigenous communities and languages, its landscapes remain among the least altered by
            large-scale development, supporting exceptional biodiversity and traditional ways of life.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#000'
    },


    '144': {
        countryName: 'Sri Lanka',
        coordinates: [80.7718, 7.8731],
        zoom: 4.8,
        story: <>
            Sri-- Lanka is a tropical island nation in the Indian Ocean, known for its rich biodiversity,
            ancient irrigation systems, and long history of human settlement. Despite its small size,
            the island contains rainforests, dry zone plains, montane ecosystems, and extensive coastal
            habitats, supporting a high level of endemic flora and fauna.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#000'
    },



    '356': {
        countryName: 'India',
        coordinates: [78.9629, 20.5937],
        zoom: 3.2,
        story: <>
            India is one of the world’s most ecologically and culturally diverse countries, ranging
            from the Himalayas in the north to tropical forests, wetlands, and long coastlines in the
            south. Its landscapes have been shaped by millennia of human–nature interaction, supporting
            rich biodiversity alongside dense settlements, agriculture, and living cultural traditions.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#fff'
    },



    '076': {
        countryName: 'Brazil',
        coordinates: [-51.9253, -14.2350],
        zoom: 2.8,
        story: <>
            Brazil is the largest country in South America and home to vast ecosystems including
            the Amazon rainforest, Cerrado savannahs, and extensive river systems. Its landscapes
            support exceptional biodiversity and play a critical role in global climate regulation,
            alongside a rich cultural mosaic shaped by Indigenous, African, and European histories.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#fff'
    },


    '800': {
        countryName: 'Uganda',
        coordinates: [32.2903, 1.3733],
        zoom: 4.5,
        story: <>
            Uganda lies at the heart of East Africa and is often referred to as the “Pearl of Africa”.
            It is characterised by fertile landscapes, large freshwater lakes, and diverse ecosystems
            ranging from savannahs to tropical forests. The country is a key source of the Nile River
            and supports rich wildlife alongside vibrant cultural traditions.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#fff'
    },


    '360': {
        countryName: 'Borneo',
        coordinates: [113.9213, -0.7893],
        zoom: 3,
        story: <>
            Indonesia is the world’s largest archipelago, stretching across Southeast Asia and Oceania.
            It is a global biodiversity hotspot, home to vast tropical rainforests, coral reefs,
            and iconic species such as orangutans, Komodo dragons, and birds of paradise.
            Human cultures across its thousands of islands have evolved in close connection
            with land, sea, and forest ecosystems.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#fff'
    },


    '834': {
        countryName: 'Tanzania',
        coordinates: [34.8888, -6.3690],
        zoom: 4,
        story: <>
            Tanzania is home to some of Africa’s most iconic landscapes, including the Serengeti plains,
            Mount Kilimanjaro, and the Zanzibar archipelago. Its ecosystems support extraordinary wildlife
            and long-standing human–environment relationships.
        </>,
        img: '/pins/pin0.png',
        font_size: 4,
        font_color: '#fff'
    },

    '222': {
        countryName: 'El Salvador',
        coordinates: [-88.8965, 13.7942],
        zoom: 15,
        story: <>
            <h1 className="font-semibold text-2xl w-full pt-2">More Trees, Less Water Stress</h1>
            <p className="pt-4 text-xl">Semi arid rural landscapes experiencing recurrent droughts, erratic rainfall, land degradation, and declining agricultural productivity.</p>
            <div className="w-full flex  gap-2 py-4 items-center">
                <FaMapMarkerAlt size={20} />

                <p>Dry Corridor, El Salvador</p>

            </div>

            <div className="flex  flex-col xl:flex-row gap-4 items-center ">
                <img
                    src="/world/elsalvador_1.jpg"
                    alt=""
                    className="w-full xl:w-1/2 h-[350px] rounded-lg object-cover "
                />

                <p className=" xl:w-1/2 px-4">
                    Prolonged drought and rainfall variability, combined with deforestation and soil degradation, have reduced soil moisture, groundwater recharge, and crop yields, increasing climate vulnerability for smallholder farming communities.
                </p>


            </div>

            <div className="flex  flex-col xl:flex-row gap-4  items-center">
                <div>
                    <h1 className='py-4 text-xl font-semibold '>What was done?</h1>
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
                    src="/world/elsalvador_2.jpg"
                    alt=""
                    className="w-full h-[350px] xl:w-1/2 object-cover rounded-lg "
                />



            </div>

            <div className="py-4">
                <h1 className="py-4 text-xl font-semibold">Approach</h1>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>
                        Landscape-scale, ecosystem-based adaptation linking farms, watersheds, and forest patches.
                    </li>
                    <li>
                        Participatory planning and implementation with farmers and local institutions.
                    </li>
                    <li>
                        Integration of traditional knowledge with technical and scientific support.
                    </li>
                </ul>
            </div>

            <div className="py-4">
                <h1 className="py-4 text-xl font-semibold">Why it worked</h1>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>
                        Strong community ownership, from nursery raising to long-term land stewardship.
                    </li>
                    <li>
                        Practices delivered multiple co-benefits, including water regulation, soil fertility, biodiversity, and livelihoods.
                    </li>
                    <li>
                        Alignment with national climate adaptation priorities and long-term financing.
                    </li>
                </ul>
            </div>

            <div className="py-4">
                <h1 className="py-4 text-xl font-semibold">Key outcomes</h1>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>
                        Improved water security and reduced drought stress.
                    </li>
                    <li>
                        Enhanced biodiversity and ecosystem connectivity.
                    </li>
                    <li>
                        Strengthened livelihood resilience and adaptive capacity.
                    </li>
                </ul>
            </div>

            <div className="py-4">
                <h1 className="py-4 text-xl font-semibold">Scalability &amp; relevance</h1>
                <ul className="list-disc px-4 mb-4 space-y-2">
                    <li>
                        A replicable nature-based solution for dryland and drought-prone regions.
                    </li>
                    <li>
                        Clear relevance for integrated soil–water–tree-based restoration in climate-vulnerable landscapes.
                    </li>
                </ul>
            </div>



        </>,
        img: '/pins/pin0.png',
        font_size: 1,
        font_color: '#000'
    },


}



export default function StoryWorldMap() {
    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-20  ';


    const [nonactive_color, setNonactive_color] = useState('#0EA5E9');



    const [activeCountry, setActiveCountry] = useState<string | null>(null);
    const [position, setPosition] = useState<Position>({
        coordinates: [0, 0],
        zoom: 1,
    });

    const handleCountryClick2 = (geo: any) => {
        const id = geo.id;
        if (!countryData[id]) return;

        setActiveCountry(id);

        setPosition(prev => ({
            ...prev,
            zoom: 1.5,
        }));

        setTimeout(() => {
            setPosition({
                coordinates: countryData[id].coordinates,
                zoom: countryData[id].zoom,
            });
        }, 300);
    };


    const handleCountryClick = (geo: any) => {
        const id = geo;

        if (!countryData[id]) return;

        setActiveCountry(id);
        setNonactive_color('#d5e2e6')
        setPosition(countryData[id].coordinates ? { coordinates: countryData[id].coordinates, zoom: countryData[id].zoom } : { coordinates: [0, 0], zoom: 1 });
        scrollWithOffset('#country_info');
    };

    useEffect(() => {

        scrollWithOffset('#country_info');

    }, [activeCountry]);

    const resetMap = () => {
        setActiveCountry(null);
        setPosition({ coordinates: [0, 0], zoom: 1 });
    };

    const handleWheel = (event: React.WheelEvent) => {
        // prevent zoom on scroll
        if (event.ctrlKey) {
            event.preventDefault();
        }
    };
    const scrollWithOffset = (id: string, offset: number = 600) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    };

    const roundCoord = (coord: number) => Math.round(coord * 1000) / 1000;

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;






    return (
        <div className="w-full bg-slate-100 flex items-center justify-center flex-col">
             <div className={`${spacing} w-full`}>
                <Heading text='Case studies' />
            </div>
           


            <div onWheel={handleWheel} className="relative w-full max-w-[85rem] bg-white rounded-xl shadow-xl ">
                <ComposableMap
                    projectionConfig={{ scale: 160 }} //160
                    className="w-full h-auto"
                >
                    <ZoomableGroup
                        center={position.coordinates}
                        zoom={position.zoom}

                        minZoom={1}
                        maxZoom={6}
                        smooth="true"
                    >
                        <Geographies geography={geoUrl}>
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo: any) => {
                                    const isActive = activeCountry === geo.id;
                                    const isinlist = Boolean(countryData[geo.id]);

                                    const graycolor = '#d5e2e6';
                                    const lightblue = '#5ecce6';
                                    const skyblue = nonactive_color;

                                    let country_bg = '#CBD5E1'
                                    if (isActive) {
                                        country_bg = "#0EA5E9"
                                    } else {
                                        if (countryData[geo]) {
                                            country_bg = "#000"
                                        }

                                    }

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onClick={() => handleCountryClick(geo.id)}
                                            className="cursor-pointer transition-colors"
                                            style={{
                                                default: {
                                                    fill: isActive ? '#087f9b' : isinlist ? skyblue : graycolor, // sky-500 if active
                                                    outline: 'none',
                                                    stroke: lightblue,
                                                    strokeWidth: 0.2,
                                                },
                                                hover: {
                                                    fill: isActive ? '#087f9b' : '#5ecce6',
                                                    outline: 'none',
                                                },
                                                pressed: {
                                                    fill: isActive ? '#087f9b' : graycolor,
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>

                        {Object.entries(countryData).map(([iso, data]) => (
                            <Marker
                                key={iso}
                                coordinates={[
                                    roundCoord(data.coordinates[0]),
                                    roundCoord(data.coordinates[1]),
                                ]}
                                onClick={() => handleCountryClick(iso)}
                            >
                                <MapLabel
                                    text={countryData[iso]?.countryName ?? ''}
                                    activeitem={activeCountry ? activeCountry : ""}
                                    font_size={countryData[iso]?.font_size ?? 1}
                                    font_color={countryData[iso]?.font_color ?? '#fff'}
                                />
                            </Marker>
                        ))}

                    </ZoomableGroup>
                </ComposableMap>


            </div>
            {activeCountry && (
                <div id='#country_info' className=" w-full max-w-[85rem] bg-white/95 backdrop-blur p-6 mt-2 flex flex-col ">

                    <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={resetMap}>
                        ← {countryData[activeCountry]?.countryName}
                    </h2>

                    <span className="text-sm text-slate-700 mb-4">
                        {countryData[activeCountry]?.story ?? 'Story content for this country will be added soon.'}
                    </span>

                    <div>


                        <button
                            onClick={resetMap}
                            className=" items-center w-auto px-4 py-2 text-sm font-medium rounded-lg bg-[#087f9b] text-white hover:bg-[#056379] transition"
                        >
                            ← Back to world
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}
