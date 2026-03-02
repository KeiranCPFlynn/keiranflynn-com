"use client";

import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const CAL_60 = "https://cal.com/keirancpflynn/60min";
const CAL_30 = "https://cal.com/keirancpflynn/30min";

export function BookingButtons({ className = "" }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <m.a
        href={CAL_60}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">{t.cta.book60}</span>
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
      <m.a
        href={CAL_30}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {t.cta.book30}
      </m.a>
    </div>
  );
}
