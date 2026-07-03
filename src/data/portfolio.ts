export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: string;
  summary: string;
  points: string[];
  image?: string;
  detail: string[];
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
    slug: "portfolio-web-system",
    title: "Portfolio Web System",
    tag: "Featured",
    status: "Next.js, Tailwind CSS, pnpm",
    summary:
      "Personal portfolio built as a clean consulting-style profile for projects, experience, and professional identity.",
    points: ["Dark editorial hero", "Project filtering", "Responsive section bands"],
    image: "/images/Screenshot 2026-06-07 002808.png",
    detail: [
      "Built as a personal portfolio system that balances visual identity, professional storytelling, and a fast browsing experience.",
      "Structured the site around reusable section components, responsive layouts, and project/experience data that can keep growing over time.",
      "Focused on making the homepage feel distinctive while keeping the project and experience pages easy to scan.",
    ],
    featured: true,
  },
  {
    slug: "kmteti-website",
    title: "KMTETI Website",
    tag: "Featured",
    status: "KMTETI FT UGM, Website",
    summary:
      "Official organization website for KMTETI FT UGM, built to present profile information, divisions, activities, services, and news in a clear digital experience.",
    points: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/Project/Screenshot 2026-05-27 014658.png",
    detail: [
      "Designed to help students, members, and external visitors understand KMTETI through a clear digital presence.",
      "Organized organization profile, divisions, activities, services, and news into a website structure that feels direct and maintainable.",
      "Prioritized responsive UI and readable content hierarchy so the site works well across desktop and mobile visits.",
    ],
    featured: true,
  },
  {
    slug: "campaign-web",
    title: "Campaign Web",
    tag: "Featured",
    status: "Next.js, Tailwind CSS, TypeScript",
    summary:
      "Campaign website designed to present candidate profile, vision and mission, experience, work programs, gallery, testimonials, and contact information in one focused page.",
    points: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/Project/Screenshot 2026-05-27 020810.png",
    detail: [
      "Built as a focused campaign page that introduces a candidate and gives visitors a complete path through profile, vision, programs, and contact.",
      "Composed the content into sections that support quick scanning while still giving enough depth for voters who want more context.",
      "Used a responsive visual system so gallery, testimonials, and program information stay polished on small screens.",
    ],
    featured: true,
  },
  {
    slug: "event-logistics-operating-flow",
    title: "Event Logistics Operating Flow",
    tag: "Operations",
    status: "TETI LabSkill, Technocorner, Teknik Fair",
    summary:
      "A structured coordination flow for logistics, equipment, consumption, guest handling, and inter-division communication.",
    points: ["Logistics mapping", "Stakeholder handling", "Execution control"],
    detail: [
      "Created an operating flow for event logistics so equipment, consumption, guest needs, and inter-division communication could be tracked clearly.",
      "Mapped responsibilities and checkpoints to reduce last-minute ambiguity during preparation and event execution.",
      "Supported smoother coordination between teams by turning scattered needs into a shared working structure.",
    ],
    featured: false,
  },
  {
    slug: "partnership-pipeline-framework",
    title: "Partnership Pipeline Framework",
    tag: "Partnership",
    status: "UGM Blockchain Club",
    summary:
      "A partnership-oriented framework for managing outreach, relationship building, and external collaboration opportunities.",
    points: ["Partner research", "Communication flow", "Value proposal"],
    detail: [
      "Built a partnership pipeline for identifying potential collaborators, preparing outreach, and tracking relationship progress.",
      "Structured communication around clear value proposals so external partners could understand the benefit of collaboration quickly.",
      "Helped make partnership work more repeatable by separating research, outreach, follow-up, and agreement stages.",
    ],
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
