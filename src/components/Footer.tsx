import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 sm:py-16 bg-[#000000] border-t border-white/[0.08] relative font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Left Brand info */}
        <div className="space-y-1 text-center md:text-left">
          <a href="#home" className="text-sm sm:text-base font-bold tracking-tight text-white font-sans">
            {PERSONAL_DATA.name}
          </a>
          <p className="text-xs text-zinc-400">
            AI & Full-Stack Engineer • Built with precision & high-performance flow
          </p>
        </div>

        {/* Apple Centered Social Links */}
        <div className="flex items-center space-x-6 text-xs text-zinc-400">
          <a
            href={PERSONAL_DATA.contact.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_DATA.contact.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_DATA.contact.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center space-x-3 sm:space-x-4 text-xs text-zinc-500">
          <span>© {currentYear} Manuel Gomes</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 sm:p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-400 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
