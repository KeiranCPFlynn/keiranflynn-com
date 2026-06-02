import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
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
        url: "/keiran.jpg",
        width: 742,
        height: 928,
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
        url: "/keiran.jpg",
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
    <html lang="en" className={inter.className}>
      <body>
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
