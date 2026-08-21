import Link from "next/link";
import { NavigationItem } from "@/types";

interface FooterColumnProps {
  title: string;
  links: NavigationItem[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[12px] uppercase tracking-widest font-semibold text-apex-slate-500">
        {title}
      </h3>
      <nav aria-label={`${title} Navigation`}>
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link 
                href={link.href}
                className="text-[14px] md:text-[15px] text-apex-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
