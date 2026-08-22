import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../data/content';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 group"
            >
              <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-300 mt-2 font-semibold">
                {stat.label}
              </p>
              <p className="text-[11px] font-mono text-zinc-500 mt-1">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
