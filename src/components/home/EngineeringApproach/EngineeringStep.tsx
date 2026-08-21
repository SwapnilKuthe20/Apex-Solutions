import { EngineeringStepData } from "@/data/engineeringApproach";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EngineeringStepProps {
  step: EngineeringStepData;
  align: "left" | "right";
}

export function EngineeringStep({ step, align }: EngineeringStepProps) {
  const Icon = step.icon;

  return (
    <div className={cn(
      "w-full max-w-[320px] md:max-w-[360px]",
      align === "right" ? "ml-auto text-left" : "mr-auto text-right md:text-left"
    )}>
      <div className={cn(
        "flex items-center gap-3 mb-4",
        align === "left" && "md:flex-row flex-row-reverse"
      )}>
        <span className="text-sm font-semibold tracking-widest text-apex-gold-500">
          {step.number}
        </span>
        <div className="h-[1px] w-8 bg-apex-border" />
        <div className="w-8 h-8 rounded-md bg-apex-surface-50 text-apex-navy-800 flex items-center justify-center border border-apex-border">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold text-apex-navy-800 tracking-tight mb-4">
        {step.title}
      </h3>
      
      <p className="text-base text-apex-slate-500 leading-relaxed mb-6">
        {step.description}
      </p>

      <ul className={cn(
        "space-y-3",
        align === "left" && "flex flex-col md:items-start items-end"
      )}>
        {step.principles.map((principle: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2">
            {/* If aligned left on mobile, icon on right */}
            <CheckCircle2 className={cn(
              "w-4 h-4 text-apex-gold-500 flex-shrink-0",
              align === "left" && "order-last md:order-first"
            )} />
            <span className="text-sm font-medium text-apex-navy-800">{principle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
