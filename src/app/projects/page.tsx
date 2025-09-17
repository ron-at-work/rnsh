import { projects } from '@/data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gray-300 rounded-full bounce-gentle opacity-30"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-gray-400 rounded-full bounce-gentle-delay-1 opacity-40"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-gray-200 rounded-full bounce-gentle-delay-2 opacity-25"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-gray-300 rounded-full bounce-gentle opacity-35"></div>
        <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-gray-400 rounded-full bounce-gentle-delay-1 opacity-30"></div>
        
        {/* Minimalist icons floating around */}
        <div className="absolute top-32 right-10 float-animation opacity-20">
          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute top-80 left-16 float-animation opacity-15" style={{animationDelay: '1s'}}>
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-60 right-16 float-animation opacity-20" style={{animationDelay: '2s'}}>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2z"/>
          </svg>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="mb-8 slide-in-up">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors group"
        >
          <svg 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-4 slide-in-up">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-light">Projects</h1>
            {/* Animated project icon */}
            <div className="pulse-animation">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            A collection of things I&apos;ve built, from web applications to creative experiments. 
            Each project represents a learning journey and a step forward in my development skills.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-medium">Featured Projects</h2>
            <div className="bounce-gentle">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors hover-lift fade-in-scale ${index === 0 ? 'stagger-1' : 'stagger-2'}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors bounce-gentle ${techIndex % 2 === 0 ? 'bounce-gentle-delay-1' : 'bounce-gentle-delay-2'}`}
                        style={{animationDelay: `${techIndex * 0.1}s`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.status === "Upcoming" ? (
                      <span className="text-sm font-medium text-orange-600">
                        Coming Soon
                      </span>
                    ) : (
                      <>
                        {project.link && project.link !== "#" && (
                          <Link 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                          >
                            View Live →
                          </Link>
                        )}
                        {project.github && project.github !== "#" && (
                          <Link 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            GitHub
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-medium">Upcoming</h2>
            <div className="float-animation">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2z"/>
              </svg>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors hover-lift slide-in-up ${index < 6 ? 'stagger-' + (index + 1) : ''}`}
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 transition-colors bounce-gentle"
                        style={{animationDelay: `${techIndex * 0.2}s`}}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 transition-colors bounce-gentle-delay-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.link && (
                      <Link 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        Live
                      </Link>
                    )}
                    {project.github && (
                      <Link 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-8 border-t border-gray-200 slide-in-up">
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-500">
              Interested in collaborating or have a project in mind? 
              <Link href="mailto:rounitrsinha@gmail.com" className="ml-1 text-gray-700 hover:text-gray-900 transition-colors">
                Let&apos;s connect
              </Link>
            </p>
            <div className="pulse-animation">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

