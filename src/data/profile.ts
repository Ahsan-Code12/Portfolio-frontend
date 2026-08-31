/**
 * ============================================================
 *  EDIT THIS FILE TO CHANGE YOUR PORTFOLIO CONTENT
 *  This is the only file you need to touch for text/content.
 * ============================================================
 */

export const profile = {
  name: "Ahsan Khan",
  role: "Frontend Developer",
  tagline: "I build fast, clean interfaces for the web.",
  location: "Multan, Pakistan",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/yourname" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
    { label: "Twitter", url: "https://twitter.com/yourname" },
  ],
  about: `I'm a frontend developer who likes turning rough ideas into interfaces
  that feel obvious in hindsight. Most of my work lives at the edge of design
  and engineering — component systems, motion, and the small details that
  make software feel considered.`,
}

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "Vite", "Node.js"] },
  { group: "Styling", items: ["Tailwind CSS", "CSS Modules", "Framer Motion"] },
  { group: "Tools", items: ["Git", "Figma", "Vercel", "Postman"] },
]

export const experience = [
  {
    role: "Frontend Developer",
    company: "Studio North",
    period: "2026 — Present",
    description:
      "Building the component library and marketing site used across the company's three products.",
  },
  {
    role: "Junior Developer",
    company: "Loopwork",
    period: "2025 — 2026",
    description:
      "Shipped customer-facing features for a SaaS dashboard, working closely with design on interaction details.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2024 — 2025",
    description:
      "Built websites and landing pages for small businesses and local startups.",
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  url?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: "Nimbus",
    description: "A weather app with animated, location-aware backgrounds and a clean forecast view.",
    tags: ["React", "TypeScript", "API"],
    url: "#",
    repo: "#",
  },
  {
    title: "Ledger",
    description: "A minimal personal finance tracker with monthly breakdowns and category charts.",
    tags: ["React", "Charts", "LocalStorage"],
    url: "#",
    repo: "#",
  },
  {
    title: "Fieldnote",
    description: "A distraction-free writing app with folders, tags, and offline support.",
    tags: ["React", "IndexedDB", "PWA"],
    url: "#",
    repo: "#",
  },
  {
    title: "Studio Site",
    description: "Marketing website for a design studio, built with scroll-based motion.",
    tags: ["Next.js", "Framer Motion"],
    url: "#",
    repo: "#",
  },
]
