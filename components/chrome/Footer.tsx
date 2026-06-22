"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background">
      {/* Massive brand block — fills viewport width like the reference site */}
      <div className="border-b-2 border-border overflow-hidden">
        <div
          aria-hidden
          className="block leading-[0.82] tracking-[-0.04em] font-black uppercase select-none whitespace-nowrap text-center"
          style={{ fontSize: "clamp(140px, 28vw, 560px)" }}
        >
          ECHO.
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">
            Shop
          </h3>
          <ul className="space-y-2 text-sm font-bold uppercase">
            <li><Link href="/shop" className="strike-hover">All Products</Link></li>
            <li><Link href="/category/microcontroller" className="strike-hover">Microcontrollers</Link></li>
            <li><Link href="/category/sensor" className="strike-hover">Sensors</Link></li>
            <li><Link href="/category/wireless" className="strike-hover">Wireless</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">
            Company
          </h3>
          <ul className="space-y-2 text-sm font-bold uppercase">
            <li><Link href="/about" className="strike-hover">About</Link></li>
            <li><Link href="/contact" className="strike-hover">Contact</Link></li>
            <li><Link href="/search" className="strike-hover">Search</Link></li>
            <li><a href="#" className="strike-hover">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">
            Connect
          </h3>
          <ul className="space-y-2 text-sm font-bold uppercase">
            <li><a href="#" className="strike-hover">GitHub</a></li>
            <li><a href="#" className="strike-hover">Twitter / X</a></li>
            <li><a href="#" className="strike-hover">Instagram</a></li>
            <li><a href="#" className="strike-hover">Discord</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">
            Newsletter
          </h3>
          <form
            className="flex items-center gap-2 border-b-2 border-border pb-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="YOUR@EMAIL"
              className="flex-1 bg-transparent border-0 outline-none text-sm font-bold uppercase placeholder:opacity-50"
              aria-label="Email"
            />
            <button
              type="submit"
              className="text-lg font-black hover-invert px-2"
              aria-label="Subscribe"
            >
              →
            </button>
          </form>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-widest opacity-60">
            No spam. Only product drops.
          </p>
        </div>
      </div>

      {/* Colophon */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-border px-4 sm:px-6 lg:px-8 py-6 text-xs font-bold uppercase tracking-wider">
        <span>© 2026 ECHO. All Rights Reserved.</span>
        <span className="opacity-60">Built for makers who ship.</span>
      </div>
    </footer>
  );
}
