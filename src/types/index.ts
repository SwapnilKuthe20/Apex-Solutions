/**
 * Apex Solutions Enterprise Technology Platform
 * Shared TypeScript Contracts & Domain Interfaces
 */

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
  isExternal?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
  iconName?: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  impactMetric?: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  outcomes: string[];
  imageSrc?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  architectureHighlights: string[];
  status: "Active" | "Enterprise" | "In-Development";
}

export interface TechnologyCategory {
  id: string;
  category: string;
  description: string;
  technologies: {
    name: string;
    level: "Core" | "Specialized" | "Emerging";
    icon?: string;
  }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientIndustry: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  heroImage?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  quote: string;
  industry: string;
  avatarSrc?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  eyebrow: string;
  description: string;
  keyDeliverables: string[];
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  imageSrc?: string;
}

export interface Metric {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface SiteConfig {
  name: "Apex Solutions";
  legalName: string;
  url: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    address: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}
