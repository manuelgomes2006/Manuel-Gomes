import React, { useState } from 'react';
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

  return (
    <div className="relative min-h-screen bg-[#050508] text-zinc-100 selection:bg-emerald-500 selection:text-black font-sans overflow-x-hidden">
      {/* 1. Software Developer System Boot Preloader */}
      {!introFinished && <BigBangIntro onComplete={() => setIntroFinished(true)} />}

      {/* 2. 3D WebGL Code Matrix & Cyberpunk Tech Grid Scene */}
      <CodeMatrixScene />

      {/* 3. Custom Targeting Reticle Cursor */}
      <CustomCursor />

      {/* 4. Software Developer Terminal HUD Navigation */}
      <SpaceHUDNav />

      {/* 5. Developer Portfolio Sections */}
      <main className="relative z-10">
        {/* 01 — Hero: Software System Entry */}
        <Hero />

        {/* 02 — About */}
        <About />

        {/* 03 — Skills */}
        <Skills />

        {/* 04 — Projects */}
        <Projects />

        {/* 05 — Education */}
        <Education />

        {/* 06 — Contact */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default App;
