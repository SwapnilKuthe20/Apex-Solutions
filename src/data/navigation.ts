import { NavigationItem } from "@/types";

export const primaryNavigation: NavigationItem[] = [
  { id: "services", label: "Services", href: "/services" },
  { id: "solutions", label: "Solutions", href: "/solutions" },
  { id: "industries", label: "Industries", href: "/industries" },
  { id: "products", label: "Products", href: "/products" },
  { id: "technologies", label: "Technologies", href: "/technologies" },
  { id: "case-studies", label: "Case Studies", href: "/case-studies" },
  { id: "insights", label: "Insights", href: "/insights" },
  { id: "about", label: "About Us", href: "/about" },
];

export const footerNavigation = {
  company: [
    { id: "about", label: "About Us", href: "/about" },
    { id: "careers", label: "Careers", href: "/careers" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
  services: [
    { id: "digital-transformation", label: "Digital Transformation", href: "/services/digital-transformation" },
    { id: "cloud-architecture", label: "Cloud Architecture", href: "/services/cloud-architecture" },
    { id: "data-engineering", label: "Data Engineering", href: "/services/data-engineering" },
    { id: "platform-engineering", label: "Platform Engineering", href: "/services/platform-engineering" },
  ],
  industries: [
    { id: "finance", label: "Financial Services", href: "/industries/financial-services" },
    { id: "healthcare", label: "Healthcare", href: "/industries/healthcare" },
    { id: "retail", label: "Retail & E-commerce", href: "/industries/retail" },
    { id: "manufacturing", label: "Manufacturing", href: "/industries/manufacturing" },
  ],
  resources: [
    { id: "insights", label: "Insights", href: "/insights" },
    { id: "case-studies", label: "Case Studies", href: "/case-studies" },
    { id: "documentation", label: "Documentation", href: "/docs" },
  ],
  legal: [
    { id: "privacy", label: "Privacy Policy", href: "/privacy-policy" },
    { id: "terms", label: "Terms of Service", href: "/terms-of-service" },
    { id: "cookies", label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
