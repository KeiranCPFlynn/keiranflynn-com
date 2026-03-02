import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Keiran Flynn, UK-native consultant in Phuket helping founders and executives communicate with greater precision in English.",
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
