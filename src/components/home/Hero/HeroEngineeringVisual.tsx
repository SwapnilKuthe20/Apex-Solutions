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
      className="relative w-full h-full flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-[600px] opacity-100 mt-10 lg:mt-10 xl:mt-12" 
      id="hero-visual-container"
    >
      {/* 
        PRECISE VECTOR SILHOUETTE MATCHING ORIGINAL REFERENCE:
        - 45-degree upper-left step
        - 45-degree mid-left offset
        - 45-degree lower-right diagonal contour
        - Seamlessly rounded vertices
      */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="heroShape" clipPathUnits="objectBoundingBox">
            <path d="
              M 0.14, 0.20
              L 0.34, 0.20
              C 0.38, 0.20 0.42, 0.17 0.45, 0.13
              L 0.49, 0.05
              C 0.52, 0.01 0.56, 0.00 0.61, 0.00
              L 0.88, 0.00
              C 0.95, 0.00 1.00, 0.05 1.00, 0.12
              L 1.00, 0.48
              C 1.00, 0.56 0.96, 0.64 0.90, 0.72
              L 0.78, 0.88
              C 0.72, 0.96 0.65, 1.00 0.55, 1.00
              L 0.16, 1.00
              C 0.07, 1.00 0.00, 0.93 0.00, 0.84
              L 0.00, 0.62
              C 0.00, 0.56 0.03, 0.51 0.07, 0.47
              L 0.10, 0.43
              C 0.13, 0.40 0.14, 0.36 0.14, 0.32
              Z
            " />
          </clipPath>
        </defs>
      </svg>
      
      {/* Main Visual Composition - Scales seamlessly in width */}
      <div ref={parallaxRef} className="relative w-[100%] lg:w-[125%] xl:w-[135%] aspect-[1.12/1] ml-auto mr-0 z-10">
        
        {/* Dotted Pattern Background (situated above the upper-left card) */}
        <div 
          className="absolute -top-8 lg:-top-10 left-[6%] lg:left-[8%] w-28 lg:w-32 h-28 lg:h-32 bg-[radial-gradient(circle_at_center,var(--apex-slate-400)_1.5px,transparent_1.5px)] opacity-60 -z-20 pointer-events-none"
          style={{ backgroundSize: "16px 16px" }}
        />

        {/* 
          DECORATIVE SVG OUTLINE
          Sits exactly on the 0-100 coordinate space bounds. 
          vector-effect="non-scaling-stroke" guarantees a uniform stroke width. 
        */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* The decorative grey outline */}
            <path 
              d="
                M 0, 50
                C 0, 56 3, 51 7, 47
                L 10, 43
                C 13, 40 14, 36 14, 32
                L 14, 20
                L 34, 20
                C 38, 20 42, 17 45, 13
                L 49, 5
                C 52, 1 56, 0 61, 0
                L 88, 0
                C 95, 0 100, 5 100, 12
                L 100, 48
                C 100, 56 96, 64 90, 72
                L 78, 88
                C 72, 96 65, 100 55, 100
                L 16, 100
              " 
              stroke="var(--apex-slate-200)" 
              strokeWidth="2" 
              fill="none" 
              vectorEffect="non-scaling-stroke"
            />
            {/* The gold line transitioning at bottom-left */}
            <path
              d="
                M -6, 100
                L 16, 100
                C 7, 100 0, 93 0, 84
                L 0, 50
              "
              stroke="var(--apex-gold-500)"
              strokeWidth="2.5"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            {/* The gold endpoint node */}
            <circle cx="-6" cy="100" r="4.5" fill="var(--apex-gold-500)" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        {/* 
          THE PHOTOGRAPH
          Inset slightly to create the perfect uniform gap between the image boundary and the outer contour lines.
        */}
        <div 
          className="absolute inset-[14px] lg:inset-[18px]"
          style={{ clipPath: "url(#heroShape)", WebkitClipPath: "url(#heroShape)" }}
        >
          <Image
            src="/Images/Hero-img.png"
            alt="Apex Solutions Engineering Team"
            fill
            className="object-cover object-[55%_35%] lg:object-[48%_35%]"
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        </div>

        {/* Floating Card 1: Custom Software (Top Left) */}
        <div 
          ref={card1Ref} 
          className="absolute top-[6%] lg:top-[8%] -left-[2%] lg:-left-[1%] xl:left-[0%] bg-white p-5 lg:p-6 rounded-2xl shadow-[0_15px_35px_-5px_rgba(8,30,66,0.1)] border border-apex-border/40 z-20 w-[190px] lg:w-[220px]"
        >
          <div className="w-10 h-10 rounded-lg bg-apex-surface-50 flex items-center justify-center text-apex-gold-500 border border-apex-border/30 mb-3">
            <Code className="w-5 h-5" />
          </div>
          <p className="text-[14px] font-bold text-apex-navy-900 leading-tight mb-2">
            Custom Software<br/>Development
          </p>
          <p className="text-[11.5px] text-apex-slate-500 leading-snug mb-3">
            Scalable, secure &amp; future-ready solutions.
          </p>
          <div className="flex items-center justify-end text-apex-gold-500 cursor-pointer group">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Floating Card 2: 150+ Experts (Top Right) */}
        <div 
          ref={card2Ref} 
          className="absolute top-[16%] lg:top-[20%] -right-[4%] lg:-right-[2%] xl:-right-[4%] bg-apex-navy-900 px-5 py-4 lg:px-6 lg:py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(8,30,66,0.25)] border border-apex-navy-800 z-20"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-apex-navy-700 bg-transparent flex items-center justify-center text-apex-gold-500">
              <Users className="w-[22px] h-[22px]" />
            </div>
            <div>
              <p className="text-[26px] lg:text-[30px] font-bold text-white leading-none mb-1">150+</p>
              <p className="text-[12px] lg:text-[13px] text-white/90 font-medium leading-tight">Experts<br/>On Board</p>
            </div>
          </div>
        </div>

        {/* Floating Card 3: AI & Automation (Bottom Left) */}
        <div 
          ref={card3Ref} 
          className="absolute bottom-[16%] lg:bottom-[20%] -left-[8%] lg:-left-[6%] xl:-left-[6%] bg-white p-5 lg:p-6 rounded-2xl shadow-[0_15px_35px_-5px_rgba(8,30,66,0.1)] border border-apex-border/40 z-20 w-[190px] lg:w-[220px]"
        >
          <div className="w-10 h-10 rounded-lg bg-apex-surface-50 flex items-center justify-center text-apex-gold-500 border border-apex-border/30 mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-[14px] font-bold text-apex-navy-900 leading-tight mb-2">
            AI &amp; Automation
          </p>
          <p className="text-[11.5px] text-apex-slate-500 leading-snug mb-3">
            Intelligent automation for smarter operations.
          </p>
          <div className="flex items-center justify-end text-apex-gold-500 cursor-pointer group">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Floating Card 4: 98% Satisfaction (Bottom Right) */}
        <div 
          ref={card4Ref} 
          className="absolute bottom-[4%] lg:bottom-[6%] right-[4%] lg:right-[6%] xl:right-[8%] bg-white p-5 lg:p-6 rounded-2xl shadow-[0_15px_35px_-5px_rgba(8,30,66,0.1)] border border-apex-border/40 z-20 min-w-[170px]"
        >
          <p className="text-[32px] lg:text-[36px] font-black text-apex-gold-500 leading-none mb-1">98%</p>
          <p className="text-[12px] lg:text-[13px] font-bold text-apex-navy-900 leading-tight mb-3">Client Satisfaction</p>
          <svg className="w-full h-7" viewBox="0 0 100 24" fill="none">
            <path 
              d="M 2 18 Q 18 4, 34 16 T 66 10 T 96 4" 
              stroke="var(--apex-gold-500)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              fill="none" 
            />
            <circle cx="96" cy="4" r="3" fill="var(--apex-gold-500)" />
          </svg>
        </div>

      </div>
    </div>
  );
}

