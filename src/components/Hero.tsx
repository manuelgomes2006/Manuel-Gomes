import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Code2 } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-700/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-zinc-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Technical Background Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Status badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wide">{PERSONAL_DATA.status}</span>
          </motion.div>

          {/* Main Hero Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] uppercase font-sans">
              I build ideas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                into digital products.
              </span>
            </h1>
          </div>

          {/* Supporting Bio Text */}
          <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl">
            {PERSONAL_DATA.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all duration-300 shadow-lg shadow-white/5 hover:scale-[1.02]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
            >
              Let's Connect
            </a>
          </div>

          {/* Quick Info Bar */}
          <div className="pt-8 border-t border-zinc-900/80 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Focus</p>
              <p className="text-xs font-medium text-zinc-300 mt-1">AI & Web Apps</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Education</p>
              <p className="text-xs font-medium text-zinc-300 mt-1">BCA Data Science</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Role</p>
              <p className="text-xs font-medium text-zinc-300 mt-1">Developer & Builder</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Minimal Dark Architectural Visual Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative group max-w-md w-full">
            
            {/* Subtle glow border frame behind container */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-800 rounded-2xl opacity-20 group-hover:opacity-35 blur-xl transition-all duration-700 pointer-events-none" />

            {/* Dark Minimal Geometric Canvas Container */}
            <div className="relative h-[440px] sm:h-[500px] rounded-2xl bg-[#0d0d10] border border-zinc-800/80 shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              
              {/* Radial ambient glow */}
              <div className="absolute inset-0 bg-radial-glow opacity-70 pointer-events-none" />

              {/* Top Header Row */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  DEVELOPER // ARCHITECTURE
                </span>
              </div>

              {/* Center Monogram / Monolithic Emblem */}
              <div className="my-auto text-center space-y-4 z-10">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:border-zinc-700 transition-colors">
                  <span className="text-3xl font-extrabold font-mono text-zinc-200 tracking-tighter">MG</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-widest uppercase text-white font-sans">MANUEL GOMES</h3>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">AI Developer & Entrepreneur</p>
                </div>
              </div>

              {/* Bottom Technical Bar */}
              <div className="z-10 pt-4 border-t border-zinc-900/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <div className="flex items-center space-x-1.5">
                  <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>REACT // TS // GEMINI AI</span>
                </div>
                <span className="text-zinc-400">EST. 2026</span>
              </div>
            </div>

            {/* Floating Technical Lines Decorative Badge */}
            <div className="absolute -bottom-4 -left-4 z-30 hidden sm:block px-4 py-2 bg-zinc-950/90 border border-zinc-800 rounded-xl backdrop-blur-md shadow-xl text-[11px] font-mono text-zinc-400">
              <span className="text-zinc-200 font-semibold">STATUS</span> // SYSTEM READY
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};
