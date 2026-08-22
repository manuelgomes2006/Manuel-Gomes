import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Terminal, Palette, Wrench } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development': return <Code className="w-5 h-5 text-zinc-300" />;
      case 'AI & Data': return <Cpu className="w-5 h-5 text-zinc-300" />;
      case 'Programming': return <Terminal className="w-5 h-5 text-zinc-300" />;
      case 'Design': return <Palette className="w-5 h-5 text-zinc-300" />;
      case 'Tools': return <Wrench className="w-5 h-5 text-zinc-300" />;
      default: return <Code className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// TECHNICAL CAPABILITIES</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-2">
            Skills & Stack.
          </h2>
          <p className="text-zinc-400 text-sm font-mono mt-2">No arbitrary percentage bars — just real technologies built with.</p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PERSONAL_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-8 hover:border-zinc-700 transition-all duration-300 backdrop-blur-md group"
            >
              <div className="flex items-center space-x-3 pb-6 border-b border-zinc-800/80">
                <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700/60 group-hover:scale-110 transition-transform duration-300">
                  {getCategoryIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="pt-6 flex flex-wrap gap-2.5">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-2 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-200"
                  >
                    `{item}`
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
