"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
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
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
    }, headerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Scroll State Animation
  useIsomorphicLayoutEffect(() => {
    if (!headerRef.current || !innerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -80",
        end: 99999,
        toggleClass: {
          targets: headerRef.current,
          className: "is-compact",
        },
        onToggle: (self) => {
          setIsCompact(self.isActive);
          
          // Animate properties that are safe for performance
          gsap.to(innerRef.current, {
            paddingTop: self.isActive ? "12px" : "24px",
            paddingBottom: self.isActive ? "12px" : "24px",
            duration: 0.3,
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
          "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
          isCompact ? "bg-white/90 backdrop-blur-md border-b border-apex-border shadow-sm" : "bg-transparent border-b border-transparent"
        )}
      >
        <Container>
          <div ref={innerRef} className="flex items-center justify-between pt-6 pb-6">
            {/* Logo */}
            <Link 
              href="/" 
              ref={logoRef}
              className={cn(
                "font-bold tracking-tight text-apex-navy-800 transition-all duration-300 origin-left flex items-center",
                isCompact ? "text-xl scale-95" : "text-2xl scale-100"
              )}
            >
              Apex<span className="text-apex-gold-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4" ref={ctaRef}>
              <div className="hidden lg:block">
                <Button variant={isCompact ? "primary" : "primary"} size="sm" magnetic withArrow>
                  Start a Project
                </Button>
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
