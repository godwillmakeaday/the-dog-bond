import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  pathname: string;
  noIndex?: boolean;
};

export function createPageMetadata({ title, description, pathname, noIndex = false }: PageMetadata): Metadata {
  const canonical = new URL(pathname, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: site.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${title} — ${site.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
