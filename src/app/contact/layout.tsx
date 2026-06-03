import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Keiran Flynn",
  description:
    "Contact Keiran Flynn to discuss AI product sprints, MVP builds or fractional AI product leadership.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
