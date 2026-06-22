import { getRelatedProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

interface Props {
  slugs: string[];
}

export default function RelatedProducts({ slugs }: Props) {
  const related = getRelatedProducts(slugs);
  if (!related.length) return null;
  return (
    <section className="border-t-2 border-border px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
        You Might
        <br />
        Also Need
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-border">
        {related.map((p, i) => (
          <div
            key={p.id}
            className={`${
              i > 0 ? "border-t-2 lg:border-t-0 lg:border-l-2 border-border" : ""
            }`}
          >
            <ProductCard product={p} showCategory={false} />
          </div>
        ))}
      </div>
    </section>
  );
}
