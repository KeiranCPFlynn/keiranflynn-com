"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/motion";

export default function PrivacyPage() {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <AnimatedSection className="pt-36 sm:pt-44">
      <FadeIn>
        <div className="accent-line mb-8" />
        <h1 className="text-display text-white mb-4">{p.title}</h1>
        <p className="text-[13px] text-white/20 mb-16 tracking-wide">
          {p.lastUpdated}
        </p>
      </FadeIn>

      <StaggerContainer className="space-y-14 max-w-2xl" stagger={0.1}>
        {p.sections.map((section, i) => (
          <StaggerItem key={i}>
            <h2 className="text-lg font-medium text-white/70 mb-4">
              {section.title}
            </h2>
            <p className="text-white/35 leading-[1.8]">{section.content}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
}
