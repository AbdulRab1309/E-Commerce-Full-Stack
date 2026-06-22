import { products } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

export default function LatestProducts() {
  return (
    <section className="border-b-2 border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Latest
            <br />
            Products
          </h2>
          <Link
            href="/shop"
            className="text-sm font-bold uppercase tracking-widest strike-hover"
          >
            Shop All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-border">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`${
                i > 0 ? "border-t-2 lg:border-t-0 lg:border-l-2 border-border" : ""
              }`}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
