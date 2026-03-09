import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Keiran Flynn | Executive English Conversation in Phuket & Online",
    template: "%s - Keiran Flynn",
  },
  description:
    "High-level English conversation coaching for founders and executives. UK-native consultant based in Phuket offering in-person and online 1:1 sessions.",
  keywords: [
    "executive English coaching Phuket",
    "business English coach Phuket",
    "British English conversation coach",
    "English communication for founders",
    "advanced English speaking practice",
    "professional English conversation online",
    "executive communication coaching",
  ],
  metadataBase: new URL(siteUrl),
  applicationName: "Keiran Flynn",
  authors: [{ name: "Keiran Flynn", url: siteUrl }],
  creator: "Keiran Flynn",
  publisher: "Keiran Flynn",
  category: "Education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keiran Flynn | Executive English Conversation in Phuket & Online",
    description:
      "High-level English conversation coaching for founders and executives. In-person in Phuket or online.",
    siteName: "Keiran Flynn",
    url: siteUrl,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/keiran.jpg",
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
      "High-level English conversation coaching for founders and executives.",
    images: [
      {
        url: "/keiran.jpg",
        alt: "Portrait of Keiran Flynn in Phuket",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
