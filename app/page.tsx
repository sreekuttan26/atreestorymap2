'use client';

import Image from "next/image";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import { useRef, useState, useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import History from "./components/History";
import Degradation from "./components/Degradation";
import Stakeholders from "./components/Stakeholders";
import BreakpointDisplay from "./components/BreakpointDisplay";
import Place from "./components/Place";
import Goal from "./components/Goal";
import Restoration from "./components/Restoration";
import Transformation from "./components/Transformation";
import Resources from "./components/Resources";
import Pagebreak from "./components/Pagebreak";
import Joininghands from "./components/Joininghands";
import Mascot from "./components/Mascot";
import Transformation2 from "./components/Transformation2";
import StoryMapScroll from "./components/StoryMapScroll";
import Keyactors from "./components/Keyactors";
import PlaceZoom from "./components/PlaceZoom";
import Xy from "./components/Xy";
import Degradation_img from "./components/Degradation_img";
import Keyactor_spotlight from "./components/Keyactor_spotlight";
import Timeline from "./components/Timeline";
import BirdCursor from "./components/Birdcursor";
import NewBegining from "./components/NewBegining";
import Timeline2 from "./components/Timeline2";
import StoryWorldMap from "./components/StoryWorldMap";
import Hydrology from "./components/Hydrology";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const spacing = 'p-5 md:px-20 lg:px-40 md:pt-20  bg-white ';

  const sectionRefs = {
    Introduction: useRef(null),
    Place: useRef(null),
    History: useRef(null),
    Hydrology: useRef(null),
    Degradation: useRef(null),
    Key_Actors: useRef(null),
    Goal_Setting: useRef(null),
    Restoration: useRef(null),
    Transformation: useRef(null),
    Timeline: useRef(null),
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
    setLoading(false)

  }, []);

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


  const [showbird, setShowbird] = useState(false);

  const lockunloackbird = () => {
    setShowbird(!showbird);
  }

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setLoading(false);
        ScrollTrigger.refresh();
      }, 300); // slight delay for smoothness
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);





  return (
    <main className='w-full h-full flex flex-col '>


      <BreakpointDisplay />
      <BirdCursor showbird={showbird} />




      {/* banner */}
      <div className="w-full h-full">
        <Banner />
      </div>


      {/* navbar */}
      <div className="w-full h-full sticky top-0 z-100">
        <Navbar activeItem={activeSection} />
      </div>


      {/* introduction */}
      <div ref={sectionRefs.Introduction} className={`w-full h-full ${spacing} `} id="introduction">
        <Introduction />
      </div>

      {/* <div ref={sectionRefs.Place} className={`w-full h-full  `} id="place">
       <PlaceZoom/>
      </div> */}

      <Pagebreak image='/pagebreak_waterbird.png' />




      {/* place */}
      <div ref={sectionRefs.Place} className={`w-full h-full ${spacing} `} id="place">
        <Place />
      </div>

      <Pagebreak image='/pagebreak_rockagama.png' />



      {/* History */}
      <div ref={sectionRefs.History} className={`w-full h-full ${spacing}  `} id="history">
        <History />
      </div>

      <div ref={sectionRefs.Hydrology} className={`w-full h-full ${spacing}  `} id="hydrology">
        <Hydrology />
      </div>



      {/* Degradation */}
      <div ref={sectionRefs.Degradation} className={`w-full h-full `} id="degradation">
        <Degradation_img />
      </div>


      {/* Stakeholders */}
      <div ref={sectionRefs.Key_Actors} className={`w-full h-full  `} id="keyactors">
        <Keyactor_spotlight />
      </div>




      <Pagebreak image='/pagebreak_bufello.png' />

      <div className={`w-full h-full ${spacing} `} >
        <Joininghands />
      </div>

      <Pagebreak image='/pagebreak_hands.png' />



      {/* Goal Setting */}
      <div ref={sectionRefs.Goal_Setting} className={`w-full h-full ${spacing} `} id="goal">
        <Goal />
      </div>

      <Pagebreak image='/pagebreak_swan.png' />


      <div className={`w-full h-full ${spacing} `} >
        <Mascot lockunloackbird={lockunloackbird} lockedbird={showbird} />
      </div>


      {/* Restoration */}
      <div ref={sectionRefs.Restoration} className={`w-full h-full ${spacing} `} id="restoration">
        <Restoration />
      </div>

      <Pagebreak image='/pagebreak_roundboat.png' customclass="" />




      {/* Transformation */}
      <div ref={sectionRefs.Transformation} className={`w-full h-full px-2 `} id="transformation">
        <Transformation2 />
      </div>

      <Pagebreak image='/pagebreak_rock.png' />


      {/* <div ref={sectionRefs.Timeline} className={`w-full h-full  `} id="timeline">
        <Timeline/>
      </div> */}

      <div ref={sectionRefs.Timeline} className={`w-full h-full  `} id="timeline">
        <Timeline2 />
      </div>


      <div className={`w-full h-full  ${spacing}  `} id="newbegining">
        <NewBegining />
      </div>

      {/* Resources */}
      <div ref={sectionRefs.Resources} className={`w-full h-full  `} id="resources">
        <Resources />
      </div>

      <div className={`w-full h-full `} >
        <StoryWorldMap />
      </div>




      <div className='w-full h-[12px]'></div>


    </main>
  );
}
