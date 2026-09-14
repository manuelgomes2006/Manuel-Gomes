import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cpu, Layout, Sparkles, Lock, ArrowUpRight, CheckCircle2, RotateCw, Globe } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';

export const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState(PERSONAL_DATA.projects[0].id);

  const activeProject = PERSONAL_DATA.projects.find((p) => p.id === activeProjectId) || PERSONAL_DATA.projects[0];

  return (
    <section id="projects" className="py-12 sm:py-20 lg:py-24 bg-[#09090b] border-t border-zinc-900/90 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Engineering Portfolio</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans mt-1">
              Featured Systems.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-xl">
              Production web applications and intelligent systems engineered with modern architecture, sub-second latency, and clean code principles.
            </p>
          </div>

          {/* Apple-Style Segmented Project Switcher */}
          <div className="w-full sm:w-auto grid grid-cols-2 p-1 rounded-full bg-white/[0.06] border border-white/10 shadow-md backdrop-blur-md">
            {PERSONAL_DATA.projects.map((project, index) => {
              const isActive = project.id === activeProjectId;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-normal transition-all duration-200 flex items-center justify-center space-x-1.5 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/15 shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-1.5 truncate">
                    <span className="text-[10px] font-mono text-zinc-400">0{index + 1}</span>
                    <span className="truncate">{project.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Safari Browser Frame Showcase */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#161618]/70 border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden backdrop-blur-2xl">
          
          {/* Browser Header Bar */}
          <div className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between gap-2.5 sm:gap-4">
            
            {/* macOS Window Controls */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] shadow-sm" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] shadow-sm" />
            </div>

            {/* Address Bar (Clean on Mobile) */}
            <div className="flex-1 max-w-xl mx-auto flex items-center justify-between px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/60 border border-white/10 text-[10px] sm:text-xs font-mono text-zinc-400 shadow-inner min-w-0">
              <div className="flex items-center space-x-1.5 sm:space-x-2 truncate min-w-0">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-zinc-500 hidden sm:inline">https://</span>
                <span className="text-zinc-200 font-medium truncate">{activeProject.domainUrl}</span>
              </div>
              
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                title="Open live URL in new tab"
                className="text-zinc-400 hover:text-white transition-colors ml-1.5 shrink-0"
              >
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>

            {/* Simulated Window Action Icons */}
            <div className="hidden sm:flex items-center space-x-3 text-zinc-500 shrink-0">
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
              className="p-3.5 sm:p-7 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center"
            >
              
              {/* Left Column: Visual Showcase Screen */}
              <div className="lg:col-span-6 space-y-2.5 sm:space-y-4">
                <div className="relative group rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
                  {/* Subtle Screen Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {activeProject.image ? (
                    <img
                      src={activeProject.image}
                      alt={`${activeProject.title} Interface Preview`}
                      className="w-full h-40 sm:h-64 lg:h-80 object-cover object-top filter contrast-105 group-hover:scale-[1.03] transition-transform duration-700 ease-out transform-gpu"
                    />
                  ) : (
                    <div className="w-full h-40 sm:h-64 lg:h-80 flex flex-col justify-between p-5 bg-gradient-to-br from-zinc-900 to-black">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-zinc-400">{activeProject.title}</span>
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-sm font-mono text-zinc-300">Preview Engine Active</div>
                    </div>
                  )}

                  {/* Floating Quick Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5 sm:p-5">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-zinc-950 font-sans font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-xl hover:bg-zinc-200 transition-colors"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Architectural Performance Metric Chips (Scrollable on Mobile to Save Vertical Space) */}
                {activeProject.metrics && (
                  <div
                    data-lenis-prevent
                    className="flex sm:grid overflow-x-auto sm:overflow-visible gap-2 sm:gap-3 no-scrollbar pb-1 sm:pb-0 sm:grid-cols-3"
                  >
                    {activeProject.metrics.map((m) => (
                      <div key={m.label} className="p-2 sm:p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left min-w-[105px] sm:min-w-0 shrink-0 sm:shrink">
                        <div className="text-xs sm:text-sm font-bold text-white font-mono truncate">{m.value}</div>
                        <div className="text-[9px] sm:text-[10px] text-zinc-400 font-mono mt-0.5 leading-tight truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Deep-Dive Technical Details */}
              <div className="lg:col-span-6 space-y-3 sm:space-y-5 text-left">
                
                {/* Category & Status */}
                <div className="flex items-center space-x-2.5 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white shadow-md">
                    {activeProject.id === 'scholarmatch-ai' ? (
                      <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    ) : (
                      <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    )}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                    {activeProject.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-sans">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5 sm:mt-1 font-medium">
                    {activeProject.tagline}
                  </p>
                </div>

                {/* Core Description */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {activeProject.description}
                </p>

                {/* Architectural Highlights */}
                {activeProject.highlights && (
                  <div className="space-y-1.5 pt-0.5">
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                      Engineering Highlights
                    </p>
                    <div className="space-y-1.5 sm:space-y-2">
                      {activeProject.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills (Scrollable on Mobile) */}
                <div className="pt-0.5">
                  <div
                    data-lenis-prevent
                    className="flex sm:flex-wrap overflow-x-auto sm:overflow-visible gap-1.5 sm:gap-2 no-scrollbar pb-1 snap-x"
                  >
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-300 shrink-0 snap-start"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons (Full width stacked on Mobile) */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 inline-flex items-center justify-center shadow-md active:scale-95"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>

                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 inline-flex items-center justify-center shadow-sm active:scale-95"
                  >
                    <Github className="w-3.5 h-3.5 mr-1.5" />
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
