'use client';

import { useEffect, useId, useRef } from 'react';

type Pt = { x: number; y: number; t: number };
type Spark = { x: number; y: number; vx: number; vy: number; born: number; life: number };

const TRAIL_MS = 480;

export default function PenCursor() {
  const penRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const uid = useId().replace(/:/g, '');

  useEffect(() => {
    const pen = penRef.current;
    const canvas = canvasRef.current;
    if (!pen || !canvas) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pts: Pt[] = [];
    const sparks: Spark[] = [];
    let raf = 0;

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();

    const move = (e: PointerEvent) => {
      pen.style.opacity = '1';
      pen.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (reduce) return;
      const now = performance.now();
      pts.push({ x: e.clientX, y: e.clientY, t: now });
      if (Math.random() < 0.45) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.6) * 1.2,
          born: now,
          life: 280 + Math.random() * 220,
        });
      }
    };

    const tick = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      while (pts.length && now - pts[0].t > TRAIL_MS) pts.shift();
      for (let i = sparks.length - 1; i >= 0; i--) {
        if (now - sparks[i].born > sparks[i].life) sparks.splice(i, 1);
      }

      if (pts.length > 1) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (let i = 1; i < pts.length; i++) {
          const age = (now - pts[i].t) / TRAIL_MS;
          const a = (1 - age) * (1 - age);
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.18 + a * 0.55})`;
          ctx.shadowColor = 'rgba(167, 139, 250, 0.9)';
          ctx.shadowBlur = 6 * a;
          ctx.lineWidth = 0.7 + a * 1.8;
          ctx.beginPath();
          ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
          ctx.lineTo(pts[i].x, pts[i].y);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }

      for (const s of sparks) {
        const p = (now - s.born) / s.life;
        s.x += s.vx;
        s.y += s.vy;
        const alpha = (1 - p) * 0.9;
        const r = 1.1 + (1 - p) * 1.4;
        ctx.fillStyle = p < 0.4 ? `rgba(237, 233, 254, ${alpha})` : `rgba(167, 139, 250, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('resize', fit);
    if (!reduce) raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('resize', fit);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pen-trail" aria-hidden />
      <div ref={penRef} className="pen-cursor" aria-hidden>
        <svg width="80" height="80" viewBox="0 0 80 80" overflow="visible">
          <defs>
            <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0a0a0a" />
              <stop offset="32%" stopColor="#3d3d3d" />
              <stop offset="62%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <linearGradient id={`${uid}-nib`} x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8a6a12" />
              <stop offset="40%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#f4e4a6" />
            </linearGradient>
            <radialGradient id={`${uid}-ink`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c4b5fd" />
              <stop offset="55%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g transform="rotate(-38) scale(0.42)">
            <ellipse cx="0" cy="-70" rx="6.2" ry="2.4" fill="#c9a227" />
            <rect x="-6" y="-70" width="12" height="38" rx="6" fill={`url(#${uid}-body)`} />
            <rect x="-3.4" y="-66" width="2.1" height="28" rx="1" fill="rgba(255,255,255,0.16)" />
            <path
              d="M6.2 -66.5 C10 -66.5 10.2 -64 10.2 -62 L10.2 -50 C10.2 -47.2 8.4 -46.4 6.2 -47.2"
              fill="none"
              stroke="#c9a227"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
            <rect x="-5.6" y="-33.6" width="11.2" height="2.4" rx="0.4" fill="#e0c35a" />
            <rect x="-5" y="-31.4" width="10" height="14.5" rx="2.2" fill="#242424" />
            <rect x="-5.4" y="-18.2" width="10.8" height="2" rx="0.35" fill="#d4af37" />
            <path d="M-1.5 -16.4 L1.5 -16.4 L0.7 -5 L-0.7 -5 Z" fill="#1a1a1a" />
            <path
              d="M0 0 C1.15 -4.2 3.9 -10.2 3.7 -16.4 L-3.7 -16.4 C-3.9 -10.2 -1.15 -4.2 0 0 Z"
              fill={`url(#${uid}-nib)`}
            />
            <circle cx="0" cy="-11.2" r="1.15" fill="#1a1a1a" />
            <path d="M0 -11.2 L0 0" stroke="#1a1a1a" strokeWidth="0.7" strokeLinecap="round" />
            <path d="M-2.2 -14 L-0.6 -6" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="5.5" fill={`url(#${uid}-ink)`} />
            <circle cx="0" cy="0" r="1.15" fill="#7c3aed" />
          </g>
        </svg>
      </div>
    </>
  );
}
