"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

interface CartState {
  items: CartItem[];
  add: (product: Product, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  count: () => number;
  subtotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product, quantity = 1) => {
        const items = [...get().items];
        const existing = items.find((i) => i.productId === product.id);
        if (existing) {
          existing.quantity = Math.min(existing.quantity + quantity, product.stock);
        } else {
          items.push({
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            quantity: Math.min(quantity, product.stock),
            image: product.images.front,
          });
        }
        set({ items });
      },
      remove: (productId) =>
        set({ items: get().items.filter((i) => i.productId !== productId) }),
      setQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter((i) => i.productId !== productId) });
          return;
        }
        set({
          items: get().items.map((i) =>
            i.productId === productId
              ? { ...i, quantity: Math.min(quantity, 99) }
              : i
          ),
        });
      },
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: "echo-cart" }
  )
);
