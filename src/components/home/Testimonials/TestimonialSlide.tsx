import Image from "next/image";
import { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialSlideProps {
  testimonial: Testimonial;
  isActive: boolean;
  prefersReducedMotion: boolean;
}

export function TestimonialSlide({ testimonial, isActive, prefersReducedMotion }: TestimonialSlideProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full min-h-[400px]">
      
      {/* Left: The Quote (Dominant) */}
      <div className="col-span-1 lg:col-span-8 relative">
        {/* Decorative Quote Mark */}
        <span 
          aria-hidden="true" 
          className="absolute -top-10 -left-6 md:-left-10 text-[100px] md:text-[140px] leading-none text-apex-gold-500 opacity-20 font-serif select-none pointer-events-none"
        >
          &ldquo;
        </span>
        
        <blockquote className="relative z-10">
          <p 
            className={cn(
              "text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-medium text-apex-navy-900 leading-[1.25] tracking-tight transition-all",
              !prefersReducedMotion && "duration-700 ease-out",
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {testimonial.quote}
          </p>
        </blockquote>
      </div>

      {/* Right: The Author Context */}
      <div className={cn(
        "col-span-1 lg:col-span-4 flex flex-col md:flex-row lg:flex-col items-start gap-6 lg:gap-8 transition-all delay-100",
        !prefersReducedMotion && "duration-700 ease-out",
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        
        {testimonial.image && (
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className={cn(
                "object-cover transition-transform",
                !prefersReducedMotion && "duration-1000 ease-out",
                isActive ? "scale-100" : "scale-105"
              )}
              sizes="(max-width: 768px) 96px, 128px"
            />
          </div>
        )}

        <cite className="not-italic flex flex-col">
          <span className="text-[18px] md:text-[20px] font-semibold text-apex-navy-900 mb-1">
            {testimonial.name}
          </span>
          {testimonial.role && (
            <span className="text-[14px] md:text-[15px] text-apex-slate-500">
              {testimonial.role}
            </span>
          )}
          {testimonial.company && (
            <span className="text-[14px] md:text-[15px] text-apex-slate-500 font-medium">
              {testimonial.company}
            </span>
          )}
        </cite>
        
      </div>
    </div>
  );
}
