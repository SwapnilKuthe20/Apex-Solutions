import { forwardRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface WhyApexStatementProps {
  eyebrow: string;
  statement: string;
  description: string;
  eyebrowRef?: React.RefObject<HTMLDivElement | null>;
  statementRef?: React.RefObject<HTMLHeadingElement | null>;
  copyRef?: React.RefObject<HTMLParagraphElement | null>;
}

export const WhyApexStatement = forwardRef<HTMLDivElement, WhyApexStatementProps>(
  ({ eyebrow, statement, description, eyebrowRef, statementRef, copyRef }, ref) => {
    return (
      <div ref={ref} className="flex flex-col h-full lg:sticky lg:top-32 lg:pr-12">
        <div ref={eyebrowRef} className="will-change-transform mb-8">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        
        <h2 
          ref={statementRef}
          className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] font-semibold text-apex-navy-900 tracking-tight will-change-transform mb-12 max-w-[800px]"
        >
          {statement}
        </h2>
        
        <p 
          ref={copyRef}
          className="text-[18px] md:text-[20px] lg:text-[22px] text-apex-slate-500 leading-relaxed max-w-lg will-change-transform"
        >
          {description}
        </p>
      </div>
    );
  }
);

WhyApexStatement.displayName = "WhyApexStatement";
