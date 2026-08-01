import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Dogs in Estates and Shared Spaces",
  description: "A deep page on dogs in estates, apartments, and shared environments: leash control, noise, roaming, neighbours, children, waste, shared roads, and responsible ownership."
};

export default function AfricanRealityPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="African dog life" title="Dogs in Estates and Shared Spaces" text="A deep page on dogs in estates, apartments, and shared environments: leash control, noise, roaming, neighbours, children, waste, shared roads, and responsible ownership." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
          <div className="space-y-6">
            <section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Shared space changes the duty</h2><p className="mt-4 text-lg leading-8 text-earth-700">In an estate, a dog affects neighbours, children, visitors, guards, cleaners, and shared roads. The owner’s duty is wider than the private home.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Leash control</h2><p className="mt-4 text-lg leading-8 text-earth-700">Leash control is a public-safety skill. Dogs should not drag owners, lunge at people, or move through shared paths without control.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Noise and nuisance</h2><p className="mt-4 text-lg leading-8 text-earth-700">Repeated barking can create conflict even when the dog means no harm. Owners must understand whether barking is alertness, fear, boredom, or poor routine.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Roaming and waste</h2><p className="mt-4 text-lg leading-8 text-earth-700">Free roaming and unmanaged waste reduce trust and can create fear. Estate owners should manage movement, hygiene, and shared spaces.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Children and visitors</h2><p className="mt-4 text-lg leading-8 text-earth-700">Estate children and visitors may not know the dog. A responsible owner prevents surprise contact and respects fear.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Security concerns</h2><p className="mt-4 text-lg leading-8 text-earth-700">A dog can add alertness, but estate security must not become reckless intimidation. Control matters more than drama.</p></section>
          </div>
          <section className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Educational note</p>
            <p className="mt-3 text-sm leading-7 text-earth-700">This page is educational and does not replace veterinary care, professional training, behavioural assessment, or local legal guidance.</p>
          </section>
        </div>
      </section>
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-semibold text-earth-950">Continue this pathway</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/guides/dog-in-estate" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Dog in an Estate →</Link>
<Link href="/guides/dogs-and-neighbours" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Dogs and Neighbours →</Link>
<Link href="/tools/readiness-checklist" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Readiness Checklist →</Link>
          </div>
        </div>
      </section>
      <RelatedLinks title="African dog-life paths" links={[
        { title: "African Dog Life Atlas", href: "/african-dog-life" },
        { title: "Dog Ownership in Nigeria", href: "/african-dog-life/nigeria" },
        { title: "Local African Dogs", href: "/topics/local-african-dogs" }
      ]} />
      <Footer />
    </main>
  );
}
