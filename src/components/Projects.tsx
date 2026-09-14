import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Layout, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { TiltCard } from './TiltCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#09090b] border-t border-zinc-900 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">// FEATURED WORK</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
            Production Applications.
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Real-world systems demonstrating AI prompt pipelines, full-stack software architecture, and performant user interfaces.
          </p>
        </div>

        {/* Project Showcase Cards with 3D Tilt */}
        <div className="space-y-12">
          {PERSONAL_DATA.projects.map((project, idx) => (
            <TiltCard key={project.id} maxTilt={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-950/95 to-black/95 border border-zinc-800/80 p-6 sm:p-10 backdrop-blur-2xl hover:border-zinc-700 transition-all duration-500 shadow-2xl overflow-hidden group relative"
              >
                {/* Subtle Card Glow Effect */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Info Column */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-zinc-800/90 border border-zinc-700 text-white shadow-md">
                        {project.id === 'scholarmatch-ai' ? <Cpu className="w-5 h-5 text-emerald-400" /> : <Layout className="w-5 h-5 text-blue-400" />}
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 bg-zinc-950/90 px-3.5 py-1 rounded-full border border-zinc-800">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1 font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Architecture & Impact Highlight */}
                    {project.problemSolved && (
                      <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 space-y-1">
                        <span className="font-mono text-zinc-400 uppercase text-[10px] tracking-widest block font-semibold">
                          Engineering Architecture & Impact
                        </span>
                        <p className="text-zinc-300 text-xs leading-relaxed">{project.problemSolved}</p>
                      </div>
                    )}

                    {/* Architectural Performance Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2.5 pt-1">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="p-2.5 rounded-xl bg-zinc-900/70 border border-zinc-800">
                            <div className="text-xs sm:text-sm font-bold text-white font-mono">{m.value}</div>
                            <div className="text-[10px] text-zinc-400 font-mono mt-0.5 leading-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center shadow-lg transform-gpu hover:scale-[1.03]"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-2" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center shadow-md transform-gpu hover:scale-[1.03]"
                      >
                        <Github className="w-3.5 h-3.5 mr-2" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Screenshot Column */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/90 p-2 shadow-inner group-hover:border-zinc-700 transition-all duration-500">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} interface showcase`}
                          className="w-full h-60 sm:h-72 object-cover object-top rounded-xl filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                        />
                      ) : (
                        <div className="w-full h-60 sm:h-72 rounded-xl bg-zinc-950 p-6 flex flex-col justify-between border border-zinc-800">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{project.title}</span>
                            <Sparkles className="w-4 h-4 text-zinc-400" />
                          </div>
                          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
                            VERDICT: ELIGIBLE (94% MATCH)
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500 flex justify-between">
                            <span>GEMINI FLASH ENGINE</span>
                            <span>SUB-2S LATENCY</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
