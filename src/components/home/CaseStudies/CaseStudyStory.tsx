"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { CaseStudyVisual } from "./CaseStudyVisual";
import { CaseStudyMeta } from "./CaseStudyMeta";
import { CaseStudyOutcome } from "./CaseStudyOutcome";
import { createCaseStudyReveal } from "@/animations/caseStudies";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";

interface CaseStudyStoryProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyStory({ caseStudy, index }: CaseStudyStoryProps) {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<(HTMLElement | null)[]>([]);
  
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveal = createCaseStudyReveal(
        containerRef,
        imageWrapperRef,
        imageInnerRef,
        textElementsRef,
        prefersReducedMotion
      );

      return () => {
        reveal.cleanup();
      };
    }, containerRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Alternate layout: Even index -> Image Left, Odd index -> Image Right (on desktop)
  const isImageRight = index % 2 !== 0;

  return (
    <article 
      ref={containerRef} 
      className="group py-16 md:py-24 lg:py-32 first:pt-0 border-b border-apex-border/20 last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Visual Side */}
        <div className={cn(
          "col-span-1 lg:col-span-6",
          isImageRight ? "lg:order-2" : "lg:order-1"
        )}>
          <CaseStudyVisual 
            ref={imageWrapperRef}
            imageInnerRef={imageInnerRef}
            imageSrc={caseStudy.image}
            altText={`Case Study: ${caseStudy.title}`}
          />
        </div>

        {/* Narrative Side */}
        <div className={cn(
          "col-span-1 lg:col-span-6 flex flex-col",
          isImageRight ? "lg:order-1" : "lg:order-2"
        )}>
          <div ref={(el) => { textElementsRef.current[0] = el; }} className="will-change-transform">
            <CaseStudyMeta 
              number={caseStudy.number} 
              industry={caseStudy.industry} 
              category={caseStudy.category} 
            />
          </div>

          <h3 
            ref={(el) => { textElementsRef.current[1] = el; }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-apex-navy-900 leading-[1.1] tracking-tight mb-6 will-change-transform"
          >
            {caseStudy.title}
          </h3>

          <p 
            ref={(el) => { textElementsRef.current[2] = el; }}
            className="text-[18px] md:text-[20px] text-apex-navy-800 leading-relaxed mb-8 font-medium will-change-transform"
          >
            {caseStudy.summary}
          </p>

          <div ref={(el) => { textElementsRef.current[3] = el; }} className="will-change-transform flex flex-col gap-6 text-apex-slate-600 mb-8">
            {caseStudy.challenge && (
              <div>
                <strong className="block text-[12px] uppercase tracking-wider text-apex-navy-900 mb-2">Challenge</strong>
                <p>{caseStudy.challenge}</p>
              </div>
            )}
            
            {caseStudy.approach && (
              <div>
                <strong className="block text-[12px] uppercase tracking-wider text-apex-navy-900 mb-2">Approach</strong>
                <p>{caseStudy.approach}</p>
              </div>
            )}
          </div>

          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <div ref={(el) => { textElementsRef.current[4] = el; }} className="will-change-transform flex flex-wrap gap-2 mb-8">
              {caseStudy.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-apex-slate-50 text-apex-slate-600 text-xs font-medium rounded border border-apex-border/50">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {caseStudy.outcomes && (
            <div ref={(el) => { textElementsRef.current[5] = el; }} className="will-change-transform">
              <CaseStudyOutcome outcomes={caseStudy.outcomes} />
            </div>
          )}

          {caseStudy.href && (
            <div ref={(el) => { textElementsRef.current[6] = el; }} className="will-change-transform mt-10">
              <Link 
                href={caseStudy.href}
                className="inline-flex items-center text-apex-navy-900 font-semibold group/link"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </article>
  );
}
