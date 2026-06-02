"use client";

import Link from "next/link";
import { BookingButtons } from "@/components/BookingButtons";
import { JsonLd } from "@/components/JsonLd";
import {
  AnimatedSection,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

const proofItems = [
  "SchoolAI: 12,000+ users",
  "LLMnesia: live Chrome extension",
  "LunaCradle: live AI product",
  "25+ years technical delivery",
];

const helpItems = [
  {
    title: "AI Product Sprints",
    text: "For founders and teams with a promising AI idea but no clear product shape.",
  },
  {
    title: "MVP Builds",
    text: "For scoped AI products, internal tools, SaaS features and workflow systems.",
  },
  {
    title: "Fractional AI Product Lead",
    text: "For teams that need AI and product judgment, technical scoping and execution support without hiring full-time.",
  },
];

const workItems = [
  {
    title: "LLMnesia",
    text: "Local-first Chrome extension for searching AI conversations across major LLM platforms.",
  },
  {
    title: "SchoolAI",
    text: "AI education platform scaled to 12,000+ users with zero paid acquisition.",
  },
  {
    title: "LunaCradle",
    text: "AI-powered baby sleep guidance product using structured knowledge and personalised LLM outputs.",
  },
  {
    title: "Flow402",
    text: "Agent payment prototype using x402, Base and USDC, shelved after discovery showed weak timing.",
  },
];

const processItems = [
  "Clarify the actual problem",
  "Turn messy ideas into product shape",
  "Define user flows and technical architecture",
  "Build fast with coding agents and modern full-stack tooling",
  "Instrument, test and iterate using real usage signals",
];

export default function HomePage() {
  return (
    <>
      <JsonLd />

      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="ambient-hero" />
        <div className="grid-overlay" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0d12] to-transparent" />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-1.5 text-[12px] tracking-[0.04em] text-white/70 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                </span>
                Available for new AI product work
              </div>
              <h1 className="text-display mb-8">
                <span className="gradient-text">AI Product Builder</span>
                <span className="text-white">
                  {" "}
                  for founders and teams building with coding agents
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-subheading mb-12 max-w-2xl text-white/65">
                I help turn vague AI ideas into scoped products, prototypes,
                internal tools and live MVPs using Claude Code, Codex and modern
                full-stack tooling.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <BookingButtons />
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {proofItems.map((item) => {
                  const [label, ...rest] = item.split(":");
                  const detail = rest.join(":").trim();
                  return (
                    <div
                      key={item}
                      className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 transition-colors duration-500 hover:border-accent/30"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      {detail ? (
                        <>
                          <p className="text-[15px] font-semibold text-white">
                            {label}
                          </p>
                          <p className="mt-1 text-[13px] leading-relaxed text-white/55">
                            {detail}
                          </p>
                        </>
                      ) : (
                        <p className="text-[14px] leading-relaxed text-white/75">
                          {label}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading mb-12 text-white">What I Help With</h2>
        </FadeIn>
        <StaggerContainer className="grid gap-5 md:grid-cols-3" stagger={0.12}>
          {helpItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card h-full p-7">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <div className="section-divider" />

      <AnimatedSection>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <div className="accent-line mb-6" />
            <h2 className="text-heading text-white">Recent Work</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link href="/work" className="btn-secondary">
              See Work
            </Link>
          </FadeIn>
        </div>
        <StaggerContainer className="grid gap-5 md:grid-cols-2" stagger={0.1}>
          {workItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card h-full p-7">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <div className="section-divider" />

      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading mb-12 text-white">How I Work</h2>
        </FadeIn>
        <StaggerContainer className="grid gap-5 md:grid-cols-5" stagger={0.1}>
          {processItems.map((item, index) => (
            <StaggerItem key={item}>
              <div className="glass-card h-full p-6">
                <span className="step-number mb-5 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] leading-relaxed text-white/65">
                  {item}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <div className="section-divider" />

      <AnimatedSection>
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <FadeIn>
            <div className="accent-line mb-6" />
            <h2 className="text-heading text-white">Product Judgment First</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-[16px] leading-relaxed text-white/65">
              <p>
                I work across product, UX, technical architecture and build. I
                use coding agents to compress the loop from idea to prototype,
                but the point is not just to make a demo work.
              </p>
              <p>
                The useful work is deciding what should exist, who it serves,
                what risk needs testing, and what can ship without pretending
                the product is more mature than it is.
              </p>
            </div>
          </FadeIn>
        </div>
      </AnimatedSection>

      <div className="section-divider" />

      <AnimatedSection className="text-center">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="accent-line mx-auto mb-10" />
            <h2 className="text-heading mb-5 text-white">
              Have an AI product idea, internal workflow problem or prototype
              that needs turning into something real?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-subheading mb-12 text-white/60">
              Book an AI Product Fit Call.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <BookingButtons className="justify-center" />
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  );
}
