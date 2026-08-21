"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/types";

interface NavDropdownProps {
  item: NavigationItem;
}

export function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  if (!item.children || item.children.length === 0) {
    return (
      <Link 
        href={item.href} 
        className="text-sm font-medium hover:text-apex-gold-500 transition-colors relative group"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-apex-gold-500 transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-medium hover:text-apex-gold-500 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute left-0 mt-4 w-56 rounded-md bg-white border border-apex-border shadow-lg ring-1 ring-black/5 focus:outline-none transition-all duration-200 origin-top-left",
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        )}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-2" role="none">
          {item.children.map((child) => (
            <Link
              key={child.id}
              href={child.href}
              className="block px-4 py-2 text-sm text-apex-navy-800 hover:bg-apex-surface-50 hover:text-apex-gold-500 transition-colors focus:bg-apex-surface-50 focus:outline-none"
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
