"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductGallery({ product }: Props) {
  // For each product we show: front, lifestyle, and (if 3D) the 3D poster via a sibling component on the page
  const images = [product.images.front, product.images.lifestyle];

  return (
    <div className="space-y-0">
      {images.map((src, i) => (
        <div
          key={i}
          className={`relative w-full aspect-square bg-muted ${
            i > 0 ? "border-t-2 border-border" : ""
          }`}
        >
          <Image
            src={src}
            alt={`${product.name} — image ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
