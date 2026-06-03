"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { m } from "framer-motion";
import { BookingButtons } from "@/components/BookingButtons";

const SPRINT_MESSAGE =
  "AI Product Sprint enquiry\n\nI'd like to buy an AI Product Sprint. Here's a bit about my idea or workflow:\n";

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactView />}>
      <ContactWithParams />
    </Suspense>
  );
}

function ContactWithParams() {
  const topic = useSearchParams().get("topic");
  return <ContactView topic={topic} />;
}

function ContactView({ topic }: { topic?: string | null }) {
  const isSprint = topic === "sprint";
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
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="accent-line mb-8" />
          <h1 className="text-display mb-6 text-white">Contact</h1>
          <p className="text-subheading mb-10 text-white/65">
            {isSprint
              ? "Ready to buy an AI Product Sprint? Send a quick note and I'll reply with a payment link."
              : "Tell me what you are trying to build, test or unblock."}
          </p>
          <BookingButtons />
        </div>

        <div>
          {status === "sent" ? (
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10"
            >
              <p className="mb-2 text-lg text-white">Message sent.</p>
              <p className="text-white/60">I will be in touch shortly.</p>
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

              <Field
                id="name"
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
              />
              <Field
                id="email"
                label="Email"
                name="email"
                type="email"
                placeholder="your@email.com"
              />

              <div>
                <label
                  htmlFor="message"
                  className="mb-2.5 block text-[13px] tracking-wide text-white/60"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  defaultValue={isSprint ? SPRINT_MESSAGE : undefined}
                  placeholder="What are you trying to build, and where are you stuck?"
                  className="w-full resize-none rounded-lg border border-white/[0.05] bg-white/[0.02] px-5 py-4 text-white transition-all duration-500 placeholder:text-white/45 focus:border-white/15 focus:bg-white/[0.04] focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400/70">
                  Failed to send. Please try again in a moment.
                </p>
              )}

              <m.button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </span>
              </m.button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  name,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 block text-[13px] tracking-wide text-white/60"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/[0.05] bg-white/[0.02] px-5 py-4 text-white transition-all duration-500 placeholder:text-white/45 focus:border-white/15 focus:bg-white/[0.04] focus:outline-none"
      />
    </div>
  );
}
