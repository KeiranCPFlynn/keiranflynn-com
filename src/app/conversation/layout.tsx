import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Friendly English Conversation Practice | Native British Speaker",
  description:
    "Relaxed weekly English conversation with a native British speaker online. 30 minute sessions, friendly approach, first chat free.",
  keywords: [
    "English conversation practice online",
    "native British English speaker",
    "English for expats",
    "English conversation for parents",
    "English practice online",
    "conversational English online",
  ],
  alternates: {
    canonical: "/conversation",
  },
  openGraph: {
    title: "Friendly English Conversation Practice | Native British Speaker",
    description:
      "Relaxed weekly English conversation with a native British speaker online. 30 minute sessions, friendly approach, first chat free.",
    url: `${siteUrl}/conversation`,
    siteName: "Keiran Flynn",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/Keiran%20Flynn2.1%20copy%20Medium.jpeg",
        width: 640,
        height: 640,
        alt: "Keiran Flynn, British English conversation teacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friendly English Conversation Practice | Native British Speaker",
    description:
      "Relaxed weekly English conversation with a native British speaker online. First chat free.",
    images: [{ url: "/Keiran%20Flynn2.1%20copy%20Medium.jpeg", alt: "Keiran Flynn" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ConversationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
