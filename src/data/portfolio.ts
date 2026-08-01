export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: string;
  summary: string;
  points: string[];
  image?: string;
  liveUrl?: string;
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
  /** Omit while a role has no photo yet — the UI renders a placeholder. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-web-system",
    title: "Portfolio Web ",
    tag: "Featured",
    status: "Frontend / UI-UX",
    summary:
      "Personal portfolio built as a clean consulting-style profile for projects, experience, and professional identity.",
    points: ["Dark editorial hero", "Project filtering", "Responsive section bands"],
    image: "/Project/porto.webp",
    liveUrl: "#", // TODO: ganti ke URL live project
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
    status: "Frontend / Web Development",
    summary:
      "Official organization website for KMTETI FT UGM, built to present profile information, divisions, activities, services, and news in a clear digital experience.",
    points: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/Project/Screenshot 2026-05-27 014658.png",
    liveUrl: "#", // TODO: ganti ke URL live project
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
    status: "Frontend / UI-UX",
    summary:
      "Campaign website designed to present candidate profile, vision and mission, experience, work programs, gallery, testimonials, and contact information in one focused page.",
    points: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/Project/Screenshot 2026-05-27 020810.png",
    liveUrl: "#", // TODO: ganti ke URL live project
    detail: [
      "Built as a focused campaign page that introduces a candidate and gives visitors a complete path through profile, vision, programs, and contact.",
      "Composed the content into sections that support quick scanning while still giving enough depth for voters who want more context.",
      "Used a responsive visual system so gallery, testimonials, and program information stay polished on small screens.",
    ],
    featured: true,
  },
];

// Newest first. `/experience` reverses this to read the rail as a route.
export const experiences: Experience[] = [
  {
    organization: "TETI Lab Skill",
    role: "Sub-Coordinator of Mahkamah Division",
    period: "2026 - Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Leading the Mahkamah division: upholding the rules of the event and handling participant discipline fairly.",
    accent: "Judiciary",
  },
  {
    organization: "Technocorner",
    role: "Sub-Coordinator of Equipment, Logistics, and Consumption",
    period: "2026",
    location: "Yogyakarta, Indonesia",
    description:
      "Coordinating logistics, equipment readiness, and consumption needs for a technology event environment.",
    accent: "Event Ops",
    image: "/Experience/technocorner26.jpeg",
  },
  {
    organization: "KMTETI FT UGM",
    role: "Chairman",
    period: "2026",
    location: "Yogyakarta, Indonesia",
    description:
      "Leading the organization while aligning divisions, empowering members, and shaping internal development priorities.",
    accent: "Leadership",
    image: "/Experience/KMTETI.webp",
  },
  {
    organization: "Teknik Fair",
    role: "Liaison Officer",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Served as the main bridge between committee teams and guest stars, handling schedules, needs, logistics, and hospitality.",
    accent: "Liaison",
    image: "/Experience/TeknikFair.jpeg",
  },
  {
    organization: "JAWARAGAMA",
    role: "Vice Chairman",
    period: "2026",
    location: "Yogyakarta, Indonesia",
    description:
      "Supporting strategic direction, member collaboration, and organizational impact across internal and external programs.",
    accent: "Strategy",
    image: "/Experience/Jawaragama2.jpeg",
  },
  {
    organization: "TETI Lab Skill",
    role: "Mentor",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Guided a group of new students through the event, keeping them informed, supported, and on schedule.",
    accent: "Mentorship",
    image: "/Experience/TLS.jpeg",
  },
  {
    organization: "TETI Lab Skill",
    role: "Coordinator of Equipment, Logistics, and Consumption",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Ran the equipment, logistics, and consumption team end to end, from planning needs to execution on event day.",
    accent: "Event Ops",
    image: "/Experience/BPO.jpeg",
  },
  {
    organization: "JAWARAGAMA",
    role: "Staff of Human Resource Development (PSDM)",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Developed member engagement programs for the Banten student family community at Universitas Gadjah Mada.",
    accent: "People Dev",
    image: "/Experience/Jawaragama.jpeg",
  },
  {
    organization: "KMTETI FT UGM",
    role: "Staff of Organizational Development Bureau (BPO)",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Supported internal organizational development, member growth programs, and cross-division coordination.",
    accent: "Organizational Dev",
    image: "/Experience/BPO3.jpeg",
  },
  {
    organization: "Technocorner",
    role: "Staff of Equipment, Logistics, and Consumption",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Prepared equipment and handled logistics and consumption operations for a large technology event.",
    accent: "Event Ops",
    image: "/Experience/Technocorner.jpeg",
  },
  {
    organization: "Find IT! UGM",
    role: "Staff of Equipment, Logistics, and Consumption",
    period: "2025",
    location: "Yogyakarta, Indonesia",
    description:
      "Supported equipment preparation and operational needs for a university technology event.",
    accent: "Support",
    image: "/Experience/FindIT25.jpeg",
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
