"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Order } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function OrderConfirmationPage({
  params,
}: {
  params: { orderId: string };
}) {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(`order-${params.orderId}`);
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [params.orderId]);

  if (!order) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
          Order
          <br />
          Not Found.
        </h1>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest opacity-60">
          We couldn&apos;t locate order {params.orderId}.
        </p>
        <div className="mt-10">
          <Link href="/shop">
            <Button size="lg">Continue Shopping →</Button>
          </Link>
        </div>
      </div>
    );
  }

  const eta = new Date(order.estimatedDelivery).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <section className="border-b-2 border-border px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
          Status
        </p>
        <h1 className="text-7xl sm:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
          Confirmed.
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Thanks. Your order is being prepped in our warehouse. You&apos;ll get a
          shipping notification by email.
        </p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-border">
          <div className="p-6 sm:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-border">
            <p className="text-xs font-black uppercase tracking-widest opacity-60">
              Order Number
            </p>
            <p className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mt-1">
              {order.orderNumber}
            </p>
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mt-6">
              Status
            </p>
            <p className="text-lg font-black uppercase tracking-tighter mt-1">
              <span className="bg-foreground text-background px-2 py-0.5">
                Processing
              </span>
            </p>
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mt-6">
              Estimated Delivery
            </p>
            <p className="text-lg font-black uppercase tracking-tighter mt-1">
              {eta}
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-widest opacity-60">
              Shipping To
            </p>
            <p className="text-base font-black uppercase tracking-tighter mt-1">
              {order.shipping.name}
            </p>
            <p className="text-sm opacity-80">
              {order.shipping.address}, {order.shipping.city}, {order.shipping.zip}
            </p>
            <p className="text-sm opacity-80">{order.shipping.country}</p>
            <p className="text-sm opacity-60 mt-2">{order.shipping.email}</p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mt-12 mb-6">
          Items
        </h2>
        <ul className="border-2 border-border">
          {order.items.map((item, i) => (
            <li
              key={item.productId}
              className={`grid grid-cols-[1fr_auto_auto] gap-4 p-4 sm:p-6 ${
                i > 0 ? "border-t-2 border-border" : ""
              }`}
            >
              <div>
                <p className="text-sm font-black uppercase tracking-tighter">
                  {item.name}
                </p>
                <p className="text-xs opacity-60 mt-1">
                  Qty {item.quantity} · {formatPrice(item.price)} each
                </p>
              </div>
              <span className="text-base font-black tabular-nums self-center">
                {formatPrice(item.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end mt-6">
          <div className="grid grid-cols-2 gap-3 w-full sm:w-80 text-sm">
            <span className="text-lg font-black uppercase tracking-widest border-t-2 border-border pt-3">
              Total
            </span>
            <span className="text-right text-3xl font-black tabular-nums border-t-2 border-border pt-3">
              {formatPrice(order.total)}
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/shop">
            <Button size="lg" variant="outline">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="ghost">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
