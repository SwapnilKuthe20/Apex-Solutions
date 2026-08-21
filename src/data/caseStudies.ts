export interface CaseStudyOutcome {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  client?: string;
  industry?: string;
  category?: string;
  summary: string;
  challenge?: string;
  approach?: string;
  technologies?: string[];
  outcomes?: CaseStudyOutcome[];
  image: string;
  href?: string;
  featured?: boolean;
}

export const caseStudiesConfig = {
  eyebrow: "CASE STUDIES",
  headline: "Engineering Solutions in the Real World.",
  description: "Explore selected engineering work across industries, products and digital systems.",
  caseStudies: [
    {
      id: "global-logistics",
      number: "01",
      title: "Global Logistics Platform",
      client: "Confidential Client",
      industry: "Supply Chain",
      category: "Digital Transformation",
      summary: "Architecting a unified data platform to process millions of real-time supply chain events.",
      challenge: "A fragmented workflow and legacy on-premise infrastructure made it impossible for the operations team to manage information across multiple disparate systems, leading to extreme latency in tracking events.",
      approach: "We engineered a highly available, event-driven architecture using Kafka and Kubernetes, seamlessly migrating their core operations to a modern cloud stack without interrupting existing business processes.",
      technologies: ["React", "Node.js", "Kafka", "Kubernetes", "AWS"],
      outcomes: [
        {
          value: "40%",
          label: "Reduction in processing time",
        },
        {
          value: "99.99%",
          label: "Platform uptime",
        }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      featured: true,
      href: "/work/global-logistics",
    },
    {
      id: "enterprise-fintech",
      number: "02",
      title: "Enterprise Trading Engine",
      client: "Global Fintech",
      industry: "Financial Services",
      category: "Platform Engineering",
      summary: "Building a high-frequency trading interface capable of handling extreme market volatility.",
      challenge: "The client's existing trading frontend suffered from severe lag during peak market hours, causing unacceptable slippage for institutional traders.",
      approach: "We completely decoupled the frontend rendering layer from the data ingestion pipeline, utilizing WebSockets and advanced state management to ensure sub-millisecond UI updates.",
      technologies: ["Next.js", "TypeScript", "WebSockets", "Redis", "Go"],
      // Intentionally omitting outcomes to demonstrate graceful degradation per requirements
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=2070",
      featured: false,
      href: "/work/enterprise-fintech",
    }
  ] as CaseStudy[],
};
