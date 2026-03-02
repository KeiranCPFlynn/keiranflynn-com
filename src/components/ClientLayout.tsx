"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
