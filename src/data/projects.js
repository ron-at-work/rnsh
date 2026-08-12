export const projects = [
  {
    id: 1,
    title: "MyFitRiwaaz",
    meta: "Multi-Vendor Marketplace Platform (Freelance)",
    description: "Built the platform end-to-end (frontend + backend) as a multi-vendor marketplace where a single user can also onboard as a vendor, listing and managing products alongside their own purchases.",
    technologies: ["Next.js", "Python", "PostgreSQL (Supabase)", "Redis", "Stripe", "Resend", "FedEx API", "Railway"],
    points: [
      "Built the platform **end-to-end (frontend + backend)** as a **multi-vendor marketplace** where a single user can also onboard as a vendor, listing and managing products alongside their own purchases.",
      "Designed and implemented the **vendor payments system** — a super-admin-managed settlement flow that processes and disburses payouts to vendors — integrating **Stripe** for payments, **FedEx API** for delivery logistics, and **Resend** for transactional emails.",
      "Diagnosed and fixed a critical **API latency issue** (initial response times of **~11s**) by co-locating the **Railway** deployment and **Supabase** database in the same region (**Singapore**) and replacing per-request DB connections with a **persistent connection pool**.",
      "Implemented a **Redis cache-aside** strategy to eliminate stale-cache issues while keeping read-heavy endpoints fast."
    ],
    link: "https://rnsh.xyz",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Chrysalis AI",
    meta: "AI Powered Fashion Tech Platform (Announcement)",
    description: "Developing Chrysalis AI, a B2B SaaS platform that enables fashion startup founders to generate hyper-realistic, multi-angle product photos without a physical photoshoot.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Supabase", "Redis", "Celery"],
    points: [
      "Developing **Chrysalis AI**, a **B2B SaaS** platform that enables fashion startup founders to generate **hyper-realistic, multi-angle product photos** without a physical photoshoot.",
      "Users can sketch or upload garment designs and configure a **digital model's parameters** to instantly render **production-ready images**."
    ],
    link: "https://chrysalis.sbs/",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "kiwiAi",
    meta: "(repo | live)",
    description: "An AI-powered tool that automatically analyzes React codebases, visualizes component relationships, and generates documentation using the Groq LLM.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Groq"],
    points: [
      "An **AI-powered** tool that automatically analyzes **React codebases**, visualizes component relationships, and generates documentation using the **Groq LLM**."
    ],
    link: "https://kiwi-ai-two.vercel.app/",
    github: "https://github.com/ron-at-work/kiwi.ai",
    featured: true
  },
  {
    id: 4,
    title: "DevWell",
    meta: "(repo | live)",
    description: "A Chrome extension designed to prioritise the well-being of developers with exercise guidance, water reminders, and accurate active time tracking.",
    technologies: ["JavaScript", "Chrome Extension APIs"],
    points: [
      "A **Chrome extension** designed to prioritise the well-being of developers with **exercise guidance**, **water reminders**, and accurate **active time tracking**."
    ],
    link: "http://rb.gy/mqbaw",
    github: "https://github.com/rounit08/devwell",
    featured: false,
    status: "Upcoming"
  }
];

