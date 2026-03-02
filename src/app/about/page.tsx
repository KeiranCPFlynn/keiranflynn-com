"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/motion";
import { BookingButtons } from "@/components/BookingButtons";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <AnimatedSection className="pt-36 sm:pt-44">
      <FadeIn>
        <div className="accent-line mb-8" />
        <h1 className="text-display text-white mb-16 max-w-xl">
          {a.title}
        </h1>
      </FadeIn>

      <StaggerContainer className="space-y-7 max-w-2xl" stagger={0.12}>
        {a.paragraphs.map((p, i) => (
          <StaggerItem key={i}>
            <p className="text-white/40 leading-[1.8] text-[16.5px]">{p}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4}>
        <div className="mt-24 grid sm:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/20 block mb-3">
              {a.locationLabel}
            </span>
            <span className="text-white/55">{a.locationValue}</span>
          </div>
          <div className="glass-card p-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/20 block mb-3">
              {a.availabilityLabel}
            </span>
            <span className="text-white/55">{a.availabilityValue}</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="mt-20">
          <BookingButtons />
        </div>
      </FadeIn>
    </AnimatedSection>
  );
}
