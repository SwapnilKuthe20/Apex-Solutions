import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSwiper } from "swiper/react";

interface TestimonialControlsProps {
  currentIndex: number;
  totalSlides: number;
}

export function TestimonialControls({ currentIndex, totalSlides }: TestimonialControlsProps) {
  const swiper = useSwiper();
  
  // Format numbers to have leading zero (e.g., 01)
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalSlides).padStart(2, '0');

  return (
    <div className="flex items-center gap-8 mt-10 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:z-20">
      
      {/* Navigation Buttons */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => swiper.slidePrev()}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-apex-border/60 text-apex-navy-900 hover:bg-apex-navy-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => swiper.slideNext()}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-apex-border/60 text-apex-navy-900 hover:bg-apex-navy-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination (01 / 04) */}
      <div className="flex items-center gap-2 text-sm font-semibold tracking-widest font-mono">
        <span className="text-apex-gold-600">{currentFormatted}</span>
        <span className="text-apex-slate-300">/</span>
        <span className="text-apex-slate-400">{totalFormatted}</span>
      </div>

    </div>
  );
}
