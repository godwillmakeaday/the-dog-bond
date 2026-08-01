import type { Metadata } from "next";
import Link from "next/link";
import { KnowledgeClusterCard } from "@/components/KnowledgeClusterCard";
import { PageHero } from "@/components/PageHero";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { knowledgeClusters } from "@/lib/data";
import { dogTools } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dog Ownership Knowledge Map",
  description: "A structured map of dog ownership decisions, training, breed suitability, public safety, African dog life, and responsible ownership."
};

export default function KnowledgeMapPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Knowledge graph" title="Dog Ownership Knowledge Map" text="A structured map of the decisions, responsibilities, risks, and realities behind choosing and living with a dog." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_0.3fr] lg:items-start">
            <div className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-500">How to use this map</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-earth-950">Begin with the decision, not the dog image.</h2>
              <p className="mt-5 text-lg leading-8 text-earth-700">The Dog Bond knowledge graph organizes dog ownership around real decisions: readiness, household fit, breed capacity, training, children, protection, public safety, climate, care, and humane responsibility.</p>
            </div>
            <div className="rounded-[2rem] bg-earth-950 p-7 text-earth-50 shadow-card">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-300">Core habit</p>
              <p className="mt-4 font-display text-3xl font-semibold leading-tight">Before I buy this dog, let me check The Dog Bond.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">{knowledgeClusters.map((cluster) => <KnowledgeClusterCard key={cluster.id} cluster={cluster} />)}</div>
        </div>
      </section>
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-earth-50 p-7"><h2 className="font-display text-3xl font-semibold text-earth-950">Where should I begin?</h2><p className="mt-4 text-base leading-7 text-earth-700">Start with readiness, then household fit, then breed suitability. A dog decision should move from responsibility to preference, not the other way around.</p><Link href="/guides/should-i-get-a-dog" className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Start here</Link></div>
          <div className="rounded-[2rem] bg-earth-50 p-7"><h2 className="font-display text-3xl font-semibold text-earth-950">Decision pathways</h2><p className="mt-4 text-base leading-7 text-earth-700">Move from question pages to tools, standards, breed dossiers, and African dog-life context until the next step becomes obvious.</p><Link href="/guides" className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Open guides</Link></div>
          <div className="rounded-[2rem] bg-earth-50 p-7"><h2 className="font-display text-3xl font-semibold text-earth-950">Coming expansion</h2><p className="mt-4 text-base leading-7 text-earth-700">This map can later hold deeper breed pages, cost tools, local directories, owner reports, training trackers, and verified expert review.</p><Link href="/intelligence-vault" className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Open vault</Link></div>
        </div>
      </section>

      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-600">Utility layer</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-earth-950">Use the tool before the guide</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-earth-700">Decision guides explain the issue. Tools help users test readiness, compare breeds, estimate responsibility, and plan humane training before action.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dogTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
          </div>
        </div>
      </section>
      <RelatedLinks title="Next paths" links={[{ title: "Suitability Engine", href: "/suitability-engine" }, { title: "Dog Decision Guides", href: "/guides" },
          { title: "Dog Ownership Topics", href: "/topics" },
          { title: "Search", href: "/search" }, { title: "Breed Dossiers", href: "/breed-dossiers" }, { title: "Ownership Standard", href: "/ownership-standard" }]} />
      <ReadinessBriefCTA />
      <Footer />
    </main>
  );
}