export interface Capability {
  id: string;
  title: string;
  shortDescription: string;
  href?: string;
  iconBg: string;
  iconColor: string;
}

export const capabilitiesConfig = {
  eyebrow: "OUR SERVICES",
  headline: "End-to-End Capabilities. Built for Impact.",
  description:
    "We provide comprehensive engineering services designed to accelerate your digital transformation.",
  items: [
    {
      id: "custom-software",
      title: "Custom Software Development",
      shortDescription:
        "High-performance applications tailored to complex operational requirements. Built for scale, security, and resilience.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      shortDescription:
        "Intelligent workflows and predictive models that transform data into operational advantage.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Architecture & DevOps",
      shortDescription:
        "Secure, scalable environments engineered for high availability and continuous deployment.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      shortDescription:
        "Real-time analytics and robust data pipelines for strategic decision-making and business intelligence.",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      shortDescription:
        "User-centric interfaces that drive engagement, adoption, and deliver exceptional digital experiences.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "enterprise-platforms",
      title: "Enterprise Platforms",
      shortDescription:
        "Integrated CRM, ERP, and bespoke portal systems that unify disparate business functions seamlessly.",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ] as Capability[],
};
