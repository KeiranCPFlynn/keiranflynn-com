"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/motion";

export default function ThanksPage() {
  const { t } = useLanguage();
  const th = t.thanks;
  const help = t.footer;

  return (
    <AnimatedSection className="pt-36 sm:pt-44">
      <div className="max-w-2xl">
        <FadeIn>
          <m.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-14 h-14 rounded-full bg-accent-gold/[0.08] border border-accent-gold/[0.12] flex items-center justify-center mb-10"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent-gold"
            >
              <path d="M5 13l6 6 10-10" />
            </svg>
          </m.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-display text-white mb-12">{th.title}</h1>
        </FadeIn>

        <StaggerContainer className="space-y-5" stagger={0.1}>
          {th.paragraphs.map((p, i) => (
            <StaggerItem key={i}>
              <p className="text-white/60 leading-[1.8] text-[16.5px]">{p}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.45}>
          <div className="mt-12 rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/55 mb-2">
              {help.paymentHelpTitle}
            </p>
            <p className="text-white/80 text-[14px] leading-relaxed mb-3">
              {help.paymentHelpSummary}
            </p>
            <ul className="space-y-1.5 text-[13px] text-white/55 leading-relaxed list-disc pl-4">
              {help.paymentHelpSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
            <a
              href="https://t.me/freelymoving"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center px-4 py-2 border border-white/[0.14] rounded-md text-[12px] tracking-wide text-white/90 hover:bg-white/[0.06] transition-colors"
            >
              {help.paymentHelpCta}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-16">
            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" className="btn-secondary">
                {th.backToHome}
              </Link>
            </m.div>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
