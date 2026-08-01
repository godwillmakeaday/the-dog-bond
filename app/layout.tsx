import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "The Dog Bond | African Dog Ownership, Training & Breed Intelligence",
    template: "%s | The Dog Bond"
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: site.url },
  keywords: [
    "dog ownership",
    "dog training",
    "African dogs",
    "Nigerian dogs",
    "guard dogs",
    "breed suitability",
    "responsible dog ownership",
    "human dog bond",
    "dog behaviour",
    "dog protection"
  ],
  openGraph: {
    title: "The Dog Bond | African Dog Ownership, Training & Breed Intelligence",
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dog Bond | African Dog Ownership, Training & Breed Intelligence",
    description: site.description
  },
  icons: {
    icon: "/mark.svg"
  },
  metadataBase: new URL(site.url),
  verification: {
    google: "YPBBWROHxbXAWeMl_KOvhtisCan2hqHXYyYhI-9KA54"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-earth-50 font-sans text-earth-900 antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
