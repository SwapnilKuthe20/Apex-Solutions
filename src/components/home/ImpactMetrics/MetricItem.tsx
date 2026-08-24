import { Metric } from "@/data/metrics";

export function MetricItem({ metric }: { metric: Metric }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1 md:gap-2 text-white mb-2">
        {metric.prefix && (
          <span className="font-medium text-3xl md:text-4xl lg:text-5xl">
            {metric.prefix}
          </span>
        )}
        
        <span className="font-semibold tracking-tight text-[48px] md:text-[56px] lg:text-[64px] leading-none">
          {metric.value}
        </span>
        
        {metric.suffix && (
          <span className="font-semibold text-apex-gold-500 text-[32px] md:text-[40px] lg:text-[48px]">
            {metric.suffix}
          </span>
        )}
      </div>
      
      <div className="mt-4">
        <div className="font-semibold text-white tracking-tight text-lg md:text-xl">
          {metric.label}
        </div>
        
        {metric.description && (
          <p className="text-apex-slate-400 mt-2 leading-relaxed text-sm md:text-base max-w-xs">
            {metric.description}
          </p>
        )}
      </div>
    </div>
  );
}
