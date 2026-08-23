import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden scroll-mt-24">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-zinc-700/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Status tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{PERSONAL_DATA.status}</span>
          </div>

          {/* Main Title */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              MANUEL GOMES
            </h1>
            <p className="text-xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 font-sans uppercase">
              {PERSONAL_DATA.role}
            </p>
          </div>

          {/* Supporting Bio */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-xl">
            {PERSONAL_DATA.heroTagline}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#projects"
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all duration-300 shadow-lg text-center flex items-center justify-center transform-gpu hover:scale-[1.02]"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5 ml-1.5" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all duration-300 text-center flex items-center justify-center transform-gpu hover:scale-[1.02]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4 flex items-center space-x-4">
            <a
              href={PERSONAL_DATA.contact.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 transform-gpu hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.contact.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 transform-gpu hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.contact.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 transform-gpu hover:scale-110"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Full Natural Color Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group max-w-sm w-full">
            <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-800 rounded-2xl opacity-20 blur-xl transition-all duration-500 pointer-events-none group-hover:opacity-40" />
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-2xl">
              <img
                src={PERSONAL_DATA.images.hero}
                alt="Manuel Gomes — Portrait"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white">MANUEL GOMES</p>
                  <p className="text-[10px] font-mono text-zinc-400">BCA (HONS.) DATA SCIENCE & AI</p>
                </div>
              </div>
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
