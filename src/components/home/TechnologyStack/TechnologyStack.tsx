"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { StackArchitecture } from "./StackArchitecture";
import { techStackConfig } from "@/data/techStack";
import { createTechStackIntroTimeline, createTechStackScrollSync, animateCategoryTransition } from "@/animations/technologyStack";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function TechnologyStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  
  const layerRef = useRef<HTMLDivElement>(null);
  const techItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollSync, setScrollSync] = useState<{ scrollToIndex: (idx: number) => void } | null>(null);

  const activeCategory = techStackConfig.categories[activeIndex];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = createTechStackIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        prefersReducedMotion
      );

      const sync = createTechStackScrollSync(
        pinnedContainerRef,
        techStackConfig.categories.length,
        activeIndex,
        setActiveIndex,
        prefersReducedMotion
      );
      
      setScrollSync(sync);

      return () => {
        intro.cleanup();
        if (sync && sync.cleanup) sync.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]); // Active index is explicitly NOT in dependency array so we don't kill ScrollTrigger on state change

  // Separate effect to animate layer transitions when activeIndex changes
  useEffect(() => {
    animateCategoryTransition(layerRef, techItemsRef, prefersReducedMotion);
  }, [activeIndex, prefersReducedMotion]);

  const handleCategoryClick = (index: number) => {
    if (prefersReducedMotion || window.innerWidth < 1024) {
      setActiveIndex(index);
    } else if (scrollSync && scrollSync.scrollToIndex) {
      scrollSync.scrollToIndex(index);
    }
  };

  return (
    <Section variant="white" className="py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      
      {/* Intro Header */}
      <Container className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-7 xl:col-span-8">
            <div ref={eyebrowRef} className="will-change-transform">
              <Eyebrow className="mb-6">{techStackConfig.eyebrow}</Eyebrow>
            </div>
            <h2 
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight will-change-transform"
            >
              {techStackConfig.headline}
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 xl:col-span-4 flex items-end">
            <p 
              ref={copyRef}
              className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform pb-2"
            >
              {techStackConfig.description}
            </p>
          </div>
        </div>
      </Container>

      {/* 
        Pinned Sync Area (Desktop) / Vertical Stack (Mobile) 
      */}
      <div ref={pinnedContainerRef} className="w-full relative lg:min-h-[700px]">
        <Container>
          
          {/* Desktop Split Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-12 h-[600px] items-center">
            
            {/* Left: Navigation Menu */}
            <div className="col-span-4 flex flex-col gap-2 relative z-10">
              {techStackConfig.categories.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(idx)}
                  className={cn(
                    "flex items-center justify-between w-full p-4 rounded-lg text-left transition-all duration-300 group",
                    activeIndex === idx 
                      ? "bg-apex-surface-50 text-apex-navy-800 shadow-sm border border-apex-border" 
                      : "text-apex-slate-500 hover:bg-apex-surface-50/50 hover:text-apex-navy-800"
                  )}
                  aria-pressed={activeIndex === idx}
                >
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "text-sm font-semibold tracking-widest transition-colors duration-300",
                      activeIndex === idx ? "text-apex-gold-500" : "text-apex-slate-400 group-hover:text-apex-gold-500"
                    )}>
                      {cat.number}
                    </span>
                    <span className="text-lg font-semibold tracking-wide">
                      {cat.title}
                    </span>
                  </div>
                  <ChevronRight className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    activeIndex === idx ? "opacity-100 translate-x-0 text-apex-gold-500" : "opacity-0 -translate-x-4"
                  )} />
                </button>
              ))}
            </div>

            {/* Middle/Right: Active Layer Info & Architecture Visual */}
            <div className="col-span-8 grid grid-cols-2 gap-12 relative z-10 h-[500px]">
              
              {/* Central Text/Tech Details */}
              <div 
                ref={layerRef}
                className="flex flex-col justify-center relative will-change-transform opacity-45"
              >
                <span className="text-sm font-semibold tracking-widest text-apex-gold-500 mb-4">
                  {activeCategory.number} — {activeCategory.title.toUpperCase()}
                </span>
                <p className="text-lg text-apex-navy-800 leading-relaxed mb-10 border-b border-apex-border pb-8">
                  {activeCategory.description}
                </p>
                
                <div className="flex flex-col gap-4">
                  {activeCategory.technologies.map((tech, idx) => (
                    <div 
                      key={tech.id} 
                      ref={(el) => { techItemsRef.current[idx] = el; }}
                      className="flex items-center gap-3 opacity-0 will-change-transform"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-apex-gold-500" />
                      <span className="text-base font-semibold text-apex-slate-500 hover:text-apex-navy-800 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Visual */}
              <div className="relative z-0 h-full">
                <StackArchitecture activeCategoryId={activeCategory.id} />
              </div>

            </div>
          </div>

          {/* Mobile Fallback: Standard Accordion/Stack */}
          <div className="lg:hidden flex flex-col gap-12 relative z-10 mt-8">
            <div className="w-full mb-8">
              <StackArchitecture activeCategoryId={activeCategory.id} />
            </div>

            <div className="flex flex-col gap-4">
              {techStackConfig.categories.map((cat, idx) => (
                <div key={cat.id} className="border border-apex-border rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => handleCategoryClick(idx)}
                    className={cn(
                      "flex items-center justify-between w-full p-6 text-left transition-all",
                      activeIndex === idx ? "bg-apex-surface-50 text-apex-navy-800 border-b border-apex-border" : "text-apex-slate-500"
                    )}
                    aria-expanded={activeIndex === idx}
                  >
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "text-sm font-semibold tracking-widest",
                        activeIndex === idx ? "text-apex-gold-500" : "text-apex-slate-400"
                      )}>
                        {cat.number}
                      </span>
                      <span className="text-lg font-semibold tracking-wide">
                        {cat.title}
                      </span>
                    </div>
                  </button>
                  
                  {activeIndex === idx && (
                    <div className="p-6 bg-white flex flex-col">
                      <p className="text-base text-apex-slate-500 mb-6 border-b border-apex-border pb-6">
                        {cat.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {cat.technologies.map(tech => (
                          <div key={tech.id} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-apex-gold-500" />
                            <span className="text-sm font-semibold text-apex-navy-800">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </Container>
      </div>

    </Section>
  );
}
