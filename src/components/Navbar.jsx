import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'Explorations', href: '#explorations', id: 'explorations' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.getElementById(link.id);
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 75;
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbf9f9]/95 backdrop-blur-md border-b border-[#e4e2e2] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-[#fbf9f9]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-6 md:px-16 w-full max-w-[1280px] mx-auto">
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-headline-md font-bold text-[#1b1c1c] tracking-tighter hover:opacity-80 transition-opacity uppercase text-base md:text-lg"
        >
          AVINASH KUMAR
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-label-caps text-xs tracking-widest uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#1b1c1c] font-bold'
                    : 'text-[#5d5f5f] hover:text-[#1b1c1c]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1b1c1c]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-[#1b1c1c] p-2 hover:opacity-75 transition-opacity cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#fbf9f9] border-b border-[#e4e2e2] shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col space-y-4 max-w-[1280px] mx-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-label-caps text-xs tracking-wider uppercase py-2.5 border-b border-[#e4e2e2] last:border-0 transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#1b1c1c] font-bold' : 'text-[#5d5f5f]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#1b1c1c]" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
