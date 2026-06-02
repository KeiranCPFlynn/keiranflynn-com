import type { Metadata } from "next";
import Link from "next/link";
import { BookingButtons } from "@/components/BookingButtons";

export const metadata: Metadata = {
  title: "AI Product Building Services",
  description:
    "AI product sprints, MVP builds and fractional AI product leadership for founders, operators and small teams.",
  alternates: {
    canonical: "/services",
  },
};

const offers = [
  {
    title: "AI Product Sprint",
    intro:
      "For founders or teams with a vague AI idea, messy workflow or early product concept.",
    copy:
      "A focused sprint to turn an unclear AI idea into something scoped, testable and ready to build.",
    items: [
      "Product brief",
      "User flows",
      "Technical architecture",
      "Prototype or demo where appropriate",
      "Build roadmap",
      "Risk and feasibility notes",
      "Recommended next steps",
    ],
  },
  {
    title: "AI MVP Build Partner",
    intro:
      "For teams ready to build a scoped MVP, internal tool or AI-enabled workflow.",
    copy:
      "I can build or co-build the first working version, using agentic development workflows to move quickly without skipping product judgment.",
    items: [
      "Next.js app or prototype",
      "Supabase backend",
      "LLM API integration",
      "RAG or structured knowledge flows where appropriate",
      "Stripe/payment flow if relevant",
      "PostHog/analytics setup",
      "Deployment and handover",
    ],
  },
  {
    title: "Fractional AI Product Lead",
    intro:
      "For teams that need product and AI judgment but do not need a full-time hire.",
    copy:
      "A practical product lead for teams trying to make AI useful inside real products and workflows.",
    items: [
      "Discovery and prioritisation",
      "Feature scoping",
      "User stories and acceptance criteria",
      "Prototype review",
      "AI workflow design",
      "Builder/developer direction",
      "Analytics review",
      "Launch and iteration support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <div className="max-w-3xl">
        <div className="accent-line mb-8" />
        <h1 className="text-display mb-8 text-white">
          AI Product Building Services
        </h1>
        <p className="text-subheading mb-12 text-white/65">
          For founders, operators and small teams who need help turning AI ideas
          into products, prototypes or internal systems.
        </p>
        <BookingButtons />
      </div>

      <div className="mt-20 grid gap-6">
        {offers.map((offer) => (
          <section key={offer.title} className="glass-card p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-accent/80">
                  Offer
                </p>
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {offer.title}
                </h2>
                <p className="mb-5 text-[15px] leading-relaxed text-white/60">
                  {offer.intro}
                </p>
                <p className="text-[15px] leading-relaxed text-white/75">
                  {offer.copy}
                </p>
              </div>
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/45">
                  What it can include
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {offer.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-[14px] leading-relaxed text-white/65"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-white/[0.08] pt-10">
        <Link href="/work" className="text-[13px] text-white/55 hover:text-white">
          See recent work
        </Link>
      </div>
    </div>
  );
}
