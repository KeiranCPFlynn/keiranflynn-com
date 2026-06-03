import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Keiran Flynn",
  description:
    "About Keiran Flynn, an AI product builder for founders, operators and teams building with coding agents.",
  path: "/about",
  type: "article",
});

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
