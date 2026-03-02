"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/[0.12] bg-[#0f0f0f]">
      <div className="py-12 sm:py-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-5 text-center sm:text-left">
            Contact
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <span className="text-[13px] text-white/65 tracking-wide text-center sm:text-left">
              {year} Keiran Flynn. {t.footer.rights}
            </span>
            <div className="flex flex-col items-center sm:items-end gap-3">
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-[13px] text-white/75 hover:text-white transition-colors duration-500 tracking-wide"
                >
                  {t.footer.privacy}
                </Link>
                <a
                  href="https://www.linkedin.com/in/keiran-flynn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/75 hover:text-white transition-colors duration-500 tracking-wide"
                >
                  {t.footer.linkedin}
                </a>
              </div>
              <a
                href="https://t.me/freelymoving"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/75 hover:text-white transition-colors duration-500 tracking-wide text-center sm:text-right"
              >
                {t.footer.telegramSupport}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
