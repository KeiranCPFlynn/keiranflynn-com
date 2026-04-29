"use client";

import { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

const BOOK_URL = "https://cal.com/keirancpflynn/10-min-fit-call";
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const whoForItems = [
  "You’re a parent in Phuket and you’d love a regular adult conversation in English each week",
  "You want to feel more confident at school meetings, on playdates, or chatting with other parents",
  "English is part of your daily life in Phuket but doesn’t feel quite natural yet",
  "You’ve done English classes before and you don’t want another class. You want to actually use the language",
  "You want a friendly face, not a strict teacher",
];

const howItWorksSteps = [
  {
    num: "1",
    text: "Book a free 10 minute chat. We meet on Zoom or Google Meet, get to know each other, and see if it’s a good fit. No pressure to continue.",
  },
  {
    num: "2",
    text: "Pick a package. Most people start with four sessions. You can pay weekly or upfront.",
  },
  {
    num: "3",
    text: "We meet weekly for 30 minutes. Same time each week works best. Kids in the background welcome.",
  },
  {
    num: "4",
    text: "You get notes after each session. Words, phrases, anything worth remembering, sent to you afterwards.",
  },
];

const faqItems = [
  {
    q: "What level of English do I need?",
    a: "Anywhere from basic conversational up to advanced. As long as we can have a back-and-forth, I can help. If you’re a complete beginner, this probably isn’t the right fit yet.",
  },
  {
    q: "What if my kid interrupts?",
    a: "Totally fine. Real life happens.",
  },
  {
    q: "Do you do in-person sessions?",
    a: "All sessions are online, so you can join from wherever you are.",
  },
  {
    q: "Can my friend and I do it together?",
    a: "Yes, group sessions for two or three friends are available at a lower per-person rate. Message me about it.",
  },
  {
    q: "What if I don’t like it?",
    a: "The first chat is free for that reason. If it’s not a fit, no hard feelings.",
  },
  {
    q: "How do I pay?",
    a: "Stripe, PayPal, or bank transfer in Thailand. I’ll send you the details after our first chat.",
  },
];

export default function ConversationPage() {
  const year = new Date().getFullYear();
  const [currency, setCurrency] = useState<'THB' | 'USD'>('USD');

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-accent-gold/[0.04] rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full pt-16 pb-16 sm:pt-24 sm:pb-24 relative z-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
            <div>
              <m.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease }}
                className="text-display text-white mb-6"
              >
                Friendly English conversation with a native British speaker
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease }}
                className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Relaxed weekly chats for expat parents in Phuket. Build your
                confidence, enjoy the conversation, get your English flowing
                again.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.75, ease }}
              >
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Book a free 10 minute chat
                </a>
                <p className="mt-5 text-[13px] text-white/45 leading-relaxed">
                  No commitment, no pressure. Let’s see if it’s a good fit.
                </p>
              </m.div>
            </div>

            <SlideIn direction="right" delay={0.4}>
              <div className="hero-image-wrap max-w-[420px] mx-auto lg:mx-0 shadow-2xl shadow-black/50">
                <Image
                  src="/Keiran Flynn2.1 copy Medium.jpeg"
                  alt="Keiran Flynn, British English conversation teacher"
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

      {/* ===== WHAT THIS IS ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mb-5" />
            <h2 className="text-heading text-white mb-8">What this is</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-2xl space-y-5 text-white/70 text-[16px] leading-relaxed">
              <p>This isn’t a class. It’s a conversation.</p>
              <p>
                We meet online for 30 minutes a week and we talk. About your
                life, what you watched last night, something you read, whatever’s
                on your mind. Sometimes we use a short article as a starting
                point, something interesting to read and talk about together.
                I’ll gently correct things along the way.
              </p>
              <p>
                Most people who do this notice two things after a few weeks.
                Their English feels easier. And they look forward to the chat.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== WHO IT'S FOR ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mb-5" />
            <h2 className="text-heading text-white mb-4">Who it’s for</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-white/50 text-[15px] mb-8">This is for you if:</p>
          </FadeIn>
          <StaggerContainer className="space-y-0 max-w-2xl" stagger={0.1}>
            {whoForItems.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 py-5 border-b border-white/[0.05] last:border-0">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                  <span className="text-white/70 text-[16px] leading-relaxed">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mb-5" />
            <h2 className="text-heading text-white mb-12">How it works</h2>
          </FadeIn>
          <StaggerContainer
            className="grid sm:grid-cols-2 gap-8 max-w-3xl"
            stagger={0.12}
          >
            {howItWorksSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="flex gap-5">
                  <span className="text-[3.5rem] font-light leading-none text-accent-gold/25 shrink-0 mt-[-4px]">
                    {step.num}
                  </span>
                  <p className="text-white/70 text-[15px] leading-relaxed pt-2">
                    {step.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PRICING ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mb-5" />
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-heading text-white">Simple pricing</h2>
              <div className="flex rounded-full border border-white/10 overflow-hidden text-[11px] tracking-[0.15em] uppercase">
                {(['THB', 'USD'] as const).map(cur => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`px-3 py-1 transition-colors duration-200 ${
                      currency === cur
                        ? 'bg-accent-gold/20 text-accent-gold'
                        : 'text-white/40 hover:text-white/60'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-3 gap-5" stagger={0.1}>
            {/* Try it */}
            <StaggerItem>
              <div className="rounded-2xl border border-accent-gold/25 bg-gradient-to-b from-accent-gold/[0.06] to-transparent p-7 flex flex-col gap-6 h-full">
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent-gold/80 mb-4">
                    Try it
                  </p>
                  <p className="text-2xl font-semibold text-white mb-2">
                    First chat free
                  </p>
                  <p className="text-[14px] text-white/50 leading-relaxed">
                    10 minutes, no commitment
                  </p>
                </div>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Book free chat
                </a>
              </div>
            </StaggerItem>

            {/* Four sessions */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-6 h-full">
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-4">
                    Four sessions
                  </p>
                  <p className="text-2xl font-semibold text-white mb-2">
                    {currency === 'THB' ? '3,200 THB' : '$90'}
                  </p>
                  <p className="text-[13px] text-white/35 mt-1">
                    30 minutes each, weekly
                  </p>
                  <p className="text-[13px] text-white/40 mt-3">
                    Best for getting started
                  </p>
                </div>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  Book free chat first
                </a>
              </div>
            </StaggerItem>

            {/* Eight sessions */}
            <StaggerItem>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-6 h-full">
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-4">
                    Eight sessions
                  </p>
                  <p className="text-2xl font-semibold text-white mb-2">
                    {currency === 'THB' ? '5,600 THB' : '$160'}
                  </p>
                  <p className="text-[13px] text-white/35 mt-1">
                    30 minutes each, weekly
                  </p>
                  <p className="text-[13px] text-accent-gold/60 mt-3">
                    {currency === 'THB' ? 'Best value, save 800 THB' : 'Best value, save $20'}
                  </p>
                </div>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  Book free chat first
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-[13px] text-white/40 leading-relaxed max-w-xl">
              All sessions one-to-one online. Group sessions for two or three
              friends also available, ask me about it.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ABOUT ME ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mb-5" />
            <h2 className="text-heading text-white mb-10">About me</h2>
          </FadeIn>
          <div className="grid lg:grid-cols-[1fr_260px] gap-12 items-start">
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-white/70 text-[16px] leading-relaxed">
                <p>
                  Hi, I’m Keiran. I’m British, I live in Bang Tao with my
                  partner and our cat Fig, and we’ve got a baby on the
                  way.
                </p>
                <p>
                  I'm TEFL-certified (120 hour, TEFL Academy) and I've spent thousands of hours teaching conversational English. Before that I worked in music, film, and tech. I've lived in Thailand for a few years now, so I know what it's like to navigate daily life in a language that isn't your first.
                </p>
                <p>
                  I’m not a strict teacher. I’m a patient, friendly person who
                  loves a good chat. If that sounds like what you’re looking
                  for, let’s talk.
                </p>
              </div>
            </FadeIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="hero-image-wrap max-w-[240px] mx-auto lg:mx-0 shadow-xl shadow-black/40">
                <Image
                  src="/keiran-old.jpg"
                  alt="Keiran Flynn"
                  width={320}
                  height={400}
                  sizes="240px"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== WHAT PEOPLE SAY ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mb-5" />
            <h2 className="text-heading text-white mb-12">What people say</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-3 gap-5" stagger={0.1}>
            <StaggerItem>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-6 h-full">
                <p className="text-white/65 text-[15px] leading-relaxed flex-1">
                  "Keiran makes you feel at ease straight away. I was quite shy
                  about my English before but he has a way of keeping the
                  conversation going without making you feel embarrassed. Highly
                  recommend."
                </p>
                <p className="text-[13px] text-white/35">Yuki</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-6 h-full">
                <p className="text-white/65 text-[15px] leading-relaxed flex-1">
                  "I have tried a few conversation partners before and Keiran is
                  by far the best. He listens properly and asks good
                  follow-up questions. The time goes by very fast."
                </p>
                <p className="text-[13px] text-white/35">Maria</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-6 h-full">
                <p className="text-white/65 text-[15px] leading-relaxed flex-1">
                  "Very patient, warm, and genuinely interested in what you have
                  to say. My confidence has improved a lot since we started. I
                  wish I had found him sooner."
                </p>
                <p className="text-[13px] text-white/35">Hana</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FAQ ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mb-5" />
            <h2 className="text-heading text-white mb-12">Common questions</h2>
          </FadeIn>
          <div className="max-w-2xl space-y-0">
            {faqItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border-b border-white/[0.05] last:border-0 py-7">
                  <p className="text-[15px] text-white mb-3">{item.q}</p>
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 sm:py-36 text-center">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn>
            <div className="accent-line mx-auto mb-8" />
            <h2 className="text-heading text-white mb-5">
              Let’s have a chat
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-sm mx-auto">
              The first one is free. 10 minutes on Zoom or Google Meet.
              We’ll see if it’s a good fit and you can decide from
              there.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Book a free 10 minute chat
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ===== Minimal Footer ===== */}
      <footer className="border-t border-white/[0.08] py-8 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-white/45">
          <span>&copy; {year} Keiran Flynn</span>
          <a
            href="mailto:freelymoving@gmail.com"
            className="hover:text-white/70 transition-colors duration-300"
          >
            freelymoving@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}
