import Link from "next/link";
import type { GlossaryTerm } from "@/lib/glossary";
import { decisionGuides } from "@/lib/data";
import { topicPages } from "@/lib/topics";
import { dogTools } from "@/lib/tools";
import { RelatedLinks } from "@/components/RelatedLinks";

export function GlossaryPageLayout({ term }: { term: GlossaryTerm }) {
  const guides = term.relatedGuides.map((slug) => decisionGuides.find((guide) => guide.slug === slug)).filter(Boolean);
  const topics = term.relatedTopics.map((slug) => topicPages.find((topic) => topic.slug === slug)).filter(Boolean);
  const tools = term.relatedTools.map((href) => dogTools.find((tool) => tool.href === href)).filter(Boolean);

  return (
    <>
      <section className="bg-earth-950 px-5 py-20 text-earth-50 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">Dog Ownership Glossary</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">{term.term}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-earth-200">{term.shortDefinition}</p>
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Full explanation</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">{term.fullExplanation}</p>
            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Why it matters</h2>
            <p className="mt-4 text-lg leading-8 text-earth-700">{term.whyItMatters}</p>
            <section className="mt-10 rounded-[2rem] bg-earth-950 p-7 text-earth-50">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">Common misunderstanding</p>
              <p className="mt-3 text-xl leading-8">{term.commonMisunderstanding}</p>
            </section>
          </article>
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Related guides</h2>
              <div className="mt-5 space-y-3">
                {guides.map((guide) => guide ? <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{guide.title}</Link> : null)}
              </div>
            </div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Related topics and tools</h2>
              <div className="mt-5 space-y-3">
                {topics.map((topic) => topic ? <Link key={topic.slug} href={`/topics/${topic.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{topic.title}</Link> : null)}
                {tools.map((tool) => tool ? <Link key={tool.href} href={tool.href} className="block rounded-2xl bg-forest-100 p-4 text-sm font-bold leading-6 text-forest-950">{tool.title}</Link> : null)}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <RelatedLinks title="Glossary pathways" links={[{ title: "Glossary", href: "/glossary" }, { title: "Search", href: "/search" }, { title: "Start Here", href: "/start-here" }]} />
    </>
  );
}
