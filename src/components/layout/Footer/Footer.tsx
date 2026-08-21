"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/data/navigation";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";
import { FooterContact } from "./FooterContact";
import { FooterBottom } from "./FooterBottom";
import { createFooterRevealTimeline } from "@/animations/footer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const navColumnRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const { cleanup } = createFooterRevealTimeline(
        footerRef,
        brandRef,
        navColumnRefs,
        bottomRef,
        prefersReducedMotion
      );
      return cleanup;
    }, footerRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <footer 
      ref={footerRef}
      className="bg-apex-navy-900 border-t border-apex-border/10 overflow-hidden"
      aria-label="Site Footer"
    >
      <Container className="pt-20 md:pt-24 lg:pt-32 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Area */}
          <div 
            ref={brandRef} 
            className="col-span-1 lg:col-span-4 lg:pr-12 will-change-transform"
          >
            <FooterBrand />
          </div>
          
          {/* Navigation Area */}
          <div className="col-span-1 lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              
              <div ref={(el) => { navColumnRefs.current[0] = el; }} className="will-change-transform">
                <FooterColumn title="Company" links={footerNavigation.company} />
              </div>
              
              <div ref={(el) => { navColumnRefs.current[1] = el; }} className="will-change-transform">
                <FooterColumn title="Services" links={footerNavigation.services} />
              </div>
              
              <div ref={(el) => { navColumnRefs.current[2] = el; }} className="will-change-transform">
                <FooterColumn title="Industries" links={footerNavigation.industries} />
              </div>

              <div ref={(el) => { navColumnRefs.current[3] = el; }} className="will-change-transform">
                <FooterContact />
              </div>

            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div ref={bottomRef} className="will-change-transform">
          <FooterBottom />
        </div>

      </Container>
    </footer>
  );
}
