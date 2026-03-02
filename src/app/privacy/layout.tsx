import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Keiran Flynn executive English conversation sessions and contact form usage.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    url: "/privacy",
    type: "article",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
