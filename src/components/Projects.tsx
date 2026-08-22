import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Cpu, Smartphone, Globe } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { ProjectModal, ProjectData } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'scholarmatch-ai': return <Cpu className="w-5 h-5 text-zinc-300" />;
      case 'gym-live': return <Smartphone className="w-5 h-5 text-zinc-300" />;
      case 'custom-business-websites': return <Globe className="w-5 h-5 text-zinc-300" />;
      default: return <Layers className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// FEATURED WORK</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-2">
              Selected Projects.
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-sm">
            AI applications, fitness PWAs, and custom high-converting web solutions.
          </p>
        </div>

        {/* Projects Cards Container */}
        <div className="space-y-12">
          {PERSONAL_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-8 sm:p-12 hover:border-zinc-700 transition-all duration-500 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              {/* Subtle ambient lighting on hover */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-700/10 blur-[110px] rounded-full pointer-events-none group-hover:bg-zinc-500/15 transition-all duration-700" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Info */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700/80">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-full border border-zinc-800">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-mono text-zinc-400 mt-2 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech Pill List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                      >
                        `{t}`
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center space-x-4">
                    <button
                      onClick={() => setSelectedProject(project as ProjectData)}
                      className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all duration-300 shadow-md group-hover:scale-105"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5" />
                    </button>
                  </div>
                </div>

                {/* Right: Abstract Tech Visual Frame */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div 
                    onClick={() => setSelectedProject(project as ProjectData)}
                    className="w-full max-w-xs h-56 sm:h-64 rounded-2xl bg-zinc-950 border border-zinc-800/80 p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer group-hover:border-zinc-600 transition-all duration-500 shadow-inner"
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">PROJECT // 0{index + 1}</span>
                      <Sparkles className="w-4 h-4 text-zinc-400 group-hover:rotate-12 transition-transform" />
                    </div>

                    <div className="z-10 space-y-2">
                      <div className="w-12 h-1 bg-gradient-to-r from-zinc-200 to-zinc-600 rounded-full" />
                      <p className="text-xs font-mono text-zinc-400">STATUS: PRODUCTION</p>
                      <p className="text-sm font-bold text-white font-sans">{project.title}</p>
                    </div>

                    <div className="z-10 flex items-center justify-between pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-500">
                      <span>CLICK TO VIEW</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
