import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CodeMatrixScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040406, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 4D Hypercube (Tesseract) Wireframe Geometry Setup
    // 16 vertices of a 4D unit hypercube (-1, 1)^4
    const vertices4D: number[][] = [];
    for (let i = 0; i < 16; i++) {
      vertices4D.push([
        i & 1 ? 25 : -25,
        i & 2 ? 25 : -25,
        i & 4 ? 25 : -25,
        i & 8 ? 25 : -25,
      ]);
    }

    // 32 Edges connecting vertices differing by 1 coordinate bit
    const edges4D: [number, number][] = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diff = 0;
        for (let k = 0; k < 4; k++) {
          if (((i >> k) & 1) !== ((j >> k) & 1)) diff++;
        }
        if (diff === 1) edges4D.push([i, j]);
      }
    }

    const tesseractGroup = new THREE.Group();
    tesseractGroup.position.set(0, 0, -180);

    // 3D Line Segments for 4D Tesseract Edges
    const lineMat = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.8 });
    const lineGeo = new THREE.BufferGeometry();
    const linePos = new Float32Array(edges4D.length * 2 * 3);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));

    const tesseractLines = new THREE.LineSegments(lineGeo, lineMat);
    tesseractGroup.add(tesseractLines);

    // 3D Spheres for 4D Tesseract Vertices
    const vertexMeshes: THREE.Mesh[] = [];
    const vertGeo = new THREE.SphereGeometry(1.8, 12, 12);
    const vertMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });

    for (let i = 0; i < 16; i++) {
      const mesh = new THREE.Mesh(vertGeo, vertMat);
      tesseractGroup.add(mesh);
      vertexMeshes.push(mesh);
    }

    scene.add(tesseractGroup);

    // 3. Cyberpunk Developer Grid Floor
    const gridHelper = new THREE.GridHelper(1200, 90, 0x10b981, 0x1f2937);
    gridHelper.position.y = -65;
    gridHelper.position.z = -350;
    scene.add(gridHelper);

    // 4. Matrix Binary Data Streams (8,000 Particles)
    const particleCount = 8000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const devColors = [
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0xffffff), // Silver
    ];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 900;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 900;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1400 - 300;

      const color = devColors[Math.floor(Math.random() * devColors.length)];
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const matrixParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(matrixParticles);

    // 5. GSAP ScrollTrigger Camera Journey Controller
    const cameraTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    });

    cameraTimeline
      .to(camera.position, { z: -250, y: -5, duration: 2, ease: 'power2.inOut' }, 0)
      .to(camera.position, { z: -500, x: 20, duration: 2, ease: 'power2.inOut' }, 2)
      .to(camera.position, { z: -800, x: -20, duration: 2, ease: 'power2.inOut' }, 4)
      .to(camera.position, { z: -1100, x: 0, duration: 2, ease: 'power2.inOut' }, 6);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0006;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. 4D Rotation Variables & Render Loop
    let angleXW = 0;
    let angleYW = 0;
    let animationFrameId: number;

    const animate = () => {
      angleXW += 0.008;
      angleYW += 0.006;

      const cosXW = Math.cos(angleXW);
      const sinXW = Math.sin(angleXW);
      const cosYW = Math.cos(angleYW);
      const sinYW = Math.sin(angleYW);

      // Rotate 4D Vertices in XW and YW Planes
      const projected3D: [number, number, number][] = [];

      for (let i = 0; i < 16; i++) {
        let [x, y, z, w] = vertices4D[i];

        // XW Rotation
        let x1 = x * cosXW - w * sinXW;
        let w1 = w * cosXW + x * sinXW;

        // YW Rotation
        let y1 = y * cosYW - w1 * sinYW;
        let w2 = w1 * cosYW + y * sinYW;

        // 4D -> 3D Perspective Projection
        const distance4D = 70;
        const scale = distance4D / (distance4D - w2);

        const px = x1 * scale;
        const py = y1 * scale;
        const pz = z * scale;

        projected3D.push([px, py, pz]);
        vertexMeshes[i].position.set(px, py, pz);
      }

      // Update 4D Tesseract Edge Lines
      const posAttr = lineGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < edges4D.length; i++) {
        const [u, v] = edges4D[i];
        const p1 = projected3D[u];
        const p2 = projected3D[v];

        posArray[i * 6] = p1[0];
        posArray[i * 6 + 1] = p1[1];
        posArray[i * 6 + 2] = p1[2];

        posArray[i * 6 + 3] = p2[0];
        posArray[i * 6 + 4] = p2[1];
        posArray[i * 6 + 5] = p2[2];
      }
      posAttr.needsUpdate = true;

      // Rotate 4D group
      tesseractGroup.rotation.y += 0.003;

      // Particle Motion
      matrixParticles.rotation.y += 0.0005;

      // Developer Grid Scroll
      gridHelper.position.z += 0.35;
      if (gridHelper.position.z > -100) gridHelper.position.z = -350;

      // Mouse Parallax
      camera.position.x += (mouseX * 40 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 40 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
