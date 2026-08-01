import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Start Here", description: "Choose the right Dog Bond pathway for getting a dog, protection, breed comparison, or current ownership." };

const pathways = [
  { title: "I want to get a dog", links: [{ title: "Readiness Checklist", href: "/tools/readiness-checklist" }, { title: "Suitability Engine", href: "/suitability-engine" }, { title: "Should I Get a Dog?", href: "/guides/should-i-get-a-dog" }, { title: "Cost Estimator", href: "/tools/cost-estimator" }] },
  { title: "I want a guard or protection dog", links: [{ title: "Guard Dog Checker", href: "/tools/guard-dog-checker" }, { title: "Before Buying a Powerful Breed", href: "/guides/before-buying-powerful-breed" }, { title: "Guard Dog vs Family Dog", href: "/guides/guard-dog-vs-family-dog" }, { title: "Ownership Standard", href: "/ownership-standard" }] },
  { title: "I want to compare breeds", links: [{ title: "Breed Comparison", href: "/tools/breed-comparison" }, { title: "Breed Dossiers", href: "/breed-dossiers" }, { title: "Best Dog for First-Time Owner", href: "/guides/best-dog-for-first-time-owner" }, { title: "Boerboel Owner Readiness", href: "/guides/boerboel-owner-readiness" }] },
  { title: "I already own a dog", links: [{ title: "Training Routine Planner", href: "/tools/training-routine-planner" }, { title: "Training Without Cruelty", href: "/guides/dog-training-without-cruelty" }, { title: "Dog Feeding Discipline", href: "/guides/dog-feeding-discipline" }, { title: "Dogs and Neighbours", href: "/guides/dogs-and-neighbours" }] }
];

export default function StartHerePage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Start here" title="Choose your Dog Bond pathway" text="The safest path is readiness before ownership, training before protection, and responsibility before breed power." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">{pathways.map((pathway) => <article key={pathway.title} className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card"><h2 className="font-display text-3xl font-semibold text-earth-950">{pathway.title}</h2><div className="mt-6 grid gap-3">{pathway.links.map((link) => <a key={link.href} href={link.href} className="rounded-2xl bg-earth-50 p-4 font-semibold text-earth-800 transition hover:bg-earth-100">{link.title} →</a>)}</div></article>)}</div></section>
      <Footer />
    </main>
  );
}
