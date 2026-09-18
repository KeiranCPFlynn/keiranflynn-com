import Link from "next/link";
import { BuildConsole } from "@/components/BuildConsole";
import { JsonLd } from "@/components/JsonLd";

const workItems = [
  {
    kind: "Chrome extension",
    status: "Live",
    title: "LLMnesia",
    text: "Local-first search across AI conversations from 13 platforms. All data stays on device.",
    metric: "Live on the Chrome Web Store",
    metricTail: "v0.2.5 · MCP server, Vault sync, PWA",
  },
  {
    kind: "AI education platform",
    status: "Live",
    title: "SchoolAI",
    text: "AI writing tool for teachers and school admins.",
    metric: "Zero paid acquisition",
    metricTail: "scaled via SEO, content and directories",
  },
  {
    kind: "Consumer AI product",
    status: "Live",
    title: "LunaCradle",
    text: "AI baby sleep plans grounded in a 73,000-word structured knowledge base.",
    metric: "Live MVP",
    metricTail: "intake to plan to weekly reviews",
  },
  {
    kind: "Agent payments prototype",
    status: "Prototype",
    title: "Flow402",
    text: "Machine-to-machine payments with an on-chain USDC escrow and a working 402 retry flow.",
    metric: "Deployed on Base Sepolia",
    metricTail: "gateway, dashboard and vendor demo",
  },
];

const approachItems = [
  {
    k: "Decide",
    title: "What should exist?",
    text: "Who it serves, what risk needs testing, and what stays manual for now.",
  },
  {
    k: "Build",
    title: "What can ship?",
    text: "Coding agents compress idea to working software. The output still needs review and restraint.",
  },
  {
    k: "Prove",
    title: "What did users do?",
    text: "Adoption, failure points and real time saved decide what happens next.",
  },
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
              Currently building LLMnesia · live on the Chrome Web Store
            </div>

            <h1 className="reveal" data-delay="60">
              I build AI products <em>end to end</em>.{" "}
              <span className="muted">Measured in real users.</span>
            </h1>

            <p className="hero-lead reveal" data-delay="140">
              Founder of SchoolAI and LLMnesia. I scope the product, build it,
              and let real usage decide what happens next.
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

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">01 · Proof</span>
              <h2>Selected work</h2>
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

      <section className="section" id="about" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">02 · Approach</span>
              <h2>How I work</h2>
            </div>
            <p className="section-intro">
              Remote, with strong overlap with UK and European hours.
            </p>
          </div>

          <div className="cards cols-3 reveal" data-delay="80">
            {approachItems.map((item) => (
              <article className="card" key={item.k}>
                <div className="k">
                  <span className="idx">{item.k.slice(0, 2).toUpperCase()}</span>{" "}
                  {item.k}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
            Get in touch
          </span>
          <h2 className="reveal" data-delay="60">
            Have an AI product to build or a prototype to make real?
          </h2>
          <p className="reveal" data-delay="140">
            Send a short brief and I&apos;ll point you to the relevant work.
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
