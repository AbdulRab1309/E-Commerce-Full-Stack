import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
      <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
        Error 404
      </p>
      <h1 className="text-7xl sm:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
        Not
        <br />
        Found.
      </h1>
      <p className="mt-6 text-sm font-bold uppercase tracking-widest opacity-60 max-w-md mx-auto">
        The page you&apos;re looking for has been deprecated, moved, or never
        existed.
      </p>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <Link
          href="/"
          className="inline-block bg-foreground text-background px-8 py-4 text-sm font-black uppercase tracking-widest hover-invert"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="inline-block border-2 border-border px-8 py-4 text-sm font-black uppercase tracking-widest hover-invert"
        >
          Shop
        </Link>
      </div>
    </div>
  );
}
