"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/types";
import { usePathname } from "next/navigation";

interface NavDropdownProps {
  item: NavigationItem;
}

export function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');

  if (!item.children || item.children.length === 0) {
    return (
      <Link 
        href={item.href} 
        className={cn(
          "text-[15px] font-semibold transition-colors relative group py-2",
          isActive ? "text-apex-gold-500" : "text-apex-navy-800 hover:text-apex-gold-500"
        )}
      >
        {item.label}
        {/* Underline Animation (Scale X left-to-right) */}
        <span 
          className={cn(
            "absolute bottom-1 left-0 h-0.5 bg-apex-gold-500 origin-left transition-transform duration-300 ease-out",
            isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
          )} 
        />
      </Link>
    );
  }

  return (
    <div 
      className="relative inline-block text-left" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 text-[15px] font-semibold transition-colors py-2 relative group",
          (isActive || isOpen) ? "text-apex-gold-500" : "text-apex-navy-800 hover:text-apex-gold-500"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
        {/* Underline Animation (Scale X left-to-right) */}
        <span 
          className={cn(
            "absolute bottom-1 left-0 h-0.5 bg-apex-gold-500 origin-left transition-transform duration-300 ease-out",
            (isActive || isOpen) ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
          )} 
        />
      </button>

      <div
        className={cn(
          "absolute left-0 mt-2 w-56 rounded-xl bg-white border border-apex-border/60 shadow-xl ring-1 ring-black/5 focus:outline-none transition-all duration-200 origin-top-left overflow-hidden",
          isOpen ? "opacity-100 scale-100 visible translate-y-0" : "opacity-0 scale-95 invisible -translate-y-2"
        )}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-2" role="none">
          {item.children.map((child) => (
            <Link
              key={child.id}
              href={child.href}
              className="block px-5 py-2.5 text-[14px] font-medium text-apex-navy-800 hover:bg-apex-surface-50 hover:text-apex-gold-500 transition-colors focus:bg-apex-surface-50 focus:outline-none"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
