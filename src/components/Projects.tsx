import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Dumbbell, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// FEATURED PROJECTS</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-1">
            What I Have Built.
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Real applications showcasing my capabilities in AI integration, full-stack web development, and client solutions.
          </p>
        </div>

        {/* 2 Main Project Showcase Cards */}
        <div className="space-y-10">
          {PERSONAL_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-10 backdrop-blur-xl hover:border-zinc-700 transition-all duration-300 shadow-2xl overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Info Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200">
                      {project.id === 'scholarmatch-ai' ? <Cpu className="w-5 h-5" /> : <Dumbbell className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                      {project.id === 'scholarmatch-ai' ? 'AI PLATFORM' : 'WEB APP & PWA'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1 font-semibold">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                      >
                        `{t}`
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-700 text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center"
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Screenshot / Visual Column */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 shadow-inner group-hover:border-zinc-700 transition-colors">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-56 sm:h-64 object-cover object-top rounded-xl filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Technical Card UI for ScholarMatch AI */
                      <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 flex flex-col justify-between border border-zinc-800/80">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">SCHOLARMATCH AI</span>
                          <Sparkles className="w-4 h-4 text-zinc-400" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-1.5 w-3/4 bg-zinc-700 rounded-full" />
                          <div className="h-1.5 w-1/2 bg-zinc-800 rounded-full" />
                          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-emerald-400 mt-2">
                            VERDICT: ELIGIBLE (94% MATCH)
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 flex justify-between">
                          <span>GEMINI AI EMBEDDINGS</span>
                          <span>PROD READY</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
