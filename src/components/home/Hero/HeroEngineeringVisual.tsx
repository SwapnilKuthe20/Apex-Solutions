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
      className="relative w-full h-full flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-[600px] opacity-100 mt-10 lg:mt-12 xl:mt-16" 
      id="hero-visual-container"
    >
      {/* 
        EXACT 9-PART ASYMMETRIC SILHOUETTE DEFINITION:
        1. Left vertical body
        2. Lower-left rounded transition
        3. Long bottom edge
        4. Lower-right smooth diagonal/curved transition
        5. Right vertical edge
        6. Large upper-right rounding
        7. Long top horizontal edge
        8. Upper-left stepped/concave curve
        9. Left-side return into main body
      */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="heroShape" clipPathUnits="objectBoundingBox">
            <path d="
              M 0.12, 0.32
              L 0.12, 0.80
              C 0.12, 0.90 0.18, 0.96 0.28, 0.96
              L 0.62, 0.96
              C 0.74, 0.96 0.86, 0.88 0.94, 0.76
              L 0.98, 0.70
              C 1.00, 0.66 1.00, 0.60 1.00, 0.50
              L 1.00, 0.16
              C 1.00, 0.06 0.94, 0.00 0.84, 0.00
              L 0.52, 0.00
              C 0.44, 0.00 0.38, 0.06 0.34, 0.12
              L 0.30, 0.18
              C 0.26, 0.24 0.20, 0.28 0.12, 0.32
              Z
            " />
          </clipPath>
        </defs>
      </svg>
      
      {/* Main Visual Composition - Scales seamlessly in width */}
      <div ref={parallaxRef} className="relative w-[100%] lg:w-[125%] xl:w-[135%] aspect-[1.12/1] ml-auto mr-0 z-10">
        
        {/* Dotted Pattern Background */}
        {/* Placed accurately above the top-left stepped curve */}
        <div 
          className="absolute -top-4 lg:-top-6 left-[30%] lg:left-[35%] w-24 lg:w-32 h-24 lg:h-32 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-60 -z-20 pointer-events-none"
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
                M 12, 60
                L 12, 32
                C 20, 28 26, 24 30, 18
                L 34, 12
                C 38, 6 44, 0 52, 0
                L 84, 0
                C 94, 0 100, 6 100, 16
                L 100, 50
                C 100, 60 100, 66 98, 70
                L 94, 76
                C 86, 88 74, 96 62, 96
                L 28, 96
              " 
              stroke="var(--apex-slate-200)" 
              strokeWidth="2" 
              fill="none" 
              vectorEffect="non-scaling-stroke"
            />
            {/* The gold line transitioning at bottom-left */}
            <path
              d="
                M -5, 96
                L 28, 96
                C 18, 96 12, 90 12, 80
                L 12, 60
              "
              stroke="var(--apex-gold-500)"
              strokeWidth="2.5"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            {/* The gold endpoint node */}
            <circle cx="-5" cy="96" r="4.5" fill="var(--apex-gold-500)" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        {/* 
          THE PHOTOGRAPH
          Inset slightly to create the perfect uniform gap between the image boundary and the outer contour lines.
        */}
        <div 
          className="absolute inset-[15px] lg:inset-[20px]"
          style={{ clipPath: "url(#heroShape)", WebkitClipPath: "url(#heroShape)" }}
        >
          <Image
            src="/Images/Hero-img.png"
            alt="Apex Solutions Engineering Team"
            fill
            className="object-cover object-[55%_35%] lg:object-[45%_35%]"
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        </div>

        {/* Floating Card 1: Custom Software (Top Left) */}
        <div 
          ref={card1Ref} 
          className="absolute top-[18%] lg:top-[22%] -left-[14%] lg:-left-[6%] xl:-left-[8%] bg-white px-5 py-4 lg:px-6 lg:py-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(8,30,66,0.1)] border border-apex-border/40 z-20 w-[190px] lg:w-[220px]"
        >
          <div className="flex gap-3 mb-2">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-apex-surface-50 flex items-center justify-center text-apex-gold-500 border border-apex-border/30">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-apex-navy-900 leading-tight">Custom Software<br/>Development</p>
            </div>
          </div>
          <p className="text-[11.5px] text-apex-slate-500 leading-snug mb-3">
            Scalable, secure &amp; future-ready solutions.
          </p>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-apex-navy-800 uppercase tracking-wider group cursor-pointer">
            Explore <ArrowRight className="w-3 h-3 text-apex-gold-500 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Floating Card 2: 150+ Experts (Top Right) */}
        <div 
          ref={card2Ref} 
          className="absolute top-[28%] lg:top-[32%] -right-[6%] lg:-right-[4%] xl:-right-[6%] bg-apex-navy-900 px-5 py-4 lg:px-6 lg:py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(8,30,66,0.25)] border border-apex-navy-800 z-20"
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
          className="absolute bottom-[24%] lg:bottom-[28%] -left-[14%] lg:-left-[6%] xl:-left-[8%] bg-white px-5 py-4 lg:px-6 lg:py-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(8,30,66,0.1)] border border-apex-border/40 z-20 w-[190px] lg:w-[220px]"
        >
          <div className="flex gap-3 mb-2">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-apex-surface-50 flex items-center justify-center text-apex-gold-500 border border-apex-border/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex items-center">
              <p className="text-[13px] font-bold text-apex-navy-900 leading-tight">AI &amp; Automation</p>
            </div>
          </div>
          <p className="text-[11.5px] text-apex-slate-500 leading-snug mb-3">
            Intelligent automation for smarter operations.
          </p>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-apex-navy-800 uppercase tracking-wider group cursor-pointer">
            Explore <ArrowRight className="w-3 h-3 text-apex-gold-500 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Floating Card 4: 98% Satisfaction (Bottom Right) */}
        <div 
          ref={card4Ref} 
          className="absolute bottom-[6%] lg:bottom-[8%] right-[2%] lg:right-[6%] xl:right-[8%] bg-white px-5 py-4 lg:px-6 lg:py-5 rounded-2xl shadow-[0_15px_35px_-5px_rgba(8,30,66,0.1)] border border-apex-border/40 z-20 flex items-center gap-4"
        >
          <div>
            <p className="text-[30px] lg:text-[34px] font-black text-apex-gold-500 leading-none mb-1">98%</p>
            <p className="text-[11.5px] lg:text-[12.5px] font-bold text-apex-navy-900 leading-tight">Client<br/>Satisfaction</p>
          </div>
          <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-apex-surface-200 bg-transparent flex items-center justify-center text-apex-gold-500">
            <LineChart className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />
          </div>
        </div>

      </div>
    </div>
  );
}

