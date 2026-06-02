"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

const BOOK_URL = "https://cal.com/keirancpflynn/10-min-fit-call";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.header
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
          href="/"
          className="text-[15px] font-semibold tracking-tight text-white hover:text-accent transition-colors duration-500"
        >
          Keiran Flynn
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/[0.14] px-4 py-2 text-[12px] font-medium tracking-[0.08em] text-white/90 transition-colors duration-300 hover:border-accent/50 hover:text-white"
          >
            Book a Call
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-8 w-8 items-center justify-center text-white/65 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          <m.span
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            className="absolute h-px w-5 bg-current"
            transition={{ duration: 0.3 }}
          />
          <m.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-px w-5 bg-current"
            transition={{ duration: 0.2 }}
          />
          <m.span
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            className="absolute h-px w-5 bg-current"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <m.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.04] bg-[#111111]/98 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-6 px-6 py-8">
              {[...navItems, { href: BOOK_URL, label: "Book a Call" }].map(
                (item, i) => (
                  <m.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  >
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="block text-lg text-white/75 transition-colors duration-300 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-lg text-white/75 transition-colors duration-300 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </m.div>
                )
              )}
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </m.header>
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
      className="group relative text-[13px] uppercase tracking-[0.12em] text-white/70 transition-colors duration-500 hover:text-white"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}
