import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  keywords: [
    "dog training",
    "human dog bond",
    "responsible dog ownership",
    "African dog life",
    "guard dog responsibility",
    "dog behaviour",
    "breed intelligence"
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description
  },
  icons: {
    icon: "/mark.svg"
  },
  metadataBase: new URL(site.url)
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-earth-50 font-sans text-earth-900 antialiased">
        {children}
      </body>
    </html>
  );
}
