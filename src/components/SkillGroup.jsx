import { motion } from 'framer-motion';

export default function SkillGroup({ title, skills, direction = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col w-full"
    >
      {/* Category Title */}
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#666666] mb-6 border-b border-[#E5E5E5] pb-3">
        {title}
      </h3>

      {/* Skill Items List */}
      <div className="flex flex-col space-y-4">
        {skills.map((skill, index) => {
          const numberFormatted = String(index + 1).padStart(2, '0');
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[60px] bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] px-5 sm:px-6 flex items-center justify-between transition-all duration-300 ease-out hover:-translate-y-[4px] hover:border-[#111111] cursor-default"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono font-medium text-[#666666]">
                  {numberFormatted}
                </span>
                <span className="text-base sm:text-lg font-medium text-[#111111]">
                  {skill}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
