import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

export function generateOrderNumber(): string {
  const part = () => Math.floor(1000 + Math.random() * 9000);
  return `ORD-${part()}-${part()}`;
}

export function estimatedDelivery(daysAhead = 3): string {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString();
}
