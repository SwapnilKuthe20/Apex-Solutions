export type CapabilityVariant = "featured" | "standard" | "wide";

export interface Capability {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  variant: CapabilityVariant;
  href?: string;
  iconType?: "software" | "ai" | "cloud" | "enterprise" | "data";
}

export const capabilitiesConfig = {
  eyebrow: "WHAT WE BUILD",
  headline: "End-to-End Digital Solutions That Drive Impact",
  description:
    "Apex engineers software, automation, cloud and data systems designed around real business outcomes.",
  items: [
    {
      id: "custom-software",
      number: "01",
      title: "Custom Software Engineering",
      shortDescription:
        "High-performance applications tailored to complex operational requirements. Built for scale, security, and resilience.",
      variant: "featured",
      iconType: "software",
    },
    {
      id: "ai-automation",
      number: "02",
      title: "AI & Automation",
      shortDescription:
        "Intelligent workflows and predictive models that transform data into operational advantage.",
      variant: "standard",
      iconType: "ai",
    },
    {
      id: "cloud-infrastructure",
      number: "03",
      title: "Cloud & Infrastructure",
      shortDescription:
        "Secure, scalable environments engineered for high availability and continuous deployment.",
      variant: "standard",
      iconType: "cloud",
    },
    {
      id: "enterprise-platforms",
      number: "04",
      title: "Enterprise Platforms",
      shortDescription:
        "Integrated CRM, ERP, and bespoke portal systems that unify disparate business functions.",
      variant: "standard",
      iconType: "enterprise",
    },
    {
      id: "data-analytics",
      number: "05",
      title: "Data, Analytics & GIS",
      shortDescription:
        "Real-time analytics, geospatial mapping, and robust data pipelines for strategic decision-making.",
      variant: "wide",
      iconType: "data",
    },
  ] as Capability[],
};
