interface CaseStudyMetaProps {
  number: string;
  industry?: string;
  category?: string;
}

export function CaseStudyMeta({ number, industry, category }: CaseStudyMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-[11px] md:text-[13px] uppercase tracking-[0.1em] text-apex-slate-500 mb-6">
      <span className="font-semibold text-apex-gold-600">CASE STUDY {number}</span>
      
      {industry && (
        <>
          <span className="w-1 h-1 rounded-full bg-apex-slate-300" aria-hidden="true" />
          <span>{industry}</span>
        </>
      )}
      
      {category && (
        <>
          <span className="w-1 h-1 rounded-full bg-apex-slate-300" aria-hidden="true" />
          <span>{category}</span>
        </>
      )}
    </div>
  );
}
