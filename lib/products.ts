import type { Product, Category } from "./types";

export const categories: Category[] = [
  {
    slug: "microcontroller",
    title: "Microcontrollers",
    description:
      "The brains. Compute units sized for embedding — single-board computers and microcontrollers for everything from blinking an LED to running a full Linux stack.",
    image: "/images/categories/microcontroller.jpeg",
  },
  {
    slug: "sensor",
    title: "Sensors",
    description:
      "Transducers that turn the physical world into electrical signals. LiDAR, IMU, temperature, current. The senses your project needs to perceive.",
    image: "/images/categories/sensors.jpg",
  },
  {
    slug: "wireless",
    title: "Wireless",
    description:
      "Radios, antennas, and modules for talking to the rest of the world. Wi-Fi, BLE, LoRa, sub-GHz. Cut the wire without losing the connection.",
    image: "/images/categories/wireless.jpeg",
  },
];

export const products: Product[] = [
  {
    id: "p_001",
    slug: "raspberry-pi-5",
    name: "Raspberry Pi 5 — 8GB",
    tagline: "Full Linux. Pocket-sized.",
    price: 80.0,
    stock: 24,
    category: "microcontroller",
    shortDescription:
      "Quad-core Arm Cortex-A76 @ 2.4GHz, dual 4K HDMI, PCIe 2.0. The most capable Pi yet.",
    description:
      "Raspberry Pi 5 is a complete desktop-class computer on a credit-card-sized board. Powered by a Broadcom BCM2712 SoC with a quad-core Arm Cortex-A76 running at 2.4GHz, it offers a generational leap in performance over Pi 4. With 8GB of LPDDR4X RAM, dual 4K HDMI outputs, PCIe 2.0 x1 interface, and a redesigned RP1 I/O controller, Pi 5 is built for projects that need real compute — home servers, retro emulation, edge ML, robotics, industrial control. Backwards-compatible with most Pi 4 HATs via the standard 40-pin GPIO header.",
    specs: [
      { label: "SoC", value: "Broadcom BCM2712" },
      { label: "CPU", value: "Quad-core Arm Cortex-A76 @ 2.4GHz" },
      { label: "RAM", value: "8GB LPDDR4X" },
      { label: "Connectivity", value: "Wi-Fi 5, Bluetooth 5.0, BLE" },
      { label: "Display", value: "2 × micro-HDMI (4K@60)" },
      { label: "Storage", value: "microSD, PCIe 2.0 x1" },
      { label: "GPIO", value: "40-pin header (3.3V logic)" },
      { label: "Power", value: "5V/5A USB-C" },
    ],
    images: {
      front: "/images/products/raspberry-pi-5-front.jpg",
      lifestyle: "/images/products/raspberry-pi-5-life.png",
    },
    ratings: 4.8,
    reviews: 1247,
    related: ["esp32", "arduino-uno-q"],
  },
  {
    id: "p_002",
    slug: "arduino-uno-q",
    name: "Arduino UNO Q",
    tagline: "Classic form, modern brain.",
    price: 27.5,
    stock: 56,
    category: "microcontroller",
    shortDescription:
      "The iconic UNO footprint, rebuilt for today's makers. USB-C, 32-bit, native BLE.",
    description:
      "The Arduino UNO Q carries forward the unmistakable UNO silhouette — the same 68.6 × 53.4 mm board outline, the same digital pin 13 LED — while rebuilding everything underneath. A 32-bit Renesas RA4M1 handles the I/O, a dedicated ESP32-S3 co-processor delivers Wi-Fi 4 and Bluetooth 5, and a USB-C port replaces the aging Type-B. The result is a board that drops into legacy UNO projects unchanged but is finally fast enough for modern work: motor control loops under 100µs, on-board BLE peripherals, and 12-bit analog that doesn't fight you. Available with a 3D-rotatable model for inspection before you buy.",
    specs: [
      { label: "Main MCU", value: "Renesas RA4M1 (Arm Cortex-M4 @ 48MHz)" },
      { label: "Wireless MCU", value: "ESP32-S3 (Wi-Fi 4, BT 5)" },
      { label: "Flash", value: "256KB on-chip, 16MB external" },
      { label: "Digital I/O", value: "14 (6 PWM)" },
      { label: "Analog In", value: "6 × 12-bit" },
      { label: "Voltage", value: "5V logic, 6–24V input" },
      { label: "Connector", value: "USB-C" },
      { label: "Form Factor", value: "Standard UNO (68.6 × 53.4mm)" },
    ],
    images: {
      front: "/images/products/arduino-uno-q-front.jpg",
      lifestyle: "/images/products/arduino-uno-q-life.webp",
    },
    ratings: 4.7,
    reviews: 832,
    has3DModel: true,
    videoSrc: "/videos/arduino-uno-q.mp4",
    videoPoster: "/images/products/arduino-uno-q-3d.svg",
    related: ["arduino-nano", "raspberry-pi-5", "esp32"],
  },
  {
    id: "p_003",
    slug: "arduino-nano",
    name: "Arduino Nano",
    tagline: "Breadboard-native. Project-ready.",
    price: 22.0,
    stock: 142,
    category: "microcontroller",
    shortDescription:
      "The Nano, refined. Same compact DIP-30 footprint, USB-C, more memory.",
    description:
      "The Nano is the board that started a generation of makers. This revision keeps the breadboard-friendly DIP-30 footprint that drops straight into perfboard and stripboard projects, but moves to USB-C, doubles the flash, and adds a modern 32-bit MCU under the hood. Whether you're soldering a permanent installation into a sculpture or pulling prototypes from a parts bin, Nano remains the fastest path from idea to working hardware.",
    specs: [
      { label: "MCU", value: "ATmega328P" },
      { label: "Clock", value: "16 MHz" },
      { label: "Flash", value: "32 KB" },
      { label: "SRAM", value: "2 KB" },
      { label: "EEPROM", value: "1 KB" },
      { label: "Digital I/O", value: "14 (6 PWM)" },
      { label: "Analog In", value: "8 × 10-bit" },
      { label: "Connector", value: "USB-C, mini-ICSP" },
    ],
    images: {
      front: "/images/products/arduino-nano-front.webp",
      lifestyle: "/images/products/arduino-nano-life.webp",
    },
    ratings: 4.9,
    reviews: 2188,
    related: ["arduino-uno-q", "esp32"],
  },
  {
    id: "p_004",
    slug: "esp32",
    name: "ESP32 Dev Board",
    tagline: "Wi-Fi and BLE for cheap.",
    price: 6.5,
    stock: 318,
    category: "wireless",
    shortDescription:
      "Dual-core Tensilica, 240MHz, 520KB SRAM. The chip that put IoT on a breadboard.",
    description:
      "The ESP32 is a workhorse. Tensilica Xtensa LX6 dual-core at 240MHz, 520KB of SRAM, integrated Wi-Fi 802.11 b/g/n and Bluetooth 4.2 BR/EDR/BLE, 34 programmable GPIOs, capacitive touch, hall-effect sensor, and a 12-bit SAR ADC — all on a chip that costs less than lunch. The Dev Board form factor breaks out every pin to standard 0.1\" headers and includes a USB-UART bridge, reset and boot buttons, and an onboard 3.3V regulator. Drop it into anything that needs to talk to a phone, a server, or another ESP32 across a room.",
    specs: [
      { label: "MCU", value: "ESP32-WROOM-32" },
      { label: "Clock", value: "Dual-core 240 MHz" },
      { label: "SRAM", value: "520 KB" },
      { label: "Flash", value: "4 MB" },
      { label: "Wi-Fi", value: "802.11 b/g/n (2.4 GHz)" },
      { label: "Bluetooth", value: "4.2 BR/EDR + BLE" },
      { label: "GPIO", value: "34 (touch, ADC, DAC, PWM)" },
      { label: "Power", value: "3.3V, 5V-tolerant inputs" },
    ],
    images: {
      front: "/images/products/esp32-front.jpg",
      lifestyle: "/images/products/esp32-life.jpeg",
    },
    ratings: 4.8,
    reviews: 3104,
    related: ["raspberry-pi-5", "arduino-uno-q"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => Boolean(p));
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}
