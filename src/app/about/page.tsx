
import Link from 'next/link';

const SnakeAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="snake-path">
        <div className="snake-dot snake-dot-1"></div>
        <div className="snake-dot snake-dot-2"></div>
        <div className="snake-dot snake-dot-3"></div>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="py-16 relative">
      {/* Snake Animation */}
      <SnakeAnimation />
      {/* Breadcrumb */}
      <div className="mb-8">
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
        <div className="space-y-4 pt-5">
          <h1 className="text-4xl md:text-5xl font-light">About</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            A brief glimpse into my journey, interests, and what drives me forward in the world of technology.
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-medium">Hello there!</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I&apos;m Rounit, a passionate developer from India, who loves building things that matter. 
                My journey in technology started with curiosity and has evolved into a 
                deep appreciation for clean code, thoughtful design, and meaningful user experiences.
              </p>
              <p>
                I believe that great software is not just about functionality, but about 
                creating solutions that are intuitive, accessible, and delightful to use. 
                This philosophy drives everything I build, from simple websites to complex applications.
              </p>
            </div>
          </section>

          {/* Skills & Interests */}
          <section className="space-y-4">
            <h2 className="text-2xl font-medium">What I Do</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Development</h3>
                <p className="text-gray-600">
                  I specialize in modern web technologies, with a focus on React, Next.js, 
                  and TypeScript. I enjoy building full-stack applications and exploring 
                  new frameworks and tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'SQLiteDB', 'StorybookJS', 'Tailwind CSS', 'Stencil.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
             
            </div>
          </section>

          {/* Philosophy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-medium">My Philosophy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Whatever comes my way, I get it done within 24 hours. Implement fast, grow faster. 
                Forget the world&apos;s noise. Live the best life.
              </p>
              
              {/* Give respect crossed out, Take respect */}
              <div className="flex items-center justify-center my-8">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <span className="text-lg font-medium text-gray-500 line-through">
                      Give respect, Take Respect
                    </span>
                  </div>
                  <span className="text-2xl text-gray-400">→</span>
                  <div className="text-lg font-medium text-gray-800">
                    Take respect, Give respect
                  </div>
                </div>
              </div>
              

            </div>
          </section>

          {/* Interests */}
          <section className="space-y-4">
            <h2 className="text-2xl font-medium">Beyond Code</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
              Off the clock, I’m either sketching visions, pushing limits in the gym, diving into books, or losing myself in new cities.
              </p>
              
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-4">
              <h2 className="text-2xl font-medium">Let&apos;s Connect</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I&apos;m always open to new opportunities, collaborations, and interesting conversations. 
                Whether you have a project in mind, want to discuss technology, or just want to say hi, 
                I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:hello@rounitrsinha@gmail.com"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Email me
                </a>
                <a 
                  href="https://github.com/rounit08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/rounit08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  LinkedIn
                </a>
              
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
