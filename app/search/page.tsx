"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState, useEffect } from "react";
import { searchProducts } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

function SearchInner() {
  const params = useSearchParams();
  const initial = params.get("q") || "";
  const [query, setQuery] = useState(initial);

  useEffect(() => {
    setQuery(initial);
  }, [initial]);

  const results = useMemo(() => searchProducts(query), [query]);

  return (
    <div>
      <div className="border-b-2 border-border px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          Search.
        </h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="WHAT ARE YOU LOOKING FOR?"
          className="stark-input text-2xl sm:text-4xl font-black uppercase tracking-tighter"
          autoFocus
        />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {query.trim() === "" ? (
          <p className="text-sm font-bold uppercase tracking-widest opacity-60">
            Type to search the catalog.
          </p>
        ) : results.length === 0 ? (
          <div className="border-2 border-border p-12 text-center">
            <p className="text-2xl font-black uppercase">
              No results for &quot;{query}&quot;
            </p>
            <p className="text-sm opacity-60 mt-2">
              Try a different keyword.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-6">
              {results.length} {results.length === 1 ? "Result" : "Results"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
              {results.map((p, i) => (
                <div
                  key={p.id}
                  className={`${
                    i > 0
                      ? "border-t-2 sm:border-t-0 sm:border-l-2 border-border"
                      : ""
                  }`}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="px-4 sm:px-6 lg:px-8 py-20 text-center text-sm font-bold uppercase opacity-60">
          Loading search…
        </div>
      }
    >
      <SearchInner />
    </Suspense>
  );
}
