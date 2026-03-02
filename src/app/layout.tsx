import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Keiran Flynn - High-Level English Conversation",
    template: "%s - Keiran Flynn",
  },
  description:
    "Strategic English conversation sessions for founders, executives, and internationally active professionals. Phuket, Thailand.",
  keywords: [
    "British English conversation Phuket",
    "Executive English Phuket",
    "English for founders Phuket",
    "strategic communication English",
    "business English Phuket",
    "English conversation for executives",
    "English speaking practice professionals",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://keiranflynn.com"
  ),
  openGraph: {
    title: "Keiran Flynn - High-Level English Conversation",
    description:
      "Strategic English conversation sessions for founders, executives, and internationally active professionals.",
    siteName: "Keiran Flynn",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://keiranflynn.com",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/keiran.png",
        width: 742,
        height: 928,
        alt: "Portrait of Keiran Flynn in Phuket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keiran Flynn - High-Level English Conversation",
    description:
      "Strategic English conversation sessions for founders, executives, and internationally active professionals.",
    images: [
      {
        url: "/keiran.png",
        alt: "Portrait of Keiran Flynn in Phuket",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
