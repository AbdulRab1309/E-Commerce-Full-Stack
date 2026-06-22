"use client";

import { useMemo, useState } from "react";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

export default function ShopPage() {
  const [selectedCats, setSelectedCats] = useState<Set<string>>(
    new Set(["microcontroller", "sensor", "wireless"])
  );
  const [priceMax, setPriceMax] = useState(100);
  const [sort, setSort] = useState<Sort>("featured");

  const filtered = useMemo(() => {
    const list = products.filter(
      (p) => selectedCats.has(p.category) && p.price <= priceMax
    );
    switch (sort) {
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "rating":
        return [...list].sort((a, b) => b.ratings - a.ratings);
      default:
        return list;
    }
  }, [selectedCats, priceMax, sort]);

  const toggleCat = (slug: string) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="border-b-2 border-border px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85]">
          All
          <br />
          Products.
        </h1>
        <p className="mt-4 text-sm font-bold uppercase tracking-widest opacity-60">
          {filtered.length} {filtered.length === 1 ? "Product" : "Products"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[25%_1fr]">
        {/* Sidebar filters */}
        <aside className="lg:border-r-2 border-border px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-10">
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">
              Category
            </h2>
            <ul className="space-y-3">
              {categories.map((cat) => {
                const checked = selectedCats.has(cat.slug);
                return (
                  <li key={cat.slug}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <span
                        className={cn(
                          "w-5 h-5 border-2 border-border flex items-center justify-center text-xs font-black",
                          checked
                            ? "bg-foreground text-background"
                            : "bg-transparent"
                        )}
                      >
                        {checked ? "✓" : ""}
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checked}
                        onChange={() => toggleCat(cat.slug)}
                      />
                      <span className="text-sm font-bold uppercase tracking-wider group-hover:opacity-50">
                        {cat.title}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">
              Price Range
            </h2>
            <div className="space-y-3">
              <input
                type="range"
                min={5}
                max={100}
                step={1}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-foreground"
                aria-label="Maximum price"
              />
              <div className="flex items-center justify-between text-xs font-bold uppercase tabular-nums">
                <span>$5</span>
                <span>Up to ${priceMax}</span>
                <span>$100</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">
              Sort
            </h2>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="w-full bg-transparent border-2 border-border px-3 py-2 text-sm font-bold uppercase tracking-wider"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </aside>

        {/* Grid */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {filtered.length === 0 ? (
            <div className="border-2 border-border p-12 text-center">
              <p className="text-2xl font-black uppercase">No products match.</p>
              <p className="text-sm opacity-60 mt-2">
                Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 border-2 border-border">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className={`${
                    i > 0
                      ? "border-t-2 sm:border-t-0 sm:border-l-2 border-border"
                      : ""
                  } ${
                    // additional border above for every row after first in sm+
                    i >= 1 ? "" : ""
                  }`}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
