import React, { useState } from 'react';
import { GalaxyScene } from './components/3d/GalaxyScene';
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
    <div className="relative min-h-screen bg-[#000000] text-zinc-100 selection:bg-violet-500 selection:text-white font-sans overflow-x-hidden">
      {/* 1. Cinematic Big Bang Intro Preloader */}
      {!introFinished && <BigBangIntro onComplete={() => setIntroFinished(true)} />}

      {/* 2. 3D WebGL Galaxy Scene & GSAP Camera Controller */}
      <GalaxyScene />

      {/* 3. Custom Futuristic Targeting Reticle Cursor */}
      <CustomCursor />

      {/* 4. Spacecraft HUD Navigation */}
      <SpaceHUDNav />

      {/* 5. 3D Storytelling Sections Journey */}
      <main className="relative z-10">
        {/* 01 — Hero: Galaxy Entry */}
        <Hero />

        {/* 02 — About: Origin Planet */}
        <About />

        {/* 03 — Skills: Tech Constellation 3D Star Map */}
        <Skills />

        {/* 04 — Projects: Project Galaxies */}
        <Projects />

        {/* 05 — Education: Orbital Journey */}
        <Education />

        {/* 06 — Contact: Destination Core Sun */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default App;
