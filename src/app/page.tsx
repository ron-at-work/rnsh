'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { workHighlights } from '@/data/work';
import { withBold } from '@/lib/bold';
import ParticleField from '@/components/ParticleField';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShown(true);
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(18px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const TypewriterText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="typewriter-cursor">|</span>}
    </span>
  );
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllWork, setShowAllWork] = useState(false);
  const [marked, setMarked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <ParticleField />
      <div className="page-content min-h-screen flex flex-col">
      <header className="header-in border-b border-gray-200">
        <div className="py-5 flex items-center justify-between text-sm">
          <span className="font-medium text-[#1a1a1a]">ROUNIT RANJAN SINHA</span>
          <nav className="hidden md:flex items-center gap-8 text-gray-500">
            <a href="https://thehookstory.xyz" target="_blank" rel="noopener noreferrer" className="nav-link hover:text-[#1a1a1a] transition-colors">writing</a>
            <Link href="/projects" className="nav-link hover:text-[#1a1a1a] transition-colors">projects</Link>
            <Link href="/about" className="nav-link hover:text-[#1a1a1a] transition-colors">work</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-gray-200">
        <div className={`grid gap-10 md:grid-cols-[1fr_240px] items-start transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-light text-[#1a1a1a] leading-tight">
              <TypewriterText text="I make js and sons run for you." speed={28} />
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-[#1a1a1a]">Summary</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>SDE I at Appscrip building performant AI-first products.</li>
                <li>Built agentic CRM workflows, no-code automation engines, and production chat systems.</li>
                <li>Shipping products like MyFitRiwaaz, Chrysalis AI, kiwiAi, and DevWell.</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500">
              Bengaluru, India • +91 87893 57521 • rounitrsinha@gmail.com
            </p>
            <p className="text-sm text-gray-500">
              <a href="https://rnsh.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">rnsh.xyz</a>
              {" / "}
              <a href="https://thehookstory.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors">thehookstory.xyz</a>
            </p>
          </div>

          <div className="group relative w-full aspect-[3/4] overflow-hidden rounded-xl">
            <Image
              src="/portrait.png"
              alt="Rounit Ranjan Sinha"
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 768px) 240px, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 border-t border-gray-200">
        <Reveal className="max-w-5xl mx-auto space-y-5">
          <h2 className="text-2xl font-medium text-[#1a1a1a]">SKILLS</h2>
          <div className="space-y-3">
            {[
              { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python'] },
              { title: 'Libraries & Frameworks', skills: ['React', 'Next.js', 'StencilJS', 'StorybookJS', 'Three.js', 'FastAPI'] },
              { title: 'Tools & Platforms', skills: ['Redux', 'MUI', 'Tailwind CSS', 'Tanstack Query', 'Coolify', 'Railway', 'Supabase', 'Postman', 'Strapi', 'MQTT', 'ApexCharts', 'Embeddable', 'Groq', 'Redis', 'Celery', 'Resend', 'Stripe', 'Cursor AI'] },
            ].map((category, catIndex) => (
              <div key={category.title} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <p className="sm:w-48 shrink-0 text-sm font-medium text-[#1a1a1a]">{category.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-chip chip-in px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
                      style={{ animationDelay: `${catIndex * 80 + i * 30}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Work Experience */}
      <section className="py-12 border-t border-gray-200">
        <Reveal className="space-y-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium text-[#1a1a1a]">WORK EXPERIENCE</h2>
          <div className="paper-block">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">SDE I, Appscrip — Apr 2024 – Present</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              {(showAllWork ? workHighlights : workHighlights.slice(0, 5)).map((item) => (
                <li
                  key={item}
                  className={`ink-mark ${marked[item] ? 'is-marked' : ''}`}
                  onClick={() => setMarked((prev) => ({ ...prev, [item]: !prev[item] }))}
                >
                  {withBold(item)}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setShowAllWork((v) => !v)}
              className="mt-4 text-sm font-medium text-[#1a1a1a] hover:text-gray-600 transition-colors"
            >
              {showAllWork ? 'Show less' : 'View all'}
            </button>
          </div>
        </Reveal>
      </section>

      {/* Projects Snapshot */}
      <section className="py-12 border-t border-gray-200">
        <div className="space-y-6 max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-medium text-[#1a1a1a]">PROJECTS</h2>
          </Reveal>
          <div className="space-y-8">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 70}>
                <article className="paper-block">
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">
                    {project.title} {project.meta && <span className="font-normal text-gray-500">— {project.meta}</span>}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{project.technologies.join(', ')}</p>
                  {project.points && (
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                      {project.points.map((point) => (
                        <li
                          key={point}
                          className={`ink-mark ${marked[point] ? 'is-marked' : ''}`}
                          onClick={() => setMarked((prev) => ({ ...prev, [point]: !prev[point] }))}
                        >
                          {withBold(point)}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex gap-4 text-sm">
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">
                        {project.title === "Chrysalis AI" ? "Announcement" : "Live"}
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1a1a1a] transition-colors">
                        Repo
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href="https://github.com/ron-at-work" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1a1a1a] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rounit08" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1a1a1a] hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <p className="text-xs text-gray-400">Made with ☕</p>
      </footer>
      </div>
    </>
  );
}
