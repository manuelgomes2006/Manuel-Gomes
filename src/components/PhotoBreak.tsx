import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_DATA } from '../data/content';

export const PhotoBreak: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={containerRef} className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden border-y border-zinc-900 flex items-center justify-center">
      {/* Background Image in Full Natural Color with slow Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img
          src={PERSONAL_DATA.images.break!}
          alt="Manuel Gomes — Visual Break"
          className="w-full h-full object-cover brightness-90 object-top"
        />
      </motion.div>

      {/* Dark Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/40 to-[#09090b] opacity-75" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      {/* Minimal Overlay Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl space-y-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-300 font-semibold"
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
          className="text-xs font-mono text-zinc-300 tracking-widest uppercase"
        >
          The journey is still loading...
        </motion.p>
      </div>
    </section>
  );
};
