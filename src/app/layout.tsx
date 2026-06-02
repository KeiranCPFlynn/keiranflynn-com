import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { siteUrl } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Keiran Flynn | AI Product Builder",
    template: "%s - Keiran Flynn",
  },
  description:
    "AI product builder for founders, operators and teams building with coding agents. Product sprints, MVP builds and fractional AI product leadership.",
  keywords: [
    "AI product builder",
    "AI product sprint",
    "AI MVP build",
    "coding agents",
    "Claude Code",
    "Codex",
    "fractional AI product lead",
    "agentic workflows",
    "Next.js AI products",
  ],
  metadataBase: new URL(siteUrl),
  applicationName: "Keiran Flynn",
  authors: [{ name: "Keiran Flynn", url: siteUrl }],
  creator: "Keiran Flynn",
  publisher: "Keiran Flynn",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keiran Flynn | AI Product Builder",
    description:
      "AI product building, product sprints, MVP builds and fractional AI product leadership for teams building with coding agents.",
    siteName: "Keiran Flynn",
    url: siteUrl,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/Keiran%20Flynn%202.1%20Medium.jpeg",
        width: 596,
        height: 596,
        alt: "Portrait of Keiran Flynn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keiran Flynn - AI Product Builder",
    description:
      "AI product builder for founders, operators and teams building with coding agents.",
    images: [
      {
        url: "/Keiran%20Flynn%202.1%20Medium.jpeg",
        alt: "Portrait of Keiran Flynn",
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
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-13Z2FXVMFH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-13Z2FXVMFH');
          `}
        </Script>
      </body>
    </html>
  );
}
