import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_DATA } from '../../data/content';

export const SpaceHUDNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Zero-cost IntersectionObserver replaces layout-thrashing scroll listener
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(el, { offset: -70, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 p-3 sm:p-4 lg:p-5 pointer-events-none font-sans">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Apple-Style Monogram Brand Pill */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center space-x-2.5 sm:space-x-3 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-all duration-300 transform-gpu hover:scale-[1.02] active:scale-95"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-white via-zinc-200 to-zinc-400 text-black flex items-center justify-center font-black text-xs font-sans shadow-md">
              M
            </div>
            <div className="text-left pr-1">
              <span className="block text-[11px] sm:text-xs font-bold tracking-tight text-white font-sans">
                Manuel Gomes
              </span>
              <span className="hidden sm:block text-[9px] font-mono text-zinc-400 tracking-wider">
                AI & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Apple-Style Segmented Navigation Bar */}
          <nav className="hidden lg:flex items-center space-x-1 px-2 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Apple Actions & Mobile Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            <a
              href={PERSONAL_DATA.contact.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-zinc-300 hover:text-white text-xs font-medium backdrop-blur-md transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-zinc-300" />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all duration-200 active:scale-95 shadow-md"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-full bg-black/70 border border-white/10 text-zinc-300 hover:text-white backdrop-blur-xl shadow-lg active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Apple iOS Control Center-Style Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40 lg:hidden"
            />

            {/* Floating Mobile Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-x-3 sm:inset-x-4 top-16 z-50 bg-[#161618]/90 border border-white/10 rounded-3xl p-5 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)] flex flex-col space-y-2 font-sans"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                <span>Directory</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>Online</span>
                </span>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-medium text-left flex items-center justify-between transition-colors ${
                    activeSection === link.id
                      ? 'bg-white/10 text-white font-semibold border border-white/15'
                      : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-zinc-500 text-[10px] font-mono">→</span>
                </button>
              ))}

              <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2.5 text-xs font-semibold text-black bg-white rounded-full shadow-md flex items-center justify-center space-x-1.5 active:scale-98 transition-transform"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={PERSONAL_DATA.contact.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.06] border border-white/10 rounded-full flex items-center justify-center space-x-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
