"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { footerNavigation } from "@/data/navigation";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FooterBottom() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8 mt-16 border-t border-apex-border/10">
      
      {/* Copyright */}
      <p className="text-[13px] text-apex-slate-500 text-center md:text-left">
        &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
      </p>

      {/* Legal & Back to Top */}
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-8">
        <ul className="flex items-center gap-6">
          {footerNavigation.legal.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-[13px] text-apex-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Back to Top */}
        <button
          onClick={handleScrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 text-[13px] font-semibold text-apex-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm"
        >
          <span>Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
