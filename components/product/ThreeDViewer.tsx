"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  poster: string;
  videoSrc: string;
  title: string;
}

export default function ThreeDViewer({ poster, videoSrc, title }: Props) {
  const [videoAvailable, setVideoAvailable] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoAvailable(false));
    }
  }, []);

  // Probe if the video file exists
  useEffect(() => {
    let cancelled = false;
    fetch(videoSrc, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setVideoAvailable(res.ok);
      })
      .catch(() => {
        if (!cancelled) setVideoAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, [videoSrc]);

  return (
    <div className="relative w-full aspect-video border-2 border-border bg-muted overflow-hidden">
      {videoAvailable ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="relative w-full h-full bg-muted">
          <Image
            src={poster}
            alt={`${title} 3D model preview`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-background/60">
            <span className="text-6xl mb-4">3D</span>
            <p className="text-sm font-black uppercase tracking-widest">
              Video Placeholder
            </p>
            <p className="text-xs opacity-60 mt-2 max-w-md">
              Drop your 3D video at <code className="font-mono">/public{videoSrc}</code> to enable the interactive viewer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
