import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, BookOpen, BadgeCheck, Cloud, BarChart3, ExternalLink, Eye, X, Download, ShieldCheck } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Education: React.FC = () => {
  const { education } = PERSONAL_DATA;
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

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
          <div className="mt-10 sm:mt-14 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// INDUSTRY CREDENTIALS</span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans mt-0.5">
                  Verified IBM Certifications.
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {education.certifications.map((cert: any, idx: number) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpaceGlassPanel className="h-full !p-4 sm:!p-6 flex flex-col justify-between group">
                    <div className="space-y-4">
                      
                      {/* Top Issuer & Verified Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-xl bg-blue-950/90 border border-blue-800/80 flex items-center justify-center text-blue-400 font-black text-xs font-mono shadow-md">
                            IBM
                          </div>
                          <div>
                            <span className="block text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                              {cert.issuer}
                            </span>
                            <span className="block text-[9px] font-mono text-zinc-500">
                              {cert.code} · Issued {cert.issueDate}
                            </span>
                          </div>
                        </div>

                        <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-[10px] font-mono shadow-sm">
                          <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Verified</span>
                        </div>
                      </div>

                      {/* Certificate Visual Preview Snapshot */}
                      {cert.image && (
                        <div
                          onClick={() => setSelectedCert(cert)}
                          className="relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/90 cursor-pointer group/img shadow-inner"
                        >
                          <img
                            src={cert.image}
                            alt={`${cert.title} certificate preview`}
                            className="w-full h-36 sm:h-44 object-cover object-top filter contrast-105 group-hover/img:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-3.5 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-bold font-sans flex items-center space-x-1.5 shadow-xl">
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Certificate</span>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Title & Description */}
                      <div className="space-y-1.5">
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

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map((skill: string) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 mt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 sm:gap-2.5">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="px-3.5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold font-sans flex items-center space-x-1.5 transition-colors shadow-md transform-gpu active:scale-95"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Enlarge View</span>
                      </button>

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white text-xs font-mono flex items-center space-x-1.5 transition-colors"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Verify Online</span>
                          <ExternalLink className="w-3 h-3 text-zinc-500" />
                        </a>
                      )}

                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                          title="Download Certificate PDF"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </SpaceGlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Interactive Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="pointer-events-auto max-w-3xl w-full max-h-[92vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-4 font-sans"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-zinc-800">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-md bg-blue-950 text-blue-400 text-[10px] font-mono font-bold">
                        IBM
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {selectedCert.code} · Issued {selectedCert.issueDate}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {selectedCert.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close modal"
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Certificate High-Res Image Canvas */}
                <div className="relative rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-2xl">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate`}
                    className="w-full h-auto object-contain max-h-[60vh] mx-auto filter contrast-105"
                  ></img>
                </div>

                {/* Modal Footer Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono">
                    <BadgeCheck className="w-4 h-4 text-emerald-400" />
                    <span>Official Verified Credential · IBM Developer Skills Network</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-white flex items-center space-x-1.5 transition-colors"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verify Online</span>
                        <ExternalLink className="w-3 h-3 text-zinc-400" />
                      </a>
                    )}

                    {selectedCert.pdfUrl && (
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold font-sans flex items-center space-x-1.5 transition-colors shadow-lg"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
