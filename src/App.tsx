import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CodeMatrixScene } from './components/3d/CodeMatrixScene';
import { BigBangIntro } from './components/ui/BigBangIntro';
import { SpaceHUDNav } from './components/ui/SpaceHUDNav';
import { CustomCursor } from './components/ui/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // Initialize Apple-grade Lenis Smooth Momentum Scrolling (Desktop only, 100% native on touch)
  useEffect(() => {
    // Never hijack touch on mobile/tablet — allow native 120Hz compositor scrolling
    const isTouch =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    if (isTouch) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.75, // Snappy & immediate response, zero sluggish input lag
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 0,
      infinite: false,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white font-sans overflow-x-hidden">
      {/* 1. System Boot Preloader */}
      {!introFinished && <BigBangIntro onComplete={() => setIntroFinished(true)} />}

      {/* 2. Deep-Space Galaxy Scene */}
      <CodeMatrixScene />

      {/* 3. Custom Targeting Reticle Cursor */}
      <CustomCursor />

      {/* 4. Navigation */}
      <SpaceHUDNav />

      {/* 5. Portfolio Sections */}
      <main className="relative z-10">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — About Me */}
        <About />

        {/* 03 — Education (Placed directly after About Me) */}
        <Education />

        {/* 04 — Skills */}
        <Skills />

        {/* 05 — Projects */}
        <Projects />

        {/* 06 — Contact */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default App;
