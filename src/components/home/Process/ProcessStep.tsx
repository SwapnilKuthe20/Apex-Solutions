import { forwardRef } from "react";
import { ProcessStep as IProcessStep } from "@/data/process";


interface ProcessStepProps {
  step: IProcessStep;
}

export const ProcessStep = forwardRef<HTMLLIElement, ProcessStepProps>(
  ({ step }, ref) => {
    const Icon = step.icon;

    return (
      <li 
        ref={ref} 
        className="relative grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-6 md:gap-12 min-h-[160px] md:min-h-[200px]"
      >
        {/* Node Container */}
        <div className="flex flex-col items-center pt-2">
          <div 
            className="step-node w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-apex-border/60 bg-white z-10 transition-colors duration-300 will-change-transform"
            aria-hidden="true"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col pb-16 md:pb-24">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono font-semibold tracking-widest text-apex-slate-400">
              {step.number}
            </span>
            <h3 className="step-title text-2xl md:text-3xl font-semibold text-apex-navy-900 tracking-tight transition-colors duration-300">
              {step.title}
            </h3>
          </div>

          <div className="step-description flex flex-col gap-6 md:gap-8 will-change-transform">
            <p className="text-lg md:text-xl text-apex-slate-500 leading-relaxed max-w-2xl">
              {step.description}
            </p>

            {/* Optional Activities */}
            {step.activities && step.activities.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {step.activities.map((activity, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-apex-slate-500 bg-apex-slate-50 rounded border border-apex-border/40"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            )}
            
            {/* Conceptual Icon */}
            <div className="step-icon text-apex-slate-300 mt-2 will-change-transform">
              <Icon className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5]" />
            </div>
          </div>
        </div>
      </li>
    );
  }
);

ProcessStep.displayName = "ProcessStep";
