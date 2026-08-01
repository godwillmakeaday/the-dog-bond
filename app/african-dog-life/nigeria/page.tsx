import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Dog Ownership in Nigeria",
  description: "A deep authority page on Nigerian dog ownership realities: compounds, estates, security dogs, local dogs, heat, feeding, public safety, children, visitors, neighbours, and responsible ownership."
};

export default function AfricanRealityPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="African dog life" title="Dog Ownership in Nigeria" text="A deep authority page on Nigerian dog ownership realities: compounds, estates, security dogs, local dogs, heat, feeding, public safety, children, visitors, neighbours, and responsible ownership." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
          <div className="space-y-6">
            <section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Nigerian compounds</h2><p className="mt-4 text-lg leading-8 text-earth-700">Dogs in Nigerian compounds often live around gates, visitors, children, neighbours, delivery people, and shared family routines. The owner must manage access, feeding, barking, and control before calling the dog protective.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Estates and shared spaces</h2><p className="mt-4 text-lg leading-8 text-earth-700">Estate dog ownership requires leash control, waste control, noise management, and respect for neighbours. A dog that roams freely in shared spaces creates fear and conflict.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Security dogs</h2><p className="mt-4 text-lg leading-8 text-earth-700">Dogs used for security still need food, water, shade, rest, trained handling, and humane treatment. A security dog without control is risk, not responsible protection.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Local dogs and imported breeds</h2><p className="mt-4 text-lg leading-8 text-earth-700">Local African dogs deserve respect and training. Imported breeds require careful climate, cost, and handling decisions. Status should never outrun owner capacity.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Hot climate care</h2><p className="mt-4 text-lg leading-8 text-earth-700">Shade, water, ventilation, and rest are basic duties in Nigeria’s hot climates. Heat stress and neglect are preventable ownership failures.</p></section>
<section className="rounded-[2rem] bg-earth-50 p-6"><h2 className="font-display text-3xl font-semibold text-earth-950">Children, visitors, neighbours, and gates</h2><p className="mt-4 text-lg leading-8 text-earth-700">Responsible Nigerian dog ownership requires rules for children, visitor entry, gate opening, and neighbour safety. The owner, not the dog, must control the risk.</p></section>
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
            <a href="/african-dog-life/compound-dogs" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Dogs in Nigerian Compounds →</a>
<a href="/african-dog-life/estate-dogs" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Estate Dogs →</a>
<a href="/tools/readiness-checklist" className="rounded-2xl bg-white p-5 text-sm font-bold leading-6 text-earth-800 shadow-card transition hover:-translate-y-1">Readiness Checklist →</a>
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
