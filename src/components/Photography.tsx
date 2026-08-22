import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Photography: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code className="w-8 h-8 text-zinc-300" />;
      case 1: return <Terminal className="w-8 h-8 text-zinc-300" />;
      case 2: return <Cpu className="w-8 h-8 text-zinc-300" />;
      case 3: return <Layers className="w-8 h-8 text-zinc-300" />;
      default: return <Sparkles className="w-8 h-8 text-zinc-300" />;
    }
  };

  const descriptions = [
    "Architecting scalable web platforms, custom digital experiences, and high-performance applications.",
    "Mastering data science fundamentals, machine learning algorithms, and modern software patterns.",
    "Investigating generative AI models, Gemini APIs, and intelligent product workflows.",
    "Designing clean Apple-inspired minimal user interfaces and converting ideas into functional code."
  ];

  return (
    <section className="py-24 md:py-32 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// CREATIVE PHILOSOPHY</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-2">
              Beyond the screen.
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-xs">
            Core principles of building, learning, exploring, and creating.
          </p>
        </div>

        {/* Masonry / Mosaic Grid Layout with Minimal Dark Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {PERSONAL_DATA.images.gallery.map((item, index) => {
            const colSpans = [
              "lg:col-span-7",
              "lg:col-span-5",
              "lg:col-span-5",
              "lg:col-span-7"
            ];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`${colSpans[index % colSpans.length]} relative group`}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-[#0d0d10] border border-zinc-800/80 p-8 sm:p-10 shadow-xl flex flex-col justify-between hover:border-zinc-700 transition-all duration-500 ${item.aspect}`}>
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
                      {item.caption}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">0{index + 1} // PRINCIPLE</span>
                  </div>

                  {/* Center Visual Element */}
                  <div className="my-auto py-6 space-y-4 z-10">
                    <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 w-fit group-hover:scale-110 transition-transform duration-300">
                      {getIcon(index)}
                    </div>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                      {descriptions[index]}
                    </p>
                  </div>

                  {/* Bottom Footer Line */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500 z-10">
                    <span>MANUEL GOMES</span>
                    <span className="group-hover:text-zinc-300 transition-colors">DISCIPLINE // CREATION</span>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
