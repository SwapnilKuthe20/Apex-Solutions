"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { TrustedCompanyLogo } from "./TrustedCompanyLogo";
import { trustConfig } from "@/data/trust";

export function LogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current || !marqueeRef.current) return;

    // We clone the track contents for a seamless loop
    const track = trackRef.current;
    
    // Set up GSAP horizontal loop
    const tl = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20, // speed
      repeat: -1,
    });
    
    tweenRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (tweenRef.current && !prefersReducedMotion) {
      // Slow down the marquee on hover
      gsap.to(tweenRef.current, {
        timeScale: isHovered ? 0.2 : 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [isHovered, prefersReducedMotion]);

  if (prefersReducedMotion) {
    // Fallback to static grid
    return (
      <div className="flex flex-wrap justify-center gap-4 py-8">
        {trustConfig.companies.map((company) => (
          <TrustedCompanyLogo key={company.id} company={company} />
        ))}
      </div>
    );
  }

  return (
    <div 
      ref={marqueeRef}
      className="relative w-full overflow-hidden py-8 flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* 
        Double width track: Contains original + clone 
        Using xPercent: -50 means it will scroll exactly 50% of this double-width track,
        which perfectly aligns the start of the clone with the start of the original container,
        creating a seamless loop.
      */}
      <div ref={trackRef} className="flex flex-nowrap w-max will-change-transform">
        <div className="flex items-center flex-nowrap">
          {trustConfig.companies.map((company) => (
            <TrustedCompanyLogo key={`orig-${company.id}`} company={company} />
          ))}
        </div>
        <div className="flex items-center flex-nowrap" aria-hidden="true">
          {trustConfig.companies.map((company) => (
            <TrustedCompanyLogo key={`clone-${company.id}`} company={company} />
          ))}
        </div>
      </div>
      
      {/* Gradient fades for edge smoothing */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}
