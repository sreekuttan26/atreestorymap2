'use client';

import { useRef, useEffect } from 'react';

interface MenuItem {
    name: string;
    link: string;
}

interface MenuBarProps {
    
    activeItem: string;
   
}

export default function Navbar({ activeItem }: MenuBarProps) {
    const menuItems = [
        { name: 'Introduction', link: '#introduction' },
        { name: 'Place', link: '#place' },
        { name: 'History', link: '#history' },
        { name: 'Degradation', link: '#degradation' },
        { name: 'Key Actors', link: '#keyactors' },
        { name: 'Goal Setting', link: '#goal' },
        { name: 'Restoration', link: '#restoration' },
        { name: 'Transformation', link: '#transformation' },
        { name: 'Resources', link: '#resources' },
    ];

    const scrollWithOffset = (id: string, offset: number = 100) => {
        const el = document.getElementById(id);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    };





    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const index = menuItems.findIndex((item) => item.name === activeItem);

        if (index !== -1 && itemRefs.current[index]) {
            itemRefs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [activeItem, menuItems]);

    return (
        <div className="w-full flex overflow-x-scroll justify-around items-centre px-6 py-4 bg-white shadow-md z-100260 gap-10 hide-scrollbar">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    ref={(el) => {
                        itemRefs.current[index] = el;
                    }}
                    className="flex items-centre flex-col gap-1 min-w-fit  "
                >
                    <a
                        href={item.link}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollWithOffset(item.link.replace('#', ''));
                        }}
                        className={`mx-4 text-sm font-medium text-grey-700 hover:text-[#087f9b] text-gray-700 border-0 ${
                            activeItem === item.name ? 'text-[#087f9b] border-b-2 border-[#087f9b]' : ''
                        }`}
                    >
                        {item.name}
                    </a>

                    {/* <div
                        className={` mx-4 w-[80px] bg-[#087f9b] h-[2px]  ${
                            activeItem === item.name ? 'flex' : 'hidden'
                        }`}
                    /> */}
                </div>
            ))}
        </div>
    );
}

