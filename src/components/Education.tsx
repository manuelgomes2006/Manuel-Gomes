import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Education: React.FC = () => {
  const { education } = PERSONAL_DATA;

  return (
    <section id="education" className="py-16 bg-[#09090b] border-t border-zinc-900 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// EDUCATION</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans mt-1">
            Academic Background.
          </h2>
        </div>

        {/* Compact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-zinc-700 transition-all duration-300 transform-gpu"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">{education.institution}</h3>
              <p className="text-sm font-medium text-zinc-300">{education.degree}</p>
              <p className="text-xs font-mono text-zinc-400">Specialization: {education.specialization}</p>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono self-start sm:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{education.status}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
