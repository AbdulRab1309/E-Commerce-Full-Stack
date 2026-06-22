export type ProductCategory = "microcontroller" | "sensor" | "wireless";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductImages {
  front: string;
  lifestyle: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  stock: number;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  specs: ProductSpec[];
  images: ProductImages;
  ratings: number;
  reviews: number;
  has3DModel?: boolean;
  videoSrc?: string;
  videoPoster?: string;
  related: string[]; // product slugs
}

export interface Category {
  slug: ProductCategory;
  title: string;
  description: string;
  image: string;
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  orderNumber: string;
  items: CartItem[];
  total: number;
  shipping: {
    name: string;
    email: string;
    address: string;
    city: string;
    zip: string;
    country: string;
  };
  status: "processing" | "confirmed" | "shipped";
  estimatedDelivery: string;
  createdAt: string;
}
