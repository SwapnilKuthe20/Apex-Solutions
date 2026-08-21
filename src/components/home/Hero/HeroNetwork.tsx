"use client";

interface HeroNetworkProps {
  pathsRef: React.MutableRefObject<(SVGPathElement | null)[]>;
}

export function HeroNetwork({ pathsRef }: HeroNetworkProps) {
  return (
    <g className="hero-network" stroke="#081E42" strokeWidth="1.5" fill="none" opacity="0.8">
      {/* Central Architecture Paths */}
      <path
        ref={(el) => { pathsRef.current[0] = el; }}
        d="M 100 500 C 150 500, 250 400, 300 400 L 450 400 C 500 400, 550 300, 600 300 L 800 300"
        className="will-change-[stroke-dashoffset]"
      />
      <path
        ref={(el) => { pathsRef.current[1] = el; }}
        d="M 200 600 L 250 600 C 300 600, 350 500, 400 500 L 550 500"
        className="will-change-[stroke-dashoffset]"
      />
      <path
        ref={(el) => { pathsRef.current[2] = el; }}
        d="M 450 400 C 500 400, 550 500, 600 500 L 750 500 C 800 500, 850 400, 900 400"
        className="will-change-[stroke-dashoffset]"
      />
      <path
        ref={(el) => { pathsRef.current[3] = el; }}
        d="M 300 200 L 400 200 C 450 200, 500 300, 550 300"
        className="will-change-[stroke-dashoffset]"
        stroke="#DCE3EC"
      />
      <path
        ref={(el) => { pathsRef.current[4] = el; }}
        d="M 600 300 C 650 300, 700 200, 750 200 L 850 200"
        className="will-change-[stroke-dashoffset]"
      />
      <path
        ref={(el) => { pathsRef.current[5] = el; }}
        d="M 100 300 L 250 300 C 300 300, 350 400, 400 400"
        className="will-change-[stroke-dashoffset]"
        stroke="#DCE3EC"
      />
    </g>
  );
}
