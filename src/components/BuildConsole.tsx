"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ProductKey = "idea" | "tool" | "mvp" | "pay";

const PRODUCTS: Record<
  ProductKey,
  {
    chip: string;
    phrase: string;
    name: string;
    status: string;
    desc: string;
    metric: string;
    metricLabel: string;
  }
> = {
  idea: {
    chip: "AI idea",
    phrase: "ai education platform",
    name: "SchoolAI",
    status: "Live",
    desc: "AI education platform for teachers and admins, scaled through SEO and organic content.",
    metric: "SEO-led",
    metricLabel: "growth with zero paid acquisition",
  },
  tool: {
    chip: "Internal tool",
    phrase: "search my AI chats",
    name: "LLMnesia",
    status: "Live",
    desc: "Local-first Chrome extension that indexes and searches AI conversations across 13 platforms.",
    metric: "13 platforms",
    metricLabel: "local-first, private by default",
  },
  mvp: {
    chip: "MVP feature",
    phrase: "personalised sleep guidance",
    name: "LunaCradle",
    status: "Live",
    desc: "AI baby-sleep guidance built on Next.js, Supabase, Stripe and the Gemini API.",
    metric: "73,000-word",
    metricLabel: "AI-structured knowledge base",
  },
  pay: {
    chip: "Agent payments",
    phrase: "agents that pay each other",
    name: "Flow402",
    status: "Prototype",
    desc: "Agent payment prototype on x402, Base and USDC for exploring machine-to-machine payment flows.",
    metric: "x402",
    metricLabel: "prototype and discovery work",
  },
};

const ORDER: ProductKey[] = ["tool", "idea", "mvp", "pay"];

const STEPS = [
  "clarify the actual problem",
  "shape the product",
  "define flows + architecture",
  "build with coding agents",
  "instrument + iterate",
];

export function BuildConsole() {
  const [active, setActive] = useState<ProductKey>("tool");
  const [typed, setTyped] = useState("");
  const [runningStep, setRunningStep] = useState(-1);
  const [doneSteps, setDoneSteps] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const manualRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const consoleRef = useRef<HTMLDivElement>(null);
  const product = PRODUCTS[active];

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const node = consoleRef.current;
    if (!node) return;

    const startConsole = () => setStarted(true);
    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) startConsole();
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(node);
      if (node.getBoundingClientRect().top < (window.innerHeight || 800)) {
        startConsole();
      }
    } else {
      startConsole();
    }

    const timer = window.setTimeout(startConsole, 1200);

    return () => {
      observer?.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];

    const later = (ms: number, fn: () => void) => {
      const timer = window.setTimeout(fn, ms);
      timersRef.current.push(timer);
    };

    later(0, () => {
      setTyped("");
      setRunningStep(-1);
      setDoneSteps(0);
      setShowResult(false);

      if (reducedMotion) {
        setTyped(product.phrase);
        setDoneSteps(STEPS.length);
        setRunningStep(-1);
        setShowResult(true);
        if (!manualRef.current) {
          later(3200, () => setActive(nextProduct(active)));
        }
        return;
      }

      let cursor = 0;
      const typeNext = () => {
        setTyped(product.phrase.slice(0, cursor));
        cursor += 1;

        if (cursor <= product.phrase.length + 1) {
          later(26, typeNext);
        } else {
          STEPS.forEach((_, index) => {
            later(index * 460, () => setRunningStep(index));
            later(index * 460 + 360, () => {
              setDoneSteps(index + 1);
              setRunningStep(-1);
            });
          });

          later(STEPS.length * 460 + 200, () => {
            setShowResult(true);
            if (!manualRef.current) {
              later(3200, () => setActive(nextProduct(active)));
            }
          });
        }
      };

      typeNext();
    });

    return () => timersRef.current.forEach(window.clearTimeout);
  }, [active, product.phrase, reducedMotion, started]);

  const chooseProduct = (key: ProductKey) => {
    manualRef.current = true;
    setActive(key);
  };

  return (
    <div className="console reveal" data-delay="120" data-console ref={consoleRef}>
      <div className="console-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="title">keiran@build · idea → product</span>
        <span className="live">
          <b /> live
        </span>
      </div>

      <div className="console-chips">
        {ORDER.map((key) => (
          <button
            key={key}
            className={`chip ${active === key ? "active" : ""}`}
            data-key={key}
            type="button"
            onClick={() => chooseProduct(key)}
          >
            {PRODUCTS[key].chip}
          </button>
        ))}
      </div>

      <div className="console-prompt">
        <span className="caret">$</span>
        <span className="cmd">
          keiran build --idea &quot;
          <span className="val" data-cmd>
            {typed}
          </span>
          {!showResult && <span className="blink" data-blink />}
          &quot;
        </span>
      </div>

      <div className="console-steps" data-steps>
        {STEPS.map((step, index) => {
          const done = index < doneSteps;
          const running = index === runningStep;
          return (
            <div
              key={step}
              className={`step ${done || running ? "show" : ""} ${
                done ? "done" : ""
              } ${running ? "run" : ""}`}
            >
              <span className="tick" />
              <span className="lbl">{step}</span>
            </div>
          );
        })}
      </div>

      <div className={`console-result ${showResult ? "show" : ""}`} data-result>
        <div className="r-top">
          <span className="r-name">{product.name}</span>
          <span className="r-status">
            {product.status}
          </span>
        </div>
        <div className="r-desc">{product.desc}</div>
        <div className="r-metric">
          <b>{product.metric}</b>
          <span>{product.metricLabel}</span>
        </div>
      </div>
    </div>
  );
}

function nextProduct(current: ProductKey) {
  const index = ORDER.indexOf(current);
  return ORDER[(index + 1) % ORDER.length];
}
