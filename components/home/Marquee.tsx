import { cn } from "@/lib/utils";

interface Props {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

const SPEED = {
  slow: "60s",
  normal: "32s",
  fast: "18s",
};

export default function Marquee({ items, className, speed = "normal" }: Props) {
  // Duplicate the items so the animation loops seamlessly
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y-2 border-border py-4",
        className
      )}
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: SPEED[speed] }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter px-6 inline-flex items-center gap-6"
          >
            {item}
            <span className="opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
