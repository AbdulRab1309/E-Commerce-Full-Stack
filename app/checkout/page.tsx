"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from "@/lib/store/cart";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { generateOrderNumber, estimatedDelivery } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  address: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  zip: z.string().min(3, "ZIP / postal code is required"),
  country: z.string().min(2, "Country is required"),
});

type FormData = z.infer<typeof schema>;

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const subtotal = useCart((s) => s.subtotal());
  const clear = useCart((s) => s.clear);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  if (items.length === 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
          Nothing
          <br />
          to check out.
        </h1>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest opacity-60">
          Your cart is empty.
        </p>
      </div>
    );
  }

  const onSubmit = async (data: FormData) => {
    // In a real app this hits /api/orders. For frontend-only, mock it.
    const orderNumber = generateOrderNumber();
    const delivery = estimatedDelivery(3);

    try {
      sessionStorage.setItem(
        `order-${orderNumber}`,
        JSON.stringify({
          orderNumber,
          items,
          total: subtotal,
          shipping: data,
          status: "processing",
          estimatedDelivery: delivery,
          createdAt: new Date().toISOString(),
        })
      );
    } catch {
      /* ignore */
    }

    clear();
    router.push(`/order-confirmation/${orderNumber}`);
  };

  return (
    <div>
      <div className="border-b-2 border-border px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
          Check
          <br />
          Out.
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-0"
      >
        {/* Shipping form */}
        <div className="lg:border-r-2 border-border px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-6">
            Shipping
          </h2>
          <Input
            label="Full Name"
            {...register("name")}
            error={errors.name?.message}
            autoComplete="name"
          />
          <Input
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
            autoComplete="email"
          />
          <Input
            label="Street Address"
            {...register("address")}
            error={errors.address?.message}
            autoComplete="street-address"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="City"
              {...register("city")}
              error={errors.city?.message}
              autoComplete="address-level2"
            />
            <Input
              label="ZIP / Postal"
              {...register("zip")}
              error={errors.zip?.message}
              autoComplete="postal-code"
            />
          </div>
          <Input
            label="Country"
            {...register("country")}
            error={errors.country?.message}
            autoComplete="country-name"
          />

          <div className="pt-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4">
              Payment
            </h2>
            <div className="border-2 border-border p-4 text-sm opacity-70">
              Demo: no real payment processing. Clicking submit will simulate a successful order.
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 bg-muted/30">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-6">
            Order Summary
          </h2>
          <ul className="space-y-3 mb-6">
            {items.map((item) => (
              <li
                key={item.productId}
                className="flex items-center justify-between gap-4 text-sm"
              >
                <span className="font-black uppercase tracking-tight truncate">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-black tabular-nums whitespace-nowrap">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 border-t-2 border-border pt-4 mb-6 text-sm">
            <span className="font-bold uppercase tracking-widest opacity-60">
              Subtotal
            </span>
            <span className="text-right font-black tabular-nums">
              {formatPrice(subtotal)}
            </span>
            <span className="font-bold uppercase tracking-widest opacity-60">
              Shipping
            </span>
            <span className="text-right font-black uppercase tracking-widest">
              Free
            </span>
            <span className="text-lg font-black uppercase tracking-widest border-t border-border pt-3">
              Total
            </span>
            <span className="text-right text-2xl font-black tabular-nums border-t border-border pt-3">
              {formatPrice(subtotal)}
            </span>
          </div>
          <Button
            type="submit"
            size="block"
            className="text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing…" : "Place Order →"}
          </Button>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest opacity-60 text-center">
            By placing this order you agree to our terms.
          </p>
        </div>
      </form>
    </div>
  );
}
