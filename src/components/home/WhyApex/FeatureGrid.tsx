import React from "react";
import { whyApexConfig } from "@/data/whyApex";

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-12 mb-10 lg:mb-12">
      {whyApexConfig.features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.id} className="flex flex-col group">
            <div className="w-12 h-12 rounded-xl bg-apex-navy-900 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1">
              <Icon className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-apex-navy-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-[280px]">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
