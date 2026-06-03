import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Keiran Flynn AI product building enquiries, scheduling and contact form usage.",
  path: "/privacy",
  type: "article",
});

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
