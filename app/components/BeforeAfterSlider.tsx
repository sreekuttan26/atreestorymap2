import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const onMouseUp = () => handleMouseUp();
    const onTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const onTouchEnd = () => handleMouseUp();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className=" items-center justify-center py-4 flex  ">
      <div className="w-[90vw]  px-4 ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
          Before & After Comparison
        </h1>
        
        <div
          ref={containerRef}
          className="relative w-full aspect-video overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl cursor-col-resize select-none h-[70vh]"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 ">
            <img 
            src='./after_lake.png'
              alt="Before"
              className="w-full h-full object-cover"
            />
          
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
              <span className="text-xs sm:text-sm font-semibold text-slate-900">After</span>
            </div>
          </div>

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden "
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
            src='./before_lake.png'
              alt="Before"
              className="w-full h-full object-cover"
            />
          
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
              <span className="text-xs sm:text-sm font-semibold text-slate-900">Before</span>
            </div>
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform hover:scale-110">
              <div className="flex gap-1">
                <div className="w-0.5 h-5 bg-slate-900 rounded-full"></div>
                <div className="w-0.5 h-5 bg-slate-900 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center text-slate-400 text-sm sm:text-base">
          <p>Drag the slider or tap to compare</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;