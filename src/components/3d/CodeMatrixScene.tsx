import React, { useEffect, useRef } from 'react';
import galaxyBg from '../../assets/images/cinematic-galaxy-bg.jpg';

export const CodeMatrixScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    window.addEventListener('resize', handleResize);

    // Fine floating cosmic dust particles
    const starCount = 140;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating micro-dust stars
      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Soft interactive mouse ambient light spotlight
      if (mouseX > 0 && mouseY > 0) {
        const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 450);
        mouseGrad.addColorStop(0, 'rgba(168, 85, 247, 0.08)');
        mouseGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.03)');
        mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, width, height);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020204]">
      {/* Photographic Cinematic Deep-Space Galaxy Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 filter contrast-110 saturate-110 scale-105 transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url(${galaxyBg})` }}
      />

      {/* Dark Vignette Overlay for High Typography Contrast */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />

      {/* Interactive Micro-Dust Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
    </div>
  );
};
