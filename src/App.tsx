import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Photography } from './components/Photography';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Stats } from './components/Stats';
import { PhotoBreak } from './components/PhotoBreak';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-200 selection:text-black">
      {/* Subtle Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Photography Visual Journal */}
        <Photography />

        {/* 4. Education */}
        <Education />

        {/* 5. Skills */}
        <Skills />

        {/* 6. Projects */}
        <Projects />

        {/* 7. Services */}
        <Services />

        {/* 8. Process */}
        <Process />

        {/* 9. Currently Learning */}
        <CurrentlyLearning />

        {/* 10. Personal Stats */}
        <Stats />

        {/* 11. Full-Width Personal Photo Break */}
        <PhotoBreak />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}

export default App;
