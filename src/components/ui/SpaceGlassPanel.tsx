import React from 'react';

interface SpaceGlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const SpaceGlassPanel: React.FC<SpaceGlassPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative rounded-3xl bg-zinc-950/80 border border-white/15 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden group ${className}`}>
      {/* Akira Studio Architectural Blueprint Corner Crosshairs (+) */}
      <div className="absolute top-2 left-2 text-[9px] font-mono text-white/40 pointer-events-none">+</div>
      <div className="absolute top-2 right-2 text-[9px] font-mono text-white/40 pointer-events-none">+</div>
      <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/40 pointer-events-none">+</div>
      <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/40 pointer-events-none">+</div>

      {/* Structural Corner Guidelines */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50 pointer-events-none" />

      {/* Subtle Grid Line Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
