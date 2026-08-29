import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Code2 } from 'lucide-react';

interface BigBangIntroProps {
  onComplete: () => void;
}

export const BigBangIntro: React.FC<BigBangIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'glowing' | 'gathering' | 'exploded' | 'revealed' | 'done'>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('glowing'), 500);
    const timer2 = setTimeout(() => setPhase('gathering'), 1800);
    const timer3 = setTimeout(() => setPhase('exploded'), 3400);
    const timer4 = setTimeout(() => setPhase('revealed'), 4600);
    const timer5 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('done');
    onComplete();
  };

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 bg-[#050508] flex flex-col items-center justify-center overflow-hidden select-none font-mono"
      >
        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 flex items-center space-x-1.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-emerald-400 hover:text-white hover:border-emerald-500 transition-all duration-300"
        >
          <span>SKIP SYSTEM BOOT</span>
          <Play className="w-3 h-3 ml-1 fill-current" />
        </button>

        {/* Phase 1 & 2: Central Code Symbol */}
        {(phase === 'glowing' || phase === 'gathering') && (
          <div className="relative flex flex-col items-center justify-center space-y-4">
            {phase === 'gathering' && (
              <motion.div
                initial={{ scale: 2.5, opacity: 0 }}
                animate={{ scale: 0.2, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeIn' }}
                className="absolute w-64 h-64 rounded-full border border-emerald-500/60 bg-emerald-500/10 blur-md pointer-events-none"
              />
            )}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: phase === 'gathering' ? 1.3 : 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl sm:text-8xl font-black text-emerald-400 font-mono tracking-tighter flex items-center drop-shadow-[0_0_30px_rgba(16,185,129,0.7)]"
            >
              <Code2 className="w-16 h-16 sm:w-24 sm:y-24 mr-2 text-emerald-400" />
              <span>&lt;MG /&gt;</span>
            </motion.div>

            <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase">
              $ ./compile_system_kernel.sh
            </p>
          </div>
        )}

        {/* Phase 3: CODE MATRIX EXPLOSION */}
        {phase === 'exploded' && (
          <div className="relative flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 7, opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-64 h-64 rounded-full border-2 border-emerald-400 bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-violet-500/40 blur-xl pointer-events-none"
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
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>SYSTEM READY • STATUS 200 OK</span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white uppercase font-sans">
              MANUEL GOMES
            </h1>

            <p className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              AI DEVELOPER • FULL-STACK ENGINEER • BUILDER
            </p>
          </motion.div>
        )}

        {/* Bottom Progress Terminal Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 space-y-2 text-center">
          <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 6.5, ease: 'linear' }}
              className="h-full bg-emerald-500"
            />
          </div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
            BOOTING DEVELOPER MATRIX
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
