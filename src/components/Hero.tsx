import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2 } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-zinc-700/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-zinc-500/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 sm:opacity-40 pointer-events-none" />

      {/* Technical Background Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
        >
          {/* Status badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-300 backdrop-blur-md shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wide">{PERSONAL_DATA.status}</span>
          </motion.div>

          {/* Main Hero Headline */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] uppercase font-sans">
              I build ideas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                into digital products.
              </span>
            </h1>
          </div>

          {/* Supporting Bio Text */}
          <p className="text-sm sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl">
            {PERSONAL_DATA.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#projects"
              className="px-7 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all duration-300 shadow-lg text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-widest text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all duration-300 backdrop-blur-sm text-center"
            >
              Let's Connect
            </a>
          </div>

          {/* Quick Info Bar */}
          <div className="pt-6 sm:pt-8 border-t border-zinc-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-lg">
            <div className="flex items-center justify-between sm:block border-b sm:border-b-0 border-zinc-900 pb-2 sm:pb-0">
              <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Focus</p>
              <p className="text-xs font-medium text-zinc-300 mt-0.5 sm:mt-1">AI & Web Apps</p>
            </div>
            <div className="flex items-center justify-between sm:block border-b sm:border-b-0 border-zinc-900 pb-2 sm:pb-0">
              <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Education</p>
              <p className="text-xs font-medium text-zinc-300 mt-0.5 sm:mt-1">BCA Data Science</p>
            </div>
            <div className="flex items-center justify-between sm:block">
              <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Role</p>
              <p className="text-xs font-medium text-zinc-300 mt-0.5 sm:mt-1">Developer & Builder</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Full Color Portrait Focal Point */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative group max-w-md w-full">
            
            {/* Glow border frame behind container */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-800 rounded-2xl opacity-25 group-hover:opacity-45 blur-xl transition-all duration-700 pointer-events-none" />

            {/* Photo Container Card */}
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-2xl">
              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-70 z-10" />

              {/* Main Photo of Manuel in Full Color */}
              <img
                src={PERSONAL_DATA.images.hero!}
                alt="Manuel Gomes — AI & Web Developer"
                className="w-full h-[420px] sm:h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Photo Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold tracking-widest uppercase text-white font-sans">MANUEL GOMES</h3>
                  <p className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">AI Developer & Entrepreneur</p>
                </div>
                <div className="p-2 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-zinc-300" />
                </div>
              </div>
            </div>

            {/* Floating Technical Lines Decorative Badge */}
            <div className="absolute -bottom-4 -left-4 z-30 hidden sm:block px-4 py-2 bg-zinc-950/90 border border-zinc-800 rounded-xl backdrop-blur-md shadow-xl text-[11px] font-mono text-zinc-400">
              <span className="text-zinc-200 font-semibold">EST. 2026</span> // KOLKATA, INDIA
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <span className="text-[9px] font-mono uppercase tracking-widest mb-1">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
};
