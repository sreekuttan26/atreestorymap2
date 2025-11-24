'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StoryStep {
    id: string;
    description: string;
    zoomX: number;     // percentage (0–100)
    zoomY: number;     // percentage (0–100)
    zoomScale: number; // e.g., 2.5 for strong zoom
}

const steps: StoryStep[] = [
    {
        id: 'step1',
        description: 'This area represents the lake\'s inflow zone, where seasonal water enters and nourishes the ecosystem.',
        zoomX: 30,
        zoomY: 40,
        zoomScale: 2.2,
    },
    {
        id: 'step2',
        description: 'Here you see the reed beds, a crucial habitat for migratory species.',
        zoomX: 65,
        zoomY: 55,
        zoomScale: 2.6,
    },
    {
        id: 'step3',
        description: 'The southern edge has undergone restoration efforts, improving ecological balance.',
        zoomX: 50,
        zoomY: 70,
        zoomScale: 2.3,
    },
];

export default function StoryMap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!imageRef.current || !containerRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=3000', // length of scroll area
                    scrub: true,
                    pin: true,
                },
            });

            steps.forEach((step) => {
                tl.to(imageRef.current, {
                    scale: step.zoomScale,
                    xPercent: -step.zoomX + 50,
                    yPercent: -step.zoomY + 50,
                    duration: 1,
                    ease: 'none',
                }).to(imageRef.current, {
                    scale: 1,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 1,
                    ease: 'none',
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full min-h-screen" ref={containerRef}>
            {/* Main Image */}
            <div className="fixed inset-0 overflow-hidden">
                <Image
                    ref={imageRef}
                    src="/svgs/Place_map.svg"
                    alt="StoryMap Image"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Steps Overlay */}
            <div className="relative z-10 flex flex-col">
                {steps.map((step) => (
                    <section
                        key={step.id}
                        className="h-screen flex items-center justify-start px-6 md:px-20"
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full md:w-1/2">
                            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                                {step.description}
                            </p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
