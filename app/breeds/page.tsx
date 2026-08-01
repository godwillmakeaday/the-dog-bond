import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { breedPages } from "@/lib/breeds";

export const metadata: Metadata = {
  title: "Dog Breed Authority Pages | The Dog Bond",
  description: "Deeper breed-specific pages for suitability, family life, protection, African household fit, and owner readiness."
};

export default function BreedsPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Breed authority" title="Dog Breed Authority Pages" text="Breed-specific decision pages for suitability, owner readiness, family life, protection, and African household reality." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {breedPages.map((breed) => (
            <article key={breed.slug} className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
              <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-forest-900">Breed</span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-earth-950">{breed.name}</h2>
              <p className="mt-4 leading-7 text-earth-700">{breed.summary}</p>
              <Link href={`/breeds/${breed.slug}`} className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Open breed page</Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
