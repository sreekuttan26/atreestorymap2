import React, { useEffect, useRef, useState } from 'react';

const Degradation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  const images = Array.from({ length: 5 }, (_, i) => `/${i + 1}Degradation.png`);

  const texts = [
   " With developmental activities, the lake had lost its natural connection with other lakes. ",
    "Water hyacinth took over large parts of the lake. Invasives like Lantana and Parthenium spread around the lake crippling its ecological balance.",
    "Large scale mining around the lake destroyed its natural rock formation. Quarrying destroyed  parts of the historical GTS structure",
    "Untreated sewage was released into the lake from neighbouring buildings. The water turned stagnant and green with algal bloom, killing fishes and other aquatic life.",
    "Plastic and cloth waste and construction debris added to the deterioration of the lake. ",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate overall scroll progress
      const scrollStart = -rect.top;
      const scrollEnd = rect.height - windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
      
      setProgress(scrollProgress);

      // Calculate which image should be shown based on scroll position
      const imageIndex = Math.min(
        images.length - 1,
        Math.floor(scrollProgress * images.length)
      );
      
      setCurrentImage(imageIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [images.length]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Fixed image container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <div 
          ref={imageContainerRef}
          className="relative w-full h-full"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={`degradation${img}`}
              alt={`Lake degradation scene ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{
                opacity: currentImage === i ? 1 : 0,
                pointerEvents: currentImage === i ? 'auto' : 'none'
              }}
            />
          ))}
          
          {/* Progress indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-8 md:w-12 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{
                    width: currentImage === i ? '100%' : currentImage > i ? '100%' : '0%'
                  }}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scrolling text content */}
      <div className="relative">
        {texts.map((text, i) => (
          <div
            key={i}
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10"
          >
            <div className="max-w-2xl w-full">
              <div
                className={`
                  text-base sm:text-lg md:text-xl 
                  leading-relaxed
                  transform transition-all duration-700
                  ${text.length > 1
                    ? 'bg-[#a6af64]/95 text-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl'
                    : ''
                  }
                `}
                style={{
                  opacity: Math.abs(currentImage - i) <= 1 ? 1 : 0.3,
                  transform: currentImage === i 
                    ? 'scale(1) translateY(0)' 
                    : currentImage > i 
                    ? 'scale(0.95) translateY(-20px)'
                    : 'scale(0.95) translateY(20px)'
                }}
              >
                {text}
              </div>
            </div>
          </div>
        ))}
        
        {/* Extra space at the end */}
        <div className="h-screen" />
      </div>
    </div>
  );
};

export default Degradation;

//;