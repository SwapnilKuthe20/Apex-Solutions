import React from "react";
import { whyApexConfig } from "@/data/whyApex";
import { Rocket, Users, Globe, Code2, Trophy, LineChart } from "lucide-react";

const getIcon = (type: string) => {
  switch (type) {
    case "rocket": return Rocket;
    case "users": return Users;
    case "globe": return Globe;
    case "code": return Code2;
    case "trophy": return Trophy;
    case "chart": return LineChart;
    default: return Trophy;
  }
};

export function OurImpact() {
  return (
    <section className="relative z-20 py-20 lg:py-32 bg-slate-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 lg:w-12 h-[2px] bg-apex-gold-500 rounded-full" />
            <span className="text-apex-navy-900 font-bold tracking-wider text-xs lg:text-sm uppercase">
              {whyApexConfig.impact.eyebrow}
            </span>
            <div className="w-8 lg:w-12 h-[2px] bg-apex-gold-500 rounded-full" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-apex-navy-900 tracking-tight">
            {whyApexConfig.impact.headline.part1}
            <span className="text-apex-gold-500">{whyApexConfig.impact.headline.highlight}</span>
          </h2>
        </div>

        {/* Metrics Container */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {whyApexConfig.impact.metrics.map((metric, index) => {
              const Icon = getIcon(metric.iconType);
              return (
                <div key={metric.id} className={`flex flex-col items-center text-center ${index !== 0 ? 'lg:pl-8 pt-8 sm:pt-0' : ''} ${index !== whyApexConfig.impact.metrics.length - 1 ? 'lg:pr-8' : ''} group`}>
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-sm">
                    <Icon className="w-7 h-7 text-apex-navy-800" strokeWidth={1.5} />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-apex-navy-900 mb-3 tracking-tight">
                    {metric.value}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base font-semibold text-apex-navy-800 mb-2">
                    {metric.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
