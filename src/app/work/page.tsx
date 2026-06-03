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
  description: string;
  outcome: string;
  stack: string[];
  details: string[];
  live?: boolean;
  links?: WorkLink[];
};

const work: WorkItem[] = [
  {
    title: "LLMnesia",
    category: "AI workflow product",
    status: "Live Chrome extension",
    role: "Founder, product builder",
    live: true,
    description:
      "Local-first AI conversation search for people who need to recover useful thinking, decisions and outputs from previous ChatGPT, Claude, Gemini and other LLM chats.",
    outcome:
      "Turned a recurring AI workflow problem into a packaged browser product with its own acquisition site and analytics loop.",
    stack: ["Chrome Extension", "Next.js", "Local-first search", "GA4", "PostHog"],
    details: [
      "Extension architecture built around privacy-sensitive local retrieval.",
      "SEO and LLM-discovery site with MDX content, sitemap, feed and llms.txt assets.",
      "Weekly insights dashboard that turns PostHog, GA4 and Search Console data into action plans.",
    ],
    links: [
      { href: "https://llmnesia.com", label: "llmnesia.com", kind: "Live" },
      {
        href: "https://github.com/KeiranCPFlynn/llmnesia-site-njs",
        label: "LLMnesia site",
        kind: "GitHub",
      },
      {
        href: "https://github.com/KeiranCPFlynn/llmnesia-insights",
        label: "Insights dashboard",
        kind: "GitHub",
      },
    ],
  },
  {
    title: "SchoolAI",
    category: "AI education platform",
    status: "12,000+ users",
    role: "Founder, product builder",
    live: true,
    description:
      "AI education platform built around practical classroom workflows and scaled through utility rather than paid distribution.",
    outcome: "Reached 12,000+ users with zero paid acquisition.",
    stack: ["AI product", "Education workflows", "Organic growth", "User feedback"],
    details: [
      "Shaped the product around repeated teacher and student use cases.",
      "Validated demand through organic adoption rather than advertising spend.",
      "Learned where AI products need workflow fit, not just model access.",
    ],
    links: [{ href: "https://schoolai.co", label: "schoolai.co", kind: "Live" }],
  },
  {
    title: "LunaCradle",
    category: "Consumer AI product",
    status: "Live AI product",
    role: "Product builder",
    live: true,
    description:
      "AI-powered baby sleep guidance product that turns parent intake data into structured, personalised sleep plans.",
    outcome:
      "Shipped a full product surface with intake, paid access and personalised LLM output.",
    stack: ["Next.js", "Supabase", "Stripe", "LLM provider", "Vercel"],
    details: [
      "End-to-end product flow from landing page to intake to generated plan.",
      "Supabase-backed application state and Stripe payment flow.",
      "Prompt and output structure designed for practical, parent-readable guidance.",
    ],
    links: [
      { href: "https://lunacradle.com", label: "lunacradle.com", kind: "Live" },
    ],
  },
  {
    title: "Flow402",
    category: "Agent payments prototype",
    status: "Prototype and demo system",
    role: "Product builder",
    description:
      "Web3 and agent payments exploration around 402-style payment flows, credits, vendor gateways and USDC-based machine-to-machine transactions.",
    outcome:
      "Built enough working surface to test the product story, gateway mechanics and demo flow before deeper investment.",
    stack: ["Next.js", "Express", "Supabase", "x402", "Base", "USDC", "HMAC"],
    details: [
      "Static marketing site for private beta positioning and interest capture.",
      "Credits dashboard and vendor demo service for paid API call simulation.",
      "Signed gateway verification, idempotent ledger handling and Base Sepolia fork testing.",
    ],
    links: [
      { href: "https://flow402.com", label: "flow402.com", kind: "Site" },
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
    title: "Project Redback",
    category: "Founder advisory",
    status: "Founder advisory",
    role: "Product and AI advisor",
    description:
      "Advisory work for a founder shaping product direction, AI integration, positioning and execution cadence.",
    outcome:
      "Helped translate broad product ambition into clearer build priorities and execution decisions.",
    stack: ["Product strategy", "AI integration", "Positioning", "Execution planning"],
    details: [
      "Clarified where AI should sit in the product rather than bolting it on as a feature.",
      "Worked through product direction, positioning and founder-level decision tradeoffs.",
      "Supported execution planning so the next build steps were concrete.",
    ],
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
      "Self-hosted product intelligence dashboard that combines PostHog, GA4, Search Console, Supabase and LLM analysis into weekly action plans.",
    stack: ["Next.js", "Supabase", "PostHog", "GA4", "Search Console", "LLMs"],
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
  { value: "5", label: "live or demo products" },
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
            <a
              href="https://cal.com/keirancpflynn/10-min-fit-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a fit call
              <span aria-hidden="true">-&gt;</span>
            </a>
            <Link href="/contact" className="btn-ghost">
              Send a brief
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
              <p className="mb-5 text-[15px] leading-relaxed text-white/65">
                {item.description}
              </p>
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
              <p className="mb-5 text-[15px] leading-relaxed text-white/75">
                {item.outcome}
              </p>
              <ul className="grid gap-4 xl:grid-cols-3">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-[8px] border border-white/10 bg-white/[0.025] px-5 py-5 text-[13px] leading-[1.75] text-white/62"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
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
