"use client";

interface EngineeringPathProps {
  goldPathRef: React.RefObject<SVGPathElement | null>;
  nodesRef: React.MutableRefObject<(SVGCircleElement | null)[]>;
}

export function EngineeringPath({ goldPathRef, nodesRef }: EngineeringPathProps) {
  // A sophisticated, serpentine architectural path
  // Start: (100, 100)
  // End: (100, 700)
  // Curves to x=300 in between to create an engineering feel, not just a straight line.
  
  const pathD = `
    M 100 100 
    C 100 175, 300 175, 300 250 
    C 300 325, 100 325, 100 400 
    C 100 475, 300 475, 300 550 
    C 300 625, 100 625, 100 700
  `.trim();

  // Coordinates for the 5 nodes that sit exactly on the path ends/inflection points
  const nodes = [
    { cx: 100, cy: 100 },
    { cx: 300, cy: 250 },
    { cx: 100, cy: 400 },
    { cx: 300, cy: 550 },
    { cx: 100, cy: 700 },
  ];

  return (
    <svg 
      viewBox="0 0 400 800" 
      className="w-full h-full drop-shadow-sm"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <filter id="active-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Base Path (Inactive) */}
      <path 
        d={pathD}
        fill="none"
        stroke="#DCE3EC"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Gold Path (Active Progress) */}
      <path 
        ref={goldPathRef}
        d={pathD}
        fill="none"
        stroke="#D7AB11"
        strokeWidth="3"
        className="will-change-[stroke-dashoffset]"
      />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`} className="origin-center" style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}>
          {/* Subtle outer ring */}
          <circle 
            cx={node.cx} 
            cy={node.cy} 
            r="12" 
            fill="none" 
            stroke="#DCE3EC" 
            strokeWidth="1"
            opacity="0.5"
          />
          {/* Main interactive dot */}
          <circle 
            ref={(el) => { nodesRef.current[i] = el; }}
            cx={node.cx} 
            cy={node.cy} 
            r="6" 
            fill="#FFFFFF" 
            stroke="#081E42"
            strokeWidth="2"
            className="will-change-transform transition-colors duration-300 origin-center"
            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          />
        </g>
      ))}
    </svg>
  );
}
