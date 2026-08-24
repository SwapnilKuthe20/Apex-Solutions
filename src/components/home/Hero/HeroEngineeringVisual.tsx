import Image from "next/image";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { Users, Code, Sparkles, LineChart, ArrowRight } from "lucide-react";

export function HeroEngineeringVisual() {
  const parallaxRef = useMouseParallax<HTMLDivElement>({ depth: 0.1 });
  const card1Ref = useMouseParallax<HTMLDivElement>({ depth: 0.25 });
  const card2Ref = useMouseParallax<HTMLDivElement>({ depth: 0.15 });
  const card3Ref = useMouseParallax<HTMLDivElement>({ depth: 0.35 });
  const card4Ref = useMouseParallax<HTMLDivElement>({ depth: 0.2 });

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-[580px] opacity-100 mt-10 lg:mt-0" 
      id="hero-visual-container"
    >
      {/* SVG Definitions for Custom Mask */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="heroShape" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.94 Q 0,1 0.06,1 L 0.94,1 Q 1,1 1,0.94 L 1,0.06 Q 1,0 0.94,0 L 0.24,0 Q 0.17,0 0.13,0.04 L 0.04,0.13 Q 0,0.17 0,0.24 L 0,0.94 Z" />
          </clipPath>
        </defs>
      </svg>
      
      {/* Decorative Background Curves (bottom) */}
      <svg className="absolute bottom-0 left-0 w-full h-[400px] -z-10 opacity-30 pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="xMidYMax slice">
        <path d="M-100,400 C150,350 350,450 900,200" stroke="var(--apex-slate-200)" strokeWidth="1" fill="none" />
        <path d="M-100,380 C200,300 400,400 900,150" stroke="var(--apex-slate-200)" strokeWidth="0.5" fill="none" />
      </svg>
      
      {/* Main Visual Composition */}
      <div ref={parallaxRef} className="relative w-[95%] lg:w-full max-w-[560px] aspect-[4/4.5] ml-auto mr-2 lg:mr-4 z-10">
        
        {/* Dot Pattern Background (anchored to upper-left of image) */}
        <div 
          className="absolute -top-8 -left-8 w-48 h-48 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-25 -z-20 pointer-events-none"
          style={{ backgroundSize: "18px 18px", maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)" }}
        />

        {/* Decorative SVG Outline with Gold Node */}
        <div className="absolute inset-0 -m-5 lg:-m-6 -z-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M 0,94 Q 0,100 6,100 L 94,100 Q 100,100 100,94 L 100,6 Q 100,0 94,0 L 24,0 Q 17,0 13,4 L 4,13 Q 0,17 0,24 L 0,94 Z" 
              stroke="var(--apex-slate-300)" 
              strokeWidth="0.4" 
              fill="none" 
            />
            {/* Gold node at bottom-left of contour */}
            <circle cx="3" cy="97" r="1.8" fill="var(--apex-gold-500)" />
          </svg>
        </div>

        {/* The Photograph */}
        <div 
          className="relative w-full h-full"
          style={{ clipPath: "url(#heroShape)", WebkitClipPath: "url(#heroShape)" }}
        >
          <Image
            src="/Images/Hero-img.png"
            alt="Apex Solutions Engineering Team"
            fill
            className="object-cover object-[55%_35%]"
            priority
          />
        </div>

        {/* Floating Card 1: Custom Software (Top Left) */}
        <div 
          ref={card1Ref} 
          className="absolute top-[5%] -left-[14%] xl:-left-[16%] bg-white/95 backdrop-blur-md px-4 py-3.5 rounded-xl shadow-[0_8px_30px_-8px_rgba(8,30,66,0.12)] border border-apex-border/30 z-20 w-[190px] lg:w-[200px]"
        >
          <div className="flex gap-2.5 mb-1.5">
            <div className="w-9 h-9 shrink-0 rounded-lg bg-apex-surface-50 flex items-center justify-center text-apex-gold-500">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-apex-navy-900 leading-tight">Custom Software<br/>Development</p>
            </div>
          </div>
          <p className="text-[11px] text-apex-slate-500 leading-snug mb-2">
            Scalable, secure &amp; future-ready solutions.
          </p>
          <div className="flex items-center gap-1 text-[10px] font-bold text-apex-navy-800 uppercase tracking-wider group cursor-pointer">
            Explore <ArrowRight className="w-2.5 h-2.5 text-apex-gold-500 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Floating Card 2: 150+ Experts (Top Right) */}
        <div 
          ref={card2Ref} 
          className="absolute top-[18%] -right-[10%] xl:-right-[12%] bg-apex-navy-900 px-4 py-3.5 lg:px-5 lg:py-4 rounded-xl shadow-[0_12px_30px_-8px_rgba(8,30,66,0.25)] border border-apex-navy-800 z-20"
        >
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[24px] lg:text-[28px] font-bold text-white leading-none mb-0.5">150+</p>
              <p className="text-[11px] lg:text-[12px] text-white/90 font-medium leading-tight">Experts<br/>On Board</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-apex-gold-500/20 flex items-center justify-center text-apex-gold-500">
              <Users className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Floating Card 3: AI & Automation (Bottom Left) */}
        <div 
          ref={card3Ref} 
          className="absolute bottom-[14%] -left-[12%] xl:-left-[14%] bg-white/95 backdrop-blur-md px-4 py-3.5 rounded-xl shadow-[0_8px_30px_-8px_rgba(8,30,66,0.12)] border border-apex-border/30 z-20 w-[190px] lg:w-[200px]"
        >
          <div className="flex gap-2.5 mb-1.5">
            <div className="w-9 h-9 shrink-0 rounded-lg bg-apex-gold-500/10 flex items-center justify-center text-apex-gold-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex items-center">
              <p className="text-[13px] font-bold text-apex-navy-900 leading-tight">AI &amp; Automation</p>
            </div>
          </div>
          <p className="text-[11px] text-apex-slate-500 leading-snug mb-2">
            Intelligent automation for smarter operations.
          </p>
          <div className="flex items-center gap-1 text-[10px] font-bold text-apex-navy-800 uppercase tracking-wider group cursor-pointer">
            Explore <ArrowRight className="w-2.5 h-2.5 text-apex-gold-500 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Floating Card 4: 98% Satisfaction (Bottom Right) */}
        <div 
          ref={card4Ref} 
          className="absolute -bottom-[4%] -right-[8%] xl:-right-[10%] bg-white/95 backdrop-blur-md px-4 py-3.5 lg:px-5 lg:py-4 rounded-xl shadow-[0_8px_30px_-8px_rgba(8,30,66,0.12)] border border-apex-border/30 z-20 flex items-center gap-3 lg:gap-4"
        >
          <div>
            <p className="text-[28px] lg:text-[32px] font-black text-apex-gold-500 leading-none mb-0.5">98%</p>
            <p className="text-[11px] lg:text-[12px] font-bold text-apex-navy-900 leading-tight">Client<br/>Satisfaction</p>
          </div>
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-apex-surface-50 flex items-center justify-center text-apex-gold-500">
            <LineChart className="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
        </div>

      </div>
    </div>
  );
}

