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
    scene.fog = new THREE.FogExp2(0x050508, 0.0018);

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

    // 2. 3D Developer Tech Grid Floor
    const gridHelper = new THREE.GridHelper(1000, 80, 0x10b981, 0x1f2937);
    gridHelper.position.y = -60;
    gridHelper.position.z = -300;
    scene.add(gridHelper);

    // 3. Matrix Code Binary Particle Streams (6,000 Nodes)
    const particleCount = 7000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const techColors = [
      new THREE.Color(0x10b981), // Emerald Green
      new THREE.Color(0x06b6d4), // Cyber Cyan
      new THREE.Color(0x8b5cf6), // Glowing Violet
      new THREE.Color(0xf8fafc), // Silver White
    ];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 800;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1200 - 300;

      const color = techColors[Math.floor(Math.random() * techColors.length)];
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

    const codeParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(codeParticles);

    // 4. Floating 3D Code Wireframe Nodes
    const codeGroup = new THREE.Group();

    // Central AI Core Node (Hero)
    const coreGeo = new THREE.IcosahedronGeometry(20, 2);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 0, -200);
    codeGroup.add(coreMesh);

    // Data Structure Cube (About)
    const cubeGeo = new THREE.BoxGeometry(30, 30, 30);
    const cubeMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(-50, -10, -450);
    codeGroup.add(cubeMesh);

    // Algorithm Octahedron (Skills)
    const octGeo = new THREE.OctahedronGeometry(25, 1);
    const octMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(50, 10, -700);
    codeGroup.add(octMesh);

    // Full-Stack Server Torus Node (Projects)
    const torusGeo = new THREE.TorusGeometry(25, 4, 16, 60);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(0, 0, -950);
    codeGroup.add(torusMesh);

    scene.add(codeGroup);

    // 5. GSAP ScrollTrigger Camera Controller
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
      .to(camera.position, { z: -500, x: 15, duration: 2, ease: 'power2.inOut' }, 2)
      .to(camera.position, { z: -750, x: -15, duration: 2, ease: 'power2.inOut' }, 4)
      .to(camera.position, { z: -1000, x: 0, duration: 2, ease: 'power2.inOut' }, 6);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0006;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Animation Render Loop
    let animationFrameId: number;

    const animate = () => {
      codeParticles.rotation.y += 0.0005;
      codeParticles.rotation.x += 0.0002;

      coreMesh.rotation.y += 0.006;
      coreMesh.rotation.x += 0.004;

      cubeMesh.rotation.y += 0.005;
      cubeMesh.rotation.z += 0.003;

      octMesh.rotation.y += 0.007;

      torusMesh.rotation.x += 0.005;
      torusMesh.rotation.y += 0.005;

      gridHelper.position.z += 0.3;
      if (gridHelper.position.z > -100) gridHelper.position.z = -300;

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
