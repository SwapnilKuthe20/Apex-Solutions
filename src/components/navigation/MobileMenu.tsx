"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { gsap } from "@/animations/gsap";
import { primaryNavigation } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!overlayRef.current || !containerRef.current) return;

    if (prefersReducedMotion) {
      gsap.set(overlayRef.current, { display: isOpen ? "block" : "none", opacity: isOpen ? 1 : 0 });
      gsap.set(containerRef.current, { y: 0, opacity: isOpen ? 1 : 0 });
      return;
    }

    if (isOpen) {
      gsap.set(overlayRef.current, { display: "block" });
      
      const tl = gsap.timeline();
      
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      .fromTo(containerRef.current, 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        "-=0.1"
      )
      .fromTo(linksRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.2"
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        }
      });
    }
  }, [isOpen, prefersReducedMotion]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-apex-navy-900/95 backdrop-blur-md hidden"
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col h-full p-5 md:p-10" ref={containerRef}>
        <div className="flex justify-between items-center mb-12">
          {/* Mobile Logo placeholder inside menu */}
          <Link href="/" onClick={onClose} className="text-white text-xl font-bold tracking-tight">
            Apex<span className="text-apex-gold-500">.</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-apex-gold-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apex-gold-500"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center gap-6">
          {primaryNavigation.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              ref={(el) => { linksRef.current[index] = el; }}
              className="text-3xl font-medium text-white hover:text-apex-gold-500 transition-colors w-max focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-apex-gold-500"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <Button variant="gold" className="w-full" size="lg" withArrow onClick={onClose}>
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
}
