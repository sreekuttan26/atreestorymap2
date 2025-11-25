import React, { useEffect, useRef, useState } from 'react';

const Degradation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const images = Array.from({ length: 10 }, (_, i) => `degradation2/${i + 1}Degradation.png`);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the container
      const scrollStart = -rect.top;
      const scrollEnd = rect.height - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '200vh' }}>
      {/* Fixed image container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <div className="relative w-full h-full bg-white">
          {images.map((img, i) => {
            const imageStart = i / images.length;
            const imageEnd = (i + 1) / images.length;
            
            // Calculate opacity for smooth transitions
            let opacity = 0;
            if (scrollProgress >= imageStart && scrollProgress <= imageEnd) {
              const imageProgress = (scrollProgress - imageStart) / (imageEnd - imageStart);
              opacity = Math.min(1, imageProgress * 2); // Fade in during first half
            } else if (scrollProgress > imageEnd && i < images.length - 1) {
              const nextImageStart = imageEnd;
              const fadeOutProgress = (scrollProgress - nextImageStart) / (1 / images.length);
              opacity = Math.max(0, 1 - fadeOutProgress * 2); // Fade out during transition
            } else if (i === images.length - 1 && scrollProgress >= imageEnd) {
              opacity = 1; // Keep last image visible
            }

            return (
              <img
                key={i}
                src={img}
                alt={`Scene ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
                style={{ opacity }}
              />
            );
          })}
          
          {/* Progress bar */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div> */}

          {/* Image counter */}
          <div className="absolute top-8 right-8 text-white text-lg font-light">
            {Math.min(images.length, Math.floor(scrollProgress * images.length) + 1)} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Degradation;