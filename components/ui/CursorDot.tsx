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
    <svg
      style={{
        position: "fixed",
        width: "16px",
        height: "16px",
        pointerEvents: "none",
        zIndex: 9999,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        overflow: "visible",
      }}
      viewBox="0 0 16 16"
    >
      <circle
        cx="8"
        cy="8"
        r="8"
        fill="#ef4444"
        style={{
          filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 1))",
        }}
      />
    </svg>
  );
}
