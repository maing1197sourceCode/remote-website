// Sample listings. Replace with real jobs (or a database) later.
export type Job = {
  slug: string;
  title: string;
  category: "Engineering" | "Design" | "Marketing" | "Support" | "Operations";
  type: "Full-time" | "Contract";
  location: string;
  overlap: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "backend-developer",
    title: "Back-end Developer",
    category: "Engineering",
    type: "Full-time",
    location: "Remote · Vietnam",
    overlap: "US/EU overlap +4h",
    summary: "Build and maintain APIs for a fast-growing SaaS product used by international teams.",
    responsibilities: ["Design and ship REST/GraphQL services", "Review code and write tests", "Work async with a distributed team"],
    requirements: ["3+ years with Node.js, Python or Go", "Strong written English", "Comfortable using AI tools in your workflow"],
  },
  {
    slug: "frontend-developer",
    title: "Front-end Developer",
    category: "Engineering",
    type: "Full-time",
    location: "Remote · Vietnam",
    overlap: "US/EU overlap +4h",
    summary: "Own the customer-facing web app, from component library to performance.",
    responsibilities: ["Build UI in React and Next.js", "Collaborate with design on a shared system", "Improve Core Web Vitals"],
    requirements: ["3+ years React/TypeScript", "Eye for detail", "Strong written English"],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    category: "Design",
    type: "Contract",
    location: "Remote · Vietnam",
    overlap: "APAC/EU overlap",
    summary: "Design clear, usable flows for a B2B product with a small, senior team.",
    responsibilities: ["Run discovery and prototype in Figma", "Hand off specs to engineering", "Test with real users"],
    requirements: ["Portfolio of shipped product work", "Systems thinking", "English-fluent"],
  },
  {
    slug: "growth-marketer",
    title: "Growth Marketer",
    category: "Marketing",
    type: "Full-time",
    location: "Remote · Vietnam",
    overlap: "US overlap +3h",
    summary: "Plan and run SEO, content and paid campaigns tied to pipeline.",
    responsibilities: ["Own the content calendar", "Report on funnel metrics weekly", "Run and iterate paid experiments"],
    requirements: ["2+ years in B2B or SaaS marketing", "Data-literate", "Excellent written English"],
  },
  {
    slug: "customer-support-specialist",
    title: "Customer Support Specialist",
    category: "Support",
    type: "Full-time",
    location: "Remote · Vietnam",
    overlap: "US evening shift",
    summary: "Be the friendly, fast first response for international customers.",
    responsibilities: ["Resolve tickets in Zendesk", "Escalate bugs with clear reproduction steps", "Maintain help-center articles"],
    requirements: ["English-fluent (speaking and writing)", "Calm under pressure", "1+ year in support"],
  },
  {
    slug: "virtual-assistant",
    title: "Executive Virtual Assistant",
    category: "Operations",
    type: "Full-time",
    location: "Remote · Vietnam",
    overlap: "Flexible",
    summary: "Keep a founder's inbox, calendar and operations running smoothly.",
    responsibilities: ["Manage calendar and inbox", "Prepare reports and slides", "Automate repetitive work with AI tools"],
    requirements: ["Organised and proactive", "AI-fluent", "Strong English"],
  },
];

export const categories = ["All", "Engineering", "Design", "Marketing", "Support", "Operations"] as const;
