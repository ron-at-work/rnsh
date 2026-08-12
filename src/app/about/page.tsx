import Link from 'next/link';
import { workHighlights } from '@/data/work';
import { withBold } from '@/lib/bold';

const projectCards = [
  {
    title: 'MyFitRiwaaz',
    meta: 'Multi-Vendor Marketplace Platform (Freelance)',
    stack: 'Next.js, Python, PostgreSQL (Supabase), Redis, Stripe, Resend, FedEx API, Railway',
    link: 'https://rnsh.xyz',
    points: [
      'Built the platform **end-to-end (frontend + backend)** as a **multi-vendor marketplace** where a single user can also onboard as a vendor, listing and managing products alongside their own purchases.',
      'Designed and implemented the **vendor payments system** - a super-admin-managed settlement flow that processes and disburses payouts to vendors - integrating **Stripe** for payments, **FedEx API** for delivery logistics, and **Resend** for transactional emails.',
      'Diagnosed and fixed a critical **API latency issue** (initial response times of **~11s**) by co-locating the **Railway** deployment and **Supabase** database in the same region (**Singapore**) and replacing per-request DB connections with a **persistent connection pool**.',
      'Implemented a **Redis cache-aside** strategy to eliminate stale-cache issues while keeping read-heavy endpoints fast.',
    ],
  },
  {
    title: 'Chrysalis AI',
    meta: 'AI Powered Fashion Tech Platform (Announcement)',
    stack: 'Next.js, TypeScript, FastAPI, React Three Fiber, Supabase, Celery, Redis, Resend',
    link: 'https://chrysalis.sbs/',
    points: [
      'Developing **Chrysalis AI**, a **B2B SaaS** platform that enables fashion startup founders to generate **hyper-realistic, multi-angle product photos** without a physical photoshoot.',
      "Users can sketch or upload garment designs and configure a **digital model's parameters** to instantly render **production-ready images**.",
    ],
  },
  {
    title: 'kiwiAi',
    meta: '(repo | live)',
    stack: 'Next.js, TypeScript, Prisma, Supabase, Groq',
    repo: 'https://github.com/ron-at-work/kiwi.ai',
    link: 'https://kiwi-ai-two.vercel.app/',
    points: [
      'An **AI-powered** tool that automatically analyzes **React codebases**, visualizes component relationships, and generates documentation using the **Groq LLM**.',
    ],
  },
  {
    title: 'DevWell',
    meta: '(repo | live)',
    stack: 'JavaScript, Chrome Extension APIs',
    repo: 'https://github.com/rounit08/devwell',
    link: 'http://rb.gy/mqbaw',
    points: [
      'A **Chrome extension** designed to prioritise the well-being of developers with **exercise guidance**, **water reminders**, and accurate **active time tracking**.',
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#1a1a1a] transition-colors">
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-12">
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-light">ROUNIT RANJAN SINHA</h1>
          <p className="text-sm md:text-base text-gray-500">
            Bengaluru, India • +91 87893 57521 • rounitrsinha@gmail.com
          </p>
          <p className="text-sm md:text-base text-gray-500">
            <a href="https://rnsh.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">rnsh.xyz</a>
            {' • '}
            <a href="https://thehookstory.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">thehookstory.xyz</a>
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">WORK EXPERIENCE</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#1a1a1a]">SDE I, Appscrip — Apr 2024 – Present</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {workHighlights.map((item) => (
                <li key={item}>{withBold(item)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">PROJECTS</h2>
          <div className="space-y-4">
            {projectCards.map((project) => (
              <article key={project.title} className="paper-block space-y-3">
                <h3 className="text-lg font-medium text-[#1a1a1a]">
                  {project.title} <span className="text-gray-500 font-normal">— {project.meta}</span>
                </h3>
                <p className="text-sm text-[#8b7355]">{project.stack}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.points.map((point) => (
                    <li key={point}>{withBold(point)}</li>
                  ))}
                </ul>
                <div className="flex gap-4 text-sm">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">
                      {project.title === 'Chrysalis AI' ? 'Announcement' : 'Live'}
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1a1a1a] transition-colors">
                      Repo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">SKILLS</h2>
          <div className="text-gray-600 space-y-2">
            <p><span className="text-[#1a1a1a] font-medium">Languages:</span> JavaScript, TypeScript, Python</p>
            <p><span className="text-[#1a1a1a] font-medium">Libraries & Frameworks:</span> React, Next.js, StencilJS, StorybookJS, Three.js, FastAPI</p>
            <p><span className="text-[#1a1a1a] font-medium">Tools & Platforms:</span> Redux, MUI, Tailwind CSS, Tanstack Query, Coolify, Railway, Supabase, Postman, Strapi, MQTT, ApexCharts, Embeddable, Groq, Redis, Celery, Resend, Stripe, Cursor AI</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium">EDUCATION</h2>
          <div className="text-gray-600 space-y-1">
            <p className="text-[#1a1a1a] font-medium">Bachelor of Technology, Mechanical Engineering — Sep 2020 – Aug 2024</p>
            <p>Shri Mata Vaishno Devi University</p>
          </div>
        </section>
      </div>
    </div>
  );
}
