import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Keiran Flynn, an AI product builder for founders, operators and teams building with coding agents.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    type: "article",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
