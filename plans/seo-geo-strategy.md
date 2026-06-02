# AI Product SEO and LLM Discovery Blueprint

This site is now an AI product builder site, not an English-coaching content site. The writing section should function as a practical SEO blog and LLM-discoverable knowledge base for founders searching around AI product strategy, coding agents, prototype-to-product work and AI MVP builds.

## Source Principles

Use these primary sources as the operating baseline:

- Google AI features guidance: https://developers.google.com/search/docs/appearance/ai-overviews
- Google people-first content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google structured data guidance: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- OpenAI crawler documentation: https://platform.openai.com/docs/bots
- OpenAI publisher FAQ: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a

The practical interpretation:

- There is no separate trick for AI Overviews or AI Mode. Google says normal SEO fundamentals still apply: crawlability, eligibility for snippets, helpful content and reliable technical implementation.
- ChatGPT discovery depends on allowing OAI-SearchBot. GPTBot is separate and relates to training, not search inclusion.
- Bing and Copilot rely on crawlability, indexing accuracy, freshness, structured content and clear authority signals.
- Structured data helps machines understand the page, but it does not replace visible, useful content.

## Current Writing Inventory

| URL | Primary target | Status |
|---|---|---|
| /writing/coding-agents-for-product-teams | coding agents for product teams | Rewritten as practical guide |
| /writing/ai-prototype-to-product | ai prototype to product | Strong long-form guide; cleaned public notes |
| /writing/practical-ai-product-strategy | practical AI product strategy | Strong framework; cleaned public notes |

## Content Standard

Do not write "essays." Write useful search-facing guides.

Every new writing post should satisfy a real query and be clear enough for a founder, search crawler or LLM answer system to understand without extra context.

Target depth:

- Short tactical post: 900-1,200 words only if the query is narrow.
- Standard guide: 1,400-2,000 words.
- Pillar guide: 2,000-3,000 words, split if it tries to answer more than one major intent.

Do not chase word count for its own sake. Google explicitly warns against writing to a preferred word count. Depth should come from answering the query better than competitors, not padding.

## Required Structure for Future Posts

Each post should include:

1. Frontmatter:
   - title
   - date
   - description
   - tags
   - author
   - target_keyword
   - search_intent

2. Opening:
   - Define the problem in the first 100 words.
   - Use the target phrase naturally once.
   - State the direct answer or thesis early.

3. Body:
   - 5-7 descriptive H2s.
   - At least one comparison table.
   - One concrete workflow, checklist or decision framework.
   - Specific product examples from Keiran's work where relevant: LLMnesia, SchoolAI, LunaCradle, Flow402, LLMnesia Insights, Job Radar, this site.
   - 2-4 internal links to related writing, services, work or contact pages.

4. FAQ:
   - 4-6 direct questions.
   - Each answer should be self-contained and citable.
   - Do not stuff keywords.

5. CTA:
   - Use only when it fits naturally.
   - Prefer concise language: "If you are trying to turn an AI idea into a real product, book a 10-minute fit call."

## LLM Discovery Standard

LLM-discoverable content should be easy to extract, attribute and cite.

Write with:

- Clear definitions.
- Short, direct answers under descriptive headings.
- Comparison tables.
- Named frameworks.
- Visible author and topic expertise.
- Canonical internal links.
- No hidden reliance on images, SVGs or vague diagrams.
- Updated `llms.txt` and `llms-full.txt` when positioning or article inventory changes.

For each pillar article, add a paragraph that makes the page's key answer explicit. Example:

"For product teams, coding agents are best used as execution partners for bounded software tasks, not as replacements for product judgment or engineering review."

That sentence can stand alone in an AI answer with attribution.

## Technical SEO Checklist

For each post:

- [ ] URL is short and stable.
- [ ] Title and H1 match the query intent but are not clickbait.
- [ ] Meta description explains the practical value.
- [ ] Canonical URL is correct.
- [ ] Article JSON-LD is present.
- [ ] Sitemap includes the page automatically.
- [ ] Page is indexable and snippet-eligible.
- [ ] No internal planning notes render publicly.
- [ ] Tables render cleanly on mobile.
- [ ] The article links to at least two related internal URLs.
- [ ] `llms.txt` or `llms-full.txt` is updated for major new pillar posts.

## Priority Topic Map

### Pillar Cluster: Coding Agents

| Topic | Slug | Search intent |
|---|---|---|
| Coding agents for product teams | coding-agents-for-product-teams | What they are and how teams should use them |
| Claude Code vs Codex for product teams | claude-code-vs-codex-product-teams | Tool comparison for founders and PMs |
| Agentic coding workflow | agentic-coding-workflow | Practical workflow/process query |
| Coding agents for MVP development | coding-agents-mvp-development | Build path for founders |

### Pillar Cluster: Prototype to Product

| Topic | Slug | Search intent |
|---|---|---|
| From AI prototype to product | ai-prototype-to-product | How to harden a prototype |
| AI MVP development process | ai-mvp-development-process | Steps and scope |
| AI product launch checklist | ai-product-launch-checklist | Practical pre-launch checklist |
| How to evaluate AI product ideas | evaluate-ai-product-ideas | Discovery and product strategy |

### Pillar Cluster: AI Product Strategy

| Topic | Slug | Search intent |
|---|---|---|
| Practical AI product strategy | practical-ai-product-strategy | Strategic framework |
| When should a product use AI? | when-should-product-use-ai | Decision guide |
| AI workflow automation for startups | ai-workflow-automation-startups | Founder/internal-tools query |
| AI product failure states | ai-product-failure-states | UX and reliability query |

### Pillar Cluster: LLM Discovery and AI Search

| Topic | Slug | Search intent |
|---|---|---|
| LLM discovery for startups | llm-discovery-for-startups | How to make a site answer-engine friendly |
| llms.txt for product sites | llms-txt-product-sites | Practical implementation |
| SEO for AI product companies | seo-for-ai-product-companies | Positioning and technical SEO |
| AI search visibility checklist | ai-search-visibility-checklist | Tactical checklist |

## Repeatable Post Template

Use this outline for future posts:

```md
---
title: "Primary Keyword: Practical Angle"
date: "YYYY-MM-DD"
description: "Direct answer to the query and who it helps."
tags: ["ai-product-building", "..."]
author: "Keiran Flynn"
target_keyword: "..."
search_intent: "..."
---

# Primary Keyword: Practical Angle

Direct opening. Define the problem. State the practical answer.

## What [topic] means

Definition and why it matters.

## When it helps

Specific use cases.

## When it fails

Tradeoffs and failure modes.

## Practical workflow

Numbered process.

## Comparison table

| Option | Use when | Avoid when |
|---|---|---|

## Example from product work

Concrete example tied to LLMnesia, SchoolAI, LunaCradle, Flow402, Job Radar, LLMnesia Insights or this site.

## FAQ

### Question?

Direct answer.

## Bottom line

Concise conclusion and optional CTA.
```

## Publishing Workflow

1. Pick a topic from the map.
2. Write the search intent in one sentence.
3. Check existing site content for overlap.
4. Draft the post using the template.
5. Add internal links and one comparison table.
6. Remove all planning notes before publishing.
7. Run lint/build.
8. Check the page visually on desktop and mobile.
9. Update `llms.txt`/`llms-full.txt` if it is a pillar post.
10. Submit or monitor through Google Search Console and Bing Webmaster Tools.

## Quality Gate

Do not publish if:

- The post could apply to any AI consultant site.
- It does not include a concrete workflow or decision framework.
- It has no internal links.
- It relies on vague claims like "AI will transform workflows."
- It says "essay" or presents the content as personal reflection instead of useful guidance.
- It exposes notes, suggested meta titles or draft instructions in rendered content.
