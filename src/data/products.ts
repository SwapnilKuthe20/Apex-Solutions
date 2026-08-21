export interface ProductFeature {
  label: string;
  value: string;
}

export interface ProductData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  visualType: "portal" | "pipeline" | "dashboard";
}

export const productsConfig = {
  eyebrow: "PRODUCTS & PLATFORMS",
  headline: "Products Built Around Real Business Needs",
  description:
    "From focused business applications to scalable digital platforms, Apex engineers products designed around users, workflows and continuous growth.",
  products: [
    {
      id: "enterprise-portal",
      number: "01",
      title: "Apex Nexus Portal",
      subtitle: "Unified Enterprise Operations",
      description: "A centralized platform integrating disparate business systems into a single, cohesive interface. Nexus reduces context-switching and standardizes operational workflows across the enterprise.",
      features: [
        { label: "Architecture", value: "Micro-frontends" },
        { label: "Deployment", value: "Cloud-Native" },
        { label: "Security", value: "Zero-Trust" }
      ],
      visualType: "portal"
    },
    {
      id: "data-pipeline",
      number: "02",
      title: "Apex DataStream",
      subtitle: "High-Volume Analytics Pipeline",
      description: "Engineered to ingest, process, and analyze massive datasets in real-time. DataStream powers predictive models and operational intelligence without latency bottlenecks.",
      features: [
        { label: "Throughput", value: "High-Velocity" },
        { label: "Processing", value: "Stream & Batch" },
        { label: "Storage", value: "Distributed Data Lake" }
      ],
      visualType: "pipeline"
    },
    {
      id: "iot-dashboard",
      number: "03",
      title: "Apex Command Center",
      subtitle: "Industrial IoT & Telemetry",
      description: "A specialized visualization platform for industrial operations. Monitor thousands of sensor endpoints, manage physical assets, and trigger automated alerts from a unified dashboard.",
      features: [
        { label: "Protocol", value: "MQTT & WebSockets" },
        { label: "Latency", value: "Sub-second" },
        { label: "Interface", value: "Real-time GIS" }
      ],
      visualType: "dashboard"
    }
  ] as ProductData[],
};
