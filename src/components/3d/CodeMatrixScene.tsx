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
    scene.fog = new THREE.FogExp2(0x020203, 0.0016);

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

    // 2. Akira Studio 4D Hypercube Blueprint Tesseract
    const vertices4D: number[][] = [];
    for (let i = 0; i < 16; i++) {
      vertices4D.push([
        i & 1 ? 26 : -26,
        i & 2 ? 26 : -26,
        i & 4 ? 26 : -26,
        i & 8 ? 26 : -26,
      ]);
    }

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

    // Clean White Blueprint Line Material
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });
    const lineGeo = new THREE.BufferGeometry();
    const linePos = new Float32Array(edges4D.length * 2 * 3);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));

    const tesseractLines = new THREE.LineSegments(lineGeo, lineMat);
    tesseractGroup.add(tesseractLines);

    // Vertex Cross Nodes
    const vertexMeshes: THREE.Mesh[] = [];
    const vertGeo = new THREE.SphereGeometry(1.6, 12, 12);
    const vertMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 16; i++) {
      const mesh = new THREE.Mesh(vertGeo, vertMat);
      tesseractGroup.add(mesh);
      vertexMeshes.push(mesh);
    }

    scene.add(tesseractGroup);

    // 3. Architectural Drafting Grid Floor
    const gridHelper = new THREE.GridHelper(1200, 90, 0xffffff, 0x222226);
    gridHelper.position.y = -65;
    gridHelper.position.z = -350;
    scene.add(gridHelper);

    // 4. Monochrome Blueprint Particles
    const particleCount = 7000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 900;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 900;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1400 - 300;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.5,
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
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

    // 6. 4D Rotation Render Loop
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

      const projected3D: [number, number, number][] = [];

      for (let i = 0; i < 16; i++) {
        let [x, y, z, w] = vertices4D[i];

        let x1 = x * cosXW - w * sinXW;
        let w1 = w * cosXW + x * sinXW;

        let y1 = y * cosYW - w1 * sinYW;
        let w2 = w1 * cosYW + y * sinYW;

        const distance4D = 70;
        const scale = distance4D / (distance4D - w2);

        const px = x1 * scale;
        const py = y1 * scale;
        const pz = z * scale;

        projected3D.push([px, py, pz]);
        vertexMeshes[i].position.set(px, py, pz);
      }

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

      tesseractGroup.rotation.y += 0.003;
      matrixParticles.rotation.y += 0.0004;

      gridHelper.position.z += 0.35;
      if (gridHelper.position.z > -100) gridHelper.position.z = -350;

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
