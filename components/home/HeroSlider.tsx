"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  slides: Slide[];
}

export default function HeroSlider({ slides }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative w-full border-b-2 border-border">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-muted">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}
        {/* Slide indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-8 h-1 border border-border ${
                  i === index ? "bg-foreground" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Headline + CTA below image, not overlaid */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 grid gap-6 sm:grid-cols-[2fr_1fr] items-end">
        <div>
          <h1 className="text-[12vw] sm:text-[8vw] lg:text-[7rem] leading-[0.9] font-black uppercase tracking-tighter">
            Built.
            <br />
            Shipped.
            <br />
            Open Source.
          </h1>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-4">
          <p className="text-sm sm:text-base max-w-md sm:text-right font-medium">
            A curated drop of embedded electronics. Microcontrollers, sensors, and
            the boards that build the things you actually want to build.
          </p>
          <Link href="/shop">
            <Button size="lg">Shop Now →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
