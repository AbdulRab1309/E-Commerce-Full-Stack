"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Item {
  title: string;
  content: React.ReactNode;
}

interface Props {
  items: Item[];
}

export default function Accordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t-2 border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b-2 border-border">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left hover:opacity-70"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-black uppercase tracking-widest">
                {item.title}
              </span>
              <span className="text-xl font-black w-6 text-center">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-[600px] pb-4" : "max-h-0"
              )}
            >
              <div className="text-sm leading-relaxed opacity-80">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
