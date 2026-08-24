"use client";

import React, { useState, useEffect, useRef } from "react";
import { engineeringApproachConfig } from "@/data/engineeringApproach";
import { EngineeringStep } from "./EngineeringStep";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function EngineeringJourney({ isVisible }: { isVisible?: boolean }) {
  const { steps } = engineeringApproachConfig;
  const prefersReducedMotion = useReducedMotion();
  
  // Active step index: 0 -> 1 -> 2 -> 3 -> 4
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sequential progression loop
  useEffect(() => {
    if (prefersReducedMotion || !isVisible || isPaused) return;

    const STEP_DURATION = 2600; // Time per step
    const FINAL_PAUSE = 3500;   // Pause on step 5 before loop restart

    const advanceStep = () => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          return 0; // Loop back smoothly to step 0
        }
      });
    };

    const delay = currentStep === steps.length - 1 ? FINAL_PAUSE : STEP_DURATION;
    timerRef.current = setTimeout(advanceStep, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentStep, isVisible, isPaused, prefersReducedMotion, steps.length]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setIsPaused(true);
    // Resume auto-loop after 6 seconds of inactivity
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  return (
    <div className="relative z-10 max-w-6xl mx-auto">
      {/* 5 Process Steps Container (Desktop & Tablet Horizontal / Mobile Vertical) */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-2 relative">
        
        {steps.map((step, index) => {
          // If reduced motion, all steps are active
          const isActive = prefersReducedMotion ? true : index <= currentStep;
          const isCurrent = prefersReducedMotion ? false : index === currentStep;
          const isConnectorActive = prefersReducedMotion ? true : index < currentStep;
          const isConnectorFilling = prefersReducedMotion ? false : index === currentStep;

          return (
            <div key={step.id} className="relative flex flex-col items-center">
              
              {/* Desktop Horizontal Connector Line + Arrow Button */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center absolute top-14 left-[68%] w-[64%] -translate-y-1/2 z-0 pointer-events-none">
                  {/* Base Light Gray Line */}
                  <div className="relative h-[2px] bg-slate-200/90 flex-grow overflow-hidden rounded-full">
                    {/* Animated Gold Progress Line */}
                    <div 
                      className={`absolute inset-0 bg-apex-gold-500 origin-left transition-transform duration-700 ease-out ${
                        isConnectorActive 
                          ? "scale-x-100" 
                          : isConnectorFilling 
                          ? "scale-x-100 delay-300" 
                          : "scale-x-0"
                      }`} 
                    />
                  </div>

                  {/* Circular Arrow Transition */}
                  <div className={`w-7 h-7 rounded-full bg-white border shadow-sm flex items-center justify-center shrink-0 z-10 mx-1 transition-all duration-500 ${
                    isConnectorActive || isConnectorFilling
                      ? "border-apex-gold-500 text-apex-gold-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] scale-105"
                      : "border-slate-200 text-slate-300 scale-95"
                  }`}>
                    <ChevronRight className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ${
                      isConnectorActive || isConnectorFilling ? "translate-x-0.5 text-apex-gold-500" : "text-slate-300"
                    }`} />
                  </div>

                  {/* Second Half Base Light Gray Line */}
                  <div className="relative h-[2px] bg-slate-200/90 flex-grow overflow-hidden rounded-full">
                    {/* Animated Gold Progress Line */}
                    <div 
                      className={`absolute inset-0 bg-apex-gold-500 origin-left transition-transform duration-700 ease-out ${
                        isConnectorActive 
                          ? "scale-x-100" 
                          : isConnectorFilling 
                          ? "scale-x-100 delay-500" 
                          : "scale-x-0"
                      }`} 
                    />
                  </div>
                </div>
              )}

              {/* Mobile Vertical Connector Line + Arrow Button */}
              {index < steps.length - 1 && (
                <div className="flex lg:hidden flex-col items-center my-3 pointer-events-none">
                  {/* Vertical Base Line */}
                  <div className="w-[2px] h-6 bg-slate-200 relative overflow-hidden">
                    <div 
                      className={`absolute inset-0 bg-apex-gold-500 origin-top transition-transform duration-500 ${
                        isConnectorActive ? "scale-y-100" : "scale-y-0"
                      }`} 
                    />
                  </div>
                  
                  {/* Circular Arrow */}
                  <div className={`w-7 h-7 rounded-full bg-white border shadow-sm flex items-center justify-center shrink-0 z-10 my-0.5 transition-all duration-500 ${
                    isConnectorActive ? "border-apex-gold-500 text-apex-gold-500" : "border-slate-200 text-slate-300"
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>

                  {/* Second Half Vertical Line */}
                  <div className="w-[2px] h-6 bg-slate-200 relative overflow-hidden">
                    <div 
                      className={`absolute inset-0 bg-apex-gold-500 origin-top transition-transform duration-500 ${
                        isConnectorActive ? "scale-y-100" : "scale-y-0"
                      }`} 
                    />
                  </div>
                </div>
              )}

              {/* Step Circle and Content */}
              <EngineeringStep 
                step={step} 
                isActive={isActive}
                isCurrent={isCurrent}
                onClick={() => handleStepClick(index)}
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}
