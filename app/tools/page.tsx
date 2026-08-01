import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ToolCard } from "@/components/ToolCard";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { dogTools } from "@/lib/tools";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Dog Ownership Tools | The Dog Bond", description: "Practical tools for choosing, preparing for, training, and managing a dog responsibly." };
const chooser = [{ title: "Unsure if you should get a dog", href: "/tools/readiness-checklist" }, { title: "Unsure what breed fits", href: "/tools/breed-comparison" }, { title: "Worried about cost", href: "/tools/cost-estimator" }, { title: "Want a guard dog", href: "/tools/guard-dog-checker" }, { title: "Already own a dog", href: "/tools/training-routine-planner" }];

export default function ToolsPage() {
  return <main><Header /><PageHero eyebrow="Utility engine" title="Dog Ownership Tools" text="Practical tools for choosing, preparing for, training, and managing a dog responsibly." /><section className="bg-earth-50 px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">{dogTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div></section><section className="bg-white px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2.5rem] border border-earth-200 bg-earth-50 p-8 shadow-card"><h2 className="font-display text-4xl font-semibold text-earth-950">Which tool should I use?</h2><div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-5">{chooser.map((item) => <a key={item.href} href={item.href} className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 transition hover:-translate-y-1 hover:shadow-soft">{item.title} →</a>)}</div></div></section><RelatedLinks title="Tool pathways" links={[{ title: "Start Here", href: "/start-here", text: "Choose the right situation pathway." }, { title: "Search", href: "/search", text: "Find a tool, guide, article, or topic." }, { title: "Topics", href: "/topics", text: "Browse SEO topic hubs." }]} /><ReadinessBriefCTA /><Footer /></main>;
}