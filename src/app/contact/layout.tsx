import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Keiran Flynn to discuss AI product sprints, MVP builds or fractional AI product leadership.",
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
