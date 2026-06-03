import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

const BOOK_URL = "https://cal.com/keirancpflynn/10-min-fit-call";

export const metadata: Metadata = createPageMetadata({
  title: "AI Product Building Services",
  description:
    "AI product sprints, MVP builds and fractional AI product leadership for founders, operators and small teams.",
  path: "/services",
});

type Offer = {
  num: string;
  tag: string;
  title: string;
  intro: string;
  copy: string;
  items: string[];
  price?: string;
  priceNote?: string;
};

const offers: Offer[] = [
  {
    num: "01",
    tag: "Discovery & shape",
    title: "AI Product Sprint",
    price: "$750, fixed fee",
    priceNote: "Fee credited in full against a subsequent build.",
    intro:
      "For founders or teams with a vague AI idea, messy workflow or early product concept.",
    copy:
      "A focused sprint to turn an unclear AI idea into something scoped, testable and ready to build.",
    items: [
      "Product brief",
      "User flows",
      "Technical architecture",
      "Prototype or demo (where it makes sense)",
      "Build roadmap",
      "Risk and feasibility notes",
      "Recommended next steps",
    ],
  },
  {
    num: "02",
    tag: "Build",
    title: "AI MVP Build Partner",
    intro:
      "For teams ready to build a scoped MVP, internal tool or AI-enabled workflow.",
    copy:
      "I can build or co-build the first working version, using agentic development workflows to move quickly without skipping product judgment.",
    items: [
      "Next.js app or prototype",
      "Supabase backend",
      "LLM API integration",
      "RAG or structured knowledge flows",
      "Stripe / payment flow if relevant",
      "PostHog / analytics setup",
      "Deployment and handover",
    ],
  },
  {
    num: "03",
    tag: "Ongoing",
    title: "Fractional AI Product Lead",
    intro:
      "For teams that need product and AI judgment but do not need a full-time hire.",
    copy:
      "A practical product lead for teams trying to make AI useful inside real products and workflows.",
    items: [
      "Discovery and prioritisation",
      "Feature scoping",
      "User stories and acceptance criteria",
      "Prototype review",
      "AI workflow design",
      "Builder / developer direction",
      "Analytics review",
      "Launch and iteration support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal">Services</span>
          <h1 className="reveal" data-delay="60">
            AI product building, <em>three ways</em> to work together
          </h1>
          <p className="lead reveal" data-delay="140">
            For founders, operators and small teams who need help turning AI
            ideas into products, prototypes or internal systems — with product
            judgment, not just a working demo.
          </p>
          <div className="hero-cta reveal" data-delay="220">
            <a
              className="btn btn-primary"
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a fit call
              <ArrowIcon />
            </a>
            <Link className="btn btn-ghost" href="/work">
              See recent work
            </Link>
            <span className="note">10-min call · no pitch</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="offers">
            {offers.map((offer) => (
              <article className="offer reveal" key={offer.title}>
                <div>
                  <div className="o-meta">
                    <span className="o-num">{offer.num}</span>
                    <span className="o-tag">{offer.tag}</span>
                  </div>
                  <h2>{offer.title}</h2>
                  {offer.price && (
                    <div className="o-price-block">
                      <p className="o-price">{offer.price}</p>
                      <p className="o-price-note">{offer.priceNote}</p>
                    </div>
                  )}
                  <p className="o-intro">{offer.intro}</p>
                  <p className="o-copy">{offer.copy}</p>
                  {offer.price && (
                    <div className="o-cta">
                      <Link
                        className="btn btn-primary"
                        href="/contact?topic=sprint"
                      >
                        Buy a Sprint
                        <ArrowIcon />
                      </Link>
                      <a
                        className="o-cta-alt"
                        href={BOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        or book a quick call first
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <p className="o-deliver">What it can include</p>
                  <ul className="o-list">
                    {offer.items.map((item) => (
                      <li key={item}>
                        <span className="dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <span
            className="eyebrow reveal"
            style={{ justifyContent: "center", marginBottom: "1.4rem" }}
          >
            Let&apos;s build
          </span>
          <h2 className="reveal" data-delay="60">
            Not sure which one fits?
          </h2>
          <p className="reveal" data-delay="140">
            Book a ten-minute fit call. We&apos;ll work out whether it&apos;s a
            sprint, a build, or ongoing — and whether it&apos;s worth doing at all.
          </p>
          <div className="hero-cta reveal" data-delay="200">
            <a
              className="btn btn-primary"
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a fit call
              <ArrowIcon />
            </a>
            <Link className="btn btn-ghost" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}
