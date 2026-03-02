"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left py-7 group"
      >
        <span className="text-[15px] text-white/60 group-hover:text-white transition-colors duration-500 pr-8">
          {question}
        </span>
        <m.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
            open
              ? "border-accent-gold/30 bg-accent-gold/[0.08]"
              : "border-white/[0.06] group-hover:border-white/[0.12]"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`transition-colors duration-300 ${
              open ? "text-accent-gold/70" : "text-white/55"
            }`}
          >
            <path d="M7 2v10M2 7h10" />
          </svg>
        </m.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/60 text-[15px] leading-relaxed pb-7 pr-16 max-w-xl">
              {answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
