import React from "react";
import Image from "next/image";
import { whyApexConfig } from "@/data/whyApex";
import { Quote } from "lucide-react";

export function MissionPanel() {
  return (
    <div className="relative w-full h-full min-h-[600px] lg:min-h-full flex flex-col justify-end overflow-hidden group">
      {/* Background Image */}
      <Image
        src="/Images/Hero-img.png"
        alt="Our Mission"
        fill
        className="object-cover object-center lg:object-right transition-transform duration-1000 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />

      {/* Dark Navy Atmospheric Overlays */}
      <div className="absolute inset-0 bg-apex-navy-900/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-apex-navy-900 via-apex-navy-900/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-apex-navy-900/80 to-transparent" />

      {/* Decorative Orbit Lines */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.15] mix-blend-screen" aria-hidden="true">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="400" cy="0" r="150" stroke="#F8FAFC" strokeWidth="1" />
          <circle cx="400" cy="0" r="250" stroke="#F8FAFC" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="0" r="350" stroke="#F8FAFC" strokeWidth="1" />
        </svg>
        <div className="absolute top-[100px] right-[150px] w-2 h-2 rounded-full bg-apex-gold-500 shadow-sm animate-pulse" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16">
        
        {/* Mission Top Area */}
        <div className="mt-8 lg:mt-16 max-w-[400px]">
          <Quote className="w-12 h-12 text-apex-gold-500 mb-6 rotate-180 opacity-90" fill="currentColor" strokeWidth={0} />
          
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white leading-tight mb-8 whitespace-pre-line">
            {whyApexConfig.mission.text}
          </h2>
          
          <div className="w-12 h-[2px] bg-apex-gold-500 rounded-full" />
        </div>

        {/* Philosophy Strip */}
        <div className="mt-auto pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 rounded-2xl bg-apex-navy-900/40 backdrop-blur-md border border-white/5 p-6 lg:p-8">
            {whyApexConfig.mission.philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative flex flex-col group/item">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <Icon className="w-6 h-6 text-apex-gold-500 transition-transform duration-300 group-hover/item:-translate-y-1" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-medium text-sm lg:text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs lg:text-sm leading-relaxed max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                  {/* Vertical Separator for Desktop */}
                  {index < whyApexConfig.mission.philosophy.length - 1 && (
                    <div className="hidden sm:block absolute right-[-12px] lg:right-[-16px] top-4 bottom-4 w-px bg-white/10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
