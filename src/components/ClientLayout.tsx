"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { LazyMotion, domAnimation } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <LanguageProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </LanguageProvider>
    </LazyMotion>
  );
}
