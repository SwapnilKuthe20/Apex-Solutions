"use client";

interface HeroNodesProps {
  nodesRef: React.MutableRefObject<(SVGCircleElement | null)[]>;
}

export function HeroNodes({ nodesRef }: HeroNodesProps) {
  // A configuration of node positions based on the network paths
  const nodes = [
    { cx: 300, cy: 400, r: 5, active: true },
    { cx: 450, cy: 400, r: 6, active: false },
    { cx: 600, cy: 300, r: 8, active: true, glow: true },
    { cx: 800, cy: 300, r: 5, active: false },
    { cx: 250, cy: 600, r: 4, active: false },
    { cx: 400, cy: 500, r: 7, active: true },
    { cx: 550, cy: 500, r: 6, active: false },
    { cx: 750, cy: 500, r: 5, active: false },
    { cx: 400, cy: 200, r: 4, active: false },
    { cx: 750, cy: 200, r: 6, active: true },
    { cx: 250, cy: 300, r: 5, active: false },
  ];

  return (
    <g className="hero-nodes will-change-transform">
      {/* Optional Soft Glows for active nodes */}
      <defs>
        <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {nodes.map((node, i) => (
        <circle
          key={i}
          ref={(el) => { nodesRef.current[i] = el; }}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill={node.active ? "#D7AB11" : "#FFFFFF"}
          stroke={node.active ? "#D7AB11" : "#081E42"}
          strokeWidth="2"
          filter={node.glow ? "url(#gold-glow)" : undefined}
          className="will-change-transform origin-center"
          style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
        />
      ))}
    </g>
  );
}
