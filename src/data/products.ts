export interface ProductData {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export const productsConfig = {
  eyebrow: "CORE PLATFORMS",
  headline: "Our Core Platforms",
  description:
    "We provide enterprise-grade platforms to accelerate development and streamline operations.",
  products: [
    {
      id: "web",
      title: "Web Platform",
      description: "Modern, responsive, and secure web applications built for scale and performance.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "mobile",
      title: "Mobile Platform",
      description: "Native and cross-platform mobile solutions delivering seamless user experiences.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "data",
      title: "Data Platform",
      description: "Robust data pipelines, warehousing, and analytics for actionable business insights.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: "cloud",
      title: "Cloud Platform",
      description: "Scalable cloud infrastructure and DevOps automation for reliable deployment.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    }
  ] as ProductData[],
};
