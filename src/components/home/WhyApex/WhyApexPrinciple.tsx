import { forwardRef } from "react";
import { WhyApexPrinciple as IWhyApexPrinciple } from "@/data/whyApex";


interface WhyApexPrincipleProps {
  principle: IWhyApexPrinciple;
}

export const WhyApexPrinciple = forwardRef<HTMLDivElement, WhyApexPrincipleProps>(
  ({ principle }, ref) => {
    return (
      <div 
        ref={ref}
        className="group relative flex flex-col py-10 md:py-14 border-t border-apex-border/20 first:border-t-0 will-change-transform opacity-0"
      >
        {/* Animated Gold Indicator Line */}
        <div className="absolute left-[-20px] lg:left-[-40px] top-0 bottom-0 w-[2px] bg-apex-gold-500 scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100 hidden md:block" />
        
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 lg:gap-12 transition-transform duration-500 group-hover:translate-x-2">
          
          {/* Number */}
          <span className="text-sm font-semibold tracking-widest text-apex-gold-500 w-12 flex-shrink-0 transition-colors duration-500 group-hover:text-apex-navy-900">
            {principle.number}
          </span>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-apex-navy-900 tracking-tight transition-colors duration-500 group-hover:text-apex-gold-600">
              {principle.title}
            </h3>
            
            <p className="text-lg md:text-xl text-apex-slate-500 leading-relaxed max-w-xl transition-colors duration-500 group-hover:text-apex-navy-800">
              {principle.description}
            </p>
          </div>

        </div>
      </div>
    );
  }
);

WhyApexPrinciple.displayName = "WhyApexPrinciple";
