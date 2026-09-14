import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Terminal, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Intelligent Systems': return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Frontend Engineering': return <Code className="w-4 h-4 text-blue-400" />;
      case 'Backend & Systems': return <Terminal className="w-4 h-4 text-violet-400" />;
      case 'Tools & DevOps': return <Wrench className="w-4 h-4 text-zinc-300" />;
      default: return <Code className="w-4 h-4 text-zinc-300" />;
    }
  };

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const card = scrollRef.current.firstElementChild as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth + 14;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(Math.max(index, 0), PERSONAL_DATA.skills.length - 1));
      }
    }
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = card ? card.offsetWidth + 14 : 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild as HTMLElement;
      const scrollAmount = card ? card.offsetWidth + 14 : 300;
      scrollRef.current.scrollTo({
        left: index * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-20 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Mobile Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">// TECHNICAL ARCHITECTURE</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
              Core Competencies.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              Frameworks, programming languages, and intelligent systems utilized for building production software.
            </p>
          </div>

          {/* Mobile Controls & Indicator (Visible on mobile, hidden on tablet/desktop) */}
          <div className="flex sm:hidden items-center justify-between pt-1">
            <div className="flex items-center space-x-1.5">
              {PERSONAL_DATA.skills.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to skill category ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-5 bg-emerald-400' : 'w-1.5 bg-zinc-700'
                  }`}
                />
              ))}
              <span className="text-[10px] font-mono text-zinc-400 ml-1.5">Swipe to explore →</span>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous category"
                className={`p-1.5 rounded-xl border transition-all ${
                  canScrollLeft
                    ? 'bg-zinc-900 border-zinc-800 text-white active:scale-95'
                    : 'bg-zinc-950/60 border-zinc-900 text-zinc-600'
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next category"
                className={`p-1.5 rounded-xl border transition-all ${
                  canScrollRight
                    ? 'bg-zinc-900 border-zinc-800 text-white active:scale-95'
                    : 'bg-zinc-950/60 border-zinc-900 text-zinc-600'
                }`}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Categorized Space Glass Cards: Horizontal Swipe on Mobile, Grid on Tablet/Desktop */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          data-lenis-prevent
          className="flex sm:grid overflow-x-auto sm:overflow-visible gap-3.5 sm:gap-6 pb-2 sm:pb-0 snap-x snap-mandatory no-scrollbar sm:grid-cols-2 lg:grid-cols-4"
        >
          {PERSONAL_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="w-[82vw] sm:w-auto shrink-0 snap-start flex flex-col"
            >
              <SpaceGlassPanel className="h-full !p-4 sm:!p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-white/10">
                    <div className="flex items-center space-x-2 sm:space-x-2.5">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-zinc-900 border border-zinc-800 shadow-md">
                        {getCategoryIcon(skillGroup.category)}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight font-sans">
                        {skillGroup.category}
                      </h3>
                    </div>
                  </div>

                  {skillGroup.badge && (
                    <div className="mt-2 sm:mt-2.5">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {skillGroup.badge}
                      </span>
                    </div>
                  )}

                  <div className="pt-2.5 sm:pt-3 flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-zinc-950/90 border border-zinc-800/90 text-[11px] sm:text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SpaceGlassPanel>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
