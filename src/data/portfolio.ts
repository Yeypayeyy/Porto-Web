export type Project = {
  title: string;
  tag: string;
  status: string;
  summary: string;
  points: string[];
  featured: boolean;
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Web System",
    tag: "Featured",
    status: "Next.js, Tailwind CSS, pnpm",
    summary:
      "Personal portfolio built as a clean consulting-style profile for projects, experience, and professional identity.",
    points: ["Dark editorial hero", "Project filtering", "Responsive section bands"],
    featured: true,
  },
  {
    title: "Organization Development Case Study",
    tag: "Featured",
    status: "KMTETI FT UGM",
    summary:
      "A leadership and team-development case study based on organization planning, member empowerment, and internal coordination.",
    points: ["Team management", "Program planning", "Division alignment"],
    featured: true,
  },
  {
    title: "Event Logistics Operating Flow",
    tag: "Operations",
    status: "TETI LabSkill, Technocorner, Teknik Fair",
    summary:
      "A structured coordination flow for logistics, equipment, consumption, guest handling, and inter-division communication.",
    points: ["Logistics mapping", "Stakeholder handling", "Execution control"],
    featured: false,
  },
  {
    title: "Partnership Pipeline Framework",
    tag: "Partnership",
    status: "UGM Blockchain Club",
    summary:
      "A partnership-oriented framework for managing outreach, relationship building, and external collaboration opportunities.",
    points: ["Partner research", "Communication flow", "Value proposal"],
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    organization: "KMTETI FT UGM",
    role: "Chairman",
    period: "Dec 2025 - Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Leading the organization while aligning divisions, empowering members, and shaping internal development priorities.",
    accent: "Leadership",
  },
  {
    organization: "UGM Blockchain Club",
    role: "Partnerships Manager",
    period: "Dec 2025 - Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Managing partnership direction and supporting external collaboration for a student-led blockchain community.",
    accent: "Partnership",
  },
  {
    organization: "Technocorner",
    role: "Sub-Coordinator of Logistic, Consumption, and Equipment",
    period: "Oct 2025 - Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Coordinating logistics, equipment readiness, and consumption needs for a technology event environment.",
    accent: "Event Ops",
  },
  {
    organization: "JAWARAGAMA",
    role: "Vice Chairman",
    period: "Aug 2025 - Mar 2026",
    location: "Yogyakarta, Indonesia",
    description:
      "Supporting strategic direction, member collaboration, and organizational impact across internal and external programs.",
    accent: "Strategy",
  },
  {
    organization: "Teknik Fair",
    role: "Liaison Officer",
    period: "Sep 2025 - Oct 2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Served as the main bridge between committee teams and guest stars, handling schedules, needs, logistics, and hospitality.",
    accent: "Liaison",
  },
  {
    organization: "Find IT! UGM",
    role: "Equipment Staff",
    period: "Oct 2024 - Jun 2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Supported equipment preparation and operational needs for a university technology event.",
    accent: "Support",
  },
];

export const skills = [
  "Team Management",
  "Marketing Strategy",
  "Marketing",
  "Python Essentials 1",
  "Logistics Coordination",
  "Partnership Management",
];
