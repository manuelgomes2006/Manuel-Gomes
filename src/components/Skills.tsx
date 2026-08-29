import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Terminal, Wrench, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development': return <Code className="w-4 h-4 text-violet-400" />;
      case 'AI & Data': return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'Programming': return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-sky-400" />;
      default: return <Code className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-28 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400">// CONSTELLATION — 3D STAR MAP</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
            Tech Constellation.
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            An interconnected star map of frameworks, languages, and AI systems I engineer with.
          </p>
        </div>

        {/* 4 Categorized Space Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpaceGlassPanel className="h-full p-6">
                <div className="flex items-center space-x-2.5 pb-4 border-b border-white/10">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                    {getCategoryIcon(skillGroup.category)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight font-sans">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-950/90 border border-zinc-800/80 text-xs font-mono text-zinc-300 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-105"
                    >
                      <Sparkles className="w-2.5 h-2.5 inline mr-1 text-violet-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </SpaceGlassPanel>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
