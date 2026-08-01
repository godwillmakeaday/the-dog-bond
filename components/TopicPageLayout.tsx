import Link from "next/link";
import { decisionGuides } from "@/lib/data";
import { glossaryTerms } from "@/lib/glossary";
import { topicPages, type TopicPage } from "@/lib/topics";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { TopicDeepDive } from "@/components/TopicDeepDive";

export function TopicPageLayout({ topic }: { topic: TopicPage }) {
  const guides = topic.guideSlugs.map((slug) => decisionGuides.find((guide) => guide.slug === slug)).filter(Boolean);
  const terms = topic.glossaryTerms.map((slug) => glossaryTerms.find((term) => term.slug === slug)).filter(Boolean);
  const relatedTopics = topic.relatedTopicSlugs.map((slug) => topicPages.find((item) => item.slug === slug)).filter(Boolean);

  return (
    <>
      <section className="bg-earth-950 px-5 py-20 text-earth-50 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">Dog Bond topic</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">{topic.title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-earth-200">{topic.description}</p>
        </div>
      </section>

      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <TopicDeepDive topic={topic} />
          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-earth-950 p-7 text-earth-50 shadow-card">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-300">Recommended guides</p>
              <div className="mt-5 space-y-3">
                {guides.map((guide) => guide ? (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block rounded-2xl bg-white/10 p-4 text-sm font-bold leading-6 text-earth-50 transition hover:bg-white/15">
                    {guide.title}
                  </Link>
                ) : null)}
              </div>
            </div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Glossary terms</h2>
              <div className="mt-5 space-y-3">
                {terms.map((term) => term ? <Link key={term.slug} href={`/glossary/${term.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{term.term}</Link> : null)}
              </div>
            </div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Related topics</h2>
              <div className="mt-5 space-y-3">
                {relatedTopics.map((item) => item ? <Link key={item.slug} href={`/topics/${item.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{item.title}</Link> : null)}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <RelatedLinks
        title="Tools and pages for this topic"
        links={[...topic.toolHrefs, ...topic.articleHrefs, ...topic.pageHrefs].map((item) => ({ title: item.title, href: item.href, text: "Continue through this topic pathway." }))}
      />
      <ReadinessBriefCTA />
    </>
  );
}
