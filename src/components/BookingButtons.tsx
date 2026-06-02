"use client";

import Link from "next/link";

const CAL_FIT = "https://cal.com/keirancpflynn/10-min-fit-call";

export function BookingButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-cta ${className}`}>
      <a
        href={CAL_FIT}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Book a fit call
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
      </a>
      <Link href="/work" className="btn btn-ghost">
        See the work
      </Link>
    </div>
  );
}
