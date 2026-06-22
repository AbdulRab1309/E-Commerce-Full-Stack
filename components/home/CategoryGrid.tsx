import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/products";

export default function CategoryGrid() {
  return (
    <section className="border-b-2 border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Shop
            <br />
            By Category
          </h2>
          <Link
            href="/shop"
            className="text-sm font-bold uppercase tracking-widest strike-hover"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-border">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`group relative aspect-square overflow-hidden bg-muted hover-invert ${
                i > 0 ? "border-l-0 sm:border-l-2 border-border" : ""
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 border-t-2 border-border bg-background px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-tighter">
                  {cat.title}
                </span>
                <span className="text-lg font-black group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
