'use client';

import { useEffect, useRef } from 'react';
import type { WebGLRenderer } from 'three';

export default function ParticleField() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    let disposed = false;
    let raf = 0;
    let renderer: WebGLRenderer | undefined;
    const cleanups: Array<() => void> = [];

    import('three').then((THREE) => {
      if (disposed || !wrap) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, wrap.clientWidth / Math.max(wrap.clientHeight, 1), 0.1, 100);
      camera.position.z = 6;

      const gl = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      gl.setSize(wrap.clientWidth, wrap.clientHeight);
      gl.domElement.style.width = '100%';
      gl.domElement.style.height = '100%';
      wrap.appendChild(gl.domElement);
      renderer = gl;

      const COUNT = 120;
      const positions = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i += 1) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const points = new THREE.Points(
        geo,
        new THREE.PointsMaterial({ color: 0x1a1a1a, size: 0.03, transparent: true, opacity: 0.28 })
      );
      scene.add(points);

      const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.5, 1),
        new THREE.MeshBasicMaterial({ color: 0x1a1a1a, wireframe: true, transparent: true, opacity: 0.07 })
      );
      ico.position.set(2.6, 0.15, -1);
      scene.add(ico);

      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(2.2, 0.004, 8, 80),
        new THREE.MeshBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.08 })
      );
      torus.rotation.x = Math.PI / 3;
      scene.add(torus);

      const mouse = { x: 0, y: 0 };
      const onMove = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', onMove);
      cleanups.push(() => window.removeEventListener('mousemove', onMove));

      const onResize = () => {
        if (!wrap) return;
        camera.aspect = wrap.clientWidth / Math.max(wrap.clientHeight, 1);
        camera.updateProjectionMatrix();
        gl.setSize(wrap.clientWidth, wrap.clientHeight);
      };
      window.addEventListener('resize', onResize);
      cleanups.push(() => window.removeEventListener('resize', onResize));

      const tick = () => {
        if (disposed) return;
        points.rotation.y += 0.0007;
        points.rotation.x += 0.00025;
        ico.rotation.y += 0.0018;
        ico.rotation.x += 0.0009;
        torus.rotation.z += 0.0012;
        camera.position.x += (mouse.x * 0.55 - camera.position.x) * 0.04;
        camera.position.y += (mouse.y * 0.35 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);
        gl.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      tick();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, []);

  return <div ref={wrapRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden />;
}
