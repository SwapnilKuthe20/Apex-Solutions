import React from "react";
import { engineeringApproachConfig, PrincipleItem } from "@/data/engineeringApproach";
import { ShieldCheck, Maximize2, Award, Users } from "lucide-react";

export function PrincipleIcon({ type }: { type: PrincipleItem["iconType"] }) {
  switch (type) {
    case "shield":
      return <ShieldCheck className="w-8 h-8 text-apex-navy-900 stroke-[1.75]" />;
    case "expand":
      return <Maximize2 className="w-7 h-7 text-apex-gold-500 stroke-[2]" />;
    case "award":
      return <Award className="w-8 h-8 text-apex-navy-900 stroke-[1.75]" />;
    case "users":
      return <Users className="w-8 h-8 text-apex-navy-900 stroke-[1.75]" />;
    default:
      return null;
  }
}

export function EngineeringPrinciples() {
  const { title, description, principles } = engineeringApproachConfig.principlesPanel;

  return (
    <div className="bg-[#f8fafd] border border-slate-100/90 rounded-[24px] md:rounded-[32px] p-6 md:px-8 md:py-7 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 max-w-6xl mx-auto shadow-[0_4px_25px_-4px_rgba(8,30,66,0.04)] mt-16 md:mt-20">
      
      {/* Left Block: Isometric Cube Icon + Title & Description */}
      <div className="flex items-center gap-4 lg:w-[28%] shrink-0">
        {/* Isometric Cube Icon */}
        <div className="w-16 h-16 rounded-full bg-apex-navy-900 flex items-center justify-center shadow-md shrink-0">
          <svg viewBox="0 0 100 100" className="w-9 h-9" fill="none">
            {/* 3D Isometric Connected Cubes in Apex Gold */}
            {/* Top cube */}
            <path d="M50 20 L68 30 L50 40 L32 30 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M32 30 L32 46 L50 56 L50 40 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M68 30 L68 46 L50 56 L50 40 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
            {/* Bottom-left cube */}
            <path d="M32 46 L14 56 L32 66 L50 56 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M14 56 L14 72 L32 82 L32 66 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
            {/* Bottom-right cube */}
            <path d="M68 46 L86 56 L68 66 L50 56 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M86 56 L86 72 L68 82 L68 66 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M32 82 L50 72 L68 82 L50 92 Z" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeLinejoin="round" />
          </svg>
        </div>

        <div>
          <h4 className="font-bold text-apex-navy-900 text-[16px] md:text-[17px] leading-tight whitespace-pre-line mb-1">
            {title}
          </h4>
          <p className="text-[11.5px] text-apex-slate-500 leading-tight whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="w-[1px] h-14 bg-slate-200/80 hidden lg:block" />

      {/* 4 Principle Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 flex-grow w-full lg:w-auto">
        {principles.map((item, index) => (
          <div key={item.id} className="flex items-start gap-3 relative">
            <div className="shrink-0 mt-0.5">
              <PrincipleIcon type={item.iconType} />
            </div>
            <div>
              <h5 className="font-bold text-apex-navy-900 text-[13.5px] leading-tight mb-1">
                {item.title}
              </h5>
              <p className="text-[11.5px] text-apex-slate-500 leading-snug">
                {item.description}
              </p>
            </div>
            
            {/* Divider between items (desktop only, except last) */}
            {index < principles.length - 1 && (
              <div className="hidden xl:block absolute right-0 top-1 bottom-1 w-[1px] bg-slate-200/60" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
