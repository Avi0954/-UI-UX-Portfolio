import { motion } from 'framer-motion';
import userPortrait from '../assets/user_portrait.jpg';

const principles = [
  {
    number: '01',
    title: 'User-Centered Design',
    description:
      'Every design decision begins with understanding user needs, behaviors, and goals to create experiences that feel intuitive and purposeful.',
  },
  {
    number: '02',
    title: 'Accessibility',
    description:
      'I design inclusive interfaces with readability, accessibility, and consistency in mind, ensuring products are usable by a wider audience.',
  },
  {
    number: '03',
    title: 'Simplicity',
    description:
      'I believe removing unnecessary complexity creates products that are easier to understand, easier to use, and more enjoyable to interact with.',
  },
];

const experienceData = [
  {
    title: 'UI/UX Design',
    description:
      'Designed end-to-end user experiences for web applications, including UX research, user flows, wireframes, interactive prototypes, and high-fidelity interfaces across multiple real-world projects.',
  },
  {
    title: 'Graphic Design',
    description:
      'Created posters, social media creatives, banners, and promotional assets as the Design Lead for a student club, ensuring consistent visual communication across events and campaigns.',
  },
  {
    title: 'Product Design',
    description:
      'Focused on solving real user problems by designing responsive interfaces, improving usability, and building scalable design systems for modern web applications.',
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-[#0e0e10] text-[#fbf9f9] border-t border-b border-[#222225] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        {/* Hero Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24 items-start">
          {/* Left Column: Heading & Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <div>
              <h2 className="font-display-lg tracking-tight uppercase text-[#ffffff]">
                About Me
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-headline-md font-bold text-[#ffffff] text-base md:text-lg">
                  Avinash Kumar
                </span>
                <span className="font-mono-label text-xs text-[#8e8e93] border-l border-[#333338] pl-2 uppercase">
                  UI/UX Designer
                </span>
              </div>
            </div>

            <div className="w-full aspect-[3/4] rounded-[16px] border border-[#333338] overflow-hidden bg-[#18181b] relative group cursor-crosshair shadow-sm">
              <img
                src={userPortrait}
                alt="Avinash Kumar - UI/UX Designer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-105 filter grayscale contrast-115 brightness-95"
              />
            </div>
          </motion.div>

          {/* Right Column: Biography, Philosophy & Principles */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col gap-8 md:gap-10 md:mt-2"
          >
            {/* Biography */}
            <article className="flex flex-col gap-3 max-w-2xl">
              <h3 className="font-headline-md font-bold text-[#ffffff] border-b border-[#ffffff] pb-2 inline-block w-max">
                Designing Experiences with Purpose
              </h3>
              <p className="font-body-lg text-[#a3a3a8] leading-relaxed">
                I am a UI/UX Designer focused on creating intuitive, accessible, and user-centered digital products. From understanding user needs to designing high-fidelity interfaces, I aim to build experiences that are simple to use, visually refined, and solve real-world problems.
              </p>
            </article>

            {/* Design Philosophy */}
            <div className="flex flex-col gap-2">
              <h4 className="font-mono-label uppercase text-[#8e8e93] tracking-widest text-xs">
                Design Philosophy
              </h4>
              <p className="font-body-lg text-[#ffffff] italic font-medium leading-relaxed">
                &ldquo;Every design decision should have a purpose—improving usability, solving problems, and creating value for users.&rdquo;
              </p>
            </div>

            {/* Core Principles Bento Grid */}
            <div className="flex flex-col gap-4">
              <h4 className="font-mono-label uppercase text-[#8e8e93] tracking-widest text-xs">
                Core Principles
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principles.map((principle, index) => {
                  const isFullWidth = index === 2;
                  return (
                    <div
                      key={principle.number}
                      className={`border border-[#2e2e33] p-6 sm:p-7 flex flex-col justify-between gap-6 bg-[#18181b] hover:bg-[#ffffff] hover:text-[#0e0e10] hover:border-[#ffffff] transition-colors duration-300 group ${
                        isFullWidth ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <span className="font-mono-label text-[#8e8e93] group-hover:text-[#0e0e10] transition-colors text-xs font-semibold">
                        {principle.number}
                      </span>
                      <div>
                        <h5 className="font-label-caps font-bold mb-1.5 group-hover:text-[#0e0e10] text-[#ffffff] transition-colors">
                          {principle.title}
                        </h5>
                        <p className="font-body-md text-[#a3a3a8] group-hover:text-[#27272a] transition-colors text-sm sm:text-base leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Section - Horizontal Layout */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pt-8"
        >
          <h3 className="font-headline-lg text-[#ffffff] border-b border-[#ffffff] pb-4 mb-4 tracking-tight uppercase">
            Experience
          </h3>

          <div className="flex flex-col border-t border-[#2e2e33]">
            {experienceData.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 md:py-8 border-b border-[#2e2e33] hover:bg-[#18181b] transition-colors duration-200 px-4 -mx-4 group items-start"
              >
                <div className="md:col-span-4 lg:col-span-4">
                  <h4 className="font-headline-md font-bold text-[#ffffff] text-lg md:text-xl tracking-tight group-hover:opacity-90 transition-opacity">
                    {item.title}
                  </h4>
                </div>
                <div className="md:col-span-8 lg:col-span-8">
                  <p className="font-body-md text-[#a3a3a8] leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
