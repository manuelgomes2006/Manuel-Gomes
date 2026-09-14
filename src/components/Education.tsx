import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Award, BookOpen, BadgeCheck, Cloud, BarChart3, 
  ExternalLink, Eye, X, ShieldCheck, Rocket, CheckCircle2, 
  LayoutGrid, GitBranch, Calendar
} from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Education: React.FC = () => {
  const { education } = PERSONAL_DATA;
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  // Unified chronological milestones combining Degree + Certifications
  const timelineMilestones = [
    {
      id: 'degree-milestone',
      type: 'degree',
      title: education.degree,
      subtitle: education.institution,
      date: '2025 — 2029 (Current)',
      badge: 'BCA (Honours)',
      badgeColor: 'bg-emerald-950/80 border-emerald-800/80 text-emerald-400',
      description: `Specializing in ${education.specialization}. In-depth coursework in Algorithms, Machine Learning, Database Architecture, and Distributed Web Systems.`,
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
      skills: education.coursework.slice(0, 4),
    },
    {
      id: 'ibm-data-viz-milestone',
      type: 'cert',
      certData: education.certifications[0],
      title: 'Data Visualization with Python',
      subtitle: 'IBM Career Education Program',
      date: 'February 13, 2026',
      badge: 'IBM Verified',
      badgeColor: 'bg-blue-950/80 border-blue-800/80 text-blue-400',
      description: 'Mastered statistical plotting, exploratory data analysis, and dashboard architecture using Matplotlib, Seaborn, and Dash.',
      icon: <BarChart3 className="w-4 h-4 text-blue-400" />,
      skills: ['Python', 'Matplotlib', 'Seaborn', 'Exploratory Analysis'],
    },
    {
      id: 'techno-billion-milestone',
      type: 'cert',
      certData: education.certifications[2],
      title: 'Virtual Internship: Innovation & Entrepreneurship',
      subtitle: 'Techno Billion AI · Center for Excellence',
      date: 'February 27, 2026',
      badge: 'Grade A',
      badgeColor: 'bg-red-950/80 border-red-800/80 text-red-400',
      description: 'Completed comprehensive virtual internship with Grade A in Sustainable Development, Innovation & Entrepreneurship.',
      icon: <Rocket className="w-4 h-4 text-rose-400" />,
      skills: ['Innovation', 'Entrepreneurship', 'AI Strategy', 'Product Thinking'],
    },
    {
      id: 'ibm-cloud-milestone',
      type: 'cert',
      certData: education.certifications[1],
      title: 'IBM Cloud Fundamentals',
      subtitle: 'IBM Career Education Program',
      date: 'July 6, 2026',
      badge: 'IBM Verified',
      badgeColor: 'bg-sky-950/80 border-sky-800/80 text-sky-400',
      description: 'Foundational mastery of cloud computing paradigms, service models (IaaS, PaaS, SaaS), cloud architecture, and security pipelines.',
      icon: <Cloud className="w-4 h-4 text-sky-400" />,
      skills: ['Cloud Architecture', 'IaaS / PaaS', 'Cloud Security', 'Deployment'],
    },
  ];

  const getCertIcon = (id: string) => {
    switch (id) {
      case 'ibm-data-viz':
        return <BarChart3 className="w-4 h-4 mr-2 text-blue-400 shrink-0 inline" />;
      case 'ibm-cloud-fundamentals':
        return <Cloud className="w-4 h-4 mr-2 text-sky-400 shrink-0 inline" />;
      case 'techno-billion-internship':
        return <Rocket className="w-4 h-4 mr-2 text-rose-400 shrink-0 inline" />;
      default:
        return <Award className="w-4 h-4 mr-2 text-emerald-400 shrink-0 inline" />;
    }
  };

  const getIssuerBadge = (id: string) => {
    if (id === 'techno-billion-internship') {
      return (
        <div className="w-8 h-8 rounded-xl bg-red-950/90 border border-red-800/80 flex items-center justify-center text-red-400 font-black text-[11px] font-mono shadow-md shrink-0">
          TBA
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-xl bg-blue-950/90 border border-blue-800/80 flex items-center justify-center text-blue-400 font-black text-xs font-mono shadow-md shrink-0">
        IBM
      </div>
    );
  };

  return (
    <section id="education" className="py-16 sm:py-24 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// ACADEMIC & PROFESSIONAL CREDENTIALS</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
              Education & Honors.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              Academic degree at Techno India University paired with verified IBM credentials and industry internship experience.
            </p>
          </div>

          {/* View Mode Toggle (Badges | Timeline) */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-zinc-800/90 shadow-2xl self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`relative px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-sans font-semibold transition-colors flex items-center space-x-1.5 ${
                viewMode === 'grid' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {viewMode === 'grid' && (
                <motion.div
                  layoutId="activeEducationView"
                  className="absolute inset-0 rounded-lg bg-zinc-800/90 border border-zinc-700/80 shadow-inner"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <LayoutGrid className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Badges</span>
            </button>

            <button
              onClick={() => setViewMode('timeline')}
              className={`relative px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-sans font-semibold transition-colors flex items-center space-x-1.5 ${
                viewMode === 'timeline' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {viewMode === 'timeline' && (
                <motion.div
                  layoutId="activeEducationView"
                  className="absolute inset-0 rounded-lg bg-zinc-800/90 border border-zinc-700/80 shadow-inner"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <GitBranch className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Timeline</span>
            </button>
          </div>
        </div>

        {/* VIEW MODE 1: GRID BADGES VIEW */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {/* Primary Degree Card */}
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

            {/* 3 Credential Badges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {education.certifications.map((cert: any, idx: number) => (
                <SpaceGlassPanel key={cert.id} className="h-full !p-4 sm:!p-5 flex flex-col justify-between group">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5 min-w-0">
                        {getIssuerBadge(cert.id)}
                        <div className="min-w-0">
                          <span className="block text-[10px] sm:text-[11px] font-mono text-zinc-300 uppercase tracking-wider font-semibold truncate">
                            {cert.issuer}
                          </span>
                          <span className="block text-[9px] font-mono text-zinc-500 truncate">
                            {cert.issueDate}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-[10px] font-mono shadow-sm shrink-0">
                        <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{cert.id === 'techno-billion-internship' ? 'Grade A' : 'Verified'}</span>
                      </div>
                    </div>

                    {cert.image && (
                      <div
                        onClick={() => setSelectedCert(cert)}
                        onContextMenu={(e) => e.preventDefault()}
                        className="relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/90 cursor-pointer group/img shadow-inner select-none"
                      >
                        <img
                          src={cert.image}
                          alt={`${cert.title} preview`}
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                          className="w-full h-36 sm:h-40 object-cover object-top filter contrast-105 group-hover/img:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-bold font-sans flex items-center space-x-1.5 shadow-xl">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight font-sans flex items-center">
                        {getCertIcon(cert.id)}
                        <span className="line-clamp-2">{cert.title}</span>
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-3">
                        {cert.description}
                      </p>
                    </div>

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

                  <div className="pt-3.5 mt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold font-sans flex items-center space-x-1.5 transition-colors shadow-md transform-gpu active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>

                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white text-xs font-mono flex items-center space-x-1.5 transition-colors"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>ID Verified</span>
                      </div>
                    )}
                  </div>
                </SpaceGlassPanel>
              ))}
            </div>
          </motion.div>
        )}

        {/* VIEW MODE 2: CHRONOLOGICAL JOURNEY TIMELINE VIEW */}
        {viewMode === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="relative border-l border-zinc-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8"
          >
            {timelineMilestones.map((item, idx) => (
              <div key={item.id} className="relative group">
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-6 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-white group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white group-hover:bg-emerald-400" />
                </div>

                <SpaceGlassPanel className="!p-5 sm:!p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 flex items-center">
                          <Calendar className="w-3 h-3 mr-1 text-zinc-500" />
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-zinc-300">
                        {item.subtitle}
                      </p>

                      <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((skill) => (
                          <span key={skill} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {item.type === 'cert' && item.certData && (
                      <div className="shrink-0 self-start sm:self-center pt-2 sm:pt-0">
                        <button
                          onClick={() => setSelectedCert(item.certData)}
                          className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold flex items-center space-x-1.5 shadow-md active:scale-95 transition-transform"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect</span>
                        </button>
                      </div>
                    )}
                  </div>
                </SpaceGlassPanel>
              </div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Interactive Certificate Lightbox Modal (Protected against downloading) */}
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
                className="pointer-events-auto max-w-3xl w-full max-h-[92vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-3.5 font-sans"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-zinc-800">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-200 text-[10px] font-mono font-bold">
                        {selectedCert.issuer}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 truncate">
                        {selectedCert.code} · Issued {selectedCert.issueDate}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
                      {selectedCert.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close modal"
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Certificate Protected Image Canvas */}
                <div
                  onContextMenu={(e) => e.preventDefault()}
                  className="relative rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-2xl select-none"
                >
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate`}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-auto object-contain max-h-[60vh] mx-auto filter contrast-105 select-none pointer-events-none"
                  />
                  {/* Invisible Overlay to prevent drag/drop or right-click inspect */}
                  <div
                    onContextMenu={(e) => e.preventDefault()}
                    className="absolute inset-0 z-10 select-none"
                  />
                </div>

                {/* Modal Footer: Verification Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono">
                    <BadgeCheck className="w-4 h-4 text-emerald-400" />
                    <span>
                      {selectedCert.certificateId
                        ? `Certificate ID: ${selectedCert.certificateId}`
                        : 'Official Verified Credential · IBM Developer Skills Network'}
                    </span>
                  </div>

                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-sans font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-lg"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-950" />
                      <span>Verify on Cognitive Class</span>
                      <ExternalLink className="w-3 h-3 text-zinc-600" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
