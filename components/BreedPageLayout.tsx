import Link from "next/link";
import type { BreedPage } from "@/lib/breeds";
import { decisionGuides } from "@/lib/data";
import { dogTools } from "@/lib/tools";
import { glossaryTerms } from "@/lib/glossary";
import { RelatedLinks } from "@/components/RelatedLinks";

export function BreedPageLayout({ breed }: { breed: BreedPage }) {
  const guides = breed.relatedGuides.map((slug) => decisionGuides.find((guide) => guide.slug === slug)).filter(Boolean);
  const tools = breed.relatedTools.map((href) => dogTools.find((tool) => tool.href === href)).filter(Boolean);
  const terms = breed.relatedGlossary.map((slug) => glossaryTerms.find((term) => term.slug === slug)).filter(Boolean);

  return (
    <>
      <section className="bg-earth-950 px-5 py-20 text-earth-50 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">Breed authority page</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">{breed.name}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-earth-200">{breed.summary}</p>
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] bg-forest-100 p-6"><p className="text-sm font-bold uppercase tracking-[0.2em] text-forest-900">Best fit</p><p className="mt-3 leading-7 text-forest-950">{breed.bestFit}</p></div>
              <div className="rounded-[2rem] bg-earth-100 p-6"><p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-700">Not ideal for</p><p className="mt-3 leading-7 text-earth-800">{breed.notIdealFor}</p></div>
            </div>
            {[
              ["Temperament", breed.temperament],
              ["Energy level", breed.energyLevel],
              ["Training needs", breed.trainingNeeds],
              ["Protection tendency", breed.protectionTendency],
              ["Family suitability", breed.familySuitability],
              ["Heat and climate note", breed.climateNote],
              ["Nigerian/African household fit", breed.africanHouseholdFit],
              ["First-time owner caution", breed.firstTimeOwnerCaution]
            ].map(([heading, body]) => (
              <section key={heading} className="mt-8">
                <h2 className="font-display text-3xl font-semibold text-earth-950">{heading}</h2>
                <p className="mt-3 text-lg leading-8 text-earth-700">{body}</p>
              </section>
            ))}
            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Common mistakes</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">{breed.commonMistakes.map((item) => <li key={item} className="rounded-2xl bg-earth-50 p-4 text-sm leading-6 text-earth-700">{item}</li>)}</ul>
            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Owner readiness checklist</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">{breed.readinessChecklist.map((item) => <li key={item} className="rounded-2xl border border-earth-200 bg-white p-4 text-sm leading-6 text-earth-700">{item}</li>)}</ul>
            <section className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-500">Breed disclaimer</p>
              <p className="mt-3 text-sm leading-7 text-earth-700">This page is educational and does not declare any breed perfect or hopeless. Individual behaviour, health, training, owner capacity, and environment matter.</p>
            </section>
          </article>
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card"><h2 className="font-display text-2xl font-semibold text-earth-950">Related guides</h2><div className="mt-5 space-y-3">{guides.map((guide) => guide ? <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{guide.title}</Link> : null)}</div></div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card"><h2 className="font-display text-2xl font-semibold text-earth-950">Tools</h2><div className="mt-5 space-y-3">{tools.map((tool) => tool ? <Link key={tool.href} href={tool.href} className="block rounded-2xl bg-forest-100 p-4 text-sm font-bold leading-6 text-forest-950">{tool.title}</Link> : null)}</div></div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card"><h2 className="font-display text-2xl font-semibold text-earth-950">Glossary terms</h2><div className="mt-5 space-y-3">{terms.map((term) => term ? <Link key={term.slug} href={`/glossary/${term.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{term.term}</Link> : null)}</div></div>
          </aside>
        </div>
      </section>
      <RelatedLinks title="Breed decision pathways" links={[{ title: "All Breeds", href: "/breeds" }, { title: "Breed Comparison Tool", href: "/tools/breed-comparison" }, { title: "Suitability Engine", href: "/suitability-engine" }]} />
    </>
  );
}
