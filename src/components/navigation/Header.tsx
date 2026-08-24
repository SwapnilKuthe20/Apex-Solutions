"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  
  const headerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const prefersReducedMotion = useReducedMotion();

  // Initial Entry Animation
  useIsomorphicLayoutEffect(() => {
    if (!headerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      
      tl.from([logoRef.current, innerRef.current?.querySelector('nav'), ctaRef.current], {
        y: 15,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Scroll State Animation
  useIsomorphicLayoutEffect(() => {
    if (!headerRef.current || !innerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -40",
        end: 99999,
        toggleClass: {
          targets: headerRef.current,
          className: "is-compact",
        },
        onToggle: (self) => {
          setIsCompact(self.isActive);
          
          gsap.to(innerRef.current, {
            paddingTop: self.isActive ? "16px" : "28px",
            paddingBottom: self.isActive ? "16px" : "28px",
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    }, headerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-colors duration-400 border-b",
          isCompact ? "bg-white/95 backdrop-blur-md shadow-sm border-apex-border/40" : "bg-white border-transparent"
        )}
      >
        {/* Main Navigation */}
        <Container>
          <div ref={innerRef} className="flex items-center justify-between pt-7 pb-7">
            {/* Logo */}
            <Link 
              href="/" 
              ref={logoRef}
              className={cn(
                "flex items-center transition-transform duration-300 origin-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm",
                isCompact ? "scale-95" : "scale-100"
              )}
              aria-label="Apex Solutions Home"
            >
              <Image 
                src="/Images/logo-Apex.png" 
                alt="Apex Solutions Logo" 
                width={240} 
                height={56} 
                priority
                className="w-auto h-9 lg:h-11 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4" ref={ctaRef}>
              <div className="hidden lg:block">
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center justify-center bg-apex-navy-900 hover:bg-apex-navy-800 text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="lg:hidden p-2 -mr-2 text-apex-navy-800 hover:text-apex-gold-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apex-gold-500"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

