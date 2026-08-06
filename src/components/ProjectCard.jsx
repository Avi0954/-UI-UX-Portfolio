import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ title, category, image, delay = 0.1 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#FFFFFF] border border-[#E5E5E5] rounded-[16px] overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#111111] cursor-pointer"
    >
      <div>
        {/* Top Preview Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F5] border-b border-[#E5E5E5]">
          <img
            src={image}
            alt={`${title} project preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        {/* Project Title & Category */}
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-1">
            {title}
          </h3>
          <span className="text-xs text-[#777777] font-normal">
            {category}
          </span>
        </div>
      </div>

      {/* Bottom Link Bar */}
      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#F0F0F0] mt-2 pt-4">
        <span className="text-xs font-semibold text-[#111111] group-hover:underline">
          View Case Study
        </span>
        <ArrowRight size={15} className="text-[#111111] group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </motion.article>
  );
}
