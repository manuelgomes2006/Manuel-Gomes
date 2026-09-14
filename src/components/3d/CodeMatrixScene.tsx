import React, { useEffect, useRef } from 'react';
import galaxyBg from '../../assets/images/cinematic-galaxy-bg.jpg';

export const CodeMatrixScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Desktop Mouse Parallax (Zero scroll listeners, zero layout thrashing)
  useEffect(() => {
    if (typeof window === 'undefined' || 'ontouchstart' in window || window.innerWidth < 768) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) * -0.03;
      targetY = (e.clientY - window.innerHeight / 2) * -0.03;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX.toFixed(1)}px, ${mouseY.toFixed(1)}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Ambient Stardust Canvas (Paused on Mobile to maximize 120Hz scroll framerate)
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const starCount = 45;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.4 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.1,
      vy: -0.08 - Math.random() * 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.y < 0) star.y = height;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      {/* 1. Static Cached Cosmic Layer (No repaint during scroll) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 filter contrast-125 saturate-110"
        style={{
          backgroundImage: `url(${galaxyBg})`,
        }}
      />

      {/* 2. Fast GPU Radial Gradients (Replaces expensive blur filters) */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 30%, rgba(0, 113, 227, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* 3. Obsidian Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95 pointer-events-none" />

      {/* 4. Desktop Only Lightweight Stardust */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-50 hidden md:block" />
    </div>
  );
};
