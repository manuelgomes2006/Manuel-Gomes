import React, { useEffect, useRef, useState } from 'react';
import galaxyBg from '../../assets/images/cinematic-galaxy-bg.jpg';

export const CodeMatrixScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1.05 });

  // Mouse Parallax & Scroll Motion Engine
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) * -0.035;
      targetY = (e.clientY - window.innerHeight / 2) * -0.035;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * -0.08;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animId: number;
    let time = 0;

    const animateSpace = () => {
      time += 0.005;

      // Smooth interpolation for mouse parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Slow cosmic breathing float
      const breathScale = 1.06 + Math.sin(time) * 0.025;
      const breathRotate = Math.sin(time * 0.5) * 0.8;

      setTransform({
        x: mouseX,
        y: mouseY + scrollY,
        scale: breathScale,
      });

      animId = requestAnimationFrame(animateSpace);
    };

    animateSpace();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Micro-Dust Particles Canvas
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

    const starCount = 180;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.15 - Math.random() * 0.35,
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

      // Render drifting stars & cosmic particles
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

      // Interactive mouse ambient light spotlight
      if (mouseX > 0 && mouseY > 0) {
        const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400);
        mouseGrad.addColorStop(0, 'rgba(168, 85, 247, 0.07)');
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
      {/* Moving 3D Deep-Space Galaxy Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 filter contrast-110 saturate-110 transition-transform duration-300 ease-out transform-gpu"
        style={{
          backgroundImage: `url(${galaxyBg})`,
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
        }}
      />

      {/* Dark Vignette Overlay for Typography Legibility */}
      <div className="absolute inset-0 bg-radial-vignette opacity-65 pointer-events-none" />

      {/* Interactive Drifting Micro-Dust Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
    </div>
  );
};
