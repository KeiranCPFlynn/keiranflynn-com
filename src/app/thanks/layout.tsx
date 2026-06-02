import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks",
  description: "Confirmation page for Keiran Flynn AI product building enquiries.",
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
