import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_DATA } from '../../data/content';

export const SpaceHUDNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
        (window as any).__lenis.scrollTo(el, { offset: -70, duration: 1.1 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 p-3 sm:p-5 lg:p-6 pointer-events-none font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center space-x-2.5 sm:space-x-3 px-3 sm:px-4 py-2 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 backdrop-blur-xl shadow-2xl hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-105"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white text-zinc-950 flex items-center justify-center font-black text-xs font-sans shadow-md">
              M
            </div>
            <div className="text-left">
              <span className="block text-[11px] sm:text-xs font-black tracking-wider text-white uppercase font-sans">
                MANUEL GOMES
              </span>
              <span className="hidden sm:block text-[10px] font-mono text-zinc-400">
                AI & Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop HUD Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800/90 backdrop-blur-xl shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-white font-semibold bg-zinc-900 border border-white/20 shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse" />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons / Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href={PERSONAL_DATA.contact.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-medium transition-all duration-300 shadow-lg transform-gpu hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center space-x-1.5 px-5 py-2 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold tracking-wide transition-all duration-300 shadow-xl transform-gpu hover:scale-105"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-zinc-950/90 border border-zinc-800 text-zinc-300 hover:text-white backdrop-blur-xl shadow-xl active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Modal & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Floating Mobile Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-50 bg-zinc-950/95 border border-zinc-800 rounded-3xl p-5 sm:p-6 backdrop-blur-2xl shadow-2xl flex flex-col space-y-2.5 font-sans"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                <span>Navigation Menu</span>
                <span className="text-emerald-400">Available For Work</span>
              </div>

              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-medium tracking-wide text-left flex items-center justify-between transition-colors ${
                    activeSection === link.id
                      ? 'bg-zinc-900 text-white font-semibold border border-white/20'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5" />
                    )}
                    <span>{link.label}</span>
                  </span>
                  <span className="text-zinc-500 text-[10px] font-mono">0{idx + 1}</span>
                </button>
              ))}

              <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white rounded-xl shadow-lg flex items-center justify-center space-x-2 active:scale-98 transition-transform"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={PERSONAL_DATA.contact.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center space-x-2"
                >
                  <FileText className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
