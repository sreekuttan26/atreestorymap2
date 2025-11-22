'use client'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Stakeholders = () => {

    const items_Ref = useRef<HTMLDivElement[]>([]);
    const img_ref=useRef(null)
    const last_ref=useRef(null)

     const spotlightData = [
    {
      id: 'biodiversity',
      title: 'Biodiversity',
      image: '/biodiversity_1.png',
      description:
        "Venkateshpura Lake – stagnant and overrun by invasives and waste, still supported life. Grey-headed swamphens, Eurasian coots and Black-winged stilts went about their business as usual, while a few cormorants lingered. Introduced fish survived though native ones had vanished. Rock agamas basked, geckos slipped through crevices, butterflies flitted and keelbacks rippled the water. The lake’s flora was dominated by invasives.",
        map:'/stakeholdermap_biodiversity.png'
      
    },
    {
      id: 'fisher',
      title: 'Fisher folk',
      image: '/fisher_1.png',
      description:
        "The lake, a traditional fishing ground, is periodically leased by the municipal body to local fisherfolk. The current leaseholder had stocked the lake with commercial fishes, such as Rohu and Catla. But the dense algal bloom and pollution rendered even these resilient fish vulnerable. As the lake’s health declined, so too did the fisherman’s fragile livelihood.",
        map:'/stakeholdermap_fisher.png'
    
    },
    {
      id: 'residents',
      title: 'Residents',
      image: '/residents.png',
      description:
        "For residents, the small lake with its green grass, trees and rocky outcrops was an oasis amid the bustling city. The rocks held traces of history. Though never really maintained, the lake kept the neighbourhood cool and fresh. Gradually, however, development choked its inlets and outlets, transforming the wetland into a wasteland. The tipping point arrived when illegal burning consumed a tree to clear for development.",
     map:"stakeholdermap_residence.png" 
    },
    {
      id: 'researcher',
      title: 'Researchers',
      image: '/researcher.png',
      description:
        "Researchers emerged as key allies when residents sought support to save the lake. They contributed scientific expertise to restore its fading health, helping to strengthen and accelerate the community’s own vision for the lake. ",
      map:"/stakeholdermap_researcher.png" 
    },
    {
      id: 'gov',
      title: 'Government',
      image: '/bbmp.jpeg',
      description:
        "Venkateshpura Lake came under the management of Greater Bengaluru Authority in 2016. It faced several challenges like encroachments, quarrying, illegal dumping and algal bloom. Local conservation efforts to restore it, however, generated enough data and momentum that prompted government action. Krishna Byre Gowda, the local MLA and now the State Revenue Minister, publicly aligned himself with the restoration initiative. This move was crucial in galvanising all-rounded support for the lake’s revival.",
      map:"/stakeholdermap_gov.png" 
    },
    {
      id: 'pastoralists',
      title: 'Pastoralists',
      image: '/pastorial_1.png',
      description:
        "The grassland flanking the lake had been the grazing grounds for cattle, sheep and goat, known locally as gomala. It was among the last remaining patches in the neighbourhood with easy access to grass and water. Pastoralists who brought their livestock here not only sustained their livelihoods but supplied milk to the surrounding city.",
     map:"/stakeholdermap_pastorial.png" 
    },
    {
      id: 'migrant',
      title: 'Migrants',
      image: '/migrant.jpg',
      description:
        'Migrant workers living nearby, who otherwise had to scout around for water to wash their clothes and vessels, could access the open and unfenced lake. Their children were always up for a quick dip, especially with plenty of rocks serving as diving boards.',
      map:"/stakeholdermap_migrant.png" 
    }
  ];

  const [current_map, Setcurrent_map]=useState('/stakeholders.png')

  const [imageVisible, setImageVisible] = useState(true);

const changeImage = (url: string) => {
    setImageVisible(false);
    setTimeout(() => {
        Setcurrent_map(url);
        setImageVisible(true);
    }, 100);
};



useEffect(()=>{
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

useEffect(()=>{
  const imgEl = img_ref.current;
        const lastEl = last_ref.current;
        if (!imgEl || !lastEl) return;

        // Only pin on large screens and above
      
items_Ref.current.forEach((item, index) => {
    ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end:'bottom 50%',
        onEnter: () => {
            changeImage(spotlightData[index].map);
        },
        onEnterBack: () => {
            changeImage(spotlightData[index].map);
        }
    });
});
        
            
        

       
    }, []);



  return (
    <div className='w-full h-full'>
    <div className='flex flex-col gap-2 relative w-full h-full'>
        <img ref={img_ref}
        src={current_map}
        className='w-full md:w-2/3 object-contain sticky top-10 bg-white transition-opacity duration-700 ease-in-out opacity-100'
        alt='map image'
        style={{ opacity: imageVisible ? 1 : 0 }}
        />


        <div ref={last_ref} className='flex flex-col  md:absolute md:top-0 md:right-0 md:items-end  w-full  '>
            {spotlightData.map((data,index)=>(
                <div ref={(el)=>{if(el) items_Ref.current[index]=el}}  key={index} className={`flex flex-col gap-2 bg-white rounded-xl shadow-xl p-2 md:w-1/3 md:p-4  mb-10 ${data.id==='migrant'?'md:mb-0':'md:mb-[40vh]'}`}>
                    <img
                    src={data.image}
                    className='w-full h-[200px] object-cover '
                    />
                    <h1 className="w-full font-semibold color-b">{data.title}</h1>
                    <span className="text-sm leading-7">
                        {data.description}
                    </span>


                </div>

            ))}
            {/* <div className='h-[50vh]'></div> */}

        </div>



      
    </div>
    </div>
  )
}

export default Stakeholders


//  <div className="w-full h-full">
        //     <Heading text="Stakeholdres" />
        //     <Bodytext
        //         text={
        //             <span>
        //                 Where is Venkateshpura Lake?
        //             </span>
        //         }
        //     />

        //     <div className='relative w-full flex flex-col gap-2 md:flex-row' >
        //         <img 
        //             src='lake_drawing_ai.png'
        //             className='w-full object-contain sticky top-12'
        //         />

        //         <div  className='flex flex-col gap-5 mt-10 md:w-full md:absolute md:top-0 md:right-0   '>
        //             {spotlightData.map((item, index) => (
        //                 <div key={index} className={`w-full flex flex-col `}>
        //                     <div className='md:w-1/3 p-4 border-2 bg-white border-gray-200 shadow-xl rounded-xl flex flex-col gap-2 md:z-10'>


        //                         <img
        //                             src={item.image}
        //                             className="w-full h-[200px] object-cover"
        //                         />
        //                         <h1 className='color-b font-semibold'>{item.title}</h1>
        //                         <span className="text-sm leading-7">
        //                             {item.description}
        //                         </span>
        //                     </div>

        //                 </div>

        //             ))}

        //         </div>

        //     </div>


        // </div>
