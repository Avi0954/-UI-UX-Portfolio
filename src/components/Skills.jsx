import { motion } from 'framer-motion';

const designSkills = [
  {
    title: 'UI Design',
    description: 'Designing clean, accessible, and visually consistent interfaces.',
  },
  {
    title: 'UX Research',
    description: 'Understanding user needs through research, analysis, and testing.',
  },
  {
    title: 'Interaction Design',
    description: 'Designing intuitive interactive behaviors and seamless screen transitions.',
  },
  {
    title: 'Wireframing',
    description: 'Planning layouts and information architecture before visual design.',
  },
  {
    title: 'Prototyping',
    description: 'Creating interactive prototypes to validate ideas and user interactions.',
  },
  {
    title: 'Design Systems',
    description: 'Building reusable components and scalable design foundations.',
  },
  {
    title: 'Responsive Design',
    description: 'Designing seamless experiences across desktop, tablet, and mobile devices.',
  },
  {
    title: 'Accessibility',
    description: 'Ensuring interfaces meet WCAG contrast and inclusive usability standards.',
  },
  {
    title: 'Usability Testing',
    description: 'Validating design solutions with real users to identify pain points.',
  },
  {
    title: 'Information Architecture',
    description: 'Structuring intuitive content hierarchies for effortless discoverability.',
  },
];

const toolGroups = [
  {
    category: 'Design Tools',
    items: [
      { name: 'Figma', role: 'Interface Design & Systems' },
      { name: 'FigJam', role: 'Collaboration & User Flows' },
      { name: 'Adobe Express', role: 'Visual Design & Creatives' },
      { name: 'Canva', role: 'Graphic & Marketing Assets' },
    ],
  },
  {
    category: 'AI & Prototyping',
    items: [
      { name: 'Figma AI', role: 'AI Layouts & Workflow Automation' },
      { name: 'Google Stitch', role: 'AI Prototyping & UI Synthesis' },
    ],
  },
  {
    category: 'Development',
    items: [
      { name: 'React', role: 'Frontend Component Architecture' },
      { name: 'Tailwind CSS', role: 'Modern UI Styling' },
      { name: 'HTML & CSS', role: 'Semantic Web Structure' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-[#fbf9f9] text-[#1b1c1c] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e4e2e2]">
            <h2 className="font-display-lg text-[#1b1c1c] uppercase tracking-tight">
              Skills &amp; Tools
            </h2>
            <p className="font-body-md text-[#5d5f5f] max-w-lg leading-relaxed">
              A collection of the design skills, methodologies, and tools I use to create intuitive, user-centered digital experiences.
            </p>
          </div>
        </motion.header>

        {/* 01: Design Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center mb-8 border-b border-[#e4e2e2] pb-4">
            <span className="font-mono-label text-[#5d5f5f] mr-4 font-semibold text-xs">01</span>
            <h3 className="font-headline-lg text-[#1b1c1c] uppercase tracking-tight text-xl md:text-2xl">
              Design
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 md:gap-y-9">
            {designSkills.map((comp) => (
              <div
                key={comp.title}
                className="group border border-transparent hover:border-[#e4e2e2] transition-colors p-4 -ml-4"
              >
                <h4 className="font-headline-md text-[#1b1c1c] mb-1.5 group-hover:opacity-80 transition-opacity font-semibold">
                  {comp.title}
                </h4>
                <p className="font-body-md text-[#5d5f5f] leading-relaxed text-sm sm:text-base">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 02: Tools & Technologies Section */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center mb-8 border-b border-[#e4e2e2] pb-4">
            <span className="font-mono-label text-[#5d5f5f] mr-4 font-semibold text-xs">02</span>
            <h3 className="font-headline-lg text-[#1b1c1c] uppercase tracking-tight text-xl md:text-2xl">
              Tools &amp; Development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {toolGroups.map((group) => (
              <div key={group.category} className="flex flex-col">
                <h4 className="font-mono-label text-xs uppercase tracking-widest text-[#7e7576] mb-3">
                  {group.category}
                </h4>
                <ul className="flex flex-col border-t border-[#e4e2e2]">
                  {group.items.map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-center justify-between py-4 border-b border-[#e4e2e2] hover:bg-[#f5f3f3] transition-colors px-3 -mx-3 group cursor-default"
                    >
                      <span className="font-headline-md text-[#1b1c1c] text-base md:text-lg font-bold group-hover:translate-x-1 transition-transform duration-200">
                        {tech.name}
                      </span>
                      <span className="font-mono-label text-xs text-[#5d5f5f]">
                        {tech.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
