import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="work" className="w-full bg-[#0e0e10] text-[#fbf9f9] border-t border-b border-[#222225] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        {/* Refined Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#222225]">
            <h2 className="font-display-lg text-[#ffffff] tracking-tight uppercase">
              Selected Projects
            </h2>
            <p className="font-body-md text-[#a3a3a8] max-w-lg leading-relaxed">
              A selection of UI/UX projects I&apos;ve designed, showcasing my approach to solving real-world problems through thoughtful and user-centered design.
            </p>
          </div>
        </motion.header>

        {/* 1-Project-Per-View Dark Vertical Scroll Stream */}
        <div className="flex flex-col space-y-16 md:space-y-24">
          {projects.map((project) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#18181b] border border-[#2e2e33] p-6 sm:p-8 lg:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.5)] group transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Project Metadata, Description & Role */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5 order-2 lg:order-1">
                    {/* Top Metadata Row: Index & Year */}
                    <div className="flex items-center justify-between border-b border-[#2e2e33] pb-3">
                      <span className="font-mono-label text-[#a3a3a8] font-semibold text-xs">
                        [ {project.id} / 03 ]
                      </span>
                      <span className="font-mono-label text-[#ffffff] border border-[#44444a] px-2.5 py-0.5 text-xs uppercase font-medium">
                        {project.year}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <div>
                      <span className="font-mono-label text-[11px] uppercase tracking-widest text-[#a3a3a8] block mb-1.5">
                        {project.category}
                      </span>
                      <h3 className="font-headline-lg text-[#ffffff] font-bold tracking-tight mb-2 group-hover:opacity-90 transition-opacity">
                        {project.title}
                      </h3>
                      <p className="font-mono-label text-xs text-[#a3a3a8]">
                        Role: <span className="text-[#ffffff] font-medium">{project.role}</span>
                      </p>
                    </div>

                    {/* Narrative */}
                    <p className="font-body-md text-[#a3a3a8] leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Tools / Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono-label text-xs px-2.5 py-1 bg-[#242428] text-[#e4e4e7] border border-[#333338]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* CTA Action */}
                    <div className="pt-2">
                      <a
                        href={project.link || '#contact'}
                        target={project.link ? '_blank' : undefined}
                        rel={project.link ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2.5 font-label-caps text-[#0e0e10] bg-[#ffffff] border border-[#ffffff] px-6 py-3.5 hover:bg-transparent hover:text-[#ffffff] transition-all duration-300 uppercase tracking-widest text-xs font-semibold shadow-sm cursor-pointer group/btn"
                      >
                        <span>VIEW DESIGN</span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Large High-Res Visual Mockup */}
                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <a
                      href={project.link || '#contact'}
                      target={project.link ? '_blank' : undefined}
                      rel={project.link ? 'noopener noreferrer' : undefined}
                      className="block w-full aspect-[16/10] border border-[#333338] overflow-hidden bg-[#242428] relative cursor-pointer group/img"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-[#0e0e10]/90 text-[#ffffff] px-2.5 py-1 text-[11px] font-mono-label uppercase tracking-wider backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 border border-[#333338]">
                        {project.link ? 'Open Live App ↗' : 'Project Preview'}
                      </div>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
