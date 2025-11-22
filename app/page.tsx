'use client';

import Image from "next/image";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import { useRef, useState, useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Place2 from "./components/Place2";
import History from "./components/History";
import Degradation from "./components/Degradation";
import Stakeholders from "./components/Stakeholders";
import BreakpointDisplay from "./components/BreakpointDisplay";
import Place from "./components/Place";
import Goal from "./components/Goal";
import Restoration from "./components/Restoration";
import Transformation from "./components/Transformation";
import Resources from "./components/Resources";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const spacing='p-5 md:px-20 lg:px-40 md:pt-20  bg-white ';

    const sectionRefs = {
    Introduction: useRef(null),
    Place: useRef(null),
    History: useRef(null),
    Degradation: useRef(null),
    Stakeholders: useRef(null),
    Goal_Setting: useRef(null),
    Restoration: useRef(null),
    Transformation: useRef(null),
    Resources: useRef(null),
  };


  // active section for navbar
  const [activeSection, setActiveSection] = useState('');

   useEffect(() => {  
     Object.entries(sectionRefs).forEach(([key, ref]) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(key.replace('_', ' ')),
        onEnterBack: () => setActiveSection(key.replace('_', ' ')),
      });
    });

   },[]);

   useEffect(() => {
  const videos = document.querySelectorAll<HTMLVideoElement>(".handle-video")

  const triggers: ScrollTrigger[] = []

  videos.forEach((video) => {
    const t = ScrollTrigger.create({
      trigger: video,
      start: "top bottom",      // when the video enters the bottom of viewport
      end: "bottom top",       // when the video leaves the top of viewport
      onEnter: () => video.muted = true,
      onLeave: () => video.pause(),
      onEnterBack: () => video.pause(),
      onLeaveBack: () => video.pause(),
    })

    triggers.push(t)
  })

  return () => {
    triggers.forEach(t => t.kill())
  }
}, [])





  return (
    <main className='w-full h-full flex flex-col '>

      <BreakpointDisplay/>
      


      {/* banner */}
      <div className="w-full h-full">
        <Banner/>
      </div>


      {/* navbar */}
      <div className="w-full h-full sticky top-0 z-100">
        <Navbar activeItem={activeSection} />     
      </div>


      {/* introduction */}
       <div ref={sectionRefs.Introduction} className={`w-full h-full ${spacing} `} id="introduction">
        <Introduction />
      </div>



      {/* place */}
       <div ref={sectionRefs.Place} className={`w-full h-full ${spacing} `} id="place">
        <Place />
      </div>



      {/* History */}
       <div ref={sectionRefs.History} className={`w-full h-full ${spacing} `} id="history">
       <History />
      </div>



      {/* Degradation */}
       <div ref={sectionRefs.Degradation} className={`w-full h-full `} id="degradation">
       <Degradation/>
      </div>


      {/* Stakeholders */}
       <div ref={sectionRefs.Stakeholders} className={`w-full h-full ${spacing} `} id="stakeholders">
        <Stakeholders/>
      </div>



      {/* Goal Setting */}
       <div ref={sectionRefs.Goal_Setting} className={`w-full h-full ${spacing} `} id="goal">
        <Goal />
      </div>



      {/* Restoration */}
       <div ref={sectionRefs.Restoration} className={`w-full h-full ${spacing} `} id="restoration">
        <Restoration />
      </div>



      {/* Transformation */}
       <div ref={sectionRefs.Transformation} className={`w-full h-full ${spacing} `} id="transformation">
        <Transformation />
      </div>


      {/* Resources */}
       <div ref={sectionRefs.Resources} className={`w-full h-full  `} id="resources">
        <Resources />
      </div>




      <div className='w-full h-[12px]'></div>


    </main>
  );
}
