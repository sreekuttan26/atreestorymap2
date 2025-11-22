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
        <p className="mb-4">
          This can be achieved by the following steps:
        </p>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li><strong>Control sewage flow and waste dumping</strong></li>
          <li><strong>Ensure flow between lakes – inlet/outlet</strong></li>
          <li><strong>Install nature-based solutions like aerator, floating island</strong></li>
          <li><strong>Regular community-driven or automated water quality monitoring</strong></li>
        </ul>
      </div>
    ),
    imageUrl: 'https://thumbs.dreamstime.com/b/lake-water-india-good-soul-253792778.jpg'
  },
  {
    id: '2',
    title: 'Remove Invasives',
    content: (
      <div>
        <p className="mb-4">
          This can be achieved by the following steps:
        </p>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li><strong>Remove Lantana and other weeds.</strong></li>
          <li><strong>Create natural walking paths with native species.</strong></li>
          <li><strong>Plant native species suitable for the landscape.</strong></li>
        </ul>
      </div>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Conserve and Improve Ecosystem Services',
    content: (
      <div>
        <p className="mb-4">
          This can be achieved by the following steps:
        </p>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li><strong>Install bee resorts to support pollinator diversity.</strong></li>
          <li><strong>Grow food plants for solitary bees.</strong></li>
          <li><strong>Create a habitat for butterflies.</strong></li>
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
        <p className="mb-4">
          This can be achieved by the following steps:
        </p>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li><strong>Stop rock quarrying in the vicinity.</strong></li>
          <li><strong>Create awareness about the historical structure.</strong></li>
          <li><strong>Prevent further encroachments.</strong></li>
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
        <p className="mb-4">
          This can be achieved by the following steps:
        </p>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li><strong>Conduct community activities to encourage interaction with the lake.</strong></li>
          <li><strong>Familiarise people with different taxa through nature walks.</strong></li>
          <li><strong>Organise focused activities for school children.</strong></li>
          <li><strong>Design a socio-ecological system balancing human needs and biodiversity.</strong></li>
          <li><strong>Install informative signages.</strong></li>
          <li><strong>Arrange security services.</strong></li>
          <li><strong>Form a lake-support WhatsApp group to coordinate activities.</strong></li>
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
                  {section.imageUrl && (
                    <img
                      src={section.imageUrl}
                      alt={section.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}
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
