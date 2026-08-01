import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Dogs in Nigerian Compounds | The Dog Bond",
  description: "A deep page on gate control, visitors, children, feeding discipline, barking, neighbours, shelter, shade, suitable dog types, and owner mistakes in compound homes."
};

export default function AfricanRealityPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="African dog life" title="Dogs in Nigerian Compounds" text="A deep page on gate control, visitors, children, feeding discipline, barking, neighbours, shelter, shade, suitable dog types, and owner mistakes in compound homes." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
          <div className="space-y-6">
            <section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Gate control</h2><p className="mt-4 text-lg leading-8 text-earth-700">The gate is one of the most important safety points in a compound. Dogs must not control the gate alone. Owners need routines for visitors, deliveries, children, and unexpected entry.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Visitors and children</h2><p className="mt-4 text-lg leading-8 text-earth-700">A compound dog meets many people. Children may run, shout, or approach food. Visitors may fear dogs. The owner must create safe separation and supervised introductions.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Feeding discipline and barking</h2><p className="mt-4 text-lg leading-8 text-earth-700">Irregular feeding and uncontrolled barking can create instability. Feeding discipline builds routine, while barking should be understood as alertness, fear, boredom, or poor boundaries.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Neighbours and public safety</h2><p className="mt-4 text-lg leading-8 text-earth-700">Compounds exist inside communities. A responsible owner respects neighbours’ fear, movement, sleep, and safety.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Shelter and shade</h2><p className="mt-4 text-lg leading-8 text-earth-700">Compound dogs are often outdoors, so shade, water, rain protection, and clean resting areas are non-negotiable.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Suitable dog types</h2><p className="mt-4 text-lg leading-8 text-earth-700">The suitable compound dog is not always the largest. It is the dog whose energy, control needs, and temperament fit the household’s capacity.</p></section>
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
            <a href="/guides/best-dog-for-compound" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Best Dog for a Compound →</a>
<a href="/guides/visitor-safety-with-dogs" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Visitor Safety With Dogs →</a>
<a href="/tools/guard-dog-checker" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Guard Dog Checker →</a>
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
