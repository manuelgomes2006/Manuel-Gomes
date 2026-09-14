import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { TiltCard } from './TiltCard';
import { ThreeCanvas } from './ThreeCanvas';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden scroll-mt-24">
      {/* 3D Interactive WebGL Particle Background */}
      <ThreeCanvas />

      {/* Dynamic Background radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[750px] h-[350px] sm:h-[750px] bg-gradient-to-tr from-zinc-700/15 via-zinc-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-4 sm:space-y-6 text-left"
        >
          {/* Status tag */}
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 shadow-inner text-[11px] sm:text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-tight sm:tracking-normal">{PERSONAL_DATA.status}</span>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-sans">
              MANUEL GOMES
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 font-sans">
              {PERSONAL_DATA.role}
            </p>
          </div>

          {/* Supporting Bio */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-xl">
            {PERSONAL_DATA.heroTagline}
          </p>

          {/* High-Credibility Stat Counters Bar (Optimized for Mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 max-w-lg border-y border-zinc-800/80 py-3">
            {PERSONAL_DATA.metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className={`text-left p-2 sm:p-0 rounded-xl sm:rounded-none bg-zinc-950/40 sm:bg-transparent ${
                  idx === 2 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="text-base sm:text-xl font-black text-white font-sans tracking-tight">{metric.value}</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 mt-0.5 leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
            <a
              href="#projects"
              className="group px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all duration-300 shadow-xl text-center flex items-center justify-center transform-gpu hover:scale-[1.02] active:scale-98"
            >
              <span>View Featured Projects</span>
              <ArrowDown className="w-3.5 h-3.5 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all duration-300 text-center flex items-center justify-center transform-gpu hover:scale-[1.02] active:scale-98"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-1 flex items-center space-x-3">
            <a
              href={PERSONAL_DATA.contact.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 sm:p-3 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-md"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.contact.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 sm:p-3 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-md"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.contact.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 sm:p-3 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-md"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Portrait Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0"
        >
          <TiltCard className="max-w-xs sm:max-w-sm w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-600 via-zinc-400 to-zinc-800 rounded-3xl opacity-20 blur-2xl transition-all duration-500 pointer-events-none group-hover:opacity-40" />
              <div className="relative rounded-3xl overflow-hidden bg-zinc-900/90 border border-zinc-800/90 shadow-2xl">
                <img
                  src={PERSONAL_DATA.images.hero}
                  alt="Manuel Gomes — Portrait"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white font-sans">MANUEL GOMES</p>
                    <p className="text-[10px] font-mono text-zinc-400 mt-0.5">BCA (HONS.) DATA SCIENCE & AI · 2025–2029</p>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <span className="text-[9px] font-mono uppercase tracking-widest mb-1">Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
};
