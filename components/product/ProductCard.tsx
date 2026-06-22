"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface Props {
  product: Product;
  showCategory?: boolean;
  className?: string;
}

export default function ProductCard({ product, showCategory = true, className }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group block border-2 border-border bg-background hover-invert ${className || ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={hover ? product.images.lifestyle : product.images.front}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-200"
        />
        {product.has3DModel && (
          <div className="absolute top-2 right-2 bg-foreground text-background text-[10px] font-black uppercase tracking-widest px-2 py-1">
            3D
          </div>
        )}
      </div>
      <div className="grid grid-cols-[1fr_auto] items-baseline gap-2 border-t-2 border-border p-4">
        <h3 className="text-sm font-black uppercase tracking-tighter truncate">
          {product.name}
        </h3>
        <span className="text-sm font-black tabular-nums whitespace-nowrap">
          {formatPrice(product.price)}
        </span>
      </div>
      {showCategory && (
        <div className="px-4 pb-3 -mt-2">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
            {product.category}
          </span>
        </div>
      )}
    </Link>
  );
}
