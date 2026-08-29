import React, { useEffect, useRef } from 'react';

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

    // 4 Floating Soft Ambient Glow Orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.4, vy: 0.3, radius: 350, color: 'rgba(139, 92, 246, 0.18)' }, // Violet
      { x: width * 0.8, y: height * 0.7, vx: -0.3, vy: -0.4, radius: 400, color: 'rgba(6, 182, 212, 0.15)' }, // Cyan
      { x: width * 0.5, y: height * 0.5, vx: 0.2, vy: -0.2, radius: 450, color: 'rgba(59, 130, 246, 0.14)' }, // Blue
      { x: width * 0.3, y: height * 0.8, vx: -0.2, vy: 0.3, radius: 380, color: 'rgba(16, 185, 129, 0.12)' }, // Emerald
    ];

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.fillStyle = '#030305';
      ctx.fillRect(0, 0, width, height);

      // Move & render floating ambient glow orbs
      orbs.forEach((orb, i) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        // Subtle mouse pull on nearest orb
        if (i === 0) {
          orb.x += (mouseX - orb.x) * 0.005;
          orb.y += (mouseY - orb.y) * 0.005;
        }

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(3, 3, 5, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Mouse Spotlight Glow Layer
      const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      mouseGrad.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
      mouseGrad.addColorStop(1, 'rgba(3, 3, 5, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
