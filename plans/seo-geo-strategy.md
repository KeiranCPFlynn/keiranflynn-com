# AI Product Content System: SEO + GEO Master Plan

This is the operating system for the `/writing` section of keiranflynn.com. It exists so that any capable model can read this one document, see the full topic universe, identify what has not been written yet, and produce a publishable post that fills a real gap.

The site is an AI product builder knowledge base for founders, operators and small teams searching around AI product strategy, coding agents, prototype-to-product work, AI MVP builds, internal tools and AI search visibility.

> Note: The old `/blog` section (legacy business-English coaching content, ~50 posts) was retired and moved to `archive/blog/`. It is no longer built or served, and `/blog/*` now 301-redirects to `/writing`. All current content lives under `src/content/writing/`. Do not add posts to `archive/`.

## 1. How to use this plan

This document is built to be handed directly to an AI. The loop is:

1. Read Section 4 (Exhaustive Topic Map). Every row has a `Status`.
2. Pick the highest-priority row where `Status = Gap`. Ties break toward rows that strengthen an existing cluster hub.
3. Confirm the topic is not already covered by reading the current inventory (Section 3) and, if available, the live files in `src/content/writing/`.
4. Write the post using the Content Standard (Section 6), GEO Standard (Section 7) and the generation prompt in `plans/mdx-post-generation-prompt.md`.
5. Wire internal links per the Linking Architecture (Section 8).
6. Run the Per-Post Quality Bar (Section 10) and Technical Checklist (Section 9).
7. Save the `.mdx` file to `src/content/writing/<slug>.mdx`, update this plan's `Status` for that row to `Published`, and update `llms.txt` if it is a pillar post.

One post per run. Finish it completely rather than starting several.

**Two hand-off modes:**

- **Coding agent** (has repo access): runs the full loop above, saves the `.mdx`, and updates this plan's `Status`. Use `plans/mdx-post-generation-prompt.md`.
- **One-off chat AI** (no repo access, cannot update records): paste `plans/standalone-content-prompt.md` as-is. It self-selects a gap by fetching the live `llms.txt` / `sitemap.xml` and diffing against the embedded topic universe (falling back to the embedded universe if it cannot browse), then returns only MDX. You save the file and flip the `Status` yourself. Use a browsing-enabled model for best results.

## 2. Positioning and audience

**Positioning:** Keiran Flynn is an AI product builder, based in Thailand, working remotely with founders, operators and small teams. He turns vague AI ideas into scoped products, prototypes, internal tools and live MVPs.

**Proof to draw on (use concretely, never invent metrics):**

- SchoolAI: scaled to 12,000+ users with zero paid acquisition.
- LLMnesia: live Chrome extension for local-first AI conversation search across major LLM platforms.
- LunaCradle: live AI baby-sleep guidance product on Next.js, Supabase, Stripe and an LLM provider.
- Flow402: x402, Base and USDC agent-payments prototype.
- LLMnesia Insights, Job Radar, this site, and 10+ further products, prototypes and demos.

**Stack to reference where relevant:** Claude Code, Codex, ChatGPT, Claude, Gemini, Next.js, Supabase, PostHog, Stripe, APIs, Chrome Extensions, agentic workflows.

**Primary readers:**

| Reader | What they are trying to do |
|---|---|
| Non-technical founder | Turn an AI idea or prototype into something real users can use |
| Technical founder / solo builder | Use coding agents and AI well without shipping fragile software |
| Operator / ops lead | Automate internal workflows with AI and internal tools |
| Product manager at a small team | Bring AI into a product with sound judgment, not hype |
| Growth / marketing lead | Make a product discoverable in AI search and LLM answers |

Every post must serve at least one of these readers and leave them with a clearer decision than they had before.

## 3. Current writing inventory

| Slug | Cluster | Target keyword | Status |
|---|---|---|---|
| coding-agents-for-product-teams | B Coding Agents | coding agents for product teams | Published |
| ai-prototype-to-product | C Prototype to Product | ai prototype to product | Published |
| practical-ai-product-strategy | A AI Product Strategy | practical ai product strategy | Published |
| when-should-a-product-use-ai | A AI Product Strategy | when to use ai in a product | Published |
| evaluate-ai-product-ideas | A AI Product Strategy | how to evaluate ai product ideas | Published |
| claude-code-vs-codex-product-teams | B Coding Agents | claude code vs codex | Published |
| agentic-coding-workflow | B Coding Agents | agentic coding workflow | Published |
| coding-agents-non-technical-founders | B Coding Agents | coding agents for non technical founders | Published |
| hardening-ai-prototype | C Prototype to Product | hardening ai prototype | Published |
| no-code-ai-build-to-product | C Prototype to Product | lovable bolt to production | Published |
| ai-mvp-development-process | D AI MVP Build Process | ai mvp development process | Published |
| ai-mvp-cost | D AI MVP Build Process | cost to build ai mvp | Published |
| llm-discovery-for-startups | F LLM Discovery, GEO and AI Search Visibility | llm discovery for startups | Published |
| what-is-geo | F LLM Discovery, GEO and AI Search Visibility | generative engine optimization | Published |
| llms-txt-for-product-sites | F LLM Discovery, GEO and AI Search Visibility | llms.txt | Published |
| get-cited-by-ai-search | F LLM Discovery, GEO and AI Search Visibility | how to get cited by chatgpt | Published |
| reviewing-ai-generated-code | B Coding Agents | reviewing ai generated code | Published |
| ai-feature-vs-ai-product | A AI Product Strategy | ai feature vs ai product | Published |
| ai-demo-traps | C Prototype to Product | ai demo vs product | Published |
| ai-product-launch-checklist | D AI MVP Build Process | ai product launch checklist | Published |
| ai-workflow-automation-for-startups | E AI Internal Tools and Workflow Automation | ai workflow automation for startups | Published |
| internal-ai-tools-small-teams | E AI Internal Tools and Workflow Automation | internal ai tools | Published |
| pricing-an-ai-product | A AI Product Strategy | how to price an ai product | Published |
| ai-build-vs-buy | A AI Product Strategy | ai build vs buy | Published |
| coding-agents-mvp-development | B Coding Agents | coding agents for mvp | Published |
| specs-for-coding-agents | B Coding Agents | how to prompt coding agents | Published |
| vibe-coding-to-production | B Coding Agents | vibe coding to production | Published |
| prototype-to-production-infrastructure | C Prototype to Product | prototype to production infrastructure | Published |
| testing-ai-products | C Prototype to Product | how to test ai products | Published |
| llm-cost-and-latency | C Prototype to Product | llm cost optimization | Published |
| seo-for-ai-product-companies | F LLM Discovery, GEO and AI Search Visibility | seo for ai startups | Published |

When a post is published, add its row here and flip its `Status` in Section 4.

## 4. Exhaustive topic map

This is the full content universe. `Stage` is funnel position: TOFU (awareness/informational), MOFU (consideration/comparison/framework), BOFU (decision/commercial). `Pri` is priority: P1 ship first, P2 next, P3 backlog. Cluster hubs are marked; a hub is the pillar page that spokes link up to.

### Cluster A: AI Product Strategy

Hub: `practical-ai-product-strategy` (Published).

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| Practical AI product strategy (hub) | practical-ai-product-strategy | practical ai product strategy | MOFU | P1 | Published |
| When should a product use AI | when-should-a-product-use-ai | when to use ai in a product | MOFU | P1 | Published |
| How to evaluate an AI product idea | evaluate-ai-product-ideas | how to evaluate ai product ideas | MOFU | P1 | Published |
| AI feature vs AI product | ai-feature-vs-ai-product | ai feature vs ai product | TOFU | P2 | Published |
| AI product failure states and fallbacks | ai-product-failure-states | ai product failure modes | MOFU | P2 | Gap |
| Pricing an AI product | pricing-an-ai-product | how to price an ai product | MOFU | P2 | Published |
| AI product metrics that matter | ai-product-metrics | ai product metrics | MOFU | P3 | Gap |
| Build vs buy for AI features | ai-build-vs-buy | ai build vs buy | MOFU | P2 | Published |
| Scoping an AI product roadmap | ai-product-roadmap | ai product roadmap | MOFU | P3 | Gap |

### Cluster B: Coding Agents and Agentic Workflows

Hub: `coding-agents-for-product-teams` (Published).

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| Coding agents for product teams (hub) | coding-agents-for-product-teams | coding agents for product teams | MOFU | P1 | Published |
| Claude Code vs Codex for product teams | claude-code-vs-codex-product-teams | claude code vs codex | MOFU | P1 | Published |
| Agentic coding workflow, end to end | agentic-coding-workflow | agentic coding workflow | TOFU | P1 | Published |
| Coding agents for MVP development | coding-agents-mvp-development | coding agents for mvp | MOFU | P2 | Published |
| How to review code written by AI agents | reviewing-ai-generated-code | reviewing ai generated code | MOFU | P2 | Published |
| Writing specs and prompts for coding agents | specs-for-coding-agents | how to prompt coding agents | TOFU | P2 | Published |
| When coding agents fail and how to recover | coding-agent-failure-modes | coding agent limitations | MOFU | P2 | Gap |
| Coding agents for non-technical founders | coding-agents-non-technical-founders | coding agents for non technical founders | TOFU | P1 | Published |
| Setting up a repo for agentic development | repo-setup-for-coding-agents | repo setup for ai agents | MOFU | P3 | Gap |
| Vibe coding to production: what changes | vibe-coding-to-production | vibe coding to production | TOFU | P2 | Published |

### Cluster C: Prototype to Product

Hub: `ai-prototype-to-product` (Published).

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| From AI prototype to product (hub) | ai-prototype-to-product | ai prototype to product | TOFU | P1 | Published |
| Hardening an AI prototype for real users | hardening-ai-prototype | hardening ai prototype | MOFU | P1 | Published |
| AI demo traps and how to avoid them | ai-demo-traps | ai demo vs product | MOFU | P2 | Published |
| Turning a v0 / Lovable / Bolt build into a real app | no-code-ai-build-to-product | lovable bolt to production | MOFU | P1 | Published |
| Adding auth, data and payments to a prototype | prototype-to-production-infrastructure | prototype to production infrastructure | MOFU | P2 | Published |
| Testing and reliability for AI products | testing-ai-products | how to test ai products | MOFU | P2 | Published |
| Handling LLM cost and latency in production | llm-cost-and-latency | llm cost optimization | MOFU | P2 | Published |
| Observability and evals for AI features | ai-evals-and-observability | ai evals | MOFU | P3 | Gap |

### Cluster D: AI MVP Build Process

Hub: `ai-mvp-development-process` (Published).

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| AI MVP development process (hub) | ai-mvp-development-process | ai mvp development process | MOFU | P1 | Published |
| How long it takes to build an AI MVP | ai-mvp-timeline | how long to build an ai mvp | MOFU | P2 | Gap |
| How much an AI MVP costs to build | ai-mvp-cost | cost to build ai mvp | BOFU | P1 | Published |
| AI product launch checklist | ai-product-launch-checklist | ai product launch checklist | MOFU | P2 | Published |
| Scoping an AI MVP without overbuilding | scoping-an-ai-mvp | how to scope an mvp | MOFU | P2 | Gap |
| Choosing a tech stack for an AI MVP | ai-mvp-tech-stack | ai mvp tech stack | MOFU | P3 | Gap |
| From idea to MVP in a sprint | ai-idea-to-mvp-sprint | ai idea to mvp | TOFU | P2 | Gap |

### Cluster E: AI Internal Tools and Workflow Automation

Hub: `ai-workflow-automation-for-startups` (Published).

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| AI workflow automation for startups (hub) | ai-workflow-automation-for-startups | ai workflow automation for startups | MOFU | P2 | Published |
| Building internal AI tools for a small team | internal-ai-tools-small-teams | internal ai tools | MOFU | P2 | Published |
| Automating ops with LLMs without breaking things | automating-ops-with-llms | automate operations with ai | MOFU | P3 | Gap |
| When to automate vs keep a human in the loop | human-in-the-loop-ai | human in the loop ai | MOFU | P3 | Gap |
| AI agents for back-office workflows | ai-agents-back-office | ai agents for operations | MOFU | P3 | Gap |
| Connecting AI to your existing tools and data | ai-integration-existing-tools | connect ai to existing tools | MOFU | P3 | Gap |

### Cluster F: LLM Discovery, GEO and AI Search Visibility

Hub: `llm-discovery-for-startups` (Published). This cluster is both a topic and a demonstration of the site's own practice.

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| LLM discovery for startups (hub) | llm-discovery-for-startups | llm discovery for startups | MOFU | P1 | Published |
| What is GEO (generative engine optimization) | what-is-geo | generative engine optimization | TOFU | P1 | Published |
| How to add llms.txt to a product site | llms-txt-for-product-sites | llms.txt | MOFU | P1 | Published |
| Getting cited by ChatGPT and AI Overviews | get-cited-by-ai-search | how to get cited by chatgpt | MOFU | P1 | Published |
| SEO for AI product companies | seo-for-ai-product-companies | seo for ai startups | MOFU | P2 | Published |
| AI search visibility checklist | ai-search-visibility-checklist | ai search visibility | MOFU | P2 | Gap |
| Structured data for AI answer engines | structured-data-for-ai-search | structured data for ai search | MOFU | P3 | Gap |
| Controlling AI crawlers (GPTBot, OAI-SearchBot) | ai-crawler-control | gptbot oai-searchbot | MOFU | P3 | Gap |
| Writing content LLMs can extract and cite | writing-for-llm-extraction | content for llm citation | TOFU | P2 | Gap |

### Cluster G: Founder Decision Guides

No single hub; these link up to the most relevant pillar. High commercial pull.

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| Should you hire an AI product builder or an agency | ai-product-builder-vs-agency | ai consultant vs agency | BOFU | P2 | Gap |
| Fractional AI product lead: what it is and when to use one | fractional-ai-product-lead | fractional ai product lead | BOFU | P2 | Gap |
| Risks of building AI products and how to manage them | ai-product-risks | ai product risks | MOFU | P3 | Gap |
| Common mistakes founders make with AI products | ai-product-mistakes | ai product mistakes | TOFU | P2 | Gap |
| How to brief a developer or builder on an AI product | briefing-an-ai-build | how to brief an ai project | MOFU | P3 | Gap |

### Cluster H: Working With an AI Product Builder (commercial)

BOFU intent. These map directly to `/services` and `/contact`. Write sparingly and only when the query is real; over-producing commercial pages dilutes the cluster.

| Topic | Slug | Target keyword | Stage | Pri | Status |
|---|---|---|---|---|---|
| What an AI product sprint includes | ai-product-sprint | ai product sprint | BOFU | P2 | Gap |
| AI MVP build partner: how it works | ai-mvp-build-partner | ai mvp build partner | BOFU | P3 | Gap |
| Working with a remote AI product builder | remote-ai-product-builder | hire ai product builder | BOFU | P3 | Gap |

When all P1 rows are Published, move to P2, then P3. If every row in this map is Published, expand the map: add new rows under the closest cluster, keep slugs short and stable, and only add topics tied to a real query a target reader would type.

## 5. Source principles

Operate from the published guidance, not from SEO folklore:

- Google AI features: https://developers.google.com/search/docs/appearance/ai-overviews
- Google helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google structured data: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- OpenAI crawlers: https://platform.openai.com/docs/bots
- OpenAI publisher FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a

Practical interpretation:

- There is no separate trick for AI Overviews or AI Mode. The same fundamentals apply: crawlability, snippet eligibility, helpful content, reliable technical implementation.
- ChatGPT search inclusion depends on allowing OAI-SearchBot. GPTBot relates to training, not search inclusion. They are separate decisions.
- Bing and Copilot rely on crawlability, accurate indexing, freshness, structured content and clear authority signals.
- Structured data helps machines parse a page; it supplements visible, useful content, it does not replace it.

## 6. Content standard

Write useful, search-facing guides. Depth comes from answering the query better than the competing pages, not from a word target. Google explicitly warns against writing to a word count.

**Depth guide:**

| Type | Words | Use when |
|---|---|---|
| Tactical post | 900-1,200 | The query is narrow and has one clear answer |
| Standard guide | 1,400-2,000 | The query needs context, tradeoffs and a workflow |
| Pillar / hub | 2,000-3,000 | The query is broad; spokes will link up to it |

A post that tries to answer more than one major intent should be split.

**Canonical frontmatter.** The site loader (`src/lib/writing.ts`) reads `title`, `date`, `description`, `tags`, `author`. The remaining fields are planning metadata that travel with the file. Always include `author` so the byline renders. The slug is the filename; the `slug` field is informational only.

```yaml
---
title: "Specific, search-friendly title"
slug: "url-slug"
description: "One sentence under 155 characters for searchers and humans."
date: "YYYY-MM-DD"
author: "Keiran Flynn"
status: "published"
pillar: "Cluster name from Section 4"
target_keyword: "primary keyword"
search_intent: "Who the reader is and what they need"
tags:
  - ai-product-building
  - one-specific-topic
  - another-specific-topic
---
```

**Structure of the body** (no top-level H1, the template renders the title):

1. Opening: name the real problem in the first 100 words, use the target phrase once, naturally, and state the direct answer or thesis early.
2. Body: 5-7 descriptive H2s; at least one comparison table that compares choices, risks or decisions; one concrete workflow, checklist or decision framework; specific examples from the proof list in Section 2 where they fit.
3. FAQ: 4-6 questions people actually search, each answer self-contained and citable.
4. Close: a concise conclusion, and a CTA only when it fits, e.g. "If you are turning an AI idea into a real product, book a 10-minute fit call."

**Voice:**

- Write like a senior product builder explaining what actually works.
- Be specific: concrete workflows, failure modes, tradeoffs, named examples.
- No fabricated stories, numbers or certainty.
- No em dashes or en dashes. Use periods, commas, colons, semicolons or parentheses.
- Avoid filler phrases: "the bottom line", "not just X but Y", "in today's fast-paced world", "unlock", "game-changer", "seamless", "delve", "landscape", "leverage" unless plainly best, "crucial" unless plainly best, "it depends" unless followed by a decision rule.

## 7. GEO and LLM extraction standard

LLM-discoverable content is content an answer engine can extract, attribute and cite. Write so that a single passage can stand alone in an AI answer with attribution.

- Lead each section with a clear, direct answer under a descriptive heading; supporting detail follows.
- Define terms explicitly before using them.
- Use comparison tables and named frameworks; both are easy to lift and cite.
- Make author and topic expertise visible.
- Do not hide the key answer inside an image, SVG or vague diagram. Text carries the meaning.
- For each pillar, include one explicit "key answer" sentence. Example: "For product teams, coding agents are best used as execution partners for bounded software tasks, not as replacements for product judgment or engineering review."
- Update `public/llms.txt` and `public/llms-full.txt` whenever positioning changes or a pillar post ships: add the new URL to the Writing cluster with a one-line description.

## 8. Internal linking architecture

The site uses a hub-and-spoke model. Each cluster in Section 4 has a hub (pillar). Spokes link up to their hub; the hub links down to its strongest spokes.

Every post links to:

- Its cluster hub (or, for cross-cluster relevance, the nearest hub).
- 1-3 sibling posts in the same or an adjacent cluster.
- One commercial or conversion page where natural: `/services`, `/contact`, `/conversation`, `/work` or `/about`.

Use descriptive anchor text that contains the target concept of the destination, not "click here". Add links only where they genuinely help the reader.

## 9. Technical SEO checklist

The infrastructure already exists: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/JsonLd.tsx`, and Article JSON-LD on writing pages. Per post, confirm:

- [ ] URL slug is short, descriptive and stable.
- [ ] Title and H1 match query intent without clickbait.
- [ ] Meta description (`description`) explains the practical value, under 155 characters.
- [ ] `author: "Keiran Flynn"` is present so the byline and Article schema author render.
- [ ] Article JSON-LD renders with correct title, date and author.
- [ ] The page is indexable and snippet-eligible.
- [ ] The page appears in the sitemap automatically after the file is added.
- [ ] Tables render cleanly on mobile.
- [ ] The post links to its hub plus at least two related internal URLs.
- [ ] No planning notes, suggested titles or draft instructions render in the visible content.
- [ ] `llms.txt` / `llms-full.txt` updated if it is a pillar post.

## 10. Per-post quality bar

A post is ready when:

- It answers a specific query a target reader from Section 2 would type.
- It contains a concrete workflow, checklist or decision framework.
- It contains at least one comparison table that compares real choices, risks or decisions.
- It uses at least one specific example from the proof list, where relevant.
- It has the required internal links wired (Section 8).
- It reads like grounded product advice, with a clear decision for the reader to take away.
- It carries no fabricated metrics, stories or certainty, and no filler phrases from Section 6.
- The frontmatter matches Section 6 exactly, including `author`.

## 11. Publishing workflow

1. Pick the highest-priority `Gap` row in Section 4.
2. Write the search intent in one sentence.
3. Check Section 3 and the live files for overlap; if it overlaps an existing post, improve that post instead.
4. Draft the post with the generation prompt (`plans/mdx-post-generation-prompt.md`) and this standard.
5. Add internal links and at least one comparison table.
6. Run the Quality Bar (Section 10) and Technical Checklist (Section 9).
7. Save to `src/content/writing/<slug>.mdx`.
8. Flip the row's `Status` to `Published` here and add it to Section 3.
9. Run lint and build; check the page on desktop and mobile.
10. Update `llms.txt` / `llms-full.txt` for pillar posts.
11. Submit or monitor through Google Search Console and Bing Webmaster Tools.
