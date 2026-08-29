import React from 'react';

interface SpaceGlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const SpaceGlassPanel: React.FC<SpaceGlassPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative rounded-3xl bg-[#050508]/90 border border-zinc-800/80 hover:border-emerald-500/60 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] ${className}`}>
      {/* Neon Laser Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500/80 rounded-tl-xl pointer-events-none group-hover:scale-110 transition-transform" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-500/80 rounded-tr-xl pointer-events-none group-hover:scale-110 transition-transform" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-500/80 rounded-bl-xl pointer-events-none group-hover:scale-110 transition-transform" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500/80 rounded-br-xl pointer-events-none group-hover:scale-110 transition-transform" />

      {/* Laser Line Accent Glow on Hover */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
