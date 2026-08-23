import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-200 selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* 6 Core Sections Flow */}
      <main>
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — About + Photo */}
        <About />

        {/* 03 — Education */}
        <Education />

        {/* 04 — Skills */}
        <Skills />

        {/* 05 — Projects */}
        <Projects />

        {/* 06 — Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
