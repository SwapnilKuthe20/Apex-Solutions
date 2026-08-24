import { processConfig } from "@/data/engineeringApproach";

export function EngineeringJourney() {
  return (
    <div className="mt-16 md:mt-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
        {/* Dotted connector line (Desktop only) */}
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-apex-border -z-10" />

        {processConfig.steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center text-center relative group">
            {/* Step Number Circle */}
            <div className="w-14 h-14 rounded-full bg-white border-2 border-apex-border flex items-center justify-center mb-6 text-xl font-bold text-apex-navy-800 transition-colors duration-300 group-hover:border-apex-gold-500 group-hover:text-apex-gold-500 z-10">
              {index + 1}
            </div>
            
            {/* Step Content */}
            <h3 className="text-xl font-semibold text-apex-navy-800 mb-3">
              {step.title}
            </h3>
            
            <p className="text-sm text-apex-slate-500 leading-relaxed max-w-[200px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
