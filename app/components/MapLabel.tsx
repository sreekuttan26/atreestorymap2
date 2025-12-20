'use client';
import { useRef, useLayoutEffect, useState } from 'react';

type MapLabelProps = {
    text: string;
    activeitem: string;
    font_size: number;
    font_color: string;
};

export default function MapLabel({ text, activeitem, font_size, font_color }: MapLabelProps) {
  const textRef = useRef<SVGTextElement>(null);
  const [bbox, setBbox] = useState({ width: 0, height: 0 });

  const activeItemLength = activeitem.length;
  const fontsize = activeItemLength > 1 ?  font_size: 4;
  const fontcolor = activeItemLength > 1 ?  font_color: '#fff';
  

  useLayoutEffect(() => {
    if (textRef.current) {
      const { width, height } = textRef.current.getBBox();
      setBbox({ width, height });
    }
  }, [text]);

  const paddingX = 6;
  const paddingY = 4;

  return (
    <g >
      {/* Background */}
      <rect className={`${activeitem.length>1?'hidden':''}`}
        x={-(bbox.width / 2) - paddingX}
        y={-(bbox.height / 2) - paddingY}
        width={bbox.width + paddingX * 2}
        height={bbox.height + paddingY * 2}
        rx={5}
        ry={5}
        fill="rgba(0,0,0,0.6)"
      />

      {/* Dot */}
      <circle  className={`${activeitem.length>1?'hidden':''}`}
        cx={-(bbox.width / 2) - paddingX + 4}
        cy={0}
        r={2}
        fill="#38BDF8"
      />

      {/* Text */}
      <text className={`${activeitem.length>1?'text-[1px] text-black':''}`}
        ref={textRef}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: fontsize,
          fill: fontcolor,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {text}
      </text>
    </g>
  );
}
