'use client'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import Bodytext from './Bodytext'
import Accordion from './Accordion'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Restoration = () => {

    const steps = [
        {
            id: 1,
            title: "Assessing water quality and biodiversity",
            width: "w-3/4",
            content: (
                <span>

                    <span><b>Secchi Depth:</b> A 20-cm disc attached to a marked rope was lowered into the water to measure its clarity or transparency.                 </span>

                    <div className='mt-10'>
                        <span>
                            <b>Dissolved Oxygen:</b> A handheld probe with a meter and a sensor was used to measure the amount of dissolved oxygen available for aquatic life – plants, fish and other organisms.
                        </span>
                        <video
                            src="https://atree-communication.s3.amazonaws.com/Storymap_media/How%20healthy%20is%20your%20lake.mp4"
                            className="w-full rounded-xl mt-5 object-contain handle-video object-top "

                            muted
                            playsInline
                            controls
                            autoPlay


                        />

                    </div>

                    <div className='mt-10'>
                        <span>
                            <b>Shoreline Vegetation: </b>Shoreline vegetation was carefully planned and planted to filter run-off, absorb excess nutrients and provide shelter for small fish and zooplankton.

                        </span>
                        <video
                            src="https://atree-communication.s3.amazonaws.com/Storymap_media/biodiversity.mp4"
                            className="w-full max-h-[50vh]  rounded-xl mt-5 object-contain handle-video"

                            muted
                            playsInline
                            controls
                            autoPlay

                        />

                    </div>



                </span>
            ),

            creature: "/famingo.png",

        },
        {
            id: 2,
            title: "Identifying key issues to be tackled",
            width: "w-4/5",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Declined water quality with untreated sewage inflow.</li>
                        <li>Overgrowth of invasives, such as Lantana and Parthenium.</li>
                        <li>Loss of ecosystem services, like groundwater recharge and biodiversity.</li>
                        <li>Haven for illegal activities.</li>
                        <li>Inconducive for human use and recreation.</li>
                        <li>Need to involve local community.</li>
                    </ul>




                </span>
            ),

            creature: "/kingfisher.png",

        },
        {
            id: 3,
            title: "Lake clean-up",
            width: "w-6/7",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>The community pitched in to remove plastic, discarded clothes and other accumulated waste</li>
                        <li>The community pitched in to remove plastic, discarded clothes and other accumulated waste.</li>

                    </ul>

                </span>
            ),

            creature: "/rockagama.png",

        },
        {
            id: 4,
            title: "Installing Nature-based Solutions",
            width: "w-8/9",
            content: (
                <span>
                    <ul className="list-disc mb-4 space-y-2">
                        <li>An aerator was installed to increase the dissolved oxygen by circulating the water.</li>
                        <li>Six floating islands were installed with native vegetation like Cyperus, Typha and Centella Asiatica to help filter contaminants and prevent nutrient build-up.</li>
                        <li>Shoreline rehabilitation included removing water hyacinth and weeds along the shore, planting native species to facilitate soil stability and support biodiversity.</li>

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
            id: 5,
            title: "Rewilding with a mix of natives",
            width: "w-10/11",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Two butterfly mounds were created with host plants for caterpillars and nectar plants for adult butterflies.</li>
                        <li>A pocket guide to the butterflies of Venkateshpura Lake was also developed to help visitors identify and appreciate the butterflies.</li>
                        <li>A “bee hotel”, made of natural materials like dead wood, bamboo and twigs, was installed to attract solitary bees – non-aggressive and vital pollinators.</li>
                        <li>Around 200 aromatic plants were introduced to support wildlife and offer visitors a sensory-rich experience.</li>
                        <li>Uncemented walking trails were used in place of conventional paved paths to encourage slower, mindful walking. </li>
                        <li>Trails were designed to mimic the dry Deccan gardens with grasses that Bangalore historically had. </li>

                    </ul>


                </span>
            ),

            creature: "🦅",

        },
        {
            id: 6,
            title: "Formation of lake trust",
            width: "w-14/15",
            content: (
                <span>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Pressure from residents prompted action from the civic body to restore the lake.</li>
                        <li>When restoration efforts slowed, residents shifted focus to the protection of GTS Tower through rallies and collective actions.</li>
                        <li>They formed a trust – Chokkanahalli Sampigehalli Abhivriddhi Forum (CSAF) –  a move that brought significant media attention.</li>


                    </ul>



                </span>
            ),

            creature: "🦅",

        },
        {
            id: 7,
            title: "Participatory water quality monitoring",
            width: "w-full",
            content: (
                <span>
                    <h1 className="font-bold color-b p-2 ">Empower community</h1>
                    <ul className="list-disc px-2 mb-4 space-y-2">
                        <li>Films showing simple water quality steps, such as Secchi depth and Dissolved Oxygen tests, were made freely available. </li>
                        <li>Residents participated in all restoration activities, including water quality monitoring.</li>
                        <li>They became equipped and confident to take ownership of the lake’s responsibilities.</li>


                    </ul>

                </span>
            ),

            creature: "🦅",

        },

    ]

    const [activeitem, Setactiveitem]=useState('')


    

  useEffect(() => {
  if (typeof window === 'undefined') return; // Ensure code runs only on client

  const items = document.querySelectorAll<HTMLElement>('.item_container');

  const triggers: ScrollTrigger[] = [];

  items.forEach((element, index) => {
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 30%',
      end: 'bottom 30%',
      onEnter: () => Setactiveitem(steps[index].title),
      onEnterBack: () => Setactiveitem(steps[index].title),
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
                <div className="md:w-1/3">
                    <div className="md:sticky md:top-20 flex flex-col gap-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`bg-[#087f9b] ${step.width} ${activeitem===step.title?"bg-[#087f9b]":"md:bg-gray-400"}  rounded-xl p-2 md:p-4 text-white font-semibold`}
                            >
                                {step.title}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column: Accordion */}
                <div className="md:w-2/3 flex flex-col gap-5 md:gap-[40vh]">
                   {steps.map((step,index)=>(
                    <div key={index} className="p-4 border-2 bg-white px-6 rounded-xl shadow-xl border-gray-200 item_container">
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
