import type { Metadata } from "next";
import { BookingButtons } from "@/components/BookingButtons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent AI product work by Keiran Flynn, including LLMnesia, SchoolAI, LunaCradle and Flow402.",
  alternates: {
    canonical: "/work",
  },
};

type WorkItem = {
  title: string;
  status: string;
  description: string;
  details: string[];
  live?: boolean;
  link?: { href: string; label: string };
};

const work: WorkItem[] = [
  {
    title: "LLMnesia",
    status: "Live Chrome extension",
    live: true,
    link: { href: "https://llmnesia.com", label: "llmnesia.com" },
    description:
      "Local-first AI conversation search across major LLM platforms. Built for people who need to find useful thinking, decisions and outputs from previous AI chats without giving up local control.",
    details: [
      "Chrome extension product",
      "Local-first search approach",
      "Built around real AI workflow friction",
    ],
  },
  {
    title: "SchoolAI",
    status: "12,000+ users",
    live: true,
    link: { href: "https://schoolai.co", label: "schoolai.co" },
    description:
      "AI education platform built and scaled to 12,000+ users with zero paid acquisition.",
    details: [
      "Product build and scaling",
      "Education workflow focus",
      "Grew through product utility rather than paid acquisition",
    ],
  },
  {
    title: "LunaCradle",
    status: "Live AI product",
    live: true,
    link: { href: "https://lunacradle.com", label: "lunacradle.com" },
    description:
      "AI-powered baby sleep guidance product using Next.js, Supabase, Stripe and an LLM provider.",
    details: [
      "Next.js application",
      "Supabase backend",
      "Stripe payment flow",
      "Personalised LLM outputs",
    ],
  },
  {
    title: "Flow402",
    status: "Prototype",
    description:
      "Web3 and agent payments prototype using x402, Base and USDC to explore machine-to-machine payment flows.",
    details: [
      "Agent payment prototype",
      "x402, Base and USDC",
      "Discovery and timing validation",
    ],
  },
  {
    title: "Project Redback",
    status: "Founder advisory",
    description:
      "Advising a founder on product direction, AI integration, positioning and execution.",
    details: [
      "Product direction",
      "AI integration",
      "Positioning and execution support",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <div className="max-w-3xl">
        <div className="accent-line mb-8" />
        <h1 className="text-display mb-8 text-white">Work</h1>
        <p className="text-subheading mb-12 text-white/65">
          Products, prototypes and advisory work across AI software, coding
          agents, workflow systems and product discovery.
        </p>
        <BookingButtons />
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {work.map((item) => (
          <article key={item.title} className="glass-card flex flex-col p-7 sm:p-8">
            <div className="mb-4 flex items-center gap-2.5">
              {item.live && (
                <span className="relative flex h-1.5 w-1.5" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                </span>
              )}
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent/80">
                {item.status}
              </p>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              {item.title}
            </h2>
            <p className="mb-7 text-[15px] leading-relaxed text-white/65">
              {item.description}
            </p>
            <ul className="space-y-3">
              {item.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-[14px] leading-relaxed text-white/60"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 self-start text-[13px] font-medium text-accent transition-colors hover:text-accent-bright"
              >
                Visit {item.link.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
