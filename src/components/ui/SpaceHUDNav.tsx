import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2 } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/content';

export const SpaceHUDNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

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

  const navLinks = [
    { id: 'home', label: 'ROOT' },
    { id: 'about', label: 'ABOUT' },
    { id: 'education', label: 'ACADEMICS' },
    { id: 'skills', label: 'STACK' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4 sm:p-6 pointer-events-none font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex items-center space-x-3 px-4 py-2 rounded-2xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-xl shadow-2xl hover:border-white/40 transition-all duration-300 transform-gpu hover:scale-105"
        >
          <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-black text-xs font-sans shadow-md">
            M
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-xs font-black tracking-widest text-white uppercase font-sans">
              MANUEL GOMES
            </span>
            <span className="block text-[9px] font-mono text-zinc-400">
              SYS::PORTFOLIO_V3.0
            </span>
          </div>
        </a>

        {/* Terminal HUD Links */}
        <nav className="hidden lg:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800 backdrop-blur-xl shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? 'text-white font-bold bg-zinc-900 border border-white/40 shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-1.5 animate-pulse" />
                )}
                ./{link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button / Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-xl transform-gpu hover:scale-105"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>LET'S TALK</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-2xl bg-zinc-950/90 border border-zinc-800 text-zinc-300 hover:text-white backdrop-blur-xl shadow-xl"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-zinc-950/95 border border-zinc-800 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl flex flex-col space-y-3 pointer-events-auto font-mono">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-[10px] text-zinc-400 uppercase tracking-widest">
            <span>$ ./system_menu.sh</span>
            <Code2 className="w-4 h-4 text-zinc-400" />
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full py-3 px-4 rounded-xl text-xs font-mono tracking-widest uppercase text-left flex items-center justify-between transition-colors ${
                activeSection === link.id
                  ? 'bg-zinc-900 text-white font-bold border border-white/40'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <span>./{link.label}</span>
              <span className="text-zinc-600 text-xs font-mono">0{navLinks.indexOf(link) + 1}</span>
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contact')}
            className="mt-3 w-full py-3.5 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white rounded-xl shadow-lg flex items-center justify-center space-x-2 font-mono"
          >
            <Terminal className="w-4 h-4" />
            <span>EXECUTE CONTACT</span>
          </button>
        </div>
      )}
    </header>
  );
};
