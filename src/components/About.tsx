import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header Tag */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// ABOUT ME</span>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dark Minimal Architectural Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-[#0d0d10] border border-zinc-800/80 p-8 sm:p-10 shadow-2xl h-[420px] flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-700/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">ACADEMIC // TECHNO INDIA</span>
                <GraduationCap className="w-5 h-5 text-zinc-400" />
              </div>

              <div className="z-10 space-y-4 my-auto">
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/80 w-fit">
                  <Terminal className="w-8 h-8 text-zinc-200" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight font-sans">BCA (Honours)</h3>
                  <p className="text-sm font-mono text-zinc-400 mt-1">Data Science & Artificial Intelligence</p>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                  Developing strong technical expertise in software engineering, data structures, machine learning algorithms, and intelligent systems.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900/90 flex items-center justify-between text-[11px] font-mono text-zinc-500 z-10">
                <span>STATUS: PURSUING</span>
                <span>DATA SCIENCE & AI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
                {PERSONAL_DATA.aboutHeadline}
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
              <p>{PERSONAL_DATA.aboutBio1}</p>
              <p>{PERSONAL_DATA.aboutBio2}</p>
            </div>

            {/* Identity Tags */}
            <div className="pt-4 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Core Identities</p>
              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_DATA.aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
