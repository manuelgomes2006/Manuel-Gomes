import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Terminal, Wrench } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Intelligent Systems': return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Frontend Engineering': return <Code className="w-4 h-4 text-blue-400" />;
      case 'Backend & Systems': return <Terminal className="w-4 h-4 text-violet-400" />;
      case 'Tools & DevOps': return <Wrench className="w-4 h-4 text-zinc-300" />;
      default: return <Code className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// TECHNICAL ARCHITECTURE</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
            Core Competencies.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-xl">
            A comprehensive breakdown of frameworks, programming languages, and AI systems I utilize for building production software.
          </p>
        </div>

        {/* 4 Categorized Space Glass Cards (Compact on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {PERSONAL_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpaceGlassPanel className="h-full !p-4 sm:!p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-zinc-900 border border-zinc-800 shadow-md">
                        {getCategoryIcon(skillGroup.category)}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight font-sans">
                        {skillGroup.category}
                      </h3>
                    </div>
                  </div>

                  {skillGroup.badge && (
                    <div className="mt-2 sm:mt-3">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {skillGroup.badge}
                      </span>
                    </div>
                  )}

                  <div className="pt-3 sm:pt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 sm:px-2.5 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800/90 text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SpaceGlassPanel>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
