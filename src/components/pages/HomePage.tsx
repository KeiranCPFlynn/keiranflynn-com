import Link from "next/link";
import { BuildConsole } from "@/components/BuildConsole";
import { JsonLd } from "@/components/JsonLd";

const helpItems = [
  {
    meta: "A",
    label: "AI Product Sprints",
    title: "From idea to product shape",
    text: "For founders and teams with a promising AI idea but no clear product shape yet.",
  },
  {
    meta: "B",
    label: "MVP Builds",
    title: "Ship the first real version",
    text: "For scoped AI products, internal tools, SaaS features and workflow systems.",
  },
  {
    meta: "C",
    label: "Fractional AI Product Lead",
    title: "Judgment without the full hire",
    text: "For teams that need AI and product judgment, technical scoping and execution support without hiring full-time.",
  },
];

const workItems = [
  {
    kind: "Chrome extension",
    status: "Live",
    title: "LLMnesia",
    text: "Local-first Chrome extension that indexes and searches AI conversations across 13 platforms, including ChatGPT, Claude, Gemini, DeepSeek and Grok. Ships with an MCP server, an end-to-end encrypted Vault sync tier and a live PWA.",
    metric: "1,600+ installs",
    metricTail: "organic · v0.2.5 on the Chrome Web Store",
  },
  {
    kind: "AI education platform",
    status: "Live",
    title: "SchoolAI",
    text: "AI writing tool for teachers and school admins, scaled to 12,000+ users through SEO, organic content and directories.",
    metric: "12,000+ users",
    metricTail: "zero paid acquisition",
  },
  {
    kind: "Consumer AI product",
    status: "Live",
    title: "LunaCradle",
    text: "AI-powered baby sleep guidance built on Next.js, Supabase, Stripe and the Gemini API, with daily sleep diaries and weekly AI reviews.",
    metric: "73,000 words",
    metricTail: "AI-structured knowledge base · living plans",
  },
  {
    kind: "Agent payments R&D",
    status: "Prototype",
    title: "Flow402",
    text: "Agent payment prototype using x402, Base and USDC, built to explore machine-to-machine payment flows.",
    metric: "x402 · Base · USDC",
    metricTail: "prototype and discovery work",
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

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-badge reveal">
              <span className="pulse">
                <i />
              </span>
              Currently building LLMnesia · 1,600+ organic installs
            </div>

            <h1 className="reveal" data-delay="60">
              I find the <em>product</em>, then build it.{" "}
              <span className="muted">
                AI products, shipped and measured.
              </span>
            </h1>

            <p className="hero-lead reveal" data-delay="140">
              SchoolAI reached 12,000+ users with zero paid acquisition.
              LLMnesia has 1,600+ organic installs and a paid sync tier. I take
              products from problem to shipped: discovery, scoping, build and
              iteration.
            </p>

            <div className="hero-cta reveal" data-delay="220">
              <Link className="btn btn-primary" href="/work">
                View selected work
                <ArrowIcon />
              </Link>
              <Link className="btn btn-ghost" href="/about">
                About me
              </Link>
            </div>
          </div>

          <BuildConsole />
        </div>
      </section>

      <section className="proof-strip" aria-label="Proof">
        <div className="wrap">
          <div className="stat">
            <div className="num">
              <span data-count="12000" data-suffix="+">
                0
              </span>
            </div>
            <div className="lbl">Users on SchoolAI</div>
            <span className="tag">zero paid acquisition</span>
          </div>
          <div className="stat">
            <div className="num">
              <span data-count="1600" data-suffix="+">
                0
              </span>
            </div>
            <div className="lbl">Organic installs on LLMnesia</div>
            <span className="tag">live on the Chrome Web Store · v0.2.5</span>
          </div>
          <div className="stat">
            <div className="num">
              <span data-count="25" data-suffix="+">
                0
              </span>
            </div>
            <div className="lbl">Years in tech and IT</div>
            <span className="tag">IT · schools · SMEs · product</span>
          </div>
          <div className="stat">
            <div className="num">2022</div>
            <div className="lbl">AI and product build focus since</div>
            <span className="tag">Claude Code · Codex · full-stack AI</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">01 · Engagements</span>
              <h2>What I help with</h2>
            </div>
            <p className="section-intro">
              Three ways to work together, depending on how far along the idea is.
            </p>
          </div>

          <div className="cards cols-3 reveal" data-delay="80">
            {helpItems.map((item) => (
              <article className="card" key={item.title}>
                <div className="k">
                  <span className="idx">{item.meta}</span> {item.label}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="work" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">02 · Proof</span>
              <h2>Recent work</h2>
            </div>
            <Link className="btn btn-ghost btn-sm" href="/work">
              See all work
            </Link>
          </div>

          <div className="cards cols-2 reveal" data-delay="80">
            {workItems.map((item) => (
              <article className="card work-card" key={item.title}>
                <div className="w-head">
                  <span className="k" style={{ margin: 0 }}>
                    <span className="idx">●</span> {item.kind}
                  </span>
                  <span className="w-status">
                    {item.status}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="w-metric">
                  <b>{item.metric}</b> · {item.metricTail}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">03 · Method</span>
              <h2>How I work</h2>
            </div>
            <p className="section-intro">
              Coding agents compress the loop from idea to prototype. The
              judgment is in what to build.
            </p>
          </div>

          <div className="cards cols-5 reveal" data-delay="80">
            {processItems.map((item, index) => (
              <article className="card process-card" key={item}>
                <span className="p-num">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">04 · Approach</span>
              <h2>Product judgment first</h2>
            </div>
            <p className="section-intro">
              I work remotely, with strong overlap with UK and European hours,
              across product, UX, technical architecture and build.
            </p>
          </div>

          <div className="cards cols-3 reveal" data-delay="80">
            <article className="card">
              <div className="k">
                <span className="idx">01</span> Decide
              </div>
              <h3>What should exist?</h3>
              <p>
                The useful work starts with scope: who the product serves, what
                risk needs testing, and what should stay manual for now.
              </p>
            </article>
            <article className="card">
              <div className="k">
                <span className="idx">02</span> Build
              </div>
              <h3>What can ship?</h3>
              <p>
                Coding agents compress the loop from idea to working software,
                but the output still needs product taste, review and restraint.
              </p>
            </article>
            <article className="card">
              <div className="k">
                <span className="idx">03</span> Prove
              </div>
              <h3>What did users do?</h3>
              <p>
                The next decision comes from usage signals: adoption, failure
                points, support friction and whether the workflow saves real time.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <span
            className="eyebrow reveal"
            style={{ justifyContent: "center", marginBottom: "1.4rem" }}
          >
            Get in touch
          </span>
          <h2 className="reveal" data-delay="60">
            Want to talk through an AI product idea, a workflow problem or a
            prototype that needs turning into something real?
          </h2>
          <p className="reveal" data-delay="140">
            Happy to dig into product strategy, scoping and builds, or point
            you to the work most relevant to you.
          </p>
          <div className="hero-cta reveal" data-delay="200">
            <Link className="btn btn-primary" href="/contact">
              Get in touch
              <ArrowIcon />
            </Link>
            <Link className="btn btn-ghost" href="/services">
              View services
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
