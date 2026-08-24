"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { heroConfig } from "@/data/hero";

interface HeroContentProps {
  eyebrowRef: React.RefObject<HTMLDivElement | null>;
  headlineRef: React.RefObject<HTMLHeadingElement | null>;
  copyRef: React.RefObject<HTMLParagraphElement | null>;
  ctasRef: React.RefObject<HTMLDivElement | null>;
  trustLogosRef: React.RefObject<HTMLDivElement | null>;
}

export function HeroContent({
  eyebrowRef,
  headlineRef,
  copyRef,
  ctasRef,
  trustLogosRef,
}: HeroContentProps) {
  // Process headline to wrap highlighted words
  const renderHeadline = useMemo(() => {
    let text = heroConfig.headline;
    
    heroConfig.highlightedWords.forEach(word => {
      text = text.replace(
        word,
        `<span class="text-apex-gold-500">${word}</span>`
      );
    });
    
    return text.split("\n").map((line, i) => (
      <span key={i} className="block whitespace-nowrap" dangerouslySetInnerHTML={{ __html: line }} />
    ));
  }, []);

  return (
    <div className="flex flex-col justify-center h-full w-full relative z-10 pt-8 pb-12 lg:py-0">
      <div ref={eyebrowRef} className="will-change-transform opacity-0 mb-4 lg:mb-6 flex items-center gap-4">
        <span className="w-12 h-[2px] bg-apex-gold-500" />
        <span className="text-apex-navy-800 font-bold text-[11px] lg:text-[12px] tracking-[0.15em] uppercase">
          {heroConfig.eyebrow}
        </span>
      </div>

      <h1 
        ref={headlineRef} 
        className="text-[36px] leading-[1.15] md:text-[40px] lg:text-[clamp(36px,3.2vw,50px)] font-bold text-apex-navy-900 tracking-[-0.02em] mb-5 lg:mb-6 will-change-transform opacity-0"
      >
        {renderHeadline}
      </h1>

      <p 
        ref={copyRef} 
        className="text-[15px] md:text-[16px] lg:text-[17px] text-apex-slate-500 leading-relaxed max-w-[480px] mb-6 lg:mb-8 will-change-transform opacity-0"
      >
        {heroConfig.description}
      </p>

      <div 
        ref={ctasRef} 
        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 will-change-transform opacity-0 mb-8 lg:mb-10"
      >
        <Link 
          href={heroConfig.primaryCta.href}
          className="group inline-flex items-center justify-center bg-apex-navy-900 hover:bg-apex-navy-800 text-white font-semibold text-[14px] lg:text-[15px] px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500"
        >
          {heroConfig.primaryCta.label}
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link 
          href={heroConfig.secondaryCta.href}
          className="group inline-flex items-center gap-3 bg-white hover:bg-apex-surface-50 border border-apex-border/60 text-apex-navy-900 font-semibold text-[14px] lg:text-[15px] px-5 py-3 lg:px-6 lg:py-3.5 rounded-lg transition-colors shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500"
        >
          <Play className="w-5 h-5 text-apex-navy-900" fill="currentColor" />
          {heroConfig.secondaryCta.label}
        </Link>
      </div>
      
      {/* Trust Logos Row */}
      <div ref={trustLogosRef} className="will-change-transform opacity-0">
        <p className="text-[10px] lg:text-[11px] font-bold text-apex-slate-400 tracking-[0.1em] uppercase mb-3">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>
        <div className="flex flex-wrap items-center gap-4 md:gap-5 lg:gap-7 opacity-60 grayscale mix-blend-multiply text-apex-navy-900">
          <div className="font-sans text-[15px] lg:text-[17px] font-bold tracking-tight">Google</div>
          <div className="font-sans text-[15px] lg:text-[17px] font-semibold tracking-tight">Microsoft</div>
          <div className="font-sans text-[17px] lg:text-[19px] font-black tracking-tighter">AWS</div>
          <div className="font-sans text-[15px] lg:text-[17px] font-bold tracking-tight">Meta</div>
          <div className="font-sans text-[15px] lg:text-[17px] font-bold tracking-tight">GitHub</div>
          <div className="font-sans text-[17px] lg:text-[19px] font-black tracking-tighter italic">hp</div>
        </div>
      </div>
    </div>
  );
}
