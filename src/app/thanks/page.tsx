"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

  return (
    <AnimatedSection className="pt-36 sm:pt-44">
      <div className="max-w-2xl">
        <FadeIn>
          <motion.div
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
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-display text-white mb-12">{th.title}</h1>
        </FadeIn>

        <StaggerContainer className="space-y-5" stagger={0.1}>
          {th.paragraphs.map((p, i) => (
            <StaggerItem key={i}>
              <p className="text-white/40 leading-[1.8] text-[16.5px]">{p}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.6}>
          <div className="mt-16">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/conversation" className="btn-secondary">
                {th.backToHome}
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
