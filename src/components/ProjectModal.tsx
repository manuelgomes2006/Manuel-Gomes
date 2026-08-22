import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  clientTypes?: string[];
  featured: boolean;
  category: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-10 shadow-2xl my-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-zinc-600/10 blur-[90px] rounded-full pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3 pb-6 border-b border-zinc-800">
            <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-[11px] font-mono text-zinc-300 uppercase tracking-widest">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              {project.title}
            </h3>
            <p className="text-base font-mono text-zinc-400">{project.tagline}</p>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Overview</h4>
              <p className="text-zinc-300 text-base leading-relaxed">{project.description}</p>
            </div>

            {/* Client Types if custom websites */}
            {project.clientTypes && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Client Sectors Showcase</h4>
                <div className="flex flex-wrap gap-2">
                  {project.clientTypes.map((client) => (
                    <span
                      key={client}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-200"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features & Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Key Architectural Highlights</h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    `{t}`
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => alert(`Launching ${project.title} live demo...`)}
                className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-colors inline-flex items-center"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </button>
              <button
                onClick={() => alert(`Opening ${project.title} code repository...`)}
                className="px-5 py-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-semibold uppercase tracking-widest hover:text-white hover:bg-zinc-700 transition-colors inline-flex items-center"
              >
                <Github className="w-3.5 h-3.5 mr-1.5" />
                <span>Source Code</span>
              </button>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase">Manuel Gomes Portfolio</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
