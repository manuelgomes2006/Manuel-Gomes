import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Terminal, Wrench } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development': return <Code className="w-4 h-4 text-zinc-300" />;
      case 'AI & Data': return <Cpu className="w-4 h-4 text-zinc-300" />;
      case 'Programming': return <Terminal className="w-4 h-4 text-zinc-300" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-zinc-300" />;
      default: return <Code className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#09090b] border-t border-zinc-900 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// TECHNICAL SKILLS</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans mt-1">
            Skills & Stack.
          </h2>
        </div>

        {/* 4 Categorized Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 transform-gpu hover:-translate-y-1"
            >
              <div className="flex items-center space-x-2.5 pb-4 border-b border-zinc-800">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700">
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
                    className="px-2.5 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    {item}
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
