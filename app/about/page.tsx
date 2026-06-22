import Link from "next/link";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "Bought a Pi 5 on a Tuesday, building a home server by Wednesday. The packaging was so clean I almost didn't want to open it.",
    name: "Aarav M.",
    role: "Robotics, Bengaluru",
  },
  {
    quote: "I've ordered from three other suppliers this month. ECHO. is the only one that ships anti-static bags inside the box.",
    name: "Lina K.",
    role: "IoT Consultant, Berlin",
  },
  {
    quote: "Their 3D model on the UNO Q page saved me a return. Could see the header orientation before I bought.",
    name: "Tomás R.",
    role: "Hardware Engineer, Montevideo",
  },
];

const STATS = [
  { value: "8,400+", label: "Orders Shipped" },
  { value: "32", label: "Countries" },
  { value: "24h", label: "Dispatch Time" },
  { value: "98%", label: "Returns Cleared" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b-2 border-border">
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
              About
            </p>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              We sell
              <br />
              what we
              <br />
              build with.
            </h1>
          </div>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed">
              ECHO. started in 2024 as a parts bin. The four of us were sourcing
              boards and sensors for our own projects and getting tired of glossy
              resellers who padded every listing with marketing copy and dropped
              the spec sheet.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              We opened the store because we wanted to buy from it. Every product
              page is written by an engineer, datasheet and pinout front and
              center, no review-bait, no fake urgency.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border">
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-border">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 sm:p-8 ${
                  i > 0 ? "border-t-2 lg:border-t-0 lg:border-l-2 border-border" : ""
                }`}
              >
                <p className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none">
                  {s.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border">
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-square w-full bg-muted border-2 border-border">
            <Image
              src="/images/about/team.svg"
              alt="The ECHO. team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Inside
              <br />
              the workshop.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              We test every board that ships. ESD strap, bench supply, scope,
              logic analyzer. The first article of every new SKU is hand-soldered
              to a test rig and exercised for 48 hours before we list it.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Our warehouse is in Bengaluru, India. Orders placed before 4 PM IST
              ship the same day. Worldwide delivery is 3–5 days via tracked
              courier.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border">
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-12">
            What makers
            <br />
            are saying.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`p-6 sm:p-8 ${
                  i > 0
                    ? "border-t-2 md:border-t-0 md:border-l-2 border-border"
                    : ""
                }`}
              >
                <p className="text-lg sm:text-xl leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-black uppercase tracking-tighter">
                  {t.name}
                </p>
                <p className="text-xs opacity-60 mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
          Ready to build?
        </h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/shop"
            className="inline-block bg-foreground text-background px-8 py-4 text-sm font-black uppercase tracking-widest hover-invert"
          >
            Shop Products →
          </Link>
        </div>
      </section>
    </>
  );
}
