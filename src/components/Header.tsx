"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/content";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-xl border-b border-white/[0.04] shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link
          href="/conversation"
          className="text-[15px] font-semibold tracking-tight text-white hover:text-accent-gold transition-colors duration-500"
        >
          Keiran Flynn
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="/conversation">{t.nav.conversation}</NavLink>
          <NavLink href="/about">{t.nav.about}</NavLink>
          <NavLink href="/contact">{t.nav.contact}</NavLink>
          <div className="w-px h-4 bg-white/[0.06]" />
          <LanguageToggle locale={locale} setLocale={setLocale} />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle locale={locale} setLocale={setLocale} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="absolute w-5 h-px bg-current"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-5 h-px bg-current"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              className="absolute w-5 h-px bg-current"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#111111]/98 backdrop-blur-xl border-t border-white/[0.04]"
          >
            <div className="px-6 py-8 space-y-6">
              {[
                { href: "/conversation", label: t.nav.conversation },
                { href: "/about", label: t.nav.about },
                { href: "/contact", label: t.nav.contact },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative text-[13px] uppercase tracking-[0.12em] text-white/40 hover:text-white transition-colors duration-500"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-gold transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}

function LanguageToggle({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  return (
    <div className="flex items-center text-[11px] tracking-wider">
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 rounded-l transition-all duration-300 ${
          locale === "en"
            ? "text-white bg-white/[0.08]"
            : "text-white/25 hover:text-white/50"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("ru")}
        className={`px-2.5 py-1.5 rounded-r transition-all duration-300 ${
          locale === "ru"
            ? "text-white bg-white/[0.08]"
            : "text-white/25 hover:text-white/50"
        }`}
      >
        RU
      </button>
    </div>
  );
}
