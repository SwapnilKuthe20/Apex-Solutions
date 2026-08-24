import { NavigationItem } from "@/types";

export const primaryNavigation: NavigationItem[] = [
  { id: "home", label: "Home", href: "/" },
  { 
    id: "services", 
    label: "Services", 
    href: "/services",
    children: [
      { id: "digital-transformation", label: "Digital Transformation", href: "/services/digital-transformation" },
      { id: "cloud-architecture", label: "Cloud Architecture", href: "/services/cloud-architecture" },
    ]
  },
  { 
    id: "solutions", 
    label: "Solutions", 
    href: "/solutions",
    children: [
      { id: "enterprise", label: "Enterprise Solutions", href: "/solutions/enterprise" },
      { id: "startup", label: "Startup Solutions", href: "/solutions/startup" },
    ]
  },
  { 
    id: "products", 
    label: "Products", 
    href: "/products",
    children: [
      { id: "apex-core", label: "Apex Core", href: "/products/core" },
      { id: "apex-analytics", label: "Apex Analytics", href: "/products/analytics" },
    ]
  },
  { id: "technologies", label: "Technologies", href: "/technologies" },
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
