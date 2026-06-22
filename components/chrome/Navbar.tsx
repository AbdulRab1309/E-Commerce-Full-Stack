"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/store/cart";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/category/microcontroller", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const count = useCart((s) => s.count());
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-border bg-background">
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-black uppercase tracking-tighter justify-self-start strike-hover leading-none"
        >
          ECHO.
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8 justify-self-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wider strike-hover",
                pathname === link.href && "opacity-50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 sm:gap-5 justify-self-end">
          <Link
            href="/search"
            className="text-sm font-bold uppercase tracking-wider strike-hover hidden sm:inline-block"
          >
            Search
          </Link>
          <ThemeToggle />
          <Link
            href="/cart"
            className="text-sm font-bold uppercase tracking-wider strike-hover"
            aria-label="View cart"
          >
            Cart [{mounted ? count : 0}]
          </Link>
        </div>
      </div>

      {/* Mobile nav row */}
      <nav className="md:hidden flex items-center gap-6 border-t border-border px-4 py-3 overflow-x-auto">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-xs font-bold uppercase tracking-wider whitespace-nowrap",
              pathname === link.href && "opacity-50"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
