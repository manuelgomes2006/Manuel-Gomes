import React, { useEffect, useState } from 'react';

export const Spotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
      }}
    />
  );
};
