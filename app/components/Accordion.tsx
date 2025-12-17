'use client';

import React, { useState } from 'react';

interface StorySection {
  id: string;
  title: string;
  content: string | React.ReactNode;
  imageUrl?: string;
}

const storySections: StorySection[] = [
  {
    id: '1',
    title: 'Improve Water Quality',
    content: (
      <div>
       
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Control sewage flow and waste dumping.</li>
          <li>Ensure water from Venkateshpura Lake drains into Rachenahalli Lake. </li>
          <li>Install tech-integrated nature-based solutions, like floating islands for nutrients and aerators for oxygen.</li>
          <li>Conduct regular water quality monitoring with the community. </li>
          <li>Re-introduce native fish and other aquatic species.</li>
        </ul>
      </div>
    ),
    imageUrl: 'https://thumbs.dreamstime.com/b/lake-water-india-good-soul-253792778.jpg'
  },
  {
    id: '2_1',
    title: 'Address biodiversity loss',
    content: (
      <div>
        
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Prepare a systematic plan to assess and quantify the lake’s flora and fauna.</li>
          <li>Implement targeted interventions to restore ecological balance.</li>
          <li>Rebuild food webs and create conditions that enable the return of bird species that once thronged the lake.</li>
        </ul>
      </div>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Remove Invasives',
    content: (
      <div>
        
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Remove water hyacinth, Lantana and other weeds.</li>
          <li>Create natural, unpaved walking paths.</li>
          <li>Plant native species suitable for the landscape.</li>
        </ul>
      </div>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Attract pollinators',
    content: (
      <div>
        
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Install bee hotels to support pollinator diversity.</li>
          <li>Grow food plants for Solitary bees..</li>
          <li>Create butterfly garden patches.</li>
        </ul>
      </div>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Save the Historical GTS',
    content: (
      <div>
        
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Showcase the heritage significance of the structure.</li>
          <li>Halt rock quarrying.</li>
          <li>Be vigilant to further encroachments.</li>
        </ul>
      </div>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Build Lake Stewardship',
    content: (
      <div>
        
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Conduct community activities to inculcate a sense of ownership of the lake.</li>
          <li>Organise focused activities for neighbouring school children to familiarise them with the different taxa through nature walks and trails.</li>
          <li>Install informative signages to facilitate meaningful interaction with the lake.</li>
          <li>Form a lake-support group to connect local residents and coordinate activities.</li>
       
        </ul>
      </div>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
  }
];

export default function StoryMapAccordion() {
  const [openId, setOpenId] = useState<string| null>(null); // first open by default

 const toggleSection = (id: string) => {
  setOpenId(prev => (prev === id ? null : id));
};

  return (
    <div className=" max-w-4xl mx-auto mt-0">
      <div className="text-center mt-12 pb-8">
        <p className="text-slate-400 text-sm">
          Click on each section to expand and explore the story
        </p>
      </div>

      <div className="space-y-4">
        {storySections.map((section, index) => {
          const isOpen = openId === section.id;

          return (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl "
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer z-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#087f9b] text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h2 className="md:text-xl text-sm font-bold text-slate-800">{section.title}</h2>
                </div>
                {/* Rotating Arrow */}
                <div
                  className={`transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6">
                  {/* {section.imageUrl && (
                    <img
                      src={section.imageUrl}
                      alt={section.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )} */}
                  <div className="text-slate-700 leading-relaxed text-sm">{section.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
