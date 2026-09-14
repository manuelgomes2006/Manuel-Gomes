import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { TiltCard } from './TiltCard';
import { ThreeCanvas } from './ThreeCanvas';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
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
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-20 sm:pt-28 pb-8 sm:pb-16 overflow-hidden scroll-mt-24">
      {/* 3D Apple Constellation Background */}
      <ThreeCanvas />

      {/* Apple Diffuse Ambient Light Flares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[800px] h-[320px] sm:h-[800px] bg-gradient-to-tr from-[#0071e3]/[0.07] via-white/[0.02] to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-4 sm:space-y-6 text-left"
        >
          {/* Apple-Style Availability Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-[11px] sm:text-xs font-mono text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-normal">{PERSONAL_DATA.status}</span>
          </div>

          {/* Apple Display Headline & Role */}
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-sans">
              MANUEL GOMES
            </h1>
            <p className="text-base sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 font-sans">
              {PERSONAL_DATA.role}.
            </p>
          </div>

          {/* Supporting Bio */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-xl">
            {PERSONAL_DATA.heroTagline}
          </p>

          {/* High-Credibility Stat Counters Bar */}
          <div
            data-lenis-prevent
            className="flex sm:grid overflow-x-auto sm:overflow-visible gap-2.5 sm:gap-4 no-scrollbar border-y border-white/[0.08] py-3 sm:py-3.5 max-w-lg sm:grid-cols-3"
          >
            {PERSONAL_DATA.metrics.map((metric) => (
              <div
                key={metric.label}
                className="text-left p-2.5 sm:p-0 rounded-2xl sm:rounded-none bg-white/[0.03] sm:bg-transparent min-w-[130px] sm:min-w-0 shrink-0 sm:shrink border border-white/[0.06] sm:border-none"
              >
                <div className="text-base sm:text-xl font-black text-white font-sans tracking-tight">{metric.value}</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 mt-0.5 leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Apple Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-full transition-all duration-200 shadow-md text-center flex items-center justify-center active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5 ml-1.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 rounded-full transition-all duration-200 text-center flex items-center justify-center backdrop-blur-md active:scale-95 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-0.5 flex items-center space-x-2.5">
            <a
              href={PERSONAL_DATA.contact.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 sm:p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={PERSONAL_DATA.contact.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 sm:p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={PERSONAL_DATA.contact.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 sm:p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Apple Squircle Portrait Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end mt-2 lg:mt-0"
        >
          <TiltCard className="max-w-xs sm:max-w-sm w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 via-zinc-400/5 to-transparent rounded-[32px] opacity-25 blur-2xl transition-all duration-500 pointer-events-none group-hover:opacity-40" />
              <div className="relative rounded-[28px] overflow-hidden bg-[#161618]/80 border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)]">
                <img
                  src={PERSONAL_DATA.images.hero}
                  alt="Manuel Gomes — Portrait"
                  className="w-full h-[220px] sm:h-[360px] lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10 flex items-center justify-between pointer-events-none">
                  <div>
                    <p className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white font-sans">MANUEL GOMES</p>
                    <p className="text-[9px] sm:text-[10px] font-mono text-zinc-400 mt-0.5">BCA (HONS.) DATA SCIENCE & AI · 2025–2029</p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => handleScrollTo(e, 'about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
      >
        <span className="text-[9px] font-mono uppercase tracking-widest mb-1">Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
};
