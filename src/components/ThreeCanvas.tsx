import React, { useEffect, useRef } from 'react';

export const ThreeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run if desktop (avoid overhead on small mobile screens)
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Optimized particle nodes
    const numParticles = 28;
    const particles = Array.from({ length: numParticles }, () => ({
      x: (Math.random() - 0.5) * 350,
      y: (Math.random() - 0.5) * 350,
      z: (Math.random() - 0.5) * 350,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      vz: (Math.random() - 0.5) * 0.2,
    }));

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.03;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.03;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      angleX += 0.0012;
      angleY += 0.0016;

      const cosX = Math.cos(angleX + mouseY * 0.01);
      const sinX = Math.sin(angleX + mouseY * 0.01);
      const cosY = Math.cos(angleY + mouseX * 0.01);
      const sinY = Math.sin(angleY + mouseX * 0.01);

      const fov = 320;
      const projected: { px: number; py: number; scale: number; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (Math.abs(p.x) > 180) p.vx *= -1;
        if (Math.abs(p.y) > 180) p.vy *= -1;
        if (Math.abs(p.z) > 180) p.vz *= -1;

        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = fov / (fov + z2 + 350);
        const px = x1 * scale + width / 2;
        const py = y1 * scale + height / 2;
        const alpha = Math.min(0.5, Math.max(0.06, (z2 + 180) / 360));

        projected.push({ px, py, scale, alpha });

        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, 1.8 * scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
        ctx.fill();
      }

      // Fast lightweight connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length - 1; i++) {
        const p1 = projected[i];
        const p2 = projected[i + 1];
        const dx = p1.px - p2.px;
        const dy = p1.py - p2.py;
        const distSq = dx * dx + dy * dy;

        if (distSq < 4900) { // dist < 70
          const alpha = (1 - Math.sqrt(distSq) / 70) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause rendering loop when canvas is scrolled off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      } else if (!isVisible && animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    });
    observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 pointer-events-none opacity-25 will-change-transform"
    />
  );
};
