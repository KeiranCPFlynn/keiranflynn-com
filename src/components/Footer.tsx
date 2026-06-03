"use client";

import Link from "next/link";

const siteLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const connectLinks = [
  { href: "https://cal.com/keirancpflynn/10-min-fit-call", label: "Book a call" },
  { href: "https://www.linkedin.com/in/keiran-flynn/", label: "LinkedIn" },
  { href: "https://github.com/KeiranCPFlynn", label: "GitHub" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="f-brand">
          <Link href="/" className="brand">
            <span className="mark">KF</span>
            <span>Keiran Flynn</span>
          </Link>
          <p>
            AI Product Builder for founders, operators and teams building with
            coding agents.
          </p>
        </div>

        <div className="f-col">
          <h4>Site</h4>
          {siteLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="f-col">
          <h4>Connect</h4>
          {connectLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="wrap f-bottom">
        <span>{year} Keiran Flynn</span>
        <span>Built with coding agents · keiranflynn.com</span>
      </div>
    </footer>
  );
}
