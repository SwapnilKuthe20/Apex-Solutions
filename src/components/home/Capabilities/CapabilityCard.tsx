import { ArrowRight } from "lucide-react";
import { Capability } from "@/data/capabilities";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CapabilityCardProps {
  capability: Capability;
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const { number, title, shortDescription, variant, href, iconType } = capability;
  
  const isFeatured = variant === "featured";
  const isWide = variant === "wide";

  // Use a generic placeholder link if none provided, to demonstrate interactive states
  const targetHref = href || "#";

  return (
    <Link 
      href={targetHref}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-500 will-change-transform h-full",
        // Base hover behavior (Lift)
        "hover:-translate-y-[6px]",
        // Featured (Dark) vs Standard (Light)
        isFeatured 
          ? "bg-apex-navy-900 border-apex-navy-800 text-white col-span-1 lg:col-span-8 p-8 md:p-12 min-h-[400px]" 
          : isWide 
            ? "bg-white border-apex-border text-apex-navy-800 col-span-1 lg:col-span-7 p-6 md:p-8"
            : "bg-white border-apex-border text-apex-navy-800 col-span-1 lg:col-span-4 p-6 md:p-8",
        // Hover shadow variations
        isFeatured ? "hover:shadow-2xl hover:shadow-apex-navy-900/50" : "hover:shadow-lg hover:border-apex-border"
      )}
      // If we had a custom cursor implementation that checks data attributes, we'd add it here.
      // data-cursor="EXPLORE"
    >
      {/* 
        Gold Accent Line on Hover 
        Scales from center outward for a premium feel
      */}
      <div 
        className={cn(
          "absolute top-0 left-0 right-0 h-1 bg-apex-gold-500 origin-center scale-x-0 transition-transform duration-500 ease-out will-change-transform group-hover:scale-x-100",
          isFeatured ? "h-1.5" : "h-1"
        )} 
      />

      {/* Top Header Section */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <span className={cn(
            "text-sm font-semibold tracking-widest",
            isFeatured ? "text-apex-gold-500" : "text-apex-slate-500 group-hover:text-apex-gold-500 transition-colors"
          )}>
            {number}
          </span>
          <div className={cn(
            "h-[1px] w-8",
            isFeatured ? "bg-apex-navy-800" : "bg-apex-border"
          )} />
        </div>

        <div className={cn("mb-auto relative z-10", isFeatured && "max-w-md")}>
          <h3 className={cn(
            "font-semibold leading-tight tracking-tight mb-4",
            isFeatured ? "text-3xl md:text-4xl text-white" : "text-2xl text-apex-navy-800"
          )}>
            {title}
          </h3>
          <p className={cn(
            "leading-relaxed",
            isFeatured ? "text-lg text-apex-surface-50 opacity-80" : "text-base text-apex-slate-500"
          )}>
            {shortDescription}
          </p>
        </div>

        {/* Footer / CTA Section */}
        <div className="mt-12 flex items-center gap-2">
          <span className={cn(
            "text-sm font-semibold tracking-wide transition-colors",
            isFeatured ? "text-white group-hover:text-apex-gold-500" : "text-apex-navy-800"
          )}>
            Explore Capability
          </span>
          <ArrowRight className={cn(
            "w-4 h-4 transition-transform duration-300 will-change-transform group-hover:translate-x-1.5",
            isFeatured ? "text-apex-gold-500" : "text-apex-navy-800"
          )} />
        </div>
      </div>

      {/* 
        Abstract Engineering Visuals (SVG)
        Only render for specific variants or if an iconType is provided to keep it clean.
      */}
      {isFeatured && (
        <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden hidden md:block opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
          {/* A sophisticated but abstract technical architecture grid */}
          <svg viewBox="0 0 400 400" className="absolute right-[-10%] top-[10%] w-full h-full transform group-hover:scale-[1.03] transition-transform duration-700 will-change-transform">
            <g stroke="#F7F9FC" strokeWidth="1" fill="none">
              <path d="M 50 200 L 250 200 L 350 100" />
              <path d="M 150 300 L 250 200 L 350 300" />
              <circle cx="250" cy="200" r="4" fill="#D7AB11" stroke="none" />
              <circle cx="350" cy="100" r="4" fill="#F7F9FC" />
              <circle cx="350" cy="300" r="4" fill="#F7F9FC" />
              <circle cx="150" cy="300" r="4" fill="#F7F9FC" />
              <circle cx="50" cy="200" r="4" fill="#F7F9FC" />
            </g>
          </svg>
        </div>
      )}
      
      {!isFeatured && iconType === 'ai' && (
         <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
           <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
             <circle cx="32" cy="32" r="20" stroke="#081E42" strokeWidth="1" strokeDasharray="4 4" />
             <circle cx="32" cy="12" r="3" fill="#D7AB11" />
           </svg>
         </div>
      )}
    </Link>
  );
}
