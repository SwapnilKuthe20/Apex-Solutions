export interface TrustedCompany {
  id: string;
  name: string;
  // For the sake of this prototype, we'll use placeholder text or icons if no assets exist.
  // In a real project, this would be an absolute path to the SVG in the public folder.
  logoText: string; 
}

export const trustConfig = {
  eyebrow: "TRUSTED BY INNOVATIVE COMPANIES",
  headline: "Trusted by Forward-Thinking Businesses",
  description:
    "We partner with startups, SMEs and enterprises to build secure, scalable and future-ready digital solutions.",
  companies: [
    { id: "google", name: "Google", logoText: "Google" },
    { id: "microsoft", name: "Microsoft", logoText: "Microsoft" },
    { id: "aws", name: "AWS", logoText: "AWS" },
    { id: "meta", name: "Meta", logoText: "Meta" },
    { id: "hp", name: "HP", logoText: "HP" },
    { id: "zoho", name: "Zoho", logoText: "Zoho" },
  ] as TrustedCompany[],
};
