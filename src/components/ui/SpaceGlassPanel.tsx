import React from 'react';

interface SpaceGlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const SpaceGlassPanel: React.FC<SpaceGlassPanelProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl bg-[#141417]/92 border border-white/[0.08] p-6 sm:p-10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-300 group hover:border-white/[0.16] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.14)] ${className}`}
    >
      {/* Apple Subtle Specular Edge Light Reflection */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
