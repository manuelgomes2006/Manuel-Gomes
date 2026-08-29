import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const GalaxyScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0012);

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

    // 2. Galaxy Stars Particle System (10,000 Particles)
    const starCount = 12000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorChoices = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xa855f7), // Violet
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0xe2e8f0), // Silver
    ];

    for (let i = 0; i < starCount; i++) {
      // Spiral Galaxy Distribution
      const radius = Math.random() * 450 + 20;
      const spinAngle = radius * 0.008;
      const branchAngle = ((i % 4) * Math.PI * 2) / 4;

      const randomX = (Math.random() - 0.5) * Math.pow(Math.random(), 3) * (450 - radius) * 0.4;
      const randomY = (Math.random() - 0.5) * Math.pow(Math.random(), 3) * (450 - radius) * 0.4;
      const randomZ = (Math.random() - 0.5) * Math.pow(Math.random(), 3) * (450 - radius) * 0.4;

      const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
      const y = (Math.random() - 0.5) * 80 + randomY;
      const z = Math.sin(branchAngle + spinAngle) * radius + randomZ - 200;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 3. Origin Planet (About Section)
    const planetGroup = new THREE.Group();
    planetGroup.position.set(-60, -20, -250);

    const planetGeometry = new THREE.SphereGeometry(22, 48, 48);
    const planetMaterial = new THREE.MeshPhongMaterial({
      color: 0x18181b,
      emissive: 0x27272a,
      specular: 0x52525b,
      shininess: 30,
      wireframe: true,
    });
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetGroup.add(planetMesh);

    // Atmosphere glow ring
    const atmosphereGeometry = new THREE.SphereGeometry(26, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    planetGroup.add(atmosphereMesh);

    scene.add(planetGroup);

    // 4. Skill Constellation Nodes (Skills Section)
    const constellationGroup = new THREE.Group();
    constellationGroup.position.set(50, 0, -500);

    const skillNodes = [
      { name: 'Python', pos: [-30, 20, 0] },
      { name: 'React', pos: [20, 30, -20] },
      { name: 'Gemini AI', pos: [0, 0, 30] },
      { name: 'TypeScript', pos: [40, -10, -10] },
      { name: 'Data Science', pos: [-20, -30, 10] },
      { name: 'Machine Learning', pos: [30, -30, -30] },
      { name: 'Java', pos: [-40, 0, -20] },
      { name: 'SQL', pos: [10, -40, 20] },
      { name: 'Git', pos: [0, 40, -10] },
    ];

    const nodeGeometry = new THREE.SphereGeometry(2.5, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const nodePositions: THREE.Vector3[] = [];

    skillNodes.forEach((node) => {
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      mesh.position.set(node.pos[0], node.pos[1], node.pos[2]);
      constellationGroup.add(mesh);
      nodePositions.push(mesh.position);
    });

    // Connecting Lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePoints: number[] = [];

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 65) {
          linePoints.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.35 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    constellationGroup.add(lines);

    scene.add(constellationGroup);

    // 5. Project Celestial Objects (Projects Section)
    const projectGroup = new THREE.Group();
    projectGroup.position.set(0, 0, -850);

    const proj1Geo = new THREE.TorusGeometry(18, 2, 16, 100);
    const proj1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
    const proj1Mesh = new THREE.Mesh(proj1Geo, proj1Mat);
    proj1Mesh.position.set(-45, 10, 0);
    projectGroup.add(proj1Mesh);

    const proj2Geo = new THREE.IcosahedronGeometry(16, 1);
    const proj2Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true });
    const proj2Mesh = new THREE.Mesh(proj2Geo, proj2Mat);
    proj2Mesh.position.set(45, -10, -50);
    projectGroup.add(proj2Mesh);

    scene.add(projectGroup);

    // 6. Core Sun / Portal Star (Contact Section)
    const sunGroup = new THREE.Group();
    sunGroup.position.set(0, 0, -1350);

    const sunGeo = new THREE.SphereGeometry(45, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunGroup.add(sunMesh);

    const coronaGeo = new THREE.SphereGeometry(55, 32, 32);
    const coronaMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.25, wireframe: true });
    const coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
    sunGroup.add(coronaMesh);

    scene.add(sunGroup);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa855f7, 2, 800);
    pointLight.position.set(0, 0, 100);
    scene.add(pointLight);

    // 8. GSAP ScrollTrigger Camera Journey Controller
    const cameraTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    });

    // Camera travel through space
    cameraTimeline
      .to(camera.position, { z: -250, y: -10, duration: 2, ease: 'power2.inOut' }, 0)
      .to(camera.rotation, { y: 0.15, duration: 2 }, 0)

      .to(camera.position, { z: -500, x: 20, y: 0, duration: 2, ease: 'power2.inOut' }, 2)
      .to(camera.rotation, { y: -0.2, duration: 2 }, 2)

      .to(camera.position, { z: -850, x: 0, y: 5, duration: 2, ease: 'power2.inOut' }, 4)
      .to(camera.rotation, { y: 0, duration: 2 }, 4)

      .to(camera.position, { z: -1300, x: 0, y: 0, duration: 2, ease: 'power2.inOut' }, 6)
      .to(camera.rotation, { y: 0, duration: 2 }, 6);

    // Mouse Tracking Parallax Effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0005;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 9. Animation Render Loop
    let animationFrameId: number;

    const animate = () => {
      // Rotation Animations
      starField.rotation.y += 0.0004;
      planetGroup.rotation.y += 0.004;
      planetMesh.rotation.x += 0.002;
      constellationGroup.rotation.y += 0.0015;
      proj1Mesh.rotation.y += 0.006;
      proj1Mesh.rotation.x += 0.004;
      proj2Mesh.rotation.y += 0.005;
      sunMesh.rotation.y += 0.003;
      coronaMesh.rotation.z += 0.002;

      // Smooth Parallax
      camera.position.x += (mouseX * 50 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 50 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 10. Responsive Window Resize Handler
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
