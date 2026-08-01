import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dog Readiness Brief",
  description: "A future downloadable checklist for choosing, preparing for, and responsibly managing a dog in your household."
};

export default function DogReadinessBriefPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Future brief" title="Dog Readiness Brief" text="A practical checklist for choosing, preparing for, and responsibly managing a dog in your household." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card">
            <h2 className="font-display text-4xl font-semibold text-earth-950">What the brief will cover</h2>
            <ul className="mt-6 space-y-3 text-lg leading-8 text-earth-700">
              <li>• Household readiness before ownership</li>
              <li>• Cost, feeding, water, shelter, and care planning</li>
              <li>• Breed suitability and powerful-breed caution</li>
              <li>• Children, visitors, neighbours, gates, and public safety</li>
              <li>• Humane training and long-term responsibility</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] bg-earth-950 p-8 text-earth-50 shadow-card">
            <h2 className="font-display text-4xl font-semibold">Download coming soon</h2>
            <p className="mt-5 text-lg leading-8 text-earth-100">The brief will become a future lead magnet. For now, use the live tools to check readiness directly.</p>
            <Link href="/tools/readiness-checklist" className="mt-8 inline-block rounded-full bg-earth-50 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-950">Use checklist</Link>
          </div>
        </div>
      </section>
      <RelatedLinks title="Tools connected to this brief" links={[{ title: "Readiness Checklist", href: "/tools/readiness-checklist" }, { title: "Suitability Engine", href: "/suitability-engine" }, { title: "Cost Estimator", href: "/tools/cost-estimator" }]} />
    <RelatedLinks title="Prepare through the platform" links={[{ title: "Start Here", href: "/start-here" }, { title: "Tools", href: "/tools" }, { title: "Guides", href: "/guides" }, { title: "Search", href: "/search" }]} />
      <Footer />
    </main>
  );
}