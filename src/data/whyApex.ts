export interface WhyApexPrinciple {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const whyApexConfig = {
  eyebrow: "WHY APEX",
  headline: "Engineering With a Business Mindset.",
  statement: "We engineer digital systems around the people, processes and business outcomes they are meant to serve.",
  description:
    "We don't build technology for technology's sake. Apex combines business context, engineering discipline and delivery experience to build systems designed for real business environments.",
  principles: [
    {
      id: "engineering-first",
      number: "01",
      title: "ENGINEERING-FIRST",
      description: "We approach complex problems through structured engineering, prioritizing system integrity and technical depth over superficial features.",
    },
    {
      id: "business-aligned",
      number: "02",
      title: "BUSINESS-ALIGNED",
      description: "Technology is designed around actual business requirements, ensuring that every deployment maps directly to measurable outcomes.",
    },
    {
      id: "scalable",
      number: "03",
      title: "BUILT TO EVOLVE",
      description: "Systems are architected with future change in mind. We build platforms capable of scaling naturally as your operational demands grow.",
    },
    {
      id: "collaborative",
      number: "04",
      title: "COLLABORATIVE DELIVERY",
      description: "We operate as an extension of your technical team, embedding our engineering practices directly into your workflows.",
    },
    {
      id: "long-term",
      number: "05",
      title: "LONG-TERM THINKING",
      description: "We measure success by the long-term viability and performance of the systems we build, prioritizing maintainability and low technical debt.",
    },
  ] as WhyApexPrinciple[],
};
