"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface TechnologyArchitectureProps {
  apexCoreRef: React.RefObject<SVGGElement | null>;
  pathsRef: React.MutableRefObject<(SVGPathElement | null)[]>;
  nodesRef: React.MutableRefObject<(SVGCircleElement | null)[]>;
  activeCategoryId: string | null;
}

export function TechnologyArchitecture({
  apexCoreRef,
  pathsRef,
  nodesRef,
  activeCategoryId
}: TechnologyArchitectureProps) {
  
  // Mapping categories to visual nodes around the core
  // 6 domains: 3 on left, 3 on right
  const layoutNodes = useMemo(() => {
    return [
      { id: "frontend", cx: 150, cy: 150 },
      { id: "backend", cx: 100, cy: 300 },
      { id: "databases", cx: 150, cy: 450 },
      { id: "cloud-devops", cx: 650, cy: 150 },
      { id: "mobile", cx: 700, cy: 300 },
      { id: "ai-data", cx: 650, cy: 450 },
    ];
  }, []);

  const coreCenter = { x: 400, y: 300 };

  return (
    <div className="relative w-full h-[600px] hidden lg:flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full drop-shadow-sm"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Orbit Rings (Background) */}
        <g stroke="#DCE3EC" strokeWidth="1" fill="none" opacity="0.4">
          <circle cx={coreCenter.x} cy={coreCenter.y} r="180" strokeDasharray="4 4" />
          <circle cx={coreCenter.x} cy={coreCenter.y} r="250" opacity="0.5" />
        </g>

        {/* 2. Connection Paths (Animated entrance) */}
        <g stroke="#081E42" strokeWidth="1.5" fill="none">
          {layoutNodes.map((node, index) => {
            const isActive = activeCategoryId === node.id;
            const isMuted = activeCategoryId !== null && !isActive;
            
            return (
              <path
                key={`path-${node.id}`}
                ref={(el) => { pathsRef.current[index] = el; }}
                d={`M ${node.cx} ${node.cy} Q ${node.cx + (coreCenter.x - node.cx) / 2} ${node.cy} ${coreCenter.x} ${coreCenter.y}`}
                className={cn(
                  "will-change-[stroke-dashoffset] transition-all duration-500",
                  isActive ? "stroke-apex-gold-500 stroke-[2.5px]" : "stroke-apex-navy-800",
                  isMuted ? "opacity-20" : "opacity-100"
                )}
              />
            );
          })}
        </g>

        {/* 3. Category Nodes */}
        <g>
          {layoutNodes.map((node, index) => {
            const isActive = activeCategoryId === node.id;
            
            return (
              <circle
                key={`node-${node.id}`}
                ref={(el) => { nodesRef.current[index] = el; }}
                cx={node.cx}
                cy={node.cy}
                r="6"
                fill={isActive ? "#D7AB11" : "#FFFFFF"}
                stroke={isActive ? "#D7AB11" : "#081E42"}
                strokeWidth="2"
                filter={isActive ? "url(#node-glow)" : undefined}
                className="will-change-transform transition-all duration-300 origin-center"
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              />
            );
          })}
        </g>

        {/* 4. Apex Core Center */}
        <g ref={apexCoreRef} className="will-change-transform origin-center" style={{ transformOrigin: `${coreCenter.x}px ${coreCenter.y}px` }}>
          <circle cx={coreCenter.x} cy={coreCenter.y} r="45" fill="#081E42" />
          <circle cx={coreCenter.x} cy={coreCenter.y} r="55" fill="none" stroke="#D7AB11" strokeWidth="1" strokeDasharray="2 4" />
          
          {/* Subtle Geometric A inside the core */}
          <path 
            d={`M${coreCenter.x} ${coreCenter.y - 15} L${coreCenter.x + 15} ${coreCenter.y + 15} L${coreCenter.x - 15} ${coreCenter.y + 15} Z`} 
            fill="none" 
            stroke="#D7AB11" 
            strokeWidth="2" 
          />
          <path 
            d={`M${coreCenter.x - 7} ${coreCenter.y + 5} L${coreCenter.x + 7} ${coreCenter.y + 5}`} 
            stroke="#D7AB11" 
            strokeWidth="2" 
          />
        </g>
      </svg>
    </div>
  );
}
