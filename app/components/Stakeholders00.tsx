'use client'

import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from './Heading';

gsap.registerPlugin(ScrollTrigger);

const Stakeholders = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);   // NEW → single pin wrapper
  const imgRef = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const boxendRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentSpot, setCurrentSpot] = useState("none");
  const [maskSize, setMaskSize] = useState({ width: 280, height: 280 });
  const [isMobile, setIsMobile] = useState(false);

  const spotlightData = [
    {
      id: 'biodiversity',
      title: 'Biodiversity',
      image: '/biodiversity_1.png',
      description:
        "Venkateshpura Lake – stagnant and overrun by invasives and waste, still supported life. Grey-headed swamphens, Eurasian coots and Black-winged stilts went about their business as usual, while a few cormorants lingered. Introduced fish survived though native ones had vanished. Rock agamas basked, geckos slipped through crevices, butterflies flitted and keelbacks rippled the water. The lake’s flora was dominated by invasives.",
      position: { desktop: { x: "14%", y: "2%" }, mobile: { x: "20%", y: "0%" } }
    },
    {
      id: 'fisher',
      title: 'Fisher folk',
      image: '/fisher_1.png',
      description:
        "The lake, a traditional fishing ground, is periodically leased by the municipal body to local fisherfolk. The current leaseholder had stocked the lake with commercial fishes, such as Rohu and Catla. But the dense algal bloom and pollution rendered even these resilient fish vulnerable. As the lake’s health declined, so too did the fisherman’s fragile livelihood.",
      position: { desktop: { x: "28%", y: "4%" }, mobile: { x: "55%", y: "1%" } }
    },
    {
      id: 'residents',
      title: 'Residents',
      image: '/residents.png',
      description:
        "For residents, the small lake with its green grass, trees and rocky outcrops was an oasis amid the bustling city. The rocks held traces of history. Though never really maintained, the lake kept the neighbourhood cool and fresh. Gradually, however, development choked its inlets and outlets, transforming the wetland into a wasteland. The tipping point arrived when illegal burning consumed a tree to clear for development.",
      position: { desktop: { x: "42%", y: "3%" }, mobile: { x: "85%", y: "0%" } }
    },
    {
      id: 'researcher',
      title: 'Researchers',
      image: '/researcher.png',
      description:
        "Researchers emerged as key allies when residents sought support to save the lake. They contributed scientific expertise to restore its fading health, helping to strengthen and accelerate the community’s own vision for the lake. ",
      position: { desktop: { x: "40%", y: "25%" }, mobile: { x: "78%", y: "10%" } }
    },
    {
      id: 'gov',
      title: 'Government',
      image: '/bbmp.jpeg',
      description:
        "Venkateshpura Lake came under the management of Greater Bengaluru Authority in 2016. It faced several challenges like encroachments, quarrying, illegal dumping and algal bloom. Local conservation efforts to restore it, however, generated enough data and momentum that prompted government action. Krishna Byre Gowda, the local MLA and now the State Revenue Minister, publicly aligned himself with the restoration initiative. This move was crucial in galvanising all-rounded support for the lake’s revival.",
      position: { desktop: { x: "34%", y: "45%" }, mobile: { x: "60%", y: "25%" } }
    },
    {
      id: 'pastoralists',
      title: 'Pastoralists',
      image: '/pastorial_1.png',
      description:
        "The grassland flanking the lake had been the grazing grounds for cattle, sheep and goat, known locally as gomala. It was among the last remaining patches in the neighbourhood with easy access to grass and water. Pastoralists who brought their livestock here not only sustained their livelihoods but supplied milk to the surrounding city.",
      position: { desktop: { x: "15%", y: "35%" }, mobile: { x: "22%", y: "15%" } },
      hasItalic: true
    },
    {
      id: 'migrant',
      title: 'Migrants',
      image: '/migrant.jpg',
      description:
        'Migrant workers living nearby, who otherwise had to scout around for water to wash their clothes and vessels, could access the open and unfenced lake. Their children were always up for a quick dip, especially with plenty of rocks serving as diving boards.',
      position: { desktop: { x: "5%", y: "15%" }, mobile: { x: "1%", y: "10%" } }
    }
  ];

  const getMaskPosition = (spot: string) => {
    const item = spotlightData.find(s => s.id === spot);
    if (!item) return { x: "-25%", y: "100%" };
    return isMobile ? item.position.mobile : item.position.desktop;
  };

  const pos = getMaskPosition(currentSpot);

  // Responsive mask
  useEffect(() => {
    const updateResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 640) setMaskSize({ width: 180, height: 180 });
      else if (width < 1024) setMaskSize({ width: 110, height: 110 });
      else setMaskSize({ width: 280, height: 280 });
    };

    updateResponsive();
    window.addEventListener('resize', updateResponsive);
    return () => window.removeEventListener('resize', updateResponsive);
  }, []);

  // Main GSAP logic – useLayoutEffect removes flicker
  useLayoutEffect(() => {
    const boxes = boxRefs.current.filter(Boolean);
    const wrapper = wrapperRef.current;
    const boxend = boxendRef.current;

    if (!wrapper || !boxend || boxes.length === 0) return;

    const ctx = gsap.context(() => {
      boxes.forEach((box, index) => {
        ScrollTrigger.create({
          trigger: box,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setCurrentSpot(spotlightData[index].id),
          onEnterBack: () => setCurrentSpot(spotlightData[index].id),
          onLeave: () => {
            if (index === boxes.length - 1) setCurrentSpot("none");
          },
          onLeaveBack: () => {
            if (index === 0) setCurrentSpot("none");
          }
        });
      });

      // 👇 Smooth, flicker-free single pin
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 20%',
        endTrigger: boxend,
        end: 'bottom 80%',
        pin: wrapper,
        pinSpacing: false,
        anticipatePin: 1,
        fastScrollEnd: true
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
         <Heading text='Stakeholders' />

      {/* WRAPPER that pins BOTH images */}
      <div
        ref={wrapperRef}
        className="absolute top-0 left-0 w-full h-screen"
      >
        {/* Dimmed Layer */}
        <div
          ref={imgRef2}
          className="absolute w-full h-full flex items-center justify-center md:justify-start"
        >
          <img
            src="stakeholders.png"
            alt="dimmed"
            className={`object-contain object-top w-full md:w-3/5 h-full px-4  transition-opacity duration-500 b ${
              currentSpot === 'none'
                ? 'brightness-100 opacity-100'
                : 'brightness-80 opacity-30'
            }`}
          />
        </div>

        {/* Masked Layer */}
        <div
          ref={imgRef}
          className="absolute w-full h-full flex items-center justify-center md:justify-start pointer-events-none"
          style={{
            ['--maskX' as string]: pos.x,
            ['--maskY' as string]: pos.y,
            maskImage: 'url(/spotl.png)',
            maskRepeat: 'no-repeat',
            maskPosition: 'var(--maskX) var(--maskY)',
            maskSize: `${maskSize.width}px ${maskSize.height}px`,
            transition: 'mask-position 0.4s ease-out'
          }}
        >
          <img
            src="stakeholders.png"
            alt="spotlight"
            className={`object-contain object-top w-full md:w-3/5 h-full px-4  transition-opacity duration-500 ${
              pos.y === '100%' ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col gap-100 pt-[100vh] px-4 md:px-12 lg:px-20 pb-20 items-center md:items-end max-w-3/2">

        {spotlightData.map((item, index) => (
          <div
            key={item.id}
            ref={el => { boxRefs.current[index] = el; }}
            className="bg-white/95 backdrop-blur-sm p-5 md:p-6 w-full md:w-[500px] lg:w-[550px] rounded-xl shadow-lg border border-gray-200"
          >
            <div className="relative w-full h-48 md:h-64 mb-3">
              <Image alt={item.title} src={item.image} fill className="object-cover" />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">{item.title}</h1>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              {item.hasItalic ? (
                <>
                  {item.description.split('gomala')[0]}
                  <i>gomala</i>
                  {item.description.split('gomala')[1]}
                </>
              ) : (
                item.description
              )}
            </p>
          </div>
        ))}

        <div ref={boxendRef} className="h-32 w-full" />
      </div>
    </div>
  );
};

export default Stakeholders;
