import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { hovering.current = true; };
    const onLeave = () => { hovering.current = false; };

    const bindInteractive = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    bindInteractive();

    const tick = () => {
      if (cursorRef.current) {
        const scale = hovering.current ? 1.5 : 1;
        cursorRef.current.style.transform =
          `translate(${mouse.current.x - 10}px, ${mouse.current.y - 10}px) scale(${scale})`;
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: 'transform', transform: 'translate(-10px, -10px)' }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="10" cy="10" r="8.5" stroke="#22d3ee" strokeWidth="0.6" strokeOpacity="0.4"/>
        {/* Cross lines with gap */}
        <line x1="10" y1="1" x2="10" y2="6.5" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round"/>
        <line x1="10" y1="13.5" x2="10" y2="19" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round"/>
        <line x1="1" y1="10" x2="6.5" y2="10" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round"/>
        <line x1="13.5" y1="10" x2="19" y2="10" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round"/>
        {/* Center dot */}
        <circle cx="10" cy="10" r="1.2" fill="#22d3ee"/>
      </svg>
    </div>
  );
};
