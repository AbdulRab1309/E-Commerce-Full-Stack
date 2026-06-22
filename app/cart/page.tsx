"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQuantity);
  const remove = useCart((s) => s.remove);
  const subtotal = useCart((s) => s.subtotal());
  const clear = useCart((s) => s.clear);

  if (items.length === 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
          Cart
          <br />
          Is Empty.
        </h1>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest opacity-60">
          Nothing in here yet. Go find something.
        </p>
        <div className="mt-10">
          <Link href="/shop">
            <Button size="lg">Shop Products →</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="border-b-2 border-border px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex items-end justify-between">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
          Cart.
        </h1>
        <button
          onClick={clear}
          className="text-xs font-bold uppercase tracking-widest strike-hover opacity-60"
        >
          Clear Cart
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Rows */}
        <ul>
          {items.map((item) => (
            <li
              key={item.productId}
              className="grid grid-cols-[80px_1fr_auto] sm:grid-cols-[100px_1fr_auto_auto_auto] gap-4 sm:gap-6 items-center border-b-2 border-border py-4"
            >
              <Link
                href={`/product/${item.slug}`}
                className="relative aspect-square w-full bg-muted border-2 border-border"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="min-w-0">
                <Link
                  href={`/product/${item.slug}`}
                  className="text-sm sm:text-base font-black uppercase tracking-tighter block truncate strike-hover"
                >
                  {item.name}
                </Link>
                <p className="text-xs opacity-60 mt-1">
                  {formatPrice(item.price)} each
                </p>
                <button
                  onClick={() => remove(item.productId)}
                  className="text-[10px] font-bold uppercase tracking-widest strike-hover opacity-60 mt-2"
                >
                  Remove
                </button>
              </div>
              <div className="inline-flex border-2 border-border col-span-2 sm:col-span-1 sm:justify-self-center">
                <button
                  onClick={() => setQty(item.productId, item.quantity - 1)}
                  className="w-10 h-10 hover-invert font-black"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-12 h-10 flex items-center justify-center font-black tabular-nums border-l-2 border-r-2 border-border">
                  {item.quantity}
                </span>
                <button
                  onClick={() => setQty(item.productId, item.quantity + 1)}
                  className="w-10 h-10 hover-invert font-black"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
              <div className="text-base sm:text-lg font-black tabular-nums sm:justify-self-end whitespace-nowrap">
                {formatPrice(item.price * item.quantity)}
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <div className="flex flex-col items-stretch sm:items-end gap-4 py-8 sm:py-12">
          <div className="grid grid-cols-2 gap-4 sm:w-80">
            <span className="text-sm font-bold uppercase tracking-widest opacity-60">
              Subtotal
            </span>
            <span className="text-right text-2xl font-black tabular-nums">
              {formatPrice(subtotal)}
            </span>
            <span className="text-sm font-bold uppercase tracking-widest opacity-60">
              Shipping
            </span>
            <span className="text-right text-sm font-bold uppercase tracking-widest">
              Calculated next
            </span>
            <span className="text-base font-black uppercase tracking-widest border-t-2 border-border pt-3">
              Total
            </span>
            <span className="text-right text-3xl font-black tabular-nums border-t-2 border-border pt-3">
              {formatPrice(subtotal)}
            </span>
          </div>
          <Link href="/checkout" className="sm:w-80">
            <Button size="block" className="text-lg">
              Proceed to Checkout →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
