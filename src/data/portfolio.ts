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
    slug: "catet",
    title: "Catet!",
    tag: "Featured",
    status: "Fullstack / Fintech",
    summary:
      "Personal finance tracker that records itself. Pay with QRIS, the m-banking notification is captured automatically, and the only thing left is one tap to pick a category.",
    points: ["Next.js", "Supabase", "Drizzle ORM", "Kotlin"],
    image: "/Project/catet.png",
    detail: [
      "Built around two everyday problems: forgetting to log spending, and retyping amounts that the bank notification already shows.",
      "An Android companion captures myBCA notifications and sends them to an ingest API. The raw payload is stored first, then a parser reads the amount and direction and saves the transaction with an empty category.",
      "A notification comes back to the phone with three category buttons, so logging finishes in one tap without opening any app. When a notification cannot be parsed, no transaction is created and the raw payload is kept for review.",
    ],
    featured: true,
  },
  {
    slug: "kmteti-website",
    title: "KMTETI FT UGM Website",
    tag: "Featured",
    status: "Fullstack / Web Development",
    summary:
      "Official web portal of KMTETI FT UGM: organization news, cabinet profile, division and program directory, national events, and academic services in one place.",
    points: ["Next.js", "Payload CMS", "PostgreSQL", "GSAP"],
    image: "/Project/kmteti-website.png",
    detail: [
      "Serves as the information hub for students of Electrical Engineering and Information Technology at FT UGM, from activity news to service requests.",
      "Content is managed through Payload CMS on PostgreSQL, with media stored on Supabase storage, so the team can publish without touching code.",
      "Built with the Next.js App Router, Tailwind CSS v4, and GSAP ScrollTrigger for motion, with a responsive layout for both desktop and mobile visitors.",
    ],
    featured: true,
  },
  {
    slug: "suncost",
    title: "SunCost",
    tag: "Featured",
    status: "Desktop App / Software Architecture",
    summary:
      "Windows desktop app that estimates rooftop solar potential, electricity savings, and payback time from the solar radiation data of the user's location.",
    points: ["C#", "WPF", "SQLite", "Weather API"],
    image: "/Project/suncost-energi.png",
    detail: [
      "Indonesia receives some of the highest solar radiation in the world, yet rooftop solar adoption stays low because people cannot tell how much their roof would produce or when the investment pays back.",
      "Users enter their location, roof area, orientation, and tilt. SunCost combines weather API radiation data with panel specs and electricity tariffs to show energy output, savings, and payback period.",
      "Led the team as software architect, designing the class structure and the split between views, models, and services in a C# WPF app with a local SQLite database.",
    ],
    featured: true,
  },
  {
    slug: "campaign-web",
    title: "Campaign Web",
    tag: "Project",
    status: "Frontend / UI-UX",
    summary:
      "Campaign website that presents a candidate's profile, vision and mission, experience, work programs, gallery, testimonials, and contact in one focused page.",
    points: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/Project/Screenshot 2026-05-27 020810.png",
    detail: [
      "Built as a focused campaign page that introduces a candidate and gives visitors a complete path through profile, vision, programs, and contact.",
      "Content is composed into sections that are quick to scan while still giving enough depth for voters who want more context.",
      "Uses a responsive visual system so the gallery, testimonials, and program information stay polished on small screens.",
    ],
    featured: false,
  },
  {
    slug: "foundit",
    title: "FoundIT!",
    tag: "On Progress",
    status: "AI / Backend",
    summary:
      "Lost and found platform that matches reports of lost and found items using image and text similarity.",
    points: ["Python", "FastAPI", "scikit-learn", "Computer Vision + NLP"],
    detail: [
      "Still in development. FoundIT! helps people report lost or found items and surfaces likely matches instead of making them scroll through every post.",
      "The AI matching service runs separately from the main backend as a FastAPI app. It scores visual similarity between two photos, text similarity between two descriptions, and combines both into one confidence score.",
      "The backend uses that confidence score to decide whether two reports probably describe the same item.",
    ],
    featured: false,
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
    period: "2026",
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

/** Grouped for /about. Every item comes from a shipped or in-progress project. */
export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "Kotlin", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "Tailwind CSS", "Payload CMS", "FastAPI", "WPF", "GSAP", "Framer Motion"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Supabase", "Drizzle ORM", "SQLite"],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "Vercel", "pnpm", "Figma"],
  },
];
