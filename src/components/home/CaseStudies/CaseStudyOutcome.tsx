import { CaseStudyOutcome as ICaseStudyOutcome } from "@/data/caseStudies";

interface CaseStudyOutcomeProps {
  outcomes: ICaseStudyOutcome[];
}

export function CaseStudyOutcome({ outcomes }: CaseStudyOutcomeProps) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-apex-border/40">
      {outcomes.map((outcome, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-apex-navy-900 leading-none mb-2">
            {outcome.value}
          </span>
          <span className="text-sm md:text-base text-apex-slate-500 leading-tight">
            {outcome.label}
          </span>
        </div>
      ))}
    </div>
  );
}
