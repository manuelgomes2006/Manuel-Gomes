import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';

interface BigBangIntroProps {
  onComplete: () => void;
}

export const BigBangIntro: React.FC<BigBangIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'glowing' | 'gathering' | 'exploded' | 'revealed' | 'done'>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('glowing'), 600);
    const timer2 = setTimeout(() => setPhase('gathering'), 2000);
    const timer3 = setTimeout(() => setPhase('exploded'), 3800);
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

  const handleSkip = () => {
    setPhase('done');
    onComplete();
  };

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center overflow-hidden select-none"
      >
        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 flex items-center space-x-1.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
        >
          <span>SKIP INTRO</span>
          <Play className="w-3 h-3 ml-1 fill-current" />
        </button>

        {/* Phase 1 & 2: Central Glowing "M" */}
        {(phase === 'glowing' || phase === 'gathering') && (
          <div className="relative flex items-center justify-center">
            {/* Energy gathering ring */}
            {phase === 'gathering' && (
              <motion.div
                initial={{ scale: 3, opacity: 0 }}
                animate={{ scale: 0.1, opacity: 1 }}
                transition={{ duration: 1.8, ease: 'easeIn' }}
                className="absolute w-72 h-72 rounded-full border border-violet-500/50 bg-violet-500/10 blur-md pointer-events-none"
              />
            )}

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: phase === 'gathering' ? 1.4 : 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative text-7xl sm:text-9xl font-black text-white tracking-tighter uppercase font-sans drop-shadow-[0_0_35px_rgba(255,255,255,0.8)]"
            >
              M
            </motion.div>
          </div>
        )}

        {/* Phase 3: BIG BANG EXPLOSION */}
        {phase === 'exploded' && (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Shockwave expanding ring */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 8, opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute w-64 h-64 rounded-full border-4 border-white bg-gradient-to-r from-violet-500/30 via-white/40 to-blue-500/30 blur-lg pointer-events-none"
            />
            {/* Secondary flash */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-white/20 blur-3xl pointer-events-none"
            />
          </div>
        )}

        {/* Phase 4: MANUEL GOMES Reveal */}
        {phase === 'revealed' && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center space-y-4 max-w-xl px-6 relative z-10"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>THE UNIVERSE OF MANUEL GOMES</span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white uppercase font-sans">
              MANUEL GOMES
            </h1>

            <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
              AI DEVELOPER • CREATIVE TECHNOLOGIST • BUILDER
            </p>
          </motion.div>
        )}

        {/* Bottom Loading Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 space-y-2 text-center">
          <div className="h-0.5 w-full bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 7, ease: 'linear' }}
              className="h-full bg-white"
            />
          </div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600">
            INITIALIZING 3D GALAXY
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
