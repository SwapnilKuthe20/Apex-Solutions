interface ProcessProgressProps {
  activeIndex: number;
  totalSteps: number;
}

export function ProcessProgress({ activeIndex, totalSteps }: ProcessProgressProps) {
  const currentFormatted = String(activeIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalSteps).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-sm font-semibold tracking-widest font-mono">
        <span className="text-apex-gold-600 transition-colors duration-300">{currentFormatted}</span>
        <span className="text-apex-slate-300">/</span>
        <span className="text-apex-slate-400">{totalFormatted}</span>
      </div>
      
      {/* Decorative progress bar for the indicator itself (optional) */}
      <div className="w-px h-12 bg-apex-border/60 relative overflow-hidden hidden md:block">
        <div 
          className="absolute top-0 left-0 w-full bg-apex-gold-500 transition-transform duration-300 ease-out origin-top"
          style={{ transform: `scaleY(${(activeIndex + 1) / totalSteps})` }}
        />
      </div>
    </div>
  );
}
