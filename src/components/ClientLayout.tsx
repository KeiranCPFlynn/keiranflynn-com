"use client";

import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { LazyMotion, domAnimation } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SiteEffects } from "./SiteEffects";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = pathname === "/conversation";

  return (
    <LazyMotion features={domAnimation}>
      <LanguageProvider>
        <SiteEffects />
        {!isStandalone && <Header />}
        <main className="min-h-screen">{children}</main>
        {!isStandalone && <Footer />}
      </LanguageProvider>
    </LazyMotion>
  );
}
