import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const StoryMapScroll: React.FC = () => {
  const mapRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    gsapScript.async = true;

    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    scrollTriggerScript.async = true;

    document.body.appendChild(gsapScript);

    gsapScript.onload = () => {
      document.body.appendChild(scrollTriggerScript);
      
      scrollTriggerScript.onload = () => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        // Create timeline for each section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=400%',
            scrub: 1,
            pin: true,
          }
        });

        // Section 1: Zoom into North America
        tl.to(mapRef.current, {
          scale: 3,
          x: 350,
          y: 200,
          duration: 1,
          ease: 'power2.inOut'
        })
        .to('#content-1', { opacity: 1, duration: 0.3 }, '<')
        .to('#content-1', { opacity: 0, duration: 0.3 }, '>')
        
        // Section 2: Zoom out and into Europe
        .to(mapRef.current, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        })
        .to(mapRef.current, {
          scale: 3.5,
          x: -150,
          y: 180,
          duration: 1,
          ease: 'power2.inOut'
        })
        .to('#content-2', { opacity: 1, duration: 0.3 }, '<')
        .to('#content-2', { opacity: 0, duration: 0.3 }, '>')
        
        // Section 3: Zoom out and into Asia
        .to(mapRef.current, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        })
        .to(mapRef.current, {
          scale: 3.2,
          x: -500,
          y: 150,
          duration: 1,
          ease: 'power2.inOut'
        })
        .to('#content-3', { opacity: 1, duration: 0.3 }, '<')
        .to('#content-3', { opacity: 0, duration: 0.3 }, '>')
        
        // Section 4: Zoom out and into Australia
        .to(mapRef.current, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        })
        .to(mapRef.current, {
          scale: 4,
          x: -550,
          y: -200,
          duration: 1,
          ease: 'power2.inOut'
        })
        .to('#content-4', { opacity: 1, duration: 0.3 }, '<')
        .to('#content-4', { opacity: 0, duration: 0.3 }, '>')
        
        // Final: Zoom back out to full view
        .to(mapRef.current, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power2.inOut'
        });

        return () => {
          ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
        };
      };
    };

    return () => {
      document.body.removeChild(gsapScript);
      if (document.body.contains(scrollTriggerScript)) {
        document.body.removeChild(scrollTriggerScript);
      }
    };
  }, []);

  return (
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Explore the World</h1>
          <p className="text-2xl md:text-3xl mb-8">Scroll to discover amazing places</p>
          <div className="animate-bounce mt-8">
            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Story Map Container */}
      <div ref={containerRef} className="relative h-screen">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left side - SVG Map */}
          <div className="bg-slate-800 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <svg 
                ref={mapRef}
                viewBox="0 0 1000 500" 
                className="w-full h-full"
                style={{ transformOrigin: 'center center' }}
              >
                {/* Ocean */}
                <rect width="1000" height="500" fill="#1e3a5f"/>
                
                {/* North America */}
                <g id="north-america">
                  <path d="M 150 80 L 200 70 L 250 80 L 280 120 L 260 160 L 220 180 L 180 170 L 150 140 Z" fill="#22c55e"/>
                  <circle cx="200" cy="120" r="8" fill="#ef4444"/>
                  <text x="200" y="125" fontSize="12" fill="white" textAnchor="middle">📍</text>
                </g>
                
                {/* South America */}
                <path d="M 220 200 L 250 190 L 270 220 L 260 280 L 230 300 L 210 270 Z" fill="#84cc16"/>
                
                {/* Europe */}
                <g id="europe">
                  <path d="M 480 100 L 520 90 L 550 110 L 540 140 L 510 150 L 480 130 Z" fill="#f59e0b"/>
                  <circle cx="515" cy="120" r="8" fill="#ef4444"/>
                  <text x="515" y="125" fontSize="12" fill="white" textAnchor="middle">📍</text>
                </g>
                
                {/* Africa */}
                <path d="M 490 160 L 540 150 L 570 180 L 560 260 L 520 280 L 490 250 Z" fill="#eab308"/>
                
                {/* Asia */}
                <g id="asia">
                  <path d="M 580 80 L 700 70 L 780 90 L 800 130 L 750 160 L 680 150 L 600 140 Z" fill="#06b6d4"/>
                  <circle cx="700" cy="115" r="8" fill="#ef4444"/>
                  <text x="700" y="120" fontSize="12" fill="white" textAnchor="middle">📍</text>
                </g>
                
                {/* Australia */}
                <g id="australia">
                  <path d="M 750 280 L 820 270 L 850 310 L 830 340 L 770 350 L 740 320 Z" fill="#a855f7"/>
                  <circle cx="790" cy="310" r="8" fill="#ef4444"/>
                  <text x="790" y="315" fontSize="12" fill="white" textAnchor="middle">📍</text>
                </g>
                
                {/* Antarctica */}
                <ellipse cx="500" cy="450" rx="300" ry="40" fill="#e0f2fe"/>
              </svg>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="bg-slate-900 flex items-center justify-center p-8 relative">
            
            {/* Section 1 - North America */}
            <div id="content-1" className="absolute inset-0 flex items-center justify-center p-8 opacity-0">
              <div className="max-w-xl">
                <h2 className="text-5xl font-bold text-white mb-6">North America</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-4">
                  From the frozen tundra of Alaska to the tropical beaches of Mexico, North America showcases incredible geographic diversity.
                </p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="text-sm font-semibold">Location 1 of 4</span>
                </div>
              </div>
            </div>
            
            {/* Section 2 - Europe */}
            <div id="content-2" className="absolute inset-0 flex items-center justify-center p-8 opacity-0">
              <div className="max-w-xl">
                <h2 className="text-5xl font-bold text-white mb-6">Europe</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-4">
                  A continent rich in history, culture, and architectural marvels. From ancient ruins to modern metropolises.
                </p>
                <div className="flex items-center gap-2 text-orange-400">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-sm font-semibold">Location 2 of 4</span>
                </div>
              </div>
            </div>
            
            {/* Section 3 - Asia */}
            <div id="content-3" className="absolute inset-0 flex items-center justify-center p-8 opacity-0">
              <div className="max-w-xl">
                <h2 className="text-5xl font-bold text-white mb-6">Asia</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-4">
                  The world's largest continent, home to ancient civilizations, towering mountains, and bustling megacities.
                </p>
                <div className="flex items-center gap-2 text-cyan-400">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <span className="text-sm font-semibold">Location 3 of 4</span>
                </div>
              </div>
            </div>
            
            {/* Section 4 - Australia */}
            <div id="content-4" className="absolute inset-0 flex items-center justify-center p-8 opacity-0">
              <div className="max-w-xl">
                <h2 className="text-5xl font-bold text-white mb-6">Australia</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-4">
                  A land of unique wildlife, stunning coastlines, and vast outback wilderness. An island continent like no other.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-sm font-semibold">Location 4 of 4</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* End Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Journey Complete</h2>
          <p className="text-xl md:text-2xl text-slate-300">Thank you for exploring the world with us</p>
        </div>
      </section>
    </div>
  );
};

export default StoryMapScroll;