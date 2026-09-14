import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (typeof window === 'undefined' || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button')
      ) {
        if (!isHovering) {
          isHovering = true;
          if (ringRef.current) {
            ringRef.current.classList.add('cursor-active');
          }
        }
      } else {
        if (isHovering) {
          isHovering = false;
          if (ringRef.current) {
            ringRef.current.classList.remove('cursor-active');
          }
        }
      }
    };

    // Smooth Butter Interpolation (120fps direct GPU transform, zero React state re-renders)
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Apple-Style Minimal Center Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white transition-opacity duration-200 ease-out hidden md:block"
        style={{
          width: '5px',
          height: '5px',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* Apple Dynamic Fluid Magnetic Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-white/30 bg-white/[0.04] backdrop-blur-[1px] transition-[width,height,background-color,border-color] duration-200 ease-out hidden md:block [&.cursor-active]:!w-12 [&.cursor-active]:!h-12 [&.cursor-active]:!bg-white/[0.12] [&.cursor-active]:!border-white/50"
        style={{
          width: '32px',
          height: '32px',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    </>
  );
};
