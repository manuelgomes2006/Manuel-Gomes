import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface BigBangIntroProps {
  onComplete: () => void;
}

export const BigBangIntro: React.FC<BigBangIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'building' | 'gathering' | 'exploded' | 'revealed' | 'done'>('initial');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('building'), 500);
    const timer2 = setTimeout(() => setPhase('gathering'), 2200);
    const timer3 = setTimeout(() => setPhase('exploded'), 4000);
    const timer4 = setTimeout(() => setPhase('revealed'), 5200);
    const timer5 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 7200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  // Orbiting Big Bang Atoms Canvas Effect
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

    // 40 Orbiting Big Bang Atoms
    const atoms = Array.from({ length: 45 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.04,
      radiusX: 80 + Math.random() * 140,
      radiusY: 30 + Math.random() * 80,
      rotation: Math.random() * Math.PI,
      size: 2 + Math.random() * 3,
      color: ['#10b981', '#06b6d4', '#8b5cf6', '#ffffff'][Math.floor(Math.random() * 4)],
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

        // Draw Atomic Orbit Path
        ctx.beginPath();
        ctx.ellipse(cx, cy, atom.radiusX, atom.radiusY, atom.rotation, 0, Math.PI * 2);
        ctx.strokeStyle = `${atom.color}15`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Draw Orbiting Atom Particle
        ctx.beginPath();
        ctx.arc(x, y, atom.size, 0, Math.PI * 2);
        ctx.fillStyle = atom.color;
        ctx.shadowColor = atom.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
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
        className="fixed inset-0 z-50 bg-[#040406] flex flex-col items-center justify-center overflow-hidden select-none font-mono"
      >
        {/* Background Orbiting Atoms Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 flex items-center space-x-1.5 px-4 py-2 rounded-full bg-zinc-950/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 hover:text-white hover:border-emerald-400 transition-all duration-300 shadow-xl"
        >
          <span>SKIP BOOT</span>
          <Play className="w-3 h-3 ml-1 fill-current" />
        </button>

        {/* Phase 1 & 2: Skeleton Letter 'M' Wireframe */}
        {(phase === 'building' || phase === 'gathering') && (
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
            
            {/* SVG Wireframe Skeleton of Letter 'M' */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
              
              {/* Outer Energy Ring */}
              <motion.div
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: phase === 'gathering' ? 0.9 : 1.1, opacity: 0.8 }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute inset-0 rounded-full border border-emerald-500/30 bg-emerald-500/5 blur-md pointer-events-none"
              />

              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]">
                {/* Structural Wireframe Grid Lines */}
                <line x1="20" y1="20" x2="180" y2="180" stroke="#10b981" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                <line x1="180" y1="20" x2="20" y2="180" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

                {/* Outer Structural Skeleton Lines of 'M' */}
                <motion.path
                  d="M 30 170 L 30 30 L 100 120 L 170 30 L 170 170"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />

                {/* Inner Skeleton Cross Lines */}
                <motion.path
                  d="M 45 170 L 45 55 L 100 135 L 155 55 L 155 170"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.3 }}
                />

                {/* Wireframe Node Vertices */}
                {[[30, 30], [100, 120], [170, 30], [30, 170], [170, 170], [100, 135]].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="4" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
                ))}
              </svg>
            </div>

            <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>INITIALIZING M-SKELETON KERNEL</span>
            </p>
          </div>
        )}

        {/* Phase 3: BIG BANG ATOMIC EXPLOSION */}
        {phase === 'exploded' && (
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 9, opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute w-64 h-64 rounded-full border-4 border-emerald-400 bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-violet-500/40 blur-2xl pointer-events-none"
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
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-950/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 shadow-xl">
              <span>SYS::4D_DEVELOPER_MATRIX_ONLINE</span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white uppercase font-sans">
              MANUEL GOMES
            </h1>

            <p className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              AI DEVELOPER • 4D SYSTEM ENGINEER • BUILDER
            </p>
          </motion.div>
        )}

        {/* Bottom Progress Terminal Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 space-y-2 text-center z-10">
          <div className="h-1 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 7, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
            />
          </div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
            SKELETON 'M' BIG BANG SYNTHESIS
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
