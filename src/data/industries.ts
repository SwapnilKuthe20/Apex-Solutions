export interface IndustryData {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  visualType: "manufacturing" | "healthcare" | "logistics" | "finance";
}

export const industriesConfig = {
  eyebrow: "INDUSTRY SOLUTIONS",
  headline: "Engineering Solutions for the Industries That Move Business Forward",
  description:
    "We apply technology, automation and engineering discipline to solve industry-specific challenges and create measurable business value.",
  industries: [
    {
      id: "manufacturing",
      number: "01",
      title: "Manufacturing",
      description: "Industrial systems, automation and connected operations. We build software that integrates with hardware to optimize production lines and predictive maintenance.",
      features: ["IoT Integration", "Predictive Maintenance", "Supply Chain Visibility"],
      visualType: "manufacturing"
    },
    {
      id: "healthcare",
      number: "02",
      title: "Healthcare",
      description: "Digital experiences and data-driven workflows. Secure, compliant platforms that improve patient outcomes and streamline clinical operations.",
      features: ["Telehealth Platforms", "HIPAA Compliance", "EHR Integration"],
      visualType: "healthcare"
    },
    {
      id: "logistics",
      number: "03",
      title: "Logistics & Supply Chain",
      description: "Real-time tracking, route optimization and automated inventory management. We engineer resilient systems that adapt to global supply chain disruptions.",
      features: ["Route Optimization", "Fleet Management", "Real-Time Tracking"],
      visualType: "logistics"
    },
    {
      id: "finance",
      number: "04",
      title: "Financial Services",
      description: "Secure transaction processing, algorithmic analysis and modern banking portals. We build systems that handle high-volume data with zero compromise on security.",
      features: ["Fraud Detection", "High-Frequency Trading", "Secure Portals"],
      visualType: "finance"
    }
  ] as IndustryData[],
};
