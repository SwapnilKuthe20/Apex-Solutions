import { 
  Code2, 
  Briefcase, 
  ShieldCheck, 
  Scaling, 
  Target, 
  Handshake, 
  Lightbulb 
} from "lucide-react";

export const whyApexConfig = {
  eyebrow: "WHY APEX",
  headline: {
    part1: "Engineering Excellence.",
    part2: "Business ",
    highlight: "Impact."
  },
  description: "We combine deep technical expertise with business understanding to build solutions that drive growth, efficiency, and long-term success.",
  
  features: [
    {
      id: "engineering-first",
      title: "Engineering First",
      description: "Clean code, scalable architecture and modern engineering practices.",
      icon: Code2
    },
    {
      id: "business-focused",
      title: "Business Focused",
      description: "We solve real business problems with solutions that deliver measurable results.",
      icon: Briefcase
    },
    {
      id: "secure-reliable",
      title: "Secure & Reliable",
      description: "Security by design, robust testing and continuous monitoring for peace of mind.",
      icon: ShieldCheck
    },
    {
      id: "scalable-future-ready",
      title: "Scalable & Future-Ready",
      description: "Built to scale, adapt and evolve with your business and technology.",
      icon: Scaling
    }
  ],

  mission: {
    text: "Our mission is simple:\nBuild technology that\nempowers businesses\nand improves lives.",
    philosophy: [
      {
        id: "purpose-driven",
        title: "Purpose Driven",
        description: "We build with purpose and long-term vision.",
        icon: Target
      },
      {
        id: "partnership-mindset",
        title: "Partnership Mindset",
        description: "We succeed when our clients succeed.",
        icon: Handshake
      },
      {
        id: "innovation-always",
        title: "Innovation Always",
        description: "We embrace new ideas and emerging tech.",
        icon: Lightbulb
      }
    ]
  },

  impact: {
    eyebrow: "OUR IMPACT",
    headline: {
      part1: "Delivering Results. Driving ",
      highlight: "Impact."
    },
    metrics: [
      {
        id: "projects",
        value: "250+",
        title: "Projects Delivered",
        description: "Successful solutions across industries and domains.",
        iconType: "rocket"
      },
      {
        id: "clients",
        value: "120+",
        title: "Happy Clients",
        description: "Businesses that trust us as their technology partner.",
        iconType: "users"
      },
      {
        id: "countries",
        value: "12+",
        title: "Countries Served",
        description: "Global delivery with local understanding.",
        iconType: "globe"
      },
      {
        id: "hours",
        value: "1M+",
        title: "Hours of Engineering",
        description: "Building robust, scalable and secure solutions.",
        iconType: "code"
      },
      {
        id: "satisfaction",
        value: "99.6%",
        title: "Customer Satisfaction",
        description: "Long-term relationships built on trust and results.",
        iconType: "trophy"
      },
      {
        id: "years",
        value: "5+",
        title: "Years of Excellence",
        description: "A journey of growth, learning and innovation.",
        iconType: "chart"
      }
    ]
  }
};
