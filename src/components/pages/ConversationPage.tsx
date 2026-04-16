"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BookingButtons } from "@/components/BookingButtons";
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/motion";
import { FAQItem } from "@/components/FAQItem";
import { JsonLd } from "@/components/JsonLd";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ConversationPage() {
  const { t } = useLanguage();
  const c = t.conversation;

  return (
    <>
      <JsonLd />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-gold/[0.03] rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full pt-32 pb-24 sm:pt-40 sm:pb-32 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
            <div>
              <m.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 60, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease }}
                className="h-px bg-gradient-to-r from-accent-gold to-transparent mb-8"
              />

              <m.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease }}
              >
                <h1 className="text-display text-white mb-8">
                  {c.hero.headline}
                </h1>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease }}
              >
                <p className="text-subheading text-white/60 mb-12 max-w-lg">
                  {c.hero.subheadline}
                </p>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease }}
              >
                <BookingButtons />
              </m.div>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease }}
              >
                <p className="mt-8 text-[13px] text-white/55 max-w-sm leading-relaxed">
                  {t.cta.paymentNotice}
                </p>
              </m.div>
            </div>

            {/* Photo: replace /public/keiran.jpg to change this image */}
            <SlideIn direction="right" delay={0.5}>
              <div className="hero-image-wrap relative shadow-2xl shadow-black/50 max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
                <Image
                  src="/keiran.jpg"
                  alt="Portrait of Keiran Flynn, UK native English communication consultant based in Phuket"
                  width={480}
                  height={600}
                  sizes="(max-width: 1024px) 85vw, 420px"
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
              {c.credibility.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-5 py-5 sm:py-6 min-h-[88px] flex items-center justify-center text-center text-[13px] sm:text-[14px] text-white/80 tracking-[0.02em] leading-relaxed shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent-gold/35 hover:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* ==================== WHO THIS IS FOR ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-14">{c.whoFor.title}</h2>
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-2 gap-5" stagger={0.12}>
          {c.whoFor.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="glass-card p-6 flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                <span className="text-white/55 text-[15px] leading-relaxed">
                  {item}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== NOT FOR ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-12">{c.notFor.title}</h2>
        </FadeIn>
        <StaggerContainer className="space-y-5 max-w-xl" stagger={0.1}>
          {c.notFor.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 text-white/60">
                <span className="mt-2.5 w-4 h-px bg-white/15 shrink-0" />
                <span className="text-[15px]">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== WHAT WE WORK ON ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-14">
            {c.whatWeWorkOn.title}
          </h2>
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-2 gap-5" stagger={0.1}>
          {c.whatWeWorkOn.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="glass-card p-6 flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-white/55 text-[15px] leading-relaxed">
                  {item}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== DEPTH & INDEPENDENT THINKING ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-10">{c.depthThinking.title}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-3xl space-y-8">
            <p className="text-white/60 text-[15px] leading-relaxed">
              {c.depthThinking.intro}
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed">
              {c.depthThinking.focus}
            </p>
            <div className="space-y-4">
              {c.depthThinking.refinements.map((line, i) => (
                <p key={i} className="text-white/60 text-[15px] leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
            <div className="space-y-4">
              {c.depthThinking.goals.map((line, i) => (
                <p
                  key={i}
                  className="text-white/70 text-[15px] leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== HOW IT WORKS ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-16">
            {c.howItWorks.title}
          </h2>
        </FadeIn>
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.15}
        >
          {c.howItWorks.steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="glass-card p-8 text-center sm:text-left h-full">
                <span className="step-number block mb-4">{step.number}</span>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {step.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== SESSION LENGTH ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-14">{c.sessionLength.title}</h2>
        </FadeIn>
        <StaggerContainer
          className="grid md:grid-cols-2 gap-6 max-w-4xl"
          stagger={0.12}
        >
          <StaggerItem>
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.02] p-8 sm:p-10 flex h-full flex-col justify-between gap-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-5">
                  {c.sessionLength.thirtyMinutes}
                </p>
                <p className="text-[clamp(2.4rem,6vw,3.5rem)] font-semibold tracking-[-0.035em] text-white">
                  {c.sessionLength.thirtyPrice}
                </p>
              </div>
              <a
                href="https://cal.com/keirancpflynn/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                {c.sessionLength.bookThirty}
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="rounded-2xl border-2 border-white/[0.2] bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-8 sm:p-10 flex h-full flex-col justify-between gap-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-5">
                  {c.sessionLength.sixtyMinutes}
                </p>
                <p className="text-[clamp(2.4rem,6vw,3.5rem)] font-semibold tracking-[-0.035em] text-white">
                  {c.sessionLength.sixtyPrice}
                </p>
              </div>
              <a
                href="https://cal.com/keirancpflynn/60min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                {c.sessionLength.bookSixty}
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-[13px] leading-relaxed text-white/50">
            {c.sessionLength.note}
          </p>
        </FadeIn>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== LOCATION + AVAILABILITY ==================== */}
      <AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <div className="accent-line mb-6" />
            <h2 className="text-heading text-white mb-6">
              {c.location.title}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              {c.location.text}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="accent-line mb-6" />
            <h2 className="text-heading text-white mb-6">
              {c.availability.title}
            </h2>
            <p className="text-white/60 leading-relaxed">
              {c.availability.text}
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== FAQ ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-14">{c.faq.title}</h2>
        </FadeIn>
        <ScaleIn>
          <div className="max-w-2xl">
            {c.faq.items.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </ScaleIn>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== BLOG PREVIEW ==================== */}
      <AnimatedSection>
        <FadeIn>
          <div className="accent-line mb-6" />
          <h2 className="text-heading text-white mb-14">{t.blog.previewTitle}</h2>
        </FadeIn>
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 mb-8 text-lg leading-relaxed">
            {t.blog.previewDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="btn-secondary"
            >
              {t.blog.visitBlog}
            </Link>
            <Link
              href="/blog/english-under-pressure"
              className="text-sm text-white/75 hover:text-white transition-colors duration-500 tracking-wide"
            >
              {t.blog.readLatest}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <div className="section-divider" />

      {/* ==================== FINAL CTA ==================== */}
      <AnimatedSection className="text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="accent-line mx-auto mb-10" />
            <h2 className="text-heading text-white mb-5">
              {c.finalCta.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 mb-14 text-subheading">
              {c.finalCta.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <BookingButtons className="justify-center" />
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  );
}
