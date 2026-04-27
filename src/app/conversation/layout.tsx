import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Friendly English Conversation Practice in Phuket | Native British Speaker",
  description:
    "Relaxed weekly English conversation with a native British speaker in Phuket. 30 minute sessions, friendly approach, first session free.",
  keywords: [
    "English conversation practice Phuket",
    "native British English speaker Phuket",
    "English for expats Phuket",
    "English conversation for parents Phuket",
    "English practice online Phuket",
    "conversational English Thailand",
  ],
  alternates: {
    canonical: "/conversation",
  },
  openGraph: {
    title: "Friendly English Conversation Practice in Phuket | Native British Speaker",
    description:
      "Relaxed weekly English conversation with a native British speaker in Phuket. 30 minute sessions, friendly approach, first session free.",
    url: `${siteUrl}/conversation`,
    siteName: "Keiran Flynn",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/keiran.jpg",
        width: 742,
        height: 928,
        alt: "Keiran Flynn, British English conversation teacher in Phuket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friendly English Conversation Practice in Phuket",
    description:
      "Relaxed weekly English conversation with a native British speaker. First session free.",
    images: [{ url: "/keiran.jpg", alt: "Keiran Flynn in Phuket" }],
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
