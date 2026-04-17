"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      {/* Title row */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={[
          "w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer",
          "border-l-4 transition-colors duration-200",
          isOpen
            ? "border-l-amber bg-amber-light"
            : "border-l-transparent bg-white hover:border-l-amber hover:bg-amber-light/50",
        ].join(" ")}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy text-sm leading-snug">{title}</span>
        <ChevronDown
          size={18}
          className="shrink-0 text-slate-text transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Content */}
      {isOpen && (
        <div className="px-5 py-4 bg-white border-t border-border text-sm text-slate-text leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
