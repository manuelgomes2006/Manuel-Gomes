import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../data/content';

export const Process: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// WORKFLOW</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-2">
            My Process.
          </h2>
        </div>

        {/* Minimal Animated Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PERSONAL_DATA.process.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-8 hover:border-zinc-700 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                <span className="text-4xl font-extrabold font-mono text-zinc-700 group-hover:text-zinc-300 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-4 font-sans">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mt-3 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>PHASE 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
