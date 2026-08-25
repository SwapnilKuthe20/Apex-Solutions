export interface ProductData {
  id: string;
  title: string;
  titlePrefix?: string;
  titleSuffix?: string;
  subtitle: string;
  features: string[];
  iconBg: string;
  iconColor: string;
  iconName: string;
  accentColor: string;
}

export const productsConfig = {
  eyebrow: "OUR PRODUCTS & PLATFORMS",
  headline: "Own Platforms. Proven Impact.",
  headlineLine2: "Built by Apex. For Your Growth.",
  description:
    "We build and innovate our own platforms to solve real-world challenges across education, engagement, business operations and automation.",
  products: [
    {
      id: "eteach",
      title: "eTeach",
      subtitle: "Smart School Management\n& Learning Platform",
      features: [
        "School ERP & LMS",
        "Online Classes & Assessments",
        "Fee, Attendance & Reports",
        "Mobile App for Teachers & Parents"
      ],
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      iconName: "GraduationCap",
      accentColor: "bg-blue-600",
    },
    {
      id: "engageguru",
      title: "EngageGuru",
      titlePrefix: "Engage",
      titleSuffix: "Guru",
      subtitle: "AI-Powered Customer\nEngagement Platform",
      features: [
        "WhatsApp CRM & Automation",
        "Leads & Sales Management",
        "Email, SMS & RCS Marketing",
        "AI Chatbot & Workflow Builder"
      ],
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      iconName: "MessageCircle",
      accentColor: "bg-green-600",
    },
    {
      id: "activedesk",
      title: "ActiveDesk",
      titlePrefix: "Active",
      titleSuffix: "Desk",
      subtitle: "IT Management & Workflow\nAutomation Suite",
      features: [
        "Helpdesk & Ticketing",
        "Asset & Inventory Management",
        "Remote Monitoring",
        "Reports & Analytics"
      ],
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      iconName: "MonitorCheck",
      accentColor: "bg-orange-600",
    },
    {
      id: "printkaatm",
      title: "Print Ka ATM",
      titlePrefix: "Print Ka ",
      titleSuffix: "ATM",
      subtitle: "Smart Printing Kiosk\nManagement System",
      features: [
        "QR-Based Print Services",
        "Self-Service Printing",
        "Usage Tracking & Reports",
        "Secure & Cashless Payments"
      ],
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      iconName: "Printer",
      accentColor: "bg-purple-600",
    },
    {
      id: "skillzgro",
      title: "SkillzGro",
      titlePrefix: "Skillz",
      titleSuffix: "Gro",
      subtitle: "Skill Development &\nLearning Platform",
      features: [
        "Industry-Oriented Courses",
        "Live Projects & Internships",
        "Certifications",
        "Placement Assistance"
      ],
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
      iconName: "TrendingUp",
      accentColor: "bg-sky-600",
    }
  ] as ProductData[],
};
