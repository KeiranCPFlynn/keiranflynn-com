import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

const defaultImage = {
  url: "/Keiran%20Flynn%202.1%20Medium.jpeg",
  width: 596,
  height: 596,
  alt: "Portrait of Keiran Flynn",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  index = true,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Keiran Flynn",
      type,
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage.url],
    },
    robots: index
      ? undefined
      : {
          index: false,
          follow: true,
        },
  };
}
