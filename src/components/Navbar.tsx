import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/60 py-4 shadow-xl shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-lg md:text-xl font-black tracking-widest text-zinc-100 hover:text-zinc-300 transition-colors uppercase font-sans"
        >
          {PERSONAL_DATA.name}
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-zinc-100 rounded-full hover:bg-white transition-all duration-300 shadow-md hover:shadow-zinc-100/10"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-8 flex flex-col space-y-5 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-zinc-300 hover:text-white py-2 border-b border-zinc-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-zinc-100 rounded-full"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      )}
    </header>
  );
};
