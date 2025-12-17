'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

type probs={
 
  showbird:boolean
}

export default function BirdCursor({showbird}:probs) {
  const birdRef = useRef<HTMLImageElement>(null);
  const [isLanded, setIsLanded] = useState(false);

  // 🕊️ Bird follows the cursor when flying
  useEffect(() => {
    const bird = birdRef.current;
    if (!bird) return;

    const moveBird = (e: MouseEvent) => {
      if (!isLanded) {
        gsap.to(bird, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', moveBird);
    return () => window.removeEventListener('mousemove', moveBird);
  }, [isLanded]);

  // 🌿 Detect landing sections
  useEffect(() => {
    const sections = document.querySelectorAll('.bird-landing');
    const sections_side = document.querySelectorAll('.bird-landing-side');

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => landBird(section as HTMLElement),
        onLeave: flyBird,
        onEnterBack: () => landBird(section as HTMLElement),
         onLeaveBack: flyBird,
      });
    });


    sections_side.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => landBird_side(section as HTMLElement),
        onLeave: flyBird,
        onEnterBack: () => landBird(section as HTMLElement),
         onLeaveBack: flyBird,
      });
    });





  }, []);

  const landBird = (section: HTMLElement) => {
    const bird = birdRef.current;
    if (!bird) return;

    setIsLanded(true);

    const rect = section.getBoundingClientRect();
    const perchX =  rect.left + rect.width / 2;
    const perchY =  rect.top + 80;
    

    gsap.to(bird, {
      x: perchX,
      y: perchY,
      duration: 1,
      ease: 'power3.out',
    });
  };

  const landBird_side = (section: HTMLElement) => {
    const bird = birdRef.current;
    if (!bird) return;

    setIsLanded(true);

    const rect = section.getBoundingClientRect();
    const perchX = rect.left + rect.width / 4;
    const perchY = rect.top + 80;

    gsap.to(bird, {
      x: perchX,
      y: perchY,
      duration: 1,
      ease: 'power3.out',
    });
  };

  const flyBird = () => {
    setIsLanded(false);
  };

  return (
    <img
      ref={birdRef}
      src={isLanded ? '/bird-sit.gif' : '/bird-fly.gif'}
      alt="bird cursor"
      className={`  pointer-events-none z-[9999] select-none  w-40 h-40 ${showbird?'fixed':'hidden'}`}
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
