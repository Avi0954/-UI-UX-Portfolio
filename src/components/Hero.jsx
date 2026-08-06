import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroPortrait from '../assets/hero_portrait.jpg';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="w-full bg-[#fbf9f9] text-[#1b1c1c] relative pt-6 md:pt-10 pb-6 md:pb-10 min-h-[78vh] md:min-h-[82vh] flex flex-col justify-between"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 w-full items-start">
          {/* Left Column: Headline, Supporting Paragraph & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 lg:col-span-8 flex flex-col items-start justify-start pt-1"
          >
            {/* 1. Headline */}
            <h1 className="font-display-lg text-[#1b1c1c] mb-5 md:mb-6 tracking-tight max-w-[640px] leading-[1.08]">
              Designing digital experiences that are simple, meaningful, and user-focused.
            </h1>

            {/* 2. Supporting Paragraph */}
            <p className="font-body-lg text-[#5d5f5f] mb-7 md:mb-8 max-w-[620px] leading-relaxed">
              I design intuitive and user-centered digital experiences by combining UX research, wireframing, interaction design, and modern UI principles to create products that are both functional and visually refined.
            </p>

            {/* 3. CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, 'work')}
                className="border border-[#1b1c1c] bg-[#1b1c1c] text-[#ffffff] hover:bg-[#2d2d2d] px-7 py-3.5 font-label-caps transition-colors duration-200 uppercase inline-flex items-center justify-center cursor-pointer text-center w-full sm:w-auto shadow-none"
              >
                Selected Work
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="border border-[#1b1c1c] bg-transparent text-[#1b1c1c] hover:bg-[#f0eeee] px-7 py-3.5 font-label-caps transition-colors duration-200 uppercase inline-flex items-center justify-center cursor-pointer text-center w-full sm:w-auto shadow-none"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column: Monochrome Portrait */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 lg:col-span-4 w-full flex justify-center md:justify-end mt-4 md:mt-0"
          >
            <div className="w-full max-w-[320px] md:max-w-none aspect-[3/4] rounded-[16px] border border-[#e4e2e2] overflow-hidden bg-[#0e0e10] self-start relative group shadow-sm flex items-center justify-center">
              {/* Ambient backdrop to eliminate harsh empty borders */}
              <img
                src={heroPortrait}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover filter grayscale blur-xl opacity-35 scale-125 pointer-events-none"
              />
              {/* Main Zoomed-Out Portrait with full uncropped view */}
              <img
                src={heroPortrait}
                alt="Avinash Verma - UI/UX Designer"
                loading="eager"
                decoding="async"
                className="relative z-10 w-full h-full object-contain p-2.5 sm:p-3 filter grayscale contrast-110 brightness-95 transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 6. Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6 md:mt-8 flex justify-center w-full"
      >
        <a
          href="#work"
          onClick={(e) => handleScrollTo(e, 'work')}
          className="flex flex-col items-center group cursor-pointer opacity-50 hover:opacity-90 transition-opacity duration-200"
        >
          <span className="font-mono-label text-[11px] uppercase tracking-widest text-[#5d5f5f] mb-1.5">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-[#5d5f5f]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
