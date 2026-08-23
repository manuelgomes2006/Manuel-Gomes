import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-base sm:text-lg font-black tracking-widest text-zinc-100 hover:text-white transition-colors uppercase font-sans"
        >
          {PERSONAL_DATA.name}
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors py-1 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-zinc-100 rounded-full hover:bg-white transition-all duration-200 shadow-md transform-gpu hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[62px] bg-[#09090b]/95 backdrop-blur-2xl border-b border-zinc-800 px-6 py-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium uppercase tracking-widest text-zinc-300 hover:text-white py-2.5 border-b border-zinc-900 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-zinc-600 text-xs">→</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-white rounded-full"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      )}
    </header>
  );
};
