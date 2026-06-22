"use client";

import { useState } from "react";
import { useCart } from "@/lib/store/cart";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Accordion from "./Accordion";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const add = useCart((s) => s.add);

  const onAdd = () => {
    add(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
          {product.category}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-3">
          {product.name}
        </h1>
        <p className="text-lg font-medium italic opacity-80">{product.tagline}</p>
      </div>

      <div className="flex items-baseline gap-4">
        <span className="text-3xl sm:text-4xl font-black tabular-nums">
          {formatPrice(product.price)}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest opacity-60">
          {product.stock > 10
            ? "In Stock"
            : product.stock > 0
            ? `Only ${product.stock} left`
            : "Out of Stock"}
        </span>
      </div>

      {product.ratings && (
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <span className="bg-foreground text-background px-2 py-0.5">
            {product.ratings.toFixed(1)} ★
          </span>
          <span className="opacity-60">{product.reviews.toLocaleString()} reviews</span>
        </div>
      )}

      <p className="text-base leading-relaxed">{product.description}</p>

      {/* Quantity + Add to cart */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black uppercase tracking-widest opacity-60">
            Qty
          </span>
          <div className="inline-flex border-2 border-border">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-10 hover-invert font-black"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-12 h-10 flex items-center justify-center font-black tabular-nums border-l-2 border-r-2 border-border">
              {qty}
            </span>
            <button
              onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
              className="w-10 h-10 hover-invert font-black"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <Button
          size="block"
          onClick={onAdd}
          disabled={product.stock === 0}
          className="text-lg"
        >
          {added ? "Added to Cart ✓" : "Add to Cart"}
        </Button>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-center">
          Free shipping on orders over $50
        </p>
      </div>

      {/* Specs + accordion */}
      <div className="pt-6">
        <h3 className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">
          Specifications
        </h3>
        <div className="border-2 border-border">
          {product.specs.map((s, i) => (
            <div
              key={s.label}
              className={`grid grid-cols-2 gap-2 p-3 text-sm ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <span className="font-black uppercase tracking-wider opacity-70">
                {s.label}
              </span>
              <span className="font-medium">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <Accordion
        items={[
          {
            title: "Shipping",
            content: (
              <p>
                Ships in 24 hours from our warehouse. Tracked, insured, anti-static
                packaging. Domestic orders arrive in 2–4 business days, international
                3–7.
              </p>
            ),
          },
          {
            title: "Warranty & Returns",
            content: (
              <p>
                30-day no-questions returns. Manufacturer warranty honored for
                defects. DOA units replaced immediately.
              </p>
            ),
          },
          {
            title: "Datasheets & Docs",
            content: (
              <p>
                Manufacturer datasheets, pinouts, and reference designs available on
                the product support page after purchase.
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}
