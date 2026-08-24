import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { testimonialsConfig } from "@/data/testimonials";
import Image from "next/image";

export function Testimonials() {
  return (
    <Section variant="white" className="py-16 md:py-20 overflow-hidden bg-white">
      <Container>
        
        {/* Intro Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Eyebrow className="justify-center mb-6">{testimonialsConfig.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-apex-navy-800 tracking-tight mb-6">
            Client Success Stories
          </h2>
          <p className="text-[16px] md:text-[18px] text-apex-slate-500 leading-relaxed max-w-2xl mx-auto">
            {testimonialsConfig.description}
          </p>
        </div>

        {/* 3-Column Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsConfig.testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex flex-col bg-white border border-apex-border rounded-xl p-8 md:p-10 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Top Accent Border */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-apex-gold-500 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
              <div className="absolute top-0 left-0 w-full h-[4px] bg-apex-navy-900/10" />

              {/* Quote Mark */}
              <div className="text-apex-gold-500 text-6xl leading-none font-serif mb-6 opacity-30 select-none">
                "
              </div>

              {/* Quote Text */}
              <p className="text-lg md:text-xl text-apex-navy-800 leading-relaxed font-medium mb-10 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-apex-surface-100 flex-shrink-0 relative">
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
                  <span className="font-bold text-apex-navy-800">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-apex-slate-500">
                    {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
