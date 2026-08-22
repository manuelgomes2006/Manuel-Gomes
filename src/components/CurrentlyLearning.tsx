import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section className="py-20 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-[11px] font-mono text-zinc-300">
                <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                <span>CONTINUOUS GROWTH</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
                Always learning. Always building.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Technology moves fast. Here are the core disciplines I am actively mastering and experimenting with right now.
              </p>
            </div>

            {/* Pills Container */}
            <div className="flex flex-wrap gap-3 max-w-xl">
              {PERSONAL_DATA.currentlyLearning.map((topic) => (
                <div
                  key={topic}
                  className="px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono font-medium text-zinc-200 hover:border-zinc-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
