import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "AI Product Work",
  description:
    "Selected AI product, growth tooling, automation and web3 prototype work by Keiran Flynn.",
  path: "/work",
});

type WorkLink = {
  href: string;
  label: string;
  kind?: "Live" | "GitHub" | "Site";
};

type WorkItem = {
  title: string;
  category: string;
  status: string;
  role: string;
  problem: string;
  outcome: string;
  decisions: string[];
  learned?: string;
  stack: string[];
  live?: boolean;
  links?: WorkLink[];
};

const work: WorkItem[] = [
  {
    title: "LLMnesia",
    category: "AI workflow product",
    status: "Live Chrome extension · v0.2.5",
    role: "Founder, product builder",
    live: true,
    problem:
      "Useful thinking was getting lost. Decisions, drafts and answers from AI conversations across 13 platforms, including ChatGPT, Claude, Gemini, DeepSeek and Grok, were effectively unrecoverable, and most tools meant handing conversation history to a cloud service.",
    outcome:
      "1,600+ organic installs with no paid acquisition. The MCP server, Vault (paid cloud sync with paying customers) and a live PWA are all shipped.",
    decisions: [
      "Treated privacy as the product: all data stays on device, which shaped the entire local retrieval architecture rather than being a settings toggle.",
      "Shipped an MCP server so the same local index is usable from coding agents and LLM tools, not only the extension UI.",
      "Monetised with Vault, a paid end-to-end encrypted cloud sync tier, rather than ads or data monetisation.",
      "Built LLMnesia Insights, a supporting agentic analytics pipeline: PostHog, GA4 and Search Console evidence is collected into Supabase, then a coding agent reasons over the evidence to publish structured weekly product reports.",
      "Closed the loop on distribution with an SEO and LLM-discovery site (MDX content, sitemap, feed, llms.txt) to drive organic installs.",
    ],
    learned:
      "Local-first is both an architecture and an acquisition story: with no acquisition budget, the privacy guarantee has to do the persuading.",
    stack: ["Chrome Extension", "MCP server", "Next.js", "Local-first search", "GA4", "PostHog"],
    links: [
      { href: "https://llmnesia.com", label: "llmnesia.com", kind: "Live" },
      {
        href: "https://chromewebstore.google.com/detail/llmnesia/leekfgbdojiaabifbjbbgiiclannjdkf",
        label: "Chrome Web Store",
        kind: "Live",
      },
      {
        href: "https://github.com/KeiranCPFlynn/llmnesia-site-njs",
        label: "LLMnesia site",
        kind: "GitHub",
      },
      {
        href: "https://github.com/KeiranCPFlynn/llmnesia-insights",
        label: "Insights pipeline",
        kind: "GitHub",
      },
    ],
  },
  {
    title: "SchoolAI",
    category: "AI education platform",
    status: "Live · 12,000+ users",
    role: "Founder, product builder",
    live: true,
    problem:
      "Teachers and school administrators needed practical writing support built around real school workflows, not a general-purpose chat interface bolted onto a syllabus.",
    outcome:
      "Reached 12,000+ users with zero paid acquisition and sustained it without an acquisition budget.",
    decisions: [
      "Built around the writing workflows teachers and admins repeat, rather than a general-purpose chat interface.",
      "Scaled through SEO, organic content and directory listings instead of advertising spend, so every improvement had to earn real usage.",
    ],
    learned: "AI products need workflow fit, not just model access.",
    stack: ["AI product", "Education workflows", "SEO and organic content", "User feedback"],
    links: [{ href: "https://schoolai.co", label: "schoolai.co", kind: "Live" }],
  },
  {
    title: "LunaCradle",
    category: "Consumer AI product",
    status: "Live AI product",
    role: "Product builder",
    live: true,
    problem:
      "Parents get generic, conflicting baby sleep advice, and a one-off generated plan goes stale as the baby changes. Raw LLM output is not reliable or readable enough to act on.",
    outcome:
      "Working MVP covering the full loop: intake questionnaire, AI-generated plan, daily sleep diary, weekly AI reviews, living plan updates, PDF export and paid access.",
    decisions: [
      "Grounded generated plans in an AI-structured knowledge base of 73,000 words, organised by baby age, sleep problem and training method, with a loader that selects only the relevant knowledge for each intake.",
      "Designed the plan as a living document: parents log a daily sleep diary, a weekly AI review runs against it, and the plan updates instead of going stale.",
      "Designed the prompt and output structure around practical, parent-readable plans, not raw model output.",
      "Kept the stack conventional: Next.js, Supabase and Stripe over the Gemini API, so build time went into product rather than plumbing.",
    ],
    learned:
      "Structured knowledge is what turns LLM generation from a demo into a product a parent can act on.",
    stack: ["Next.js", "Supabase", "Stripe", "Gemini API", "Resend", "PDF generation", "Vercel"],
    links: [
      { href: "https://lunacradle.com", label: "lunacradle.com", kind: "Live" },
    ],
  },
  {
    title: "Flow402",
    category: "Agent payments prototype",
    status: "Prototype and demo system",
    role: "Product builder",
    problem:
      "Agent-to-agent payments had no established product shape. The open question was how an API call between machines could carry its own payment without breaking the call, and what a developer would trust enough to integrate.",
    outcome:
      "A working end-to-end demo: a non-upgradeable USDC treasury contract deployed on Base Sepolia, a credits gateway and dashboard on Vercel, and a vendor demo service on DigitalOcean, all wired into a scripted 402, top-up and retry flow.",
    decisions: [
      "Designed the flow so agents pay in credits while USDC settles on-chain: a 402 response triggers a top-up and a retry, so payment never breaks the API call.",
      "Wrote and deployed the on-chain treasury escrow: USDC deposits via EIP-2612 permit and Permit2, per-user spending limits enforced in the contract, gateway-only batch settlement, re-entrancy guards and Foundry test coverage.",
      "Built the off-chain side end to end: a Next.js gateway and credits dashboard with HMAC-signed vendor requests, and an Express vendor demo that renders the full request chain with inline trace logs.",
      "Tested the product story first with a static marketing site and private beta interest capture before building deeper.",
    ],
    learned:
      "Most of the difficulty in payments is the unhappy paths: spending limits, retries and settlement failure, not moving the money.",
    stack: ["Solidity", "Foundry", "Next.js", "Express", "Supabase", "x402", "Base", "USDC", "HMAC"],
    links: [
      { href: "https://flow402.com", label: "flow402.com", kind: "Site" },
      {
        href: "https://github.com/KeiranCPFlynn/flow402-escrow",
        label: "Treasury escrow",
        kind: "GitHub",
      },
      {
        href: "https://github.com/KeiranCPFlynn/flow402-landing",
        label: "Landing site",
        kind: "GitHub",
      },
      {
        href: "https://github.com/KeiranCPFlynn/flow402-credits",
        label: "Credits demo",
        kind: "GitHub",
      },
    ],
  },
  {
    title: "Know Who's Talking",
    category: "Chrome extension prototype",
    status: "Prototype",
    role: "Product builder",
    problem:
      "News readers rarely see who owns the outlet they are reading, how its owners donate politically, or other context that shapes coverage.",
    outcome:
      "Prototype stage, not launched. Early exploration of how much hidden outlet context can be surfaced at read time.",
    decisions: [
      "Scoped it as a prototype: validate that outlet ownership and donation data can be surfaced reliably before investing in a launch.",
      "Surfaces context where the article already is, rather than sending readers to a separate lookup.",
    ],
    stack: ["Chrome Extension"],
  },
  {
    title: "Project Redback",
    category: "Founder coaching",
    status: "Ongoing",
    role: "Founder coach",
    problem:
      "A founder wanted regular outside perspective to pressure-test product and AI decisions and keep build priorities clear.",
    outcome:
      "Ongoing founder coaching covering strategy, prioritisation and execution.",
    decisions: [
      "Regular sessions centred on priorities, decisions and follow-through rather than deliverables.",
      "Clarified where AI should sit in the product rather than bolting it on as a feature.",
    ],
    stack: ["Coaching", "Product strategy", "AI integration"],
  },
];

type GitHubProject = {
  title: string;
  description: string;
  stack: string[];
  href: string;
};

const githubProjects: GitHubProject[] = [
  {
    title: "LLMnesia Site",
    description:
      "Next.js App Router acquisition site for LLMnesia, built around SEO, AEO/GEO discovery, MDX content, sitemap, feed and llms.txt assets.",
    stack: ["Next.js", "MDX", "SEO", "AEO/GEO", "Vercel"],
    href: "https://github.com/KeiranCPFlynn/llmnesia-site-njs",
  },
  {
    title: "LLMnesia Insights",
    description:
      "Evidence store and read-oriented dashboard for LLMnesia: PostHog, GA4 and Search Console evidence is collected into Supabase without a model call, then a coding agent reasons over the evidence to publish structured weekly product reports.",
    stack: ["Next.js", "Supabase", "PostHog", "GA4", "Search Console", "Vercel Cron", "LLMs"],
    href: "https://github.com/KeiranCPFlynn/llmnesia-insights",
  },
  {
    title: "Cross-Chain Rebase Token Bridge",
    description:
      "Solidity and Foundry project using Chainlink CCIP to bridge interest-accruing rebase tokens across Sepolia and ZKSync testnets.",
    stack: ["Solidity", "Foundry", "Chainlink CCIP", "ZKSync"],
    href: "https://github.com/KeiranCPFlynn/cross-chain-rebase-token",
  },
  {
    title: "Merkle Airdrop",
    description:
      "ERC20 airdrop contract with Merkle proof verification, EIP-712 signatures, claim tracking and Base Sepolia deployment scripts.",
    stack: ["Solidity", "Foundry", "OpenZeppelin", "Base Sepolia"],
    href: "https://github.com/KeiranCPFlynn/merkle-airdrop",
  },
  {
    title: "Flowise Chat Embed",
    description:
      "A public JavaScript chat embed fork used to understand and customise AI chatbot surfaces for web products.",
    stack: ["JavaScript", "Web Components", "Chat UI"],
    href: "https://github.com/KeiranCPFlynn/FlowiseChatEmbed",
  },
  {
    title: "TSender UI",
    description:
      "Client-side web3 UI exercise for interacting with token sender contracts, wallet tooling and test automation patterns.",
    stack: ["Next.js", "WalletConnect", "Vitest", "Playwright"],
    href: "https://github.com/KeiranCPFlynn/ts-tsender-ui-cu",
  },
];

const stats = [
  { value: "12k+", label: "users reached" },
  { value: "6", label: "projects, prototypes and advisory work" },
  { value: "AI + web3", label: "main build focus" },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div className="max-w-3xl">
          <div className="accent-line mb-8" />
          <p className="eyebrow mb-5">Selected work</p>
          <h1 className="text-display mb-8 text-white">
            AI products, growth systems and technical prototypes.
          </h1>
          <p className="text-subheading text-white/65">
            I build practical software where the product question and the
            technical execution have to move together: AI workflow products,
            LLM-powered tools, founder prototypes, analytics systems and web3
            payment experiments.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get in touch
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link href="/services" className="btn-ghost">
              View services
            </Link>
          </div>
        </div>

        <aside className="soft-card p-6">
          <p className="eyebrow mb-5">What this shows</p>
          <div className="space-y-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-20 space-y-6">
        {work.map((item) => (
          <article
            key={item.title}
            className="soft-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)]"
          >
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-white/55">
                  {item.category}
                </span>
                <span className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-accent/85">
                  {item.live && (
                    <span className="relative flex h-1.5 w-1.5" aria-hidden>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                  )}
                  {item.status}
                </span>
              </div>
              <h2 className="text-heading mb-4 text-white">{item.title}</h2>
              <div className="mb-5">
                <p className="text-[12px] uppercase tracking-[0.14em] text-white/35">
                  Problem
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                  {item.problem}
                </p>
              </div>
              <div className="border-l border-accent/50 pl-4">
                <p className="text-[12px] uppercase tracking-[0.14em] text-white/35">
                  Role
                </p>
                <p className="mt-1 text-sm font-medium text-white/80">
                  {item.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-5">
                <p className="text-[12px] uppercase tracking-[0.14em] text-white/35">
                  Outcome
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">
                  {item.outcome}
                </p>
              </div>

              <div className="mb-5">
                <p className="text-[12px] uppercase tracking-[0.14em] text-white/35">
                  Key decisions
                </p>
                <ul className="mt-3 space-y-2.5">
                  {item.decisions.map((decision) => (
                    <li
                      key={decision}
                      className="flex gap-3 text-[14px] leading-[1.7] text-white/62"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.learned && (
                <div className="mb-6 border-l border-accent/50 pl-4">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-white/35">
                    What I learned
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {item.learned}
                  </p>
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.05] px-3 py-1 text-[12px] text-white/55"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {item.links && (
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[13px] font-medium text-accent transition-colors hover:text-accent-2"
                    >
                      <span className="text-white/35">{link.kind}</span>
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="opacity-60 transition-transform group-hover:translate-x-0.5"
                      >
                        -&gt;
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-24 border-t border-white/10 pt-16">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-4">Public GitHub builds</p>
          <h2 className="text-heading mb-5 text-white">
            Supporting technical projects.
          </h2>
          <p className="text-[15px] leading-relaxed text-white/60">
            A few smaller public repos that show the same direction of travel:
            practical AI interfaces, web3 contract work, payment primitives and
            full-stack product experiments.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {githubProjects.map((project) => (
            <a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[8px] border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-accent/45 hover:bg-accent/[0.04]"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 text-accent opacity-70 transition-transform group-hover:translate-x-0.5"
                >
                  -&gt;
                </span>
              </div>
              <p className="mb-5 text-[14px] leading-relaxed text-white/58">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
