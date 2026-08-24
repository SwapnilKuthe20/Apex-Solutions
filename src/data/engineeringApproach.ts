export interface EngineeringStepData {
  id: string;
  number: string;
  title: string;
  description: string;
  iconType: "discover" | "architect" | "build" | "deploy" | "scale";
}

export interface PrincipleItem {
  id: string;
  title: string;
  description: string;
  iconType: "shield" | "expand" | "award" | "users";
}

export const engineeringApproachConfig = {
  eyebrow: "OUR ENGINEERING APPROACH",
  headlineLine1: "We Engineer. You Scale.",
  headlineLine2Prefix: "Built for ",
  headlineLine2Highlight: "Long-Term Impact.",
  description:
    "Our proven engineering approach ensures every solution is thoughtfully designed, expertly built, and continuously optimized for real-world impact.",
  steps: [
    {
      id: "discover",
      number: "01",
      title: "Discover",
      description:
        "We understand your business,\nchallenges and goals through\nin-depth research and analysis.",
      iconType: "discover",
    },
    {
      id: "architect",
      number: "02",
      title: "Architect",
      description:
        "We design scalable, secure and\nfuture-ready architectures\ntailored to your needs.",
      iconType: "architect",
    },
    {
      id: "build",
      number: "03",
      title: "Build",
      description:
        "Our expert engineers craft\nhigh-quality solutions using\nmodern technologies.",
      iconType: "build",
    },
    {
      id: "deploy",
      number: "04",
      title: "Deploy",
      description:
        "We ensure smooth deployment\nwith robust testing, DevOps\nand automation.",
      iconType: "deploy",
    },
    {
      id: "scale",
      number: "05",
      title: "Scale",
      description:
        "We continuously monitor,\noptimize and evolve solutions\nto drive long-term growth.",
      iconType: "scale",
    },
  ] as EngineeringStepData[],
  principlesPanel: {
    title: "Engineering\nPrinciples We Follow",
    description: "These principles guide every decision\nwe make and every solution we build.",
    principles: [
      {
        id: "security",
        title: "Security First",
        description: "We build secure systems with a proactive mindset.",
        iconType: "shield",
      },
      {
        id: "scalable",
        title: "Scalable by Design",
        description: "Future-ready solutions that grow with you.",
        iconType: "expand",
      },
      {
        id: "quality",
        title: "Quality Driven",
        description: "Clean code, thorough testing and best engineering practices.",
        iconType: "award",
      },
      {
        id: "success",
        title: "Client Success",
        description: "Your success is our measure of success.",
        iconType: "users",
      },
    ] as PrincipleItem[],
  },
};
