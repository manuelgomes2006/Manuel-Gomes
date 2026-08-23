import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl max-w-sm mx-auto lg:max-w-none">
              <img
                src={PERSONAL_DATA.images.about}
                alt="Manuel Gomes — Lifestyle Portrait"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: Short Intro & Tags */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// ABOUT ME</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans mt-1">
                {PERSONAL_DATA.aboutHeading}
              </h2>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              {PERSONAL_DATA.aboutBio}
            </p>

            {/* Tags */}
            <div className="pt-2 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Core Disciplines</p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_DATA.aboutTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200"
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
