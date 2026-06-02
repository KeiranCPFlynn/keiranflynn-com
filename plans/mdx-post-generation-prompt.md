# MDX Blog Post Generation Prompt

Use this prompt when creating a new SEO post for the site. Paste any existing MDX file contents below it if you want the model to match the local format.

```text
You are writing an MDX blog post for Keiran Flynn, an AI product builder who helps founders and small teams turn AI ideas, prototypes and workflows into usable products.

Return only valid MDX. Do not include notes, analysis, comments, or markdown fences around the output.

Required frontmatter:
---
title: "Specific, search-friendly title"
slug: "url-slug"
description: "One sentence under 155 characters, written for searchers and humans."
date: YYYY-MM-DD
status: draft
pillar: "AI product builder"
target_keyword: "primary keyword"
search_intent: "Describe the reader and what they need"
tags:
  - ai-product-building
  - one-specific-topic
  - another-specific-topic
suggested_internal_links:
  - "/"
  - "/conversation"
  - "/about"
  - "/writing/coding-agents-for-product-teams"
  - "/writing/ai-prototype-to-product"
  - "/writing/practical-ai-product-strategy"
---

Body rules:
- Do not include a top-level H1. The page template renders the title.
- Start with a direct opening paragraph that names the real problem. No throat-clearing.
- Use H2 and H3 headings that match search intent and answer concrete questions.
- Include at least one useful comparison table.
- Include one blockquote callout only if it says something worth remembering.
- Include one FAQ section with 4 to 6 questions that people actually search for.
- Include internal links where they fit naturally. Do not force them.
- If an original diagram exists, include it near the introduction using this format:
  ![Descriptive alt text that explains the diagram](/writing/descriptive-file-name.svg)
- Do not use generic Unsplash-style stock images. Use original diagrams, screenshots, product visuals, or no image.

Voice rules:
- Write like a senior product builder explaining what actually works.
- Be specific. Use concrete workflows, failure modes, tradeoffs and examples.
- Avoid fake certainty, fake stories, inflated claims, and made-up numbers.
- Avoid listicle filler and generic marketing language.
- Do not use em dashes or en dashes. Use periods, commas, colons, semicolons, or parentheses.
- Avoid common AI-sounding phrases, including:
  "the bottom line"
  "not just X, but Y"
  "in today's fast-paced world"
  "unlock"
  "game-changer"
  "seamless"
  "delve"
  "landscape"
  "leverage" unless it is plainly the best word
  "crucial" unless it is plainly the best word
  "it depends" unless followed by a useful decision rule

Quality bar:
- The reader should leave with a clearer decision, not just a summary of the topic.
- Every section should answer a question a founder, PM, or small product team would actually have.
- Tables should compare choices, risks, or decisions. Do not use decorative tables.
- FAQ answers should be concise and non-repetitive.
- Before returning the final MDX, silently audit for:
  1. no em dashes or en dashes
  2. no top-level H1
  3. no generic filler phrases
  4. no unsupported claims
  5. at least one internal link
  6. one useful table
  7. frontmatter exactly in the required shape
```
