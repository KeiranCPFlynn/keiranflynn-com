import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive English Conversation",
  description:
    "Strategic 1:1 English conversation for founders and international professionals in Phuket or online.",
  alternates: {
    canonical: "/conversation",
  },
  openGraph: {
    url: "/conversation",
    type: "website",
  },
};

export default function ConversationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
