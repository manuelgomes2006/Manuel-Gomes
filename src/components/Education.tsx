import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Education: React.FC = () => {
  const { education } = PERSONAL_DATA;

  return (
    <section id="education" className="py-24 md:py-32 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Tag */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// ACADEMIC FOUNDATION</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-2">
            Education.
          </h2>
        </div>

        {/* Clean Timeline Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-zinc-700 transition-all duration-500"
        >
          {/* Subtle Glow Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-zinc-600/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-zinc-800">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-zinc-800 border border-zinc-700/80 text-zinc-200">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{education.institution}</h3>
                <p className="text-sm font-medium text-zinc-400 font-mono mt-0.5">{education.degree}</p>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{education.status}</span>
            </div>
          </div>

          {/* Body Description */}
          <div className="py-8 space-y-6">
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              "{education.description}"
            </p>

            {/* Focus Areas */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                <span>Program Focus Areas</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {education.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300 font-mono hover:border-zinc-700 hover:text-white transition-colors"
                  >
                    `{area}`
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>DEGREE: BCA (HONOURS)</span>
            <span>SPECIALIZATION: DATA SCIENCE & AI</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
