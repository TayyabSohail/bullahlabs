import type { SVGProps } from 'react';

/**
 * Harvard shield: crimson field, three open books reading VE · RI · TAS.
 * Drawn by hand so it stays crisp at any size and needs no asset request.
 */
export function HarvardShield({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 100 118'
      role='img'
      aria-label='Harvard University shield'
      className={className}
      {...props}
    >
      <path
        d='M6 4h88v58c0 27-19.5 45.5-44 52C25.5 107.5 6 89 6 62Z'
        fill='#A51C30'
      />
      <path
        d='M11 9h78v53c0 23.5-17 40-39 46.5C28 102 11 85.5 11 62Z'
        fill='none'
        stroke='#fff'
        strokeOpacity='.55'
        strokeWidth='1.5'
      />
      <Book x={17} y={20} label='VE' />
      <Book x={54} y={20} label='RI' />
      <Book x={35.5} y={58} label='TAS' />
    </svg>
  );
}

/** One open book, 29 wide by 22 tall, with its word on the pages. */
function Book({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d='M0 3c5-3 10-3 14.5 0 4.5-3 9.5-3 14.5 0v18c-5-2.5-10-2.5-14.5 0C10 18.5 5 18.5 0 21Z'
        fill='#fff'
      />
      <path d='M14.5 3v18' stroke='#A51C30' strokeWidth='1.2' />
      <text
        x='14.5'
        y='14.5'
        textAnchor='middle'
        fontFamily='Georgia, "Times New Roman", serif'
        fontWeight='700'
        fontSize={label.length > 2 ? 8 : 9}
        fill='#A51C30'
        letterSpacing='.5'
      >
        {label}
      </text>
    </g>
  );
}
