# Keiran Flynn — Personal Brand Website

High-level English conversation sessions for founders, executives, and internationally active professionals. Phuket, Thailand.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- No heavy UI libraries

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` — your production domain (e.g. `https://keiranflynn.com`)
4. Deploy

## Project Structure

```
src/
  app/              # Next.js App Router pages
    conversation/   # Main landing page
    about/          # About page
    contact/        # Contact form
    privacy/        # Privacy policy
    thanks/         # Post-booking confirmation
  components/       # Shared UI components
  content/          # EN + RU content dictionaries
  context/          # Language context provider
```

## Languages

- English (default)
- Russian

Content is managed via dictionary files in `src/content/`. Edit `en.ts` and `ru.ts` to update copy.

## Booking

Sessions are booked via Cal.com:
- 60-minute session: `https://cal.com/keirancpflynn/60min`
- 30-minute intro: `https://cal.com/keirancpflynn/30min`

Payment is handled separately via Stripe links sent after booking.
