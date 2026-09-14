import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Education: React.FC = () => {
  const { education } = PERSONAL_DATA;

  return (
    <section id="education" className="py-16 sm:py-24 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// ACADEMIC BACKGROUND</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
            Education & Honors.
          </h2>
        </div>

        {/* Space Glass Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SpaceGlassPanel>
            <div className="space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2.5 sm:p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white shrink-0 shadow-lg">
                    <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{education.period} · REGULAR DEGREE</span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight font-sans">{education.institution}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-200">{education.degree}</p>
                    <p className="text-[11px] sm:text-xs font-mono text-zinc-400">
                      Specialization: <span className="text-zinc-200">{education.specialization}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[11px] sm:text-xs font-mono self-start sm:self-auto shrink-0 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{education.status}</span>
                </div>
              </div>

              {/* Coursework & Competencies */}
              {education.coursework && (
                <div className="pt-3 sm:pt-4 border-t border-zinc-800/80">
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Relevant Coursework & Fundamentals</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </SpaceGlassPanel>
        </motion.div>

      </div>
    </section>
  );
};
