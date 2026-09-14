import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

interface BigBangIntroProps {
  onComplete: () => void;
}

export const BigBangIntro: React.FC<BigBangIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'drafting' | 'revealed' | 'exiting'>('drafting');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Apple-Keynote style snappy choreography: total 2.4s duration
  useEffect(() => {
    // 0.0s - 1.1s: Precision vector blueprint drafting of monogram 'M'
    // 1.1s - 2.2s: Luminous Apple-grade typography & status reveal
    const timerReveal = setTimeout(() => {
      setPhase('revealed');
    }, 1100);

    // 2.2s: Begin cinematic blur & dissolve exit
    const timerExit = setTimeout(() => {
      setPhase('exiting');
    }, 2300);

    // 2.7s: Complete handoff to main app
    const timerDone = setTimeout(() => {
      onComplete();
    }, 2750);

    return () => {
      clearTimeout(timerReveal);
      clearTimeout(timerExit);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  // Ambient Star Dust & High-FPS Particle Canvas (Retina / DPR aware)
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

    // Subtle Apple-style ambient dust motes
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
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

  const handleImmediateSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhase('exiting');
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <motion.div
      onClick={() => {
        if (phase !== 'exiting') {
          setPhase('exiting');
          setTimeout(() => onComplete(), 300);
        }
      }}
      animate={{
        opacity: phase === 'exiting' ? 0 : 1,
        scale: phase === 'exiting' ? 1.03 : 1,
        filter: phase === 'exiting' ? 'blur(14px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-between p-6 sm:p-10 select-none cursor-pointer overflow-hidden"
    >
      {/* Dynamic Background Ambient Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-50" />

      {/* Subtle Radial Glow in Center */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-tr from-white/[0.04] via-zinc-400/[0.02] to-emerald-500/[0.03] blur-3xl" />
      </div>

      {/* Top Header Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase">
            MG.OS // v2.6.4
          </span>
        </div>

        {/* Skip Pill Button */}
        <button
          onClick={handleImmediateSkip}
          className="flex items-center space-x-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-[10px] sm:text-xs font-mono text-zinc-200 transition-all duration-200 backdrop-blur-md shadow-lg"
        >
          <span>Skip</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Centerpiece: Apple Silicon-Style Monogram Blueprint & Typographic Reveal */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-lg text-center px-4">
        
        {/* Monogram Vector Stage (Fully responsive for mobile 320px+ up to 4K) */}
        <div className="relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center mb-6 sm:mb-8">
          <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
            
            {/* 1. Concentric Apple Calibration Circles */}
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              strokeDasharray="2 3"
            />

            {/* 2. Construction Grid Alignment Rays */}
            <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.8" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.8" />
            <line x1="60" y1="0" x2="60" y2="400" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.6" strokeDasharray="3 3" />
            <line x1="340" y1="0" x2="340" y2="400" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.6" strokeDasharray="3 3" />

            {/* 3. Outer Geometric Contour Path of Letter 'M' */}
            <motion.path
              d="M 60 310 L 60 90 L 200 230 L 340 90 L 340 310"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* 4. Inner Parallel Blueprint Path of Letter 'M' */}
            <motion.path
              d="M 90 310 L 90 145 L 200 260 L 310 145 L 310 310"
              fill="none"
              stroke="rgba(255, 255, 255, 0.75)"
              strokeWidth="2"
              strokeDasharray="5 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* 5. Structural Geometric Calibration Nodes */}
            {[
              [60, 90], [200, 230], [340, 90],
              [60, 310], [340, 310], [90, 145],
              [310, 145], [200, 260]
            ].map(([cx, cy], i) => (
              <motion.g
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.04 }}
              >
                <circle cx={cx} cy={cy} r="3" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
                <line x1={cx - 6} y1={cy} x2={cx + 6} y2={cy} stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
                <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 6} stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
              </motion.g>
            ))}

            {/* Glow Bloom Filter */}
            {phase === 'revealed' && (
              <motion.path
                d="M 60 310 L 60 90 L 200 230 L 340 90 L 340 310"
                fill="none"
                stroke="#ffffff"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0.2] }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="blur-md pointer-events-none"
              />
            )}
          </svg>
        </div>

        {/* Apple-Grade Identity & Typography Block */}
        <div className="space-y-2 sm:space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-[10px] sm:text-xs font-mono text-zinc-300 backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>
              {phase === 'revealed' ? 'SYSTEM ONLINE · INERTIAL FLOW' : 'INITIALIZING ARCHITECTURE'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans leading-none"
          >
            MANUEL GOMES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-[10px] sm:text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-medium"
          >
            AI & Full-Stack Engineer • Creative Technologist
          </motion.p>
        </div>
      </div>

      {/* Bottom Progress Bar & Tap Hint */}
      <div className="w-full max-w-xs space-y-2 text-center relative z-10 pb-2">
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/10">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-full bg-gradient-to-r from-white/70 via-white to-emerald-400"
          />
        </div>
        <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center justify-center space-x-1.5">
          <span>Tap anywhere to enter</span>
          <span>·</span>
          <span>Apple-Flow Enabled</span>
        </p>
      </div>
    </motion.div>
  );
};
