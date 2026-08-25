import { CheckCircle2 } from "lucide-react";
import { technologyEcosystemConfig } from "@/data/technologies";

interface TechnologyPrinciplesProps {
  principlesRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export function TechnologyPrinciples({ principlesRef }: TechnologyPrinciplesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 pb-8">
      {technologyEcosystemConfig.principles.map((principle, index) => (
        <div 
          key={index} 
          ref={(el) => { principlesRef.current[index] = el; }}
          className="flex items-center gap-2 will-change-transform opacity-0"
        >
          <CheckCircle2 className="w-4 h-4 text-apex-gold-500" />
          <span className="text-sm font-medium text-apex-navy-800 tracking-wide">{principle}</span>
        </div>
      ))}
    </div>
  );
}
