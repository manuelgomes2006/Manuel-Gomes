import React from 'react';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Brand info */}
        <div className="space-y-2 text-center md:text-left">
          <a href="#home" className="text-xl font-black tracking-widest text-white uppercase font-sans">
            {PERSONAL_DATA.name}
          </a>
          <p className="text-xs font-mono text-zinc-400">
            Building. Learning. Creating.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-xs font-mono text-zinc-400">
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
        <div className="flex items-center space-x-4 text-xs font-mono text-zinc-500">
          <span>© {currentYear} MANUEL GOMES</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
