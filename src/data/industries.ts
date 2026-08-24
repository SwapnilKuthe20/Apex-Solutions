export interface IndustryData {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  visualType: string;
}

export const industriesConfig = {
  eyebrow: "OUR EXPERTISE",
  headline: "Industries We Serve",
  description:
    "We apply technology, automation and engineering discipline to solve industry-specific challenges and create measurable business value.",
  industries: [
    {
      id: "manufacturing",
      number: "01",
      title: "Manufacturing",
      description: "Industrial systems, automation and connected operations. We build software that integrates with hardware to optimize production lines.",
      features: [],
      visualType: "manufacturing"
    },
    {
      id: "healthcare",
      number: "02",
      title: "Healthcare",
      description: "Digital experiences and data-driven workflows. Secure, compliant platforms that improve patient outcomes and clinical operations.",
      features: [],
      visualType: "healthcare"
    },
    {
      id: "logistics",
      number: "03",
      title: "Logistics & Supply Chain",
      description: "Real-time tracking, route optimization and automated inventory management. Resilient systems that adapt to global supply disruptions.",
      features: [],
      visualType: "logistics"
    },
    {
      id: "finance",
      number: "04",
      title: "Financial Services",
      description: "Secure transaction processing, algorithmic analysis and modern banking portals. We build systems that handle high-volume data.",
      features: [],
      visualType: "finance"
    },
    {
      id: "retail",
      number: "05",
      title: "Retail & E-Commerce",
      description: "Omnichannel platforms, personalized experiences, and intelligent supply chain integrations that drive customer loyalty and revenue.",
      features: [],
      visualType: "retail"
    },
    {
      id: "energy",
      number: "06",
      title: "Energy & Utilities",
      description: "Smart grid management, predictive maintenance systems, and sustainability tracking platforms for modern energy providers.",
      features: [],
      visualType: "energy"
    }
  ] as IndustryData[],
};
