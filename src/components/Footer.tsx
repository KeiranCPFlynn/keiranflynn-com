"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn } from "./motion";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32">
      <div className="section-divider" />
      <div className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-[13px] text-white/20 tracking-wide">
                {year} Keiran Flynn. {t.footer.rights}
              </span>
              <Link
                href="/privacy"
                className="text-[13px] text-white/20 hover:text-white/40 transition-colors duration-500 tracking-wide"
              >
                {t.footer.privacy}
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
