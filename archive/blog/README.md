# Archived: legacy `/blog` section

This is the pre-rebrand business-English coaching content and its route. It was
retired when the site moved to the AI product builder positioning (the live
content section is now `/writing`, backed by `src/content/writing/` and the plan
in `plans/seo-geo-strategy.md`).

Nothing here is compiled or served. It is kept in git for recovery only.

## What moved here (originally under `src/`)

| Archived path | Original location |
|---|---|
| `app-route/` | `src/app/blog/` |
| `content/` | `src/content/blog/` (50 MDX posts) |
| `blog.ts` | `src/lib/blog.ts` |
| `components/BlogPageHeader.tsx` | `src/components/blog/BlogPageHeader.tsx` |

The archived route still imports via the `@/lib/blog` and `@/components/blog`
aliases. Those paths no longer resolve, which is fine: this directory is outside
`src/app` so Next never builds it. To revive the section, move the four items
back to their original locations and remove the `/blog` redirects in
`next.config.ts`.

## Redirects

`/blog` and `/blog/*` now 301 to `/writing` (see `next.config.ts`).
