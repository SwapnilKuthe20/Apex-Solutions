export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  iconType: "code" | "ai" | "cloud" | "crm" | "mobile" | "data";
  href?: string;
}

export const capabilitiesConfig = {
  eyebrow: "WHAT WE BUILD",
  headlinePrefix: "End-to-End Digital Solutions That ",
  headlineHighlight: "Drive Impact",
  description:
    "We combine deep technical expertise with domain knowledge to build secure, scalable and future-ready digital solutions.",
  items: [
    {
      id: "custom-software",
      number: "01",
      title: "Custom Software\nDevelopment",
      description:
        "Enterprise-grade applications tailored to your business goals. Scalable, secure and built to evolve.",
      iconType: "code",
    },
    {
      id: "ai-automation",
      number: "02",
      title: "AI & Automation",
      description:
        "Intelligent automation and AI solutions to optimize workflows, reduce costs and accelerate growth.",
      iconType: "ai",
    },
    {
      id: "cloud-infrastructure",
      number: "03",
      title: "Cloud & Infrastructure\nSolutions",
      description:
        "Modern cloud architecture, DevOps and managed infrastructure for reliability, performance and scale.",
      iconType: "cloud",
    },
    {
      id: "crm-erp",
      number: "04",
      title: "CRM / ERP\nSolutions",
      description:
        "Streamline operations, unify data and empower teams with smart business systems.",
      iconType: "crm",
    },
    {
      id: "web-mobile",
      number: "05",
      title: "Web & Mobile\nDevelopment",
      description:
        "High-performance web and mobile experiences that engage users and drive real results.",
      iconType: "mobile",
    },
    {
      id: "data-gis",
      number: "06",
      title: "Data & GIS\nSolutions",
      description:
        "Transform data into insights with advanced analytics, dashboards and geospatial intelligence.",
      iconType: "data",
    },
  ] as Capability[],
  bottomCta: {
    heading: "Have a unique challenge?",
    subheading: "Let's build a solution that fits your business perfectly.",
    buttonText: "Let's Talk",
    buttonHref: "/contact",
  },
};
