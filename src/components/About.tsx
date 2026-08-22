import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header Tag */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// ABOUT ME</span>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Personal Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-2xl group">
              <img
                src={PERSONAL_DATA.images.about!}
                alt="Manuel Gomes — Portrait"
                className="w-full h-[440px] md:h-[500px] object-cover object-top filter grayscale contrast-[1.2] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">TECHNO INDIA UNIVERSITY</p>
                <p className="text-sm font-semibold text-white">Data Science & Artificial Intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
                {PERSONAL_DATA.aboutHeadline}
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
              <p>{PERSONAL_DATA.aboutBio1}</p>
              <p>{PERSONAL_DATA.aboutBio2}</p>
            </div>

            {/* Identity Tags */}
            <div className="pt-4 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Core Identities</p>
              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_DATA.aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
