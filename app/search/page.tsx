import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SearchFinder } from "@/components/SearchFinder";

export const metadata: Metadata = { title: "Find Dog Bond Guides and Tools", description: "Search The Dog Bond guides, tools, articles, topics, and core pages." };
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return <main><Header /><PageHero eyebrow="Finder" title="Find Dog Bond Guides and Tools" text="Search across decision guides, tools, articles, topic pages, and authority pages." /><SearchFinder initialQuery={q} /><Footer /></main>;
}
