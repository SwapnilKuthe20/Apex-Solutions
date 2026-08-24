"use client";

import React from "react";
import { EngineeringStepData } from "@/data/engineeringApproach";

export function EngineeringStepIcon({ 
  type, 
  isActive 
}: { 
  type: EngineeringStepData["iconType"];
  isActive: boolean;
}) {
  const iconClass = `w-10 h-10 transition-all duration-500 ${
    isActive ? "text-apex-navy-900 scale-105" : "text-slate-400 scale-100"
  }`;
  const accentClass = isActive ? "#f59e0b" : "#cbd5e1";

  switch (type) {
    case "discover":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="6" width="26" height="34" rx="3" />
          <path d="M14 14h14M14 20h10M14 26h8" />
          <circle cx="33" cy="33" r="7" fill="white" stroke="currentColor" strokeWidth="2.5" />
          <path d="M38 38l6 6" stroke={accentClass} strokeWidth="2.5" />
        </svg>
      );

    case "architect":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="30" height="30" rx="2" strokeDasharray="4 3" />
          <path d="M12 14h18v18H12z" />
          <path d="M18 23h6" stroke={accentClass} strokeWidth="2.5" />
          <path d="M38 6l4 4-20 20-5 1 1-5 20-20z" fill="white" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case "build":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <path d="M6 16h36" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="17" cy="12" r="1.5" fill="currentColor" />
          <path d="M18 24l-4 4 4 4" stroke={accentClass} strokeWidth="2.5" />
          <path d="M30 24l4 4-4 4" stroke={accentClass} strokeWidth="2.5" />
          <path d="M26 22l-4 12" stroke="currentColor" strokeWidth="2" />
        </svg>
      );

    case "deploy":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 32a9 9 0 0 1-1-17.9 14 14 0 0 1 27.5-2.2A9.5 9.5 0 0 1 37 32H12z" />
          <path d="M24 20v14" stroke={accentClass} strokeWidth="2.5" />
          <path d="M18 26l6-6 6 6" stroke={accentClass} strokeWidth="2.5" />
        </svg>
      );

    case "scale":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="28" width="6" height="12" rx="1" />
          <rect x="18" y="20" width="6" height="20" rx="1" />
          <rect x="28" y="14" width="6" height="26" rx="1" />
          <path d="M8 22l14-10 16-4" stroke={accentClass} strokeWidth="2.5" />
          <path d="M32 8h6v6" stroke={accentClass} strokeWidth="2.5" />
        </svg>
      );

    default:
      return null;
  }
}

interface EngineeringStepProps {
  step: EngineeringStepData;
  isActive: boolean;
  isCurrent: boolean;
  onClick?: () => void;
}

export function EngineeringStep({ 
  step, 
  isActive, 
  isCurrent,
  onClick 
}: EngineeringStepProps) {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col items-center text-center relative group cursor-pointer select-none"
    >
      {/* Circle Container */}
      <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border flex items-center justify-center relative transition-all duration-500 ${
        isCurrent 
          ? "border-amber-200/80 shadow-[0_12px_35px_-8px_rgba(245,158,11,0.2)] -translate-y-1.5" 
          : isActive 
          ? "border-slate-200/90 shadow-[0_8px_30px_-6px_rgba(8,30,66,0.08)] -translate-y-0.5" 
          : "border-slate-100/90 shadow-[0_4px_20px_-6px_rgba(8,30,66,0.04)]"
      }`}>
        
        {/* Partial Gold Arc on Upper-Right with animated strokeDashoffset */}
        <svg className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] pointer-events-none" viewBox="0 0 140 140">
          <path 
            d="M 70 8 A 62 62 0 0 1 132 70" 
            fill="none" 
            stroke="#f59e0b" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeDasharray="100"
            strokeDashoffset={isActive ? 0 : 100}
            className="transition-all duration-700 ease-out"
            style={{ opacity: isActive ? 1 : 0.15 }}
          />
        </svg>

        {/* Small Gold Connector Dot on Right Edge */}
        <div className={`w-2.5 h-2.5 rounded-full absolute top-1/2 -right-1 -translate-y-1/2 shadow-sm z-10 transition-all duration-500 ${
          isActive 
            ? "bg-apex-gold-500 scale-110 opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.6)]" 
            : "bg-slate-300 scale-90 opacity-40"
        }`} />

        {/* Gold Number Badge on Top-Left */}
        <div className={`w-8 h-8 rounded-full text-white font-bold text-[13px] flex items-center justify-center absolute -top-1 -left-1 shadow-md z-20 tracking-tight transition-all duration-500 ${
          isCurrent 
            ? "bg-apex-gold-500 scale-110 shadow-[0_4px_12px_rgba(245,158,11,0.4)]" 
            : isActive 
            ? "bg-apex-gold-500 scale-100 shadow-sm" 
            : "bg-slate-300 scale-95 opacity-60"
        }`}>
          {step.number}
        </div>

        {/* Step Icon */}
        <EngineeringStepIcon type={step.iconType} isActive={isActive} />
      </div>

      {/* Step Title */}
      <h3 className={`text-[18px] md:text-[20px] font-bold mt-5 mb-2 transition-colors duration-500 ${
        isActive ? "text-apex-navy-900" : "text-slate-400"
      }`}>
        {step.title}
      </h3>

      {/* Small Gold Underline */}
      <div className={`h-[2px] rounded-full mx-auto mb-3 transition-all duration-500 ${
        isActive ? "w-8 bg-apex-gold-500 opacity-100" : "w-4 bg-slate-200 opacity-40"
      }`} />

      {/* Step Description */}
      <p className={`text-[12.5px] md:text-[13px] leading-relaxed max-w-[210px] mx-auto whitespace-pre-line transition-colors duration-500 ${
        isActive ? "text-apex-slate-500" : "text-slate-400/80"
      }`}>
        {step.description}
      </p>
    </div>
  );
}
