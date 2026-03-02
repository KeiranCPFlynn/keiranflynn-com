import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Received",
  description: "Booking confirmation page for Keiran Flynn conversation sessions.",
  alternates: {
    canonical: "/thanks",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function ThanksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
