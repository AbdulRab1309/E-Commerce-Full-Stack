import { notFound } from "next/navigation";
import Image from "next/image";
import { categories, getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const items = getProductsByCategory(params.slug);

  return (
    <>
      <section className="border-b-2 border-border">
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
              Category
            </p>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              {category.title}
            </h1>
            <p className="mt-6 text-lg max-w-xl leading-relaxed">
              {category.description}
            </p>
          </div>
          <div className="relative aspect-square w-full bg-muted border-2 border-border">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
            {items.length} {items.length === 1 ? "Product" : "Products"}
          </h2>
        </div>
        {items.length === 0 ? (
          <div className="border-2 border-border p-12 text-center">
            <p className="text-2xl font-black uppercase">No products yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
            {items.map((p, i) => (
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
        )}
      </section>
    </>
  );
}
