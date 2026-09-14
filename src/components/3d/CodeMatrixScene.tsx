import React, { useEffect, useRef } from 'react';
import galaxyBg from '../../assets/images/cinematic-galaxy-bg.jpg';

export const CodeMatrixScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // 120fps Direct DOM Parallax & Butter-Smooth Motion (Zero React Re-renders)
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) * -0.025;
      targetY = (e.clientY - window.innerHeight / 2) * -0.025;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * -0.05;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animId: number;
    let time = 0;

    const animateSpace = () => {
      time += 0.004;

      // Smooth interpolation for mouse parallax
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      const breathScale = 1.04 + Math.sin(time) * 0.015;

      if (layerRef.current) {
        layerRef.current.style.transform = `translate3d(${mouseX.toFixed(2)}px, ${(mouseY + scrollY).toFixed(2)}px, 0) scale(${breathScale.toFixed(4)})`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${(mouseX * -0.5).toFixed(2)}px, ${(mouseY * -0.5).toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(animateSpace);
    };

    animId = requestAnimationFrame(animateSpace);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Ambient Drifting Stardust Canvas (Lightweight & Butter-Smooth)
  useEffect(() => {
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
    window.addEventListener('resize', handleResize, { passive: true });

    const starCount = 80;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.15,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -0.1 - Math.random() * 0.25,
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
      {/* 3D Cosmic Layer with Direct Hardware Transform */}
      <div
        ref={layerRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 filter contrast-125 saturate-120 will-change-transform transform-gpu"
        style={{
          backgroundImage: `url(${galaxyBg})`,
          transform: 'translate3d(0, 0, 0) scale(1.04)',
        }}
      />

      {/* Apple-Style Diffuse Ambient Glow Spheres */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none will-change-transform">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0071e3]/[0.08] via-purple-500/[0.04] to-transparent blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-white/[0.03] to-transparent blur-[120px]" />
      </div>

      {/* Apple Obsidian Contrast Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />

      {/* Lightweight Stardust Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-60" />
    </div>
  );
};
