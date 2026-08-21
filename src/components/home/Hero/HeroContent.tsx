"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { heroConfig } from "@/data/hero";

interface HeroContentProps {
  eyebrowRef: React.RefObject<HTMLDivElement | null>;
  headlineRef: React.RefObject<HTMLHeadingElement | null>;
  copyRef: React.RefObject<HTMLParagraphElement | null>;
  ctasRef: React.RefObject<HTMLDivElement | null>;
}

export function HeroContent({
  eyebrowRef,
  headlineRef,
  copyRef,
  ctasRef,
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
      <span key={i} className="block" dangerouslySetInnerHTML={{ __html: line }} />
    ));
  }, []);

  return (
    <div className="flex flex-col justify-center h-full max-w-2xl relative z-10 pt-24 pb-12 lg:py-0">
      <div ref={eyebrowRef} className="will-change-transform opacity-0 mb-6">
        <Eyebrow>{heroConfig.eyebrow}</Eyebrow>
      </div>

      <h1 
        ref={headlineRef} 
        className="text-[44px] leading-[1.05] md:text-[58px] lg:text-[72px] xl:text-[96px] font-semibold text-apex-navy-800 tracking-tight mb-8 will-change-transform opacity-0"
      >
        {renderHeadline}
      </h1>

      <p 
        ref={copyRef} 
        className="text-[17px] md:text-[20px] text-apex-slate-500 leading-relaxed max-w-[520px] mb-10 will-change-transform opacity-0"
      >
        {heroConfig.description}
      </p>

      <div 
        ref={ctasRef} 
        className="flex flex-wrap items-center gap-4 will-change-transform opacity-0"
      >
        <Button 
          variant="primary" 
          size="lg" 
          magnetic 
          withArrow 
          data-cursor="START"
        >
          {heroConfig.primaryCta.label}
        </Button>
        <Button 
          variant="secondary" 
          size="lg" 
          magnetic 
          data-cursor="EXPLORE"
        >
          {heroConfig.secondaryCta.label}
        </Button>
      </div>
    </div>
  );
}
