import type { Metadata } from "next";
import { GuideFilter } from "@/components/GuideFilter";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Dog Decision Guides", description: "Practical dog ownership decision guides for choosing, training, managing, and living responsibly with dogs in African households." };

export default function GuidesPage() {
  return <main><Header /><PageHero eyebrow="Decision system" title="Dog Decision Guides" text="Practical decision briefs for choosing, training, managing, and living responsibly with dogs." /><GuideFilter /><RelatedLinks title="Find guides faster" links={[{ title: "Search guides and tools", href: "/search", text: "Use the front-end finder across guides, tools, topics, and articles." }, { title: "Knowledge Map", href: "/knowledge-map", text: "See the full structure of the platform." }, { title: "Start Here", href: "/start-here", text: "Choose the right pathway for your situation." }]} /><Footer /></main>;
}