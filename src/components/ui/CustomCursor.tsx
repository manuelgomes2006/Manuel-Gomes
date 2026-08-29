import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Central Targeting Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white transition-transform duration-100 ease-out transform-gpu hidden md:block"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0) scale(${isClickable ? 1.8 : 1})`,
        }}
      />

      {/* Futuristic Target Ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border transition-all duration-300 ease-out transform-gpu hidden md:block ${
          isClickable ? 'border-violet-400 bg-violet-500/10 scale-125' : 'border-white/30'
        }`}
        style={{
          width: '36px',
          height: '36px',
          transform: `translate3d(${pos.x - 18}px, ${pos.y - 18}px, 0)`,
        }}
      />
    </>
  );
};
