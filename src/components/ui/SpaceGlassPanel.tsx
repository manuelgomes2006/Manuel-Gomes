import React from 'react';

interface SpaceGlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const SpaceGlassPanel: React.FC<SpaceGlassPanelProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl bg-[#161618]/70 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden transition-all duration-300 group hover:border-white/[0.18] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.18)] ${className}`}
    >
      {/* Apple Subtle Specular Edge Light Reflection */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle Ambient Radial Light Bloom on Hover */}
      <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.06] transition-all duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
