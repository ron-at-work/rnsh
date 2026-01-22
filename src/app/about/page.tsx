
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

const getSkillLevelClass = (level: string) => {
  if (level === 'Expert') return 'bg-green-100 text-green-800';
  if (level === 'Advanced') return 'bg-blue-100 text-blue-800';
  return 'bg-yellow-100 text-yellow-800';
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

          {/* Experience */}
          <section className="space-y-6">
            <h2 className="text-2xl font-medium">Experience</h2>
            <div className="space-y-6">
              {/* Current Role */}
              <div className="border-l-4 border-blue-500 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">SDE-1 Frontend</h3>
                    <p className="text-lg text-gray-700 font-medium">Appscrip</p>
                    <p className="text-sm text-gray-500">Apr 2024 - Present · 1 yr 6 mos</p>
                    <p className="text-sm text-gray-500">Bengaluru, Karnataka, India · On-site</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Current
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    <li>Architected a scalable, LLM-powered chatbot platform for STIHL (a manufacturing company) with modular widget-based UI, dynamic sidebars, and RBAC-driven granular permissions for secure, customisable user experiences using NextJS.</li>
                    <li>Developed a real-time chat plugin using StencilJS, MQTT and StorybookJS for seamless cross-framework integration with features like offline message support, groupchat etc.</li>
                    <li>Optimised performance for a recommerce project using NextJS, Strapi CMS achieving 90+ pagespeed insight score with SEO schema integration.</li>
                    <li>Developed a production-ready deployment orchestration API with webhook integration, real-time status tracking, and automated Coolify deployment management using TypeScript, Node.js.</li>
                    <li>Built a centralised auth abstraction layer to standardise token storage and session management across multiple authentication providers (Google OAuth, Supabase magic links, and custom APIs.</li>
                    <li>Managed a frontend team and delivered projects on time.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Figma', 'MQTT', 'Next.js', 'Strapi.js', 'Redux.js', 'Tailwind CSS', 'Storybook', 'StencilJS', 'TypeScript'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FrontendFighters */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Chief Frontend Enthusiast</h3>
                    <p className="text-lg text-gray-700 font-medium">FrontendFighters</p>
                    <p className="text-sm text-gray-500">Feb 2023 - Oct 2024 · 1 yr 9 mos</p>
                    <p className="text-sm text-gray-500">India · On-site</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    Self-employed
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">Tried adding challenges for frontend devs.</p>
                  <a href="https://github.com/rounit08/frontendfighters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                    View Repository →
                  </a>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['JavaScript', 'React.js', 'HTML', 'CSS', 'API'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ZeStream Labs */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Tech Recruiter</h3>
                    <p className="text-lg text-gray-700 font-medium">ZeStream Labs</p>
                    <p className="text-sm text-gray-500">Dec 2023 - Apr 2024 · 5 mos</p>
                    <p className="text-sm text-gray-500">Bengaluru, Karnataka, India · Remote</p>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                    Full-time
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">Solo recruiter of the company, recruited Engineering people (both front-end and back-end).</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Recruiting', 'Communication'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* SDE Intern */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">SDE Intern</h3>
                    <p className="text-lg text-gray-700 font-medium">Internship</p>
                    <p className="text-sm text-gray-500">Sep 2023 - Apr 2024 · 8 mos</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Internship
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">Done Full stack development on Cloudinary Alternative. Got my hands dirty on AI.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['React.js', 'Next.js', 'TypeScript', 'Cloudflare', 'DBMS', 'Team Management'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* GDSC Mentor */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Mentor</h3>
                    <p className="text-lg text-gray-700 font-medium">Google Developer Students Club - GDSC SMVDU</p>
                    <p className="text-sm text-gray-500">Sep 2023 - Dec 2023 · 4 mos</p>
                    <p className="text-sm text-gray-500">Jammu · On-site</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Part-time
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">Mentor of the team for Project ANANTA.</p>
                </div>
              </div>

              {/* Hindi Cell */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Digital Head</h3>
                    <p className="text-lg text-gray-700 font-medium">HINDI CELL | हिंदी प्रकोष्ठ</p>
                    <p className="text-sm text-gray-500">Feb 2023 - Oct 2023 · 9 mos</p>
                    <p className="text-sm text-gray-500">Jammu & Kashmir, India · On-site</p>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                    Part-time
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">Digital Section - Website Head</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['JavaScript', 'ReactJS', 'HTML', 'CSS'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* EVE Healthcare */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Frontend Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">EVE Healthcare</p>
                    <p className="text-sm text-gray-500">Jul 2023 - Sep 2023 · 3 mos</p>
                    <p className="text-sm text-gray-500">India</p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                    Internship
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Developed the UI of Search Page with all error handlings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Developed the UI of complete Payment Process flow.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Developed the UI of company staff page.</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['JavaScript', 'Figma', 'CSS', 'HTML', 'Front-End Development', 'AJAX'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* SMVDU Web Developer */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Web Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">Shri Mata Vaishno Devi University</p>
                    <p className="text-sm text-gray-500">Feb 2023 - Aug 2023 · 7 mos</p>
                    <p className="text-sm text-gray-500">Jammu, Jammu & Kashmir, India</p>
                  </div>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                    Part-time
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">Developing the website of Hindi Cell SMVDU</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['JavaScript', 'HTML', 'CSS'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Goldman Sachs */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Virtual Intern</h3>
                    <p className="text-lg text-gray-700 font-medium">Goldman Sachs</p>
                    <p className="text-sm text-gray-500">Jun 2023 - Jul 2023 · 2 mos</p>
                    <p className="text-sm text-gray-500">Remote</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                    Internship
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Hashcat', 'Password Hashing', 'Security'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Entersoft Security */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Frontend Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">Entersoft Security</p>
                    <p className="text-sm text-gray-500">Jan 2023 - Feb 2023 · 2 mos</p>
                    <p className="text-sm text-gray-500">Queensland, Australia · Remote</p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full">
                    Internship
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['ReactJS', 'Postman API', 'CSS'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Devfest Jammu */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Frontend Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">Devfest Jammu 2022</p>
                    <p className="text-sm text-gray-500">Oct 2022 - Dec 2022 · 3 mos</p>
                    <p className="text-sm text-gray-500">Jammu, Jammu & Kashmir, India · Remote</p>
                  </div>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full">
                    Event
                  </span>
                </div>
              </div>

              {/* Hacktoberfest */}
              <div className="border-l-4 border-gray-300 pl-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Open Source Contributor</h3>
                    <p className="text-lg text-gray-700 font-medium">Hacktoberfest</p>
                    <p className="text-sm text-gray-500">Oct 2021 - Oct 2021 · 1 mo</p>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                    Self-employed
                  </span>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">Raised 12 PRs, 6 got selected for Frontend issues</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-6">
            <h2 className="text-2xl font-medium">Skills & Expertise</h2>
            <div className="space-y-8">
              {/* Frontend Technologies */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Frontend Technologies
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'React.js', level: 'Expert', endorsements: 4, assessment: true },
                    { name: 'Next.js', level: 'Expert', endorsements: 2, assessment: true },
                    { name: 'TypeScript', level: 'Expert', endorsements: 2, assessment: true },
                    { name: 'JavaScript', level: 'Expert', endorsements: 3, assessment: true },
                    { name: 'HTML', level: 'Expert', endorsements: 3, assessment: true },
                    { name: 'CSS', level: 'Expert', endorsements: 3, assessment: true },
                    { name: 'Tailwind CSS', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Redux.js', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'StencilJS', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'CSS Flexbox', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'AJAX', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Front-End Development', level: 'Expert', endorsements: 1, assessment: false }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          getSkillLevelClass(skill.level)
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{skill.endorsements} endorsements</span>
                        {skill.assessment && (
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                            ✓ Assessment Passed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend & Full-Stack */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Backend & Full-Stack
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'Node.js', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Strapi.js', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Database Management System (DBMS)', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Firebase', level: 'Intermediate', endorsements: 1, assessment: false },
                    { name: 'API', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Web Services API', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Postman API', level: 'Advanced', endorsements: 1, assessment: false }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getSkillLevelClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{skill.endorsements} endorsements</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Tools */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Development Tools & Platforms
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'Git', level: 'Expert', endorsements: 1, assessment: true },
                    { name: 'GitHub', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Docker', level: 'Intermediate', endorsements: 1, assessment: false },
                    { name: 'Webpack', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Chrome DevTools', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Chrome Extensions', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Storybook', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'MQTT', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Cloudflare', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'NPM', level: 'Expert', endorsements: 1, assessment: false }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getSkillLevelClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{skill.endorsements} endorsements</span>
                        {skill.assessment && (
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                            ✓ Assessment Passed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design & UI/UX */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Design & UI/UX
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'Figma', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Project Management', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Technical Writing', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Creative Writing', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Poetry Writing', level: 'Advanced', endorsements: 1, assessment: false }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          getSkillLevelClass(skill.level)
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{skill.endorsements} endorsements</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Programming Languages
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'JavaScript', level: 'Expert', endorsements: 3, assessment: true },
                    { name: 'TypeScript', level: 'Expert', endorsements: 2, assessment: true },
                    { name: 'HTML5', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'C (Programming Language)', level: 'Advanced', endorsements: 2, assessment: true },
                    { name: 'Java', level: 'Intermediate', endorsements: 1, assessment: false },
                    { name: 'C++', level: 'Intermediate', endorsements: 1, assessment: false }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getSkillLevelClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{skill.endorsements} endorsements</span>
                        {skill.assessment && (
                          <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                            ✓ Assessment Passed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills & Leadership */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Soft Skills & Leadership
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'Communication', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Team Management', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Recruiting', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Engineering', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Software Development', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Web Development', level: 'Expert', endorsements: 1, assessment: false },
                    { name: 'Security', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Password Hashing', level: 'Advanced', endorsements: 1, assessment: false },
                    { name: 'Hashcat', level: 'Advanced', endorsements: 1, assessment: false }
                  ].map((skill) => (
                    <div key={skill.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          getSkillLevelClass(skill.level)
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{skill.endorsements} endorsements</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Certifications & Achievements
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { name: 'LinkedIn Skill Assessments', count: 'Multiple', description: 'Passed assessments in JavaScript, React.js, CSS, HTML, C, Git' },
                    { name: 'Open Source Contributions', count: '12 PRs', description: 'Hacktoberfest 2021 - 6 PRs selected for Frontend issues' },
                    { name: 'Goldman Sachs Virtual Intern', count: 'Security', description: 'Password Hashing & Security specialization' },
                    { name: 'Project Management', count: 'Advanced', description: 'Led multiple development projects and teams' }
                  ].map((achievement) => (
                    <div key={achievement.name} className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          {achievement.count}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
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
