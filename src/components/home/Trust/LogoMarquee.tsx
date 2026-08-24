"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { TrustedCompanyLogo } from "./TrustedCompanyLogo";
import { trustConfig } from "@/data/trust";

export function LogoMarquee() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 py-8 w-full">
      {trustConfig.companies.map((company) => (
        <TrustedCompanyLogo key={company.id} company={company} />
      ))}
    </div>
  );
}
