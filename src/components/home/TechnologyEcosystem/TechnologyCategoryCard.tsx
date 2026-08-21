import { TechnologyCategory } from "@/data/technologies";
import { cn } from "@/lib/utils";

interface TechnologyCategoryCardProps {
  category: TechnologyCategory;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function TechnologyCategoryCard({
  category,
  isActive,
  onMouseEnter,
  onMouseLeave
}: TechnologyCategoryCardProps) {
  const Icon = category.icon;

  return (
    <div
      className={cn(
        "bg-white border rounded-2xl p-6 transition-all duration-300 shadow-sm will-change-transform cursor-pointer relative overflow-hidden group",
        isActive 
          ? "border-apex-gold-500 shadow-md -translate-y-1" 
          : "border-apex-border hover:-translate-y-1 hover:border-apex-gold-500 hover:shadow-md"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onMouseEnter}
    >
      {/* Subtle active highlight */}
      <div 
        className={cn(
          "absolute top-0 left-0 w-full h-1 bg-apex-gold-500 transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )} 
      />

      <div className="flex items-center gap-3 mb-4">
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
          isActive ? "bg-apex-navy-800 text-apex-gold-500" : "bg-apex-surface-50 text-apex-navy-800"
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-lg text-apex-navy-800">{category.title}</h3>
      </div>
      
      <p className="text-sm text-apex-slate-500 mb-6 leading-relaxed">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {category.technologies.map((tech) => (
          <span 
            key={tech.name} 
            className="text-xs font-medium px-2.5 py-1 rounded-md bg-apex-surface-50 text-apex-navy-800 border border-apex-border"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
