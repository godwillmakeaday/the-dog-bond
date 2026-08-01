import Link from "next/link";
import type { PartnerCategory } from "@/lib/partners";
import { RelatedLinks } from "@/components/RelatedLinks";
import { StaticContactCTA } from "@/components/StaticContactCTA";

export function PartnerPageLayout({ category }: { category: PartnerCategory }) {
  return (
    <>
      <section className="bg-earth-950 px-5 py-20 text-earth-50 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">Partner category</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">{category.title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-earth-200">{category.summary}</p>
        </div>
      </section>

      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Who this page is for</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">{category.whoFor}</p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Why this partner category matters</h2>
            <p className="mt-4 text-lg leading-8 text-earth-700">{category.whyMatters}</p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">What responsible partnership could look like</h2>
            <p className="mt-4 text-lg leading-8 text-earth-700">{category.responsiblePartnership}</p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Partner standards</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {category.standards.map((item) => <li key={item} className="rounded-2xl bg-forest-100 p-4 text-sm font-semibold leading-6 text-forest-950">{item}</li>)}
            </ul>

            <section className="mt-10 rounded-[2rem] bg-earth-950 p-7 text-earth-50">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">What The Dog Bond will not support</p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {category.notSupport.map((item) => <li key={item} className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-earth-50">{item}</li>)}
              </ul>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Related guides, tools, or topics</h2>
              <div className="mt-5 space-y-3">
                {category.related.map((item) => <Link key={item.href} href={item.href} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{item.title}</Link>)}
              </div>
            </div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Trust documents</h2>
              <div className="mt-5 space-y-3">
                <Link href="/partners" className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">Partner system</Link>
                <Link href="/editorial-policy" className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">Editorial Policy</Link>
                <Link href="/disclaimer" className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">Disclaimer</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <StaticContactCTA title="Partner interest" text="Dedicated partner intake forms are coming soon. For now, send a brief note about your category, location, and responsible ownership interest." email="partners@thedogbond.com" />
      <RelatedLinks title="Partner pathways" links={[{ title: "All partners", href: "/partners" }, { title: "Directory", href: "/directory" }, { title: "Use The Dog Bond", href: "/use-the-dog-bond" }]} />
    </>
  );
}
