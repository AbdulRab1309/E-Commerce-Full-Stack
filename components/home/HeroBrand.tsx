import Link from "next/link";
import Button from "@/components/ui/Button";

/**
 * First-fold brand statement — no slider, no overlays.
 * A massive "[ ECHO. ]" wordmark fills the viewport, then a single short
 * line of copy + CTA sit below. Modeled after the OUTFIT® hero where the
 * wordmark IS the hero.
 */
export default function HeroBrand() {
  return (
    <section className="relative border-b-2 border-border overflow-hidden">
      {/* Massive wordmark — fills the viewport */}
      <div className="relative w-full">
        <div
          aria-hidden
          className="block leading-[0.82] tracking-[-0.04em] font-black uppercase select-none whitespace-nowrap text-center"
          style={{ fontSize: "clamp(140px, 32vw, 600px)" }}
        >
          ECHO.
        </div>
      </div>

      {/* Manifesto strip below the wordmark */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-end border-t-2 border-border px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <p className="text-lg sm:text-2xl lg:text-3xl font-medium leading-snug max-w-3xl">
          A curated drop of embedded electronics. Microcontrollers, sensors, and
          the boards that build the things you actually want to build.
        </p>
        <Link href="/shop">
          <Button size="lg" className="whitespace-nowrap">
            Shop Now →
          </Button>
        </Link>
      </div>
    </section>
  );
}
