"use client";

import Link from "next/link";
import { m } from "framer-motion";

const CAL_FIT = "https://cal.com/keirancpflynn/10-min-fit-call";

export function BookingButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <m.a
        href={CAL_FIT}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Book an AI Product Fit Call</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="relative z-10 opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </m.a>
      <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href="/work" className="btn-secondary">
          See Work
        </Link>
      </m.div>
    </div>
  );
}
