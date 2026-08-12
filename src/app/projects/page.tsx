import { projects } from '@/data/projects';
import Link from 'next/link';
import { withBold } from '@/lib/bold';

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="py-16 relative">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#1a1a1a] transition-colors group"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light">Projects</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Projects from my latest profile details.</p>
        </div>

        {/* Featured Projects */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium">Featured Projects</h2>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article key={project.id} className="paper-block space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      {project.title}{" "}
                      {project.meta && <span className="text-gray-500 font-normal">— {project.meta}</span>}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{project.description}</p>
                  </div>
                  {project.points && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {project.points.map((point) => (
                        <li key={point}>{withBold(point)}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.status === "Upcoming" ? (
                      <span className="text-sm font-medium text-gray-700">Coming Soon</span>
                    ) : (
                      <>
                        {project.link && project.link !== "#" && (
                          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#1a1a1a] hover:text-gray-600 transition-colors">
                            View Live →
                          </Link>
                        )}
                        {project.github && project.github !== "#" && (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 hover:text-[#1a1a1a] transition-colors">
                            GitHub
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="space-y-6">
          <h2 className="text-2xl font-medium">Other Projects</h2>
          <div className="space-y-4">
            {otherProjects.map((project) => (
              <article key={project.id} className="paper-block space-y-3">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      {project.title}{" "}
                      {project.meta && <span className="text-gray-500 font-normal">— {project.meta}</span>}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  {project.points && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                      {project.points.map((point) => (
                        <li key={point}>{withBold(point)}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#1a1a1a] hover:text-gray-600 transition-colors">
                        Live
                      </Link>
                    )}
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-500 hover:text-[#1a1a1a] transition-colors">
                        Code
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            Interested in collaborating or have a project in mind?
            <Link href="mailto:rounitrsinha@gmail.com" className="ml-1 text-[#1a1a1a] hover:text-gray-600 transition-colors">
              Let&apos;s connect
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
