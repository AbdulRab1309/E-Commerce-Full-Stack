"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorDot() {
  const [target, setTarget] = useState({ x: -100, y: -100 });
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setTarget({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((current) => {
        const dx = target.x - current.x;
        const dy = target.y - current.y;
        return {
          x: current.x + dx * 0.09,
          y: current.y + dy * 0.09,
        };
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          width: 12,
          height: 12,
          borderRadius: "50%",
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
          className="absolute inset-0 border border-red-500/40 opacity-80"
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
          }}
          className="relative bg-red-500 shadow-[0_0_0_10px_rgba(239,68,68,0.15)]"
        />
      </div>
    </div>
  );
}
