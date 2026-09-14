import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, BadgeCheck, Cloud, BarChart3 } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Education: React.FC = () => {
  const { education } = PERSONAL_DATA;

  return (
    <section id="education" className="py-16 sm:py-24 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
            Education & Honors.
          </h2>
        </div>

        {/* 1. Academic Degree Card */}
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
                      <span>{education.period} · BATCH 2025—2029</span>
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
                    <span>Academic Curriculum & Core Focus</span>
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

        {/* 2. Professional Certifications Section (IBM) */}
        {education.certifications && (
          <div className="mt-8 sm:mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// INDUSTRY CREDENTIALS</span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans mt-0.5">
                  Verified IBM Certifications.
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {education.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpaceGlassPanel className="h-full !p-5 sm:!p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Top Issuer Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-950/80 border border-blue-800/80 flex items-center justify-center text-blue-400 font-black text-xs font-mono">
                            IBM
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                            {cert.category}
                          </span>
                        </div>

                        <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/70 text-emerald-400 text-[10px] font-mono">
                          <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Verified</span>
                        </div>
                      </div>

                      {/* Certificate Title */}
                      <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans flex items-center">
                          {cert.id === 'ibm-data-viz' ? (
                            <BarChart3 className="w-4 h-4 mr-2 text-blue-400 shrink-0 inline" />
                          ) : (
                            <Cloud className="w-4 h-4 mr-2 text-sky-400 shrink-0 inline" />
                          )}
                          <span>{cert.title}</span>
                        </h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                          {cert.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Pills */}
                    <div className="pt-4 mt-2 border-t border-zinc-800/80">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpaceGlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
