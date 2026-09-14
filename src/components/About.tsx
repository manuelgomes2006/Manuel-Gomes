import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { TiltCard } from './TiltCard';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 md:py-24 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <TiltCard className="max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl group">
                <img
                  src={PERSONAL_DATA.images.about}
                  alt="Manuel Gomes — Profile"
                  className="w-full h-[200px] sm:h-[340px] md:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-950/85 border border-zinc-800 backdrop-blur-md text-[10px] sm:text-xs font-mono text-zinc-300 shadow-md">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{PERSONAL_DATA.location}</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Profile Overview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SpaceGlassPanel className="!p-4 sm:!p-6">
              <div className="space-y-3.5 sm:space-y-5">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// BACKGROUND & FOCUS</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase font-sans mt-1">
                    {PERSONAL_DATA.aboutHeading}
                  </h2>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  {PERSONAL_DATA.aboutBio}
                </p>

                {/* Core Discipline Tags (Scrollable on Mobile to Save Vertical Space) */}
                <div className="pt-0.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-violet-400" />
                      <span>Core Focus Areas</span>
                    </p>
                    <span className="text-[9px] font-mono text-zinc-500 sm:hidden">Swipe →</span>
                  </div>
                  <div className="flex sm:flex-wrap overflow-x-auto sm:overflow-visible gap-1.5 sm:gap-2 no-scrollbar pb-1 snap-x">
                    {PERSONAL_DATA.aboutTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-200 hover:border-zinc-600 hover:text-white transition-all duration-300 shrink-0 snap-start"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability Banner */}
                <div className="pt-0.5">
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{PERSONAL_DATA.availability}</span>
                  </div>
                </div>

              </div>
            </SpaceGlassPanel>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
