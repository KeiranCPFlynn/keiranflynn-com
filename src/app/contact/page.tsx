"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn, AnimatedSection } from "@/components/motion";
import { BookingButtons } from "@/components/BookingButtons";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("_gotcha")) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          _gotcha: formData.get("_gotcha"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatedSection className="pt-36 sm:pt-44">
      <FadeIn>
        <div className="accent-line mb-8" />
        <h1 className="text-display text-white mb-4 max-w-lg">
          {c.title}
        </h1>
        <p className="text-white/60 mb-12 text-subheading max-w-md">
          {c.subtitle}
        </p>
      </FadeIn>

      <div className="max-w-xl">
        <FadeIn delay={0.2}>
          {status === "sent" ? (
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10"
            >
              <div className="w-12 h-12 rounded-full bg-accent-gold/[0.08] flex items-center justify-center mb-6">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent-gold"
                >
                  <path d="M4 11l5 5 9-9" />
                </svg>
              </div>
              <p className="text-white text-lg mb-2">Message sent.</p>
              <p className="text-white/60">We will be in touch shortly.</p>
            </m.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] text-white/60 mb-2.5 tracking-wide"
                >
                  {c.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={c.form.namePlaceholder}
                  className="w-full bg-white/[0.02] border border-white/[0.05] rounded-lg px-5 py-4 text-white placeholder:text-white/55 focus:outline-none focus:border-white/15 focus:bg-white/[0.04] transition-all duration-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] text-white/60 mb-2.5 tracking-wide"
                >
                  {c.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={c.form.emailPlaceholder}
                  className="w-full bg-white/[0.02] border border-white/[0.05] rounded-lg px-5 py-4 text-white placeholder:text-white/55 focus:outline-none focus:border-white/15 focus:bg-white/[0.04] transition-all duration-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] text-white/60 mb-2.5 tracking-wide"
                >
                  {c.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={c.form.messagePlaceholder}
                  className="w-full bg-white/[0.02] border border-white/[0.05] rounded-lg px-5 py-4 text-white placeholder:text-white/55 focus:outline-none focus:border-white/15 focus:bg-white/[0.04] transition-all duration-500 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400/60 text-sm">
                  Failed to send. Please try again or email directly.
                </p>
              )}

              <m.button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2 relative z-10">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        className="opacity-75"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="relative z-10">{c.form.send}</span>
                )}
              </m.button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/55 block mb-6">
              {c.orBook}
            </span>
            <BookingButtons />
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
