"use client";

import Link from "next/link";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/conversation", label: "Conversation" },
  { href: "/privacy", label: "Privacy" },
];

const externalLinks = [
  { href: "https://www.linkedin.com/in/keiran-flynn/", label: "LinkedIn" },
  { href: "https://github.com/KeiranCPFlynn", label: "GitHub" },
  { href: "mailto:freelymoving@gmail.com", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/[0.12] bg-[#0f0f0f]">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-white/55">
              Keiran Flynn
            </p>
            <p className="max-w-sm text-[14px] leading-relaxed text-white/75">
              AI Product Builder for founders, operators and teams building with
              coding agents.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-white/55">
              Site
            </p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-white/55">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-[13px] tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.08] pt-6">
          <span className="text-[13px] tracking-wide text-white/55">
            {year} Keiran Flynn. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
