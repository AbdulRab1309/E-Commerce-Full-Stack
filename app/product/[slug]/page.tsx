import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";
import ThreeDViewer from "@/components/product/ThreeDViewer";
import RelatedProducts from "@/components/product/RelatedProducts";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-b-2 border-border">
        {/* Left: sticky scrolling gallery */}
        <div className="lg:border-r-2 border-border">
          <div className="lg:sticky lg:top-16">
            {product.has3DModel && product.videoSrc && product.videoPoster ? (
              <div className="grid grid-cols-1">
                <div className="border-b-2 border-border">
                  <ThreeDViewer
                    poster={product.videoPoster}
                    videoSrc={product.videoSrc}
                    title={product.name}
                  />
                </div>
                <ProductGallery product={product} />
              </div>
            ) : (
              <ProductGallery product={product} />
            )}
          </div>
        </div>

        {/* Right: details */}
        <div className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
          <ProductDetails product={product} />
        </div>
      </div>

      <RelatedProducts slugs={product.related} />
    </>
  );
}
