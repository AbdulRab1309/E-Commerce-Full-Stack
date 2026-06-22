"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorDot() {
  const [target, setTarget] = useState({ x: -100, y: -100 });
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const matchMedia = window.matchMedia("(pointer: fine)");
    setEnabled(matchMedia.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setEnabled(event.matches);
    };

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    } else {
      matchMedia.addListener(handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      } else {
        matchMedia.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setTarget({ x: event.clientX, y: event.clientY });
    };

    if (!enabled) return undefined;

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return undefined;

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
  }, [target, enabled]);

  if (!enabled) {
    return null;
  }

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
