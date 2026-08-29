import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface BigBangIntroProps {
  onComplete: () => void;
}

export const BigBangIntro: React.FC<BigBangIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'drafting' | 'gathering' | 'exploded' | 'revealed' | 'done'>('initial');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('drafting'), 400);
    const timer2 = setTimeout(() => setPhase('gathering'), 2500);
    const timer3 = setTimeout(() => setPhase('exploded'), 4200);
    const timer4 = setTimeout(() => setPhase('revealed'), 5400);
    const timer5 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 7400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  // Ambient Atomic Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const atoms = Array.from({ length: 35 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: 0.015 + Math.random() * 0.03,
      radiusX: 100 + Math.random() * 160,
      radiusY: 40 + Math.random() * 90,
      rotation: Math.random() * Math.PI,
      size: 1.5 + Math.random() * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      atoms.forEach((atom) => {
        atom.angle += atom.speed;
        const cosR = Math.cos(atom.rotation);
        const sinR = Math.sin(atom.rotation);
        const rawX = Math.cos(atom.angle) * atom.radiusX;
        const rawY = Math.sin(atom.angle) * atom.radiusY;
        const x = cx + (rawX * cosR - rawY * sinR);
        const y = cy + (rawX * sinR + rawY * cosR);

        ctx.beginPath();
        ctx.arc(x, y, atom.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleSkip = () => {
    setPhase('done');
    onComplete();
  };

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 bg-[#020203] flex flex-col items-center justify-center overflow-hidden select-none font-mono"
      >
        {/* Background Orbiting Atoms Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40" />

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 flex items-center space-x-1.5 px-4 py-2 rounded-full bg-zinc-950/90 border border-white/20 text-[10px] font-mono text-zinc-300 hover:text-white hover:border-white transition-all duration-300 shadow-2xl"
        >
          <span>SKIP INTRO</span>
          <Play className="w-3 h-3 ml-1 fill-current" />
        </button>

        {/* Phase 1 & 2: Architectural Blueprint Skeleton Letter 'M' */}
        {(phase === 'drafting' || phase === 'gathering') && (
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
            
            {/* Architectural Blueprint Vector Stage */}
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">
              
              <svg viewBox="0 0 400 400" className="w-full h-full">
                
                {/* 1. Concentric Drafting Guide Circles */}
                <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="2 4" />

                {/* 2. Construction Baseline Lines */}
                <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="310" x2="400" y2="310" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* 3. 45° Perspective Intersection Guidelines */}
                <line x1="0" y1="0" x2="400" y2="400" stroke="rgba(255, 255, 255, 0.09)" strokeWidth="0.8" />
                <line x1="400" y1="0" x2="0" y2="400" stroke="rgba(255, 255, 255, 0.09)" strokeWidth="0.8" />
                <line x1="60" y1="0" x2="60" y2="400" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />
                <line x1="340" y1="0" x2="340" y2="400" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />

                {/* 4. Outer Geometric Contour Path of Letter 'M' */}
                <motion.path
                  d="M 60 310 L 60 90 L 200 230 L 340 90 L 340 310"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 5. Inner Parallel Offset Blueprint Path of Letter 'M' */}
                <motion.path
                  d="M 90 310 L 90 145 L 200 260 L 310 145 L 310 310"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.85)"
                  strokeWidth="1.8"
                  strokeDasharray="6 3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 6. Structural Vertex Measurement Nodes & Crosshairs */}
                {[
                  [60, 90], [200, 230], [340, 90],
                  [60, 310], [340, 310], [90, 145],
                  [310, 145], [200, 260], [90, 310], [310, 310]
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="3" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
                    <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                    <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                  </g>
                ))}

              </svg>
            </div>

            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
              <span>DRAFTING SKELETON 'M' ARCHITECTURE</span>
            </p>
          </div>
        )}

        {/* Phase 3: BIG BANG EXPLOSION */}
        {phase === 'exploded' && (
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 9, opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute w-64 h-64 rounded-full border-2 border-white bg-gradient-to-r from-white/40 via-zinc-400/30 to-violet-500/40 blur-2xl pointer-events-none"
            />
          </div>
        )}

        {/* Phase 4: MANUEL GOMES Reveal */}
        {phase === 'revealed' && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-4 max-w-xl px-6 relative z-10"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-white/20 text-[10px] font-mono text-zinc-300 shadow-xl">
              <span>SYSTEM ARCHITECTURE READY</span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white uppercase font-sans">
              MANUEL GOMES
            </h1>

            <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
              AI DEVELOPER • CREATIVE TECHNOLOGIST • BUILDER
            </p>
          </motion.div>
        )}

        {/* Bottom Progress Terminal Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 space-y-2 text-center z-10">
          <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 7.2, ease: 'linear' }}
              className="h-full bg-white"
            />
          </div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
            BLUEPRINT 'M' DRAFTING COMPLETE
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
