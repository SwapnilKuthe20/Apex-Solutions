import { ProductData } from "@/data/products";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductStoryProps {
  product: ProductData;
  isLast?: boolean;
}

export function ProductStory({ product, isLast }: ProductStoryProps) {
  return (
    <div className={cn(
      "w-[90vw] md:w-[85vw] lg:w-[100vw] h-full flex-shrink-0 flex items-center justify-center",
      !isLast && "lg:pr-[10vw]" // Add padding between items on desktop
    )}>
      {/* 
        The Card Container 
        On desktop, this fills a significant portion of the screen (e.g. max-w-6xl)
        creating an immersive "split-screen" editorial layout.
      */}
      <div className="w-full max-w-7xl mx-auto h-[600px] md:h-[650px] rounded-3xl overflow-hidden bg-apex-navy-900 flex flex-col md:flex-row relative group shadow-2xl">
        
        {/* Abstract Geometry Background Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        {/* Content Side (Left) */}
        <div className="w-full md:w-5/12 lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-apex-navy-900 border-r border-apex-border/10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-apex-gold-500">
              {product.number}
            </span>
            <div className="h-[1px] w-8 bg-apex-gold-500/50" />
            <span className="text-xs font-semibold tracking-widest text-apex-surface-50/70 uppercase">
              {product.subtitle}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            {product.title}
          </h3>
          
          <p className="text-base md:text-lg text-apex-surface-50/80 leading-relaxed mb-10 max-w-md">
            {product.description}
          </p>

          {/* Feature Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-bold tracking-widest text-apex-slate-500 uppercase mb-1">
                  {feature.label}
                </span>
                <span className="text-sm font-medium text-apex-surface-50 flex items-center gap-2">
                  <Check className="w-3 h-3 text-apex-gold-500" />
                  {feature.value}
                </span>
              </div>
            ))}
          </div>

          <Link 
            href="/products"
            className="inline-flex items-center justify-center md:justify-start gap-3 group/link w-fit"
          >
            <div className="w-10 h-10 rounded-full border border-apex-gold-500/30 flex items-center justify-center transition-colors group-hover/link:bg-apex-gold-500">
              <ArrowRight className="w-4 h-4 text-apex-gold-500 transition-colors group-hover/link:text-apex-navy-900" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white transition-colors group-hover/link:text-apex-gold-500">
              Explore Platform
            </span>
          </Link>
        </div>

        {/* Visual Side (Right) - Deep Engineering Abstracts */}
        <div className="hidden md:flex w-full md:w-7/12 lg:w-1/2 bg-[#05132A] relative overflow-hidden items-center justify-center">
          
          <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-[1.5s] ease-out will-change-transform group-hover:scale-105">
            {/* 
              Different highly-technical visual abstractions based on visualType 
            */}
            {product.visualType === "portal" && (
              <svg viewBox="0 0 400 400" className="w-full max-w-[320px] opacity-90 drop-shadow-xl">
                <rect x="50" y="50" width="300" height="300" rx="16" fill="none" stroke="#D7AB11" strokeWidth="1" strokeDasharray="4 8" />
                <rect x="100" y="100" width="200" height="200" rx="8" fill="none" stroke="#F7F9FC" strokeWidth="2" />
                <rect x="140" y="140" width="120" height="120" rx="4" fill="#DCE3EC" fillOpacity="0.1" stroke="#F7F9FC" strokeWidth="1" />
                <path d="M 200 50 L 200 100 M 200 300 L 200 350 M 50 200 L 100 200 M 300 200 L 350 200" stroke="#D7AB11" strokeWidth="2" />
                <circle cx="200" cy="200" r="20" fill="#D7AB11" />
              </svg>
            )}

            {product.visualType === "pipeline" && (
              <svg viewBox="0 0 400 400" className="w-full max-w-[320px] opacity-90 drop-shadow-xl">
                {/* Horizontal data flows */}
                <path d="M 40 120 L 360 120 M 40 200 L 360 200 M 40 280 L 360 280" stroke="#253550" strokeWidth="4" />
                
                {/* Active pipeline trace */}
                <path d="M 40 200 C 150 200, 250 120, 360 120" fill="none" stroke="#D7AB11" strokeWidth="3" />
                <circle cx="200" cy="160" r="6" fill="#F7F9FC" />
                
                {/* Nodes */}
                <circle cx="100" cy="200" r="12" fill="#05132A" stroke="#F7F9FC" strokeWidth="2" />
                <circle cx="300" cy="120" r="16" fill="#D7AB11" />
                <circle cx="300" cy="280" r="12" fill="#05132A" stroke="#F7F9FC" strokeWidth="2" />
              </svg>
            )}

            {product.visualType === "dashboard" && (
              <svg viewBox="0 0 400 400" className="w-full max-w-[320px] opacity-90 drop-shadow-xl">
                {/* Dial / Gauge */}
                <path d="M 100 250 A 120 120 0 1 1 300 250" fill="none" stroke="#253550" strokeWidth="8" strokeLinecap="round" />
                <path d="M 100 250 A 120 120 0 0 1 200 130" fill="none" stroke="#D7AB11" strokeWidth="8" strokeLinecap="round" />
                
                <circle cx="200" cy="250" r="8" fill="#F7F9FC" />
                <path d="M 200 250 L 170 160" stroke="#D7AB11" strokeWidth="4" strokeLinecap="round" />
                
                {/* Stats blocks below */}
                <rect x="100" y="290" width="80" height="30" rx="4" fill="#253550" />
                <rect x="220" y="290" width="80" height="30" rx="4" fill="#253550" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
