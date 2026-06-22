"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

/**
 * Full-bleed 3D video feature block for the Home page.
 * Sits between the brand statement and the product grid.
 * Falls back to a poster + caption if no video file is present.
 */
export default function ThreeDFeature() {
  const [videoAvailable, setVideoAvailable] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const VIDEO_SRC = "/videos/arduino-uno-q.mp4";
  const POSTER = "/images/products/arduino-uno-q-3d.svg";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoAvailable(false));
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(VIDEO_SRC, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setVideoAvailable(res.ok);
      })
      .catch(() => {
        if (!cancelled) setVideoAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, [VIDEO_SRC]);

  return (
    <section className="border-b-2 border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex items-end justify-between border-b-2 border-border">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
          Featured.
          <br />
          3D
          <br />
          Model.
        </h2>
        <p className="hidden sm:block text-xs font-bold uppercase tracking-widest opacity-60 max-w-xs text-right">
          Inspect the new Arduino UNO Q from every angle before you buy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Video / poster */}
        <div className="lg:border-r-2 border-border">
          <div className="relative w-full aspect-square border-2 border-border bg-muted overflow-hidden">
            {videoAvailable ? (
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={POSTER}
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
                  src={POSTER}
                  alt="Arduino UNO Q — interactive 3D model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-background/60">
                  <span className="text-6xl mb-4">3D</span>
                  <p className="text-sm font-black uppercase tracking-widest">
                    Video Placeholder
                  </p>
                  <p className="text-xs opacity-60 mt-2 max-w-md">
                    Drop your 3D video at <code className="font-mono">/public{VIDEO_SRC}</code> to enable the interactive viewer.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Copy + CTA */}
        <div className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col justify-center gap-8">
          <p className="text-xs font-black uppercase tracking-widest opacity-60">
            Product · 01
          </p>
          <h3 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Arduino
            <br />
            UNO Q.
          </h3>
          <p className="text-lg leading-relaxed max-w-md">
            The classic UNO footprint, rebuilt for today&apos;s makers. 32-bit
            Renesas RA4M1 MCU with a dedicated ESP32-S3 wireless coprocessor,
            USB-C, native BLE, and a 3D-rotatable model so you can inspect the
            board before it ships.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/product/arduino-uno-q">
              <Button size="lg">View Product →</Button>
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-y-3 gap-x-6 max-w-md pt-4 border-t-2 border-border">
            <dt className="text-xs font-black uppercase tracking-widest opacity-60">
              MCU
            </dt>
            <dd className="text-sm font-black">Renesas RA4M1 · 48MHz</dd>
            <dt className="text-xs font-black uppercase tracking-widest opacity-60">
              Wireless
            </dt>
            <dd className="text-sm font-black">ESP32-S3 · Wi-Fi 4 + BT 5</dd>
            <dt className="text-xs font-black uppercase tracking-widest opacity-60">
              Form Factor
            </dt>
            <dd className="text-sm font-black">Standard UNO 68.6 × 53.4mm</dd>
            <dt className="text-xs font-black uppercase tracking-widest opacity-60">
              Price
            </dt>
            <dd className="text-sm font-black tabular-nums">$27.50</dd>
          </dl>
        </div>
      </div>

    </section>
  );
}
