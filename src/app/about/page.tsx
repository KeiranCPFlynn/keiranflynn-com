import Image from "next/image";
import { BookingButtons } from "@/components/BookingButtons";

const experience = [
  "Built and scaled SchoolAI to 12,000+ users with zero paid acquisition.",
  "Built LLMnesia, a live Chrome extension for local-first AI conversation search.",
  "Built LunaCradle, a live AI-powered baby sleep guidance product.",
  "Built Flow402, an agent payments prototype using x402, Base and USDC.",
  "10+ products, prototypes and demos across AI workflows, web3 experiments, internal tools and product sites.",
  "25+ years in tech and IT, with focused product and AI build work since 2022.",
];

const tools = [
  "Claude Code",
  "Codex",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Next.js",
  "Supabase",
  "PostHog",
  "Stripe",
  "APIs",
  "Chrome Extensions",
  "Agentic workflows",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_0.9fr] md:gap-14">
        <div>
          <div className="accent-line mb-8" />
          <h1 className="text-display mb-10 text-white">
            AI product builder, founder and operator.
          </h1>
          <div className="space-y-6 text-[16.5px] leading-[1.8] text-white/65">
            <p>
              I help founders, operators and teams turn unclear AI ideas into
              scoped products, prototypes, internal tools and live MVPs.
            </p>
            <p>
              My work sits across product, UX, technical architecture and build.
              I use coding agents to move quickly, but I care most about whether
              the thing being built is useful, testable and commercially
              sensible.
            </p>
            <p>
              I am hands-on with modern full-stack tooling and agentic
              workflows, and I advise through Project Redback on product
              direction, AI integration, positioning and execution.
            </p>
          </div>
          <div className="mt-12">
            <BookingButtons />
          </div>
        </div>

        <div className="relative md:pt-2">
          <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-cyan/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            <Image
              src="/Keiran Flynn 2.1 Medium.jpeg"
              alt="Portrait of Keiran Flynn"
              width={596}
              height={596}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0d12]/70 via-transparent to-transparent" />
          </div>
          <p className="mt-4 text-center text-[12px] uppercase tracking-[0.18em] text-white/40">
            Keiran Flynn
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <section className="glass-card p-7 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Grounded Proof
          </h2>
          <ul className="space-y-4">
            {experience.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-white/65">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass-card p-7 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">Tooling</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[13px] text-white/65"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
