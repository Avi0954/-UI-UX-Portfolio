import { motion } from 'framer-motion';

const processSteps = [
  {
    step: '01 Research',
    description: 'Deep diving into user needs and market trends to build a solid foundation.',
    delay: 0.1,
  },
  {
    step: '02 Define',
    description: 'Synthesizing insights into actionable strategies and clear project goals.',
    delay: 0.2,
  },
  {
    step: '03 Design',
    description: 'Crafting high-fidelity interfaces with a focus on usability and aesthetics.',
    delay: 0.3,
  },
  {
    step: '04 Prototype',
    description: 'Building interactive models to test and refine the user experience.',
    delay: 0.4,
  },
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#0e0e10] text-[#fbf9f9] border-t border-b border-[#222225] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-18 pb-6 border-b border-[#222225] flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-headline-lg text-[#ffffff] uppercase tracking-tight">
              Design Process
            </h2>
            <p className="font-mono-label text-[#a3a3a8] mt-2 text-xs">
              [ Systematic Approach ]
            </p>
          </div>
          <p className="font-body-md text-[#a3a3a8] max-w-md">
            An iterative, research-led methodology that bridges strategic clarity with high-precision interface execution.
          </p>
        </motion.div>

        {/* 4-Column Linear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: item.delay || index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-[#2e2e33] pt-6 flex flex-col group hover:border-[#ffffff] transition-colors duration-300"
            >
              <span className="font-mono-label text-[#ffffff] font-semibold block mb-3 text-sm">
                {item.step}
              </span>
              <p className="font-body-md text-[#a3a3a8] leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
