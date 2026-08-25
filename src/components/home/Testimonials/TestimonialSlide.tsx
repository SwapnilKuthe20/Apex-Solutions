import Image from "next/image";
import { Testimonial } from "@/data/testimonials";
import { Quote, Star, Building2 } from "lucide-react";

interface TestimonialSlideProps {
  testimonial: Testimonial;
}

// Fallback logic for logos if not provided in the data.
// In a real application, the CMS should provide these SVG URLs or Image assets.
const getFallbackLogo = (companyName: string) => {
  if (companyName.includes("EduSmart")) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-[#0052CC] flex items-center justify-center">
          <span className="text-white font-bold text-xs">E</span>
        </div>
        <span className="text-[#0052CC] font-bold text-sm tracking-tight leading-none">EduSmart<br/>Solutions</span>
      </div>
    );
  }
  if (companyName.includes("FinEdge")) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-[#00A86B] flex items-center justify-center">
          <span className="text-white font-bold text-xs">F</span>
        </div>
        <span className="text-[#00A86B] font-bold text-sm tracking-tight leading-none">FinEdge<br/>Technologies</span>
      </div>
    );
  }
  if (companyName.includes("PrintKa") || companyName.includes("Healthcare")) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-[#8A2BE2] flex items-center justify-center">
          <span className="text-white font-bold text-xs">H</span>
        </div>
        <span className="text-[#8A2BE2] font-bold text-sm tracking-tight leading-none">Healthcare<br/>Analytics</span>
      </div>
    );
  }
  
  // Generic fallback
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400">
      <Building2 className="w-5 h-5" />
    </div>
  );
};

export function TestimonialSlide({ testimonial }: TestimonialSlideProps) {
  return (
    <div className="flex flex-col bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 w-full h-full min-h-[420px]">
      
      {/* Header: Quote & Stars */}
      <div className="flex items-start justify-between mb-8">
        <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-apex-gold-500 fill-apex-gold-500 rotate-180 opacity-90" strokeWidth={0} />
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 lg:w-5 lg:h-5 text-apex-gold-500 fill-apex-gold-500" strokeWidth={0} />
          ))}
        </div>
      </div>

      {/* Body: Testimonial Text */}
      <p className="text-base lg:text-lg text-apex-navy-900 leading-relaxed mb-10 flex-grow">
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-slate-100 mb-8" />

      {/* Footer: Profile Information */}
      <div className="flex items-center justify-between mt-auto">
        
        {/* Left: Photo + Name/Role */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0 relative">
            {testimonial.image ? (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-apex-navy-800 font-bold text-lg">
                {testimonial.name.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold text-apex-navy-900 text-sm lg:text-base">
              {testimonial.name}
            </span>
            <span className="text-xs lg:text-sm text-slate-500">
              {testimonial.role}
            </span>
            {testimonial.company && (
              <span className="text-xs lg:text-sm text-apex-gold-500 font-medium">
                {testimonial.company}
              </span>
            )}
          </div>
        </div>

        {/* Right: Company Logo */}
        {testimonial.company && (
          <div className="hidden sm:flex items-center gap-6">
            <div className="w-px h-10 bg-slate-100" />
            <div className="flex-shrink-0">
              {testimonial.companyLogo ? (
                <img src={testimonial.companyLogo} alt={testimonial.company} className="h-8 object-contain" />
              ) : (
                getFallbackLogo(testimonial.company)
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
