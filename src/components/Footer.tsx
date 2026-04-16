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
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/55 mb-3">
                Keiran Flynn
              </p>
              <p className="text-[13px] text-white/75 leading-relaxed">
                {t.about.locationLabel}: {t.about.locationValue}
              </p>
              <p className="text-[13px] text-white/65 leading-relaxed mt-1">
                {t.about.availabilityLabel}: {t.about.availabilityValue}
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/55 mb-3">
                {t.nav.contact}
              </p>
              <p className="text-[13px] text-white/75 leading-relaxed mb-4">
                {t.contact.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://t.me/keiranflynn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 border border-white/[0.14] rounded-md text-[12px] tracking-wide text-white/95 hover:bg-white/[0.06] transition-colors"
                >
                  {t.footer.paymentHelpCta}
                </a>
                <Link
                  href="/contact"
                  className="text-[13px] text-white/75 hover:text-white transition-colors duration-500 tracking-wide"
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/55 mb-1">
                {t.footer.paymentHelpTitle}
              </p>
              <p className="text-[13px] text-white/80 leading-relaxed">
                {t.footer.paymentHelpSummary}
              </p>
              <details className="mt-3">
                <summary className="cursor-pointer text-[12px] text-white/70 hover:text-white/90 transition-colors">
                  {t.footer.paymentHelpShowSteps}
                </summary>
                <ul className="mt-2 space-y-1.5 text-[12px] text-white/70 leading-relaxed list-disc pl-4">
                  {t.footer.paymentHelpSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </details>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[13px] text-white/65 tracking-wide text-center sm:text-left">
              {year} Keiran Flynn. {t.footer.rights}
            </span>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-[13px] text-white/75 hover:text-white transition-colors duration-500 tracking-wide"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="/blog"
                className="text-[13px] text-white/75 hover:text-white transition-colors duration-500 tracking-wide"
              >
                {t.nav.blog}
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
          </div>
        </div>
      </div>
    </footer>
  );
}
