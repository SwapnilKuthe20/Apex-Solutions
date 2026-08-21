import { forwardRef } from "react";
import { Metric } from "@/data/metrics";
import { MetricCounter } from "./MetricCounter";
import { cn } from "@/lib/utils";

interface MetricItemProps {
  metric: Metric;
  isFeatured?: boolean;
}

export const MetricItem = forwardRef<HTMLDivElement, MetricItemProps>(
  ({ metric, isFeatured = false }, ref) => {
    
    // In production, we might want to hide "content-required" metrics entirely
    // or style them differently for staging. For this implementation, we render them.

    return (
      <div 
        ref={ref}
        className={cn(
          "flex flex-col group opacity-0 will-change-transform",
          isFeatured ? "py-8 md:py-12" : "py-6 md:py-8"
        )}
      >
        <div className="flex items-baseline gap-1 md:gap-2 text-apex-navy-900 transition-transform duration-500 group-hover:-translate-y-1">
          {metric.prefix && (
            <span className={cn(
              "font-medium",
              isFeatured ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"
            )}>
              {metric.prefix}
            </span>
          )}
          
          <span className={cn(
            "font-semibold tracking-tight",
            isFeatured ? "text-[64px] md:text-[80px] lg:text-[112px] leading-none" : "text-[48px] md:text-[56px] lg:text-[64px] leading-none"
          )}>
            <MetricCounter value={metric.value} decimals={metric.decimals} />
          </span>
          
          {metric.suffix && (
            <span className={cn(
              "font-semibold text-apex-gold-500",
              isFeatured ? "text-[40px] md:text-[56px] lg:text-[72px]" : "text-[32px] md:text-[40px] lg:text-[48px]"
            )}>
              {metric.suffix}
            </span>
          )}
        </div>
        
        {/* Metric Label and Description */}
        <div className="mt-4 md:mt-6">
          <dt className={cn(
            "font-semibold text-apex-navy-800 tracking-tight transition-colors duration-300 group-hover:text-apex-gold-600",
            isFeatured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          )}>
            {metric.label}
          </dt>
          
          {metric.description && (
            <dd className={cn(
              "text-apex-slate-500 mt-2 leading-relaxed transition-colors duration-300 group-hover:text-apex-navy-700",
              isFeatured ? "text-base md:text-lg max-w-sm" : "text-sm md:text-base max-w-xs"
            )}>
              {metric.description}
            </dd>
          )}
        </div>
      </div>
    );
  }
);

MetricItem.displayName = "MetricItem";
