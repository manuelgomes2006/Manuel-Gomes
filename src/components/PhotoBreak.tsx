import React from 'react';
import { motion } from 'framer-motion';

export const PhotoBreak: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 w-full overflow-hidden bg-[#09090b] border-y border-zinc-900 flex items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient background blur elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-zinc-700/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Minimal Overlay Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl space-y-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 font-semibold"
        >
          // MANUEL GOMES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-sans drop-shadow-2xl"
        >
          "Keep building."
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs font-mono text-zinc-400 tracking-widest uppercase"
        >
          The journey is still loading...
        </motion.p>
      </div>
    </section>
  );
};
