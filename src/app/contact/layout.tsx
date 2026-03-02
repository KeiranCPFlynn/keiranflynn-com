import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Keiran Flynn to discuss executive English conversation coaching in Phuket or online.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
