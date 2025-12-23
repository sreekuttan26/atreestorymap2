'use client'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from './Heading'
import Bodytext from './Bodytext'
import Video from './Video'
import BeforeAfterSlider from './BeforeAfterSlider'
gsap.registerPlugin(ScrollTrigger)

const Transformation2 = () => {

    const items_Ref = useRef<HTMLDivElement[]>([]);
    const img_ref = useRef(null)
    const last_ref = useRef(null)
    const spacing = 'p-5 md:px-20 lg:px-40 md:pt-20  bg-white ';


    const storySections = [
        {
            id: '1',
            title: 'Improved quality of water ',

            content: (

                <div>

                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>Water tests show higher dissolved oxygen levels.</li>
                        <li>Invasive water hyacinth disappears.</li>
                        <li>Native aquatic plants recover.</li>
                        <li>The water surface becomes clear and weed-free.</li>
                        <li>Algal blooms reduce.</li>


                    </ul>

                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/waterquality_transformation.mp4" />


                </div>
            ),


            imageUrl: '/t1.png'
        },
        {
            id: '2',
            title: 'Walking pathways along the lake ',

            content: (
                <div>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>Uncemented pathways allow visitors to connect with the landscape.</li>
                        <li>Repurposed construction material and quarry waste serve as canvases showcasing the lake’s biodiversity.</li>
                        <li>Artworks, retaining the natural texture of the rocks, help people anticipate what they might encounter at the lake.</li>
                        <li>Repurposed tyres, debris and lantana serve as seating.</li>


                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/creatures%20on%20canvas.mp4" />




                </div>
            ),


            imageUrl: '/t2.png'
        },
        {
            id: '3',
            title: 'Introduction of native species',



            content: (

                <div>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>The local fisherfolk reintroduce native fish species.</li>
                        <li>Native plant species, prioritised for all planting efforts, thrive under people’s care.</li>
                        <li>Orchids planted on trees flourish.</li>



                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/INTRO_NATIVE_SPECIES.mp4" />





                </div>
            ),


            imageUrl: '/t3.png'
        },
        {
            id: '4',
            title: 'Pollinators thrive',



            content: (

                <div>

                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>Carefully curated butterfly host and nectar plants, along with bee-friendly species, welcome diverse wildlife visitors.</li>
                        <li>Solitary bees settle into the bee hotels.</li>
                        <li>A walk along bee hotels helps foster ‘beephilia’ – a fearless appreciation of these important pollinators.</li>


                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/pollinator_thrive_butterfly.mp4" />







                </div>
            ),


            imageUrl: '/t4.png'
        },
        {
            id: '5',
            title: 'Biodiversity improves',


            content: (

                <div>
                    <ul className="list-disc px-4 mb-4 space-y-2">
                        <li>Bird species, such as cormorants, oriental darters, black-winged stilts, ducks and even pelicans, throng the lake in healthy numbers.</li>
                        <li>The floating islands turn into nesting grounds for resident waterbirds.</li>
                        <li>The defining moment occurs when the pied kingfisher returns, recognising that the water is clear enough for it to dive and hunt.</li>


                    </ul>
                    <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/Biodiversity_transformation.mp4" />


                </div>
            ),


            imageUrl: '/t5.png'
        },
        {
            id: '6',
            title: 'Educational material',


            content: (

                <div className='flex flex-col gap-5'>
                    <ul className="list-disc px-4  mb-4 space-y-2">
                        <li>Researchers put together a pocket guide on the birds and butterflies of Venkateshpura.</li>
                        <li>A place-based educational kit, designed for youth engagement, outlines varied information such as the water cycle, lake health monitoring tips, methods for sampling flora and fauna, and the ecosystem services of the lake.</li>
                    </ul>

                    <div className='grid md:grid-cols-2 gap-4 h-[400px] md:h-[200px]'>
                        <a className='relative' href="https://drive.google.com/file/d/1gEIwSm-eO56r8aWUQsphZrbsxG9_PqHC/view?usp=drive_link" target="_blank">
                            <div className="bg-[url('/pocket_guide.jpg')] bg-cover bg-center  w-full h-full rounded-2xl shadow-2xl flex flex-col-reverse">
                                <div className='bg-[#087f9b]/80 text-center text-white rounded-b-xl p-2 hover:bg-[#087f9b]'>VENKATESHPURA Wetland Field Journal </div>

                            </div>




                        </a>
                        <a className='relative' href="https://drive.google.com/file/d/1fEqbJgRtwnJd1EpWRNumGC0Bzrv4mBX6/view?usp=drive_link" target="_blank">
                            <div className="bg-[url('/butterfly_guide.jpg')] bg-cover bg-center  w-full h-full rounded-2xl shadow-2xl flex flex-col-reverse">
                                <div className='bg-[#087f9b]/80 text-center text-white rounded-b-xl p-2 hover:bg-[#087f9b]'>Butterfly Field Guide </div>

                            </div>
                        </a>
                    </div>

                </div>
            ),


            imageUrl: '/t6.png'
        },
        {
            id: '7',
            title: 'Community-led conservation',


            content: (

                <div>
                    <ul className="list-disc px-4  mb-4 space-y-2">
                       
                        <li>Sustained community-driven efforts transform the lake from a neglected waterbody into a vibrant public space.</li>
                        <li>The lake attracts considerable daily footfall from the community. Even at noon, women can be seen sitting on the benches, enjoying the afternoon breeze.</li>
                        <li>The lake forum is well-informed about potential pollution sources and knows who to alert during issues like algal blooms.</li>
                        <li>Members regularly document and share photos of birds, sunrises and sunsets, building pride and a sense of connection.</li>
                        <li>Through the lake trust, residents take charge of emerging challenges.</li>
                        <li>The stage is set for a long-term, community-driven model of lake restoration.</li>



                    </ul>

                </div>
            ),


            imageUrl: '/t6.png'
        }
    ];




    const [current_map, Setcurrent_map] = useState('/t0.png')

    const [imageVisible, setImageVisible] = useState(true);

    const changeImage = (url: string) => {
        setImageVisible(false);
        setTimeout(() => {
            Setcurrent_map(url);
            setImageVisible(true);
        }, 100);
    };



    useEffect(() => {
        const imgEl = img_ref.current;
        const lastEl = last_ref.current;
        if (!imgEl || !lastEl) return;

        // Only pin on large screens and above
        const mm = gsap.matchMedia();

        mm.add("(min-width: 761px)", () => {
            ScrollTrigger.create({
                trigger: imgEl,
                start: "top 10%",
                endTrigger: lastEl,
                end: "bottom 70%",
                pin: imgEl,
                pinSpacing: true,
                scrub: true,
            });
        });

        return () => mm.revert();
    }, []);

    useEffect(() => {
        const imgEl = img_ref.current;
        const lastEl = last_ref.current;
        if (!imgEl || !lastEl) return;

        // Only pin on large screens and above

        items_Ref.current.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 50%",
                end: 'bottom 50%',
                onEnter: () => {
                    changeImage(storySections[index].imageUrl);
                },
                onEnterBack: () => {
                    changeImage(storySections[index].imageUrl);
                }
            });
        });





    }, []);


    useEffect(() => {
        const firstLast = document.querySelectorAll('.first-last');

        firstLast.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {
                    changeImage('/t0.png');
                },
                onEnterBack: () => {
                    changeImage('/t0.png');
                }
            });
        });

    }, []);




    return (
        <div className='w-full h-full'>
            <div className={`${spacing}`}>
                <Heading text='Transformation' />
            </div>
            <BeforeAfterSlider />

            {/* <Bodytext text={"Civilisations evolved around waterbodies. Be it a pond or a lake, a waterbody is a shared resource. For its communities, it sustains livelihoods, shapes cultural practices and supports ecological balance."} /> */}
            <div className='flex flex-col gap-2 relative w-full h-full'>
                <img ref={img_ref}
                    src={current_map}
                    className='w-full md:w-1/2  object-cover sticky top-10 bg-white md:bg-transparent  transition-opacity duration-700 ease-in-out opacity-100 z-10 md:top-20 md:mt-[1vh] '
                    alt='transformation image'
                    style={{ opacity: imageVisible ? 1 : 0 }}
                />


                <div ref={last_ref} className='flex flex-col  md:absolute md:right-0 md:items-end  w-full  md:top-[50vh] '>
                    <div className="first-last h-[10px]"></div>
                    {storySections.map((data, index) => (
                        <div ref={(el) => { if (el) items_Ref.current[index] = el }} key={index} className={`flex flex-col gap-2 bg-white rounded-xl shadow-xl border-gray-200 p-2 md:w-1/2 md:p-8  mb-10 ${data.id === 'migrant' ? 'md:mb-0' : 'md:mb-[20vh]'}`}>

                            <h1 className="w-full font-semibold color-b">{data.title}</h1>
                            <span className="text-sm leading-7">
                                {data.content}
                            </span>


                        </div>


                    ))}
                    <div className=" h-[30px]"></div>
                    {/* <div className='h-[50vh]'></div> */}

                </div>




            </div>
        </div>
    )
}

export default Transformation2