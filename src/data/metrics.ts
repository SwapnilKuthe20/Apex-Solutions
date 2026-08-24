export interface Metric {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description?: string;
  sourceStatus: "approved" | "content-required";
}

export const metricsConfig = {
  eyebrow: "COMPANY STATS",
  headline: "Engineering Excellence",
  description: "We deliver robust software solutions that empower organizations to scale rapidly and operate efficiently. By applying proven engineering principles, we ensure long-term stability and success.",
  metrics: [
    {
      id: "projects",
      value: 250,
      suffix: "+",
      decimals: 0,
      label: "Projects Delivered",
      description: "Across web, mobile, and complex enterprise systems.",
      sourceStatus: "approved",
    },
    {
      id: "clients",
      value: 120,
      suffix: "+",
      decimals: 0,
      label: "Clients Served",
      description: "From scaling startups to Fortune 500 enterprises.",
      sourceStatus: "approved",
    },
    {
      id: "countries",
      value: 12,
      suffix: "+",
      decimals: 0,
      label: "Countries",
      description: "Global deployments and international partnerships.",
      sourceStatus: "approved",
    },
    {
      id: "satisfaction",
      value: 99.6,
      suffix: "%",
      decimals: 1,
      label: "Client Satisfaction",
      description: "Measured across project delivery and long-term support.",
      sourceStatus: "approved",
    },
  ] as Metric[],
};
