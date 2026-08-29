import React from 'react';

interface SpaceGlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const SpaceGlassPanel: React.FC<SpaceGlassPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative rounded-3xl bg-zinc-950/70 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden group ${className}`}>
      {/* Corner HUD accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40 rounded-tl-xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl-xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40 rounded-br-xl pointer-events-none" />

      {/* Subtle interior glow */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-500/20 transition-all duration-500" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};
