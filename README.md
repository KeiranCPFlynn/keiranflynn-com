# Keiran Flynn Personal Brand Website

AI Product Builder website for founders, operators and teams building with coding agents.

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- MDX archive posts
- Resend contact form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The site is intended for Vercel deployment.

Set `NEXT_PUBLIC_SITE_URL` to the production domain, for example `https://www.keiranflynn.com`.

## Project Structure

```text
src/
  app/
    page.tsx          # AI Product Builder homepage
    services/         # Commercial service offers
    work/             # Product and advisory proof
    writing/          # Primary writing surface
    blog/             # Preserved conversation archive
    conversation/     # Preserved old conversation offer
    contact/          # AI product enquiry form
    privacy/          # Privacy policy
  components/         # Shared UI components
  content/blog/       # MDX archive posts
```

## Preservation

The pre-rebrand site is preserved on `archive/pre-ai-product-rebrand`.
