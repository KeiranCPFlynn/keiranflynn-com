"use client";

import Link from "next/link";

export function BookingButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-cta ${className}`}>
      <Link href="/work" className="btn btn-primary">
        See the work
        <svg
          className="arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
      <Link href="/contact" className="btn btn-ghost">
        Get in touch
      </Link>
    </div>
  );
}
