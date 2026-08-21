interface InsightMetaProps {
  category: string;
  date: string;
  readingTime?: string;
  author?: string;
}

export function InsightMeta({ category, date, readingTime, author }: InsightMetaProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-4 mb-4">
      {/* Category */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-apex-gold-500" aria-hidden="true" />
        <span className="text-[11px] md:text-[13px] uppercase tracking-[0.1em] text-apex-slate-500 font-semibold">
          {category}
        </span>
      </div>
      
      {/* Date & Additional Meta */}
      <div className="flex flex-wrap items-center gap-2 text-[12px] md:text-[13px] text-apex-slate-400">
        <time dateTime={new Date(date).toISOString()} className="whitespace-nowrap">
          {date}
        </time>
        
        {readingTime && (
          <>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">{readingTime}</span>
          </>
        )}
        
        {author && (
          <>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">By {author}</span>
          </>
        )}
      </div>
    </div>
  );
}
