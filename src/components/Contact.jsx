import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('submitted');
      const mailtoUrl = `mailto:hello@avinashkumar.com?subject=Project Inquiry from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(
        formData.email
      )}`;
      window.open(mailtoUrl, '_blank');

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatus('idle');
      }, 4000);
    }, 600);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="w-full bg-[#0e0e10] text-[#fbf9f9] border-t border-b border-[#222225] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl mx-auto flex flex-col items-center"
        >
          {/* Heading */}
          <h2 className="font-display-lg text-[#ffffff] uppercase mb-4 md:mb-6 tracking-tight text-center">
            Let&apos;s Connect
          </h2>

          <p className="font-body-lg text-[#a3a3a8] text-center max-w-xl mb-12 md:mb-16 leading-relaxed">
            Whether you have a project, collaboration opportunity, or simply want to connect, I&apos;d be happy to hear from you.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-8 md:space-y-10 text-left mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Name Field */}
              <div className="relative">
                <label className="sr-only" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-0 border-b border-[#44444a] focus:border-b-2 focus:border-[#ffffff] py-3.5 outline-none font-body-md text-[#ffffff] placeholder-[#71717a] focus:ring-0 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="sr-only" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-0 border-b border-[#44444a] focus:border-b-2 focus:border-[#ffffff] py-3.5 outline-none font-body-md text-[#ffffff] placeholder-[#71717a] focus:ring-0 transition-colors"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label className="sr-only" htmlFor="message">
                Tell me about your project...
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-0 border-b border-[#44444a] focus:border-b-2 focus:border-[#ffffff] py-3.5 outline-none font-body-md text-[#ffffff] placeholder-[#71717a] focus:ring-0 resize-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="border border-[#ffffff] bg-[#ffffff] text-[#0e0e10] hover:bg-transparent hover:text-[#ffffff] px-8 py-3.5 font-label-caps tracking-widest uppercase transition-all duration-200 w-full md:w-auto text-center cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-70 group active:translate-y-0.5"
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {status === 'submitting' && 'Sending...'}
                {status === 'submitted' && (
                  <>
                    <Check size={16} />
                    <span>Message Ready</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Direct Links / Socials */}
          <div className="w-full border-t border-[#222225] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-body-md text-[#a3a3a8] text-center md:text-left">
              Prefer email?{' '}
              <a
                className="text-[#ffffff] hover:underline font-medium ml-1"
                href="mailto:hello@avinashkumar.com"
              >
                hello@avinashkumar.com
              </a>
            </p>

            <div className="flex space-x-8 font-label-caps">
              <a
                className="text-[#ffffff] hover:underline transition-all relative group uppercase tracking-wider text-xs"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffffff] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                className="text-[#ffffff] hover:underline transition-all relative group uppercase tracking-wider text-xs"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffffff] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
