import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_DATA } from '../data/content';
import { TiltCard } from './TiltCard';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';
import { Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Origin Photo with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <TiltCard className="max-w-sm mx-auto lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl group">
                <img
                  src={PERSONAL_DATA.images.about}
                  alt="Manuel Gomes — Origin"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-md text-[10px] font-mono text-zinc-300">
                  <Globe className="w-3 h-3 text-violet-400" />
                  <span>ORIGIN PLANET: COORDS 22.57°N</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Origin Glass Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SpaceGlassPanel>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400">// ORIGIN — WHERE IT ALL STARTED</span>
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
                    {PERSONAL_DATA.aboutHeading}
                  </h2>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                  {PERSONAL_DATA.aboutBio}
                </p>

                {/* Core Discipline Tags */}
                <div className="pt-2 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Core Capabilities</p>
                  <div className="flex flex-wrap gap-2">
                    {PERSONAL_DATA.aboutTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-violet-500/50 hover:text-white transition-all duration-300 transform-gpu hover:scale-105"
                      >
                        `{tag}`
                      </span>
                    ))}
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
