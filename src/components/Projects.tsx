import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cpu, Layout, Sparkles, Lock, ArrowUpRight, CheckCircle2, ChevronRight, RotateCw, Globe } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState(PERSONAL_DATA.projects[0].id);

  const activeProject = PERSONAL_DATA.projects.find((p) => p.id === activeProjectId) || PERSONAL_DATA.projects[0];

  return (
    <section id="projects" className="py-28 bg-[#09090b] border-t border-zinc-900/90 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">// ENGINEERING PORTFOLIO</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
              Featured Systems.
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Production web applications and intelligent systems engineered with modern architecture, sub-second latency, and clean code principles.
            </p>
          </div>

          {/* Linear / Vercel Segmented Project Switcher */}
          <div className="flex items-center p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-2xl self-start md:self-auto">
            {PERSONAL_DATA.projects.map((project, index) => {
              const isActive = project.id === activeProjectId;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-sans font-semibold tracking-wide transition-all duration-300 flex items-center space-x-2 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute inset-0 rounded-xl bg-zinc-800/90 border border-zinc-700/80 shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="text-[10px] font-mono text-zinc-500">0{index + 1}</span>
                    <span>{project.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Browser Frame Showcase */}
        <div className="rounded-3xl bg-zinc-950/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          {/* Browser Header Bar */}
          <div className="px-4 sm:px-6 py-3.5 bg-zinc-900/80 border-b border-zinc-800/80 flex items-center justify-between gap-4">
            
            {/* macOS Window Controls */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xl mx-auto flex items-center justify-between px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800 text-xs font-mono text-zinc-400 shadow-inner">
              <div className="flex items-center space-x-2 truncate">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-zinc-500">https://</span>
                <span className="text-zinc-200 font-medium truncate">{activeProject.domainUrl}</span>
              </div>
              
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                title="Open live URL in new tab"
                className="text-zinc-500 hover:text-white transition-colors ml-2 shrink-0"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simulated Window Action Icons */}
            <div className="hidden sm:flex items-center space-x-3 text-zinc-500">
              <RotateCw className="w-3.5 h-3.5 hover:text-zinc-300 transition-colors cursor-pointer" />
              <Globe className="w-3.5 h-3.5 hover:text-zinc-300 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Browser Stage Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Left Column: Visual Showcase Screen */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
                  {/* Subtle Screen Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {activeProject.image ? (
                    <img
                      src={activeProject.image}
                      alt={`${activeProject.title} Interface Preview`}
                      className="w-full h-64 sm:h-80 object-cover object-top filter contrast-105 group-hover:scale-[1.03] transition-transform duration-700 ease-out transform-gpu"
                    />
                  ) : (
                    <div className="w-full h-64 sm:h-80 flex flex-col justify-between p-6 bg-gradient-to-br from-zinc-900 to-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-zinc-400">{activeProject.title}</span>
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-sm font-mono text-zinc-300">Preview Engine Active</div>
                    </div>
                  )}

                  {/* Floating Action Overlay on Image Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-xl hover:bg-zinc-200 transition-colors"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Architectural Performance Metric Chips */}
                {activeProject.metrics && (
                  <div className="grid grid-cols-3 gap-3">
                    {activeProject.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left">
                        <div className="text-sm font-bold text-white font-mono">{m.value}</div>
                        <div className="text-[10px] text-zinc-400 font-mono mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Deep-Dive Technical Details */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Category & Status */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white shadow-md">
                    {activeProject.id === 'scholarmatch-ai' ? (
                      <Cpu className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Layout className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                    {activeProject.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-sans">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1 font-medium">
                    {activeProject.tagline}
                  </p>
                </div>

                {/* Core Description */}
                <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                  {activeProject.description}
                </p>

                {/* Architectural Highlights */}
                {activeProject.highlights && (
                  <div className="space-y-2 pt-1">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                      Engineering Highlights
                    </p>
                    <div className="space-y-2">
                      {activeProject.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center shadow-xl transform-gpu hover:scale-[1.02]"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </a>

                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center shadow-md transform-gpu hover:scale-[1.02]"
                  >
                    <Github className="w-3.5 h-3.5 mr-2" />
                    <span>View Repository</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
