'use client'
import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const ImageSlider = ({
  images,
  autoPlay = true,
  interval = 3000,
}: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);

  const total = images.length;

  useEffect(() => {
    if (!autoPlay || total <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, total]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full min-h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Previous */}
      {total > 1 && (
        <button
          onClick={() =>
            setCurrent((current - 1 + total) % total)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          ‹
        </button>
      )}

      {/* Next */}
      {total > 1 && (
        <button
          onClick={() =>
            setCurrent((current + 1) % total)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          ›
        </button>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === current
                  ? "bg-white"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
