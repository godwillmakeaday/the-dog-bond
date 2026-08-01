import Link from "next/link";
import type { DecisionGuide } from "@/lib/data";
import { decisionGuides } from "@/lib/data";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { GuideToolPanel } from "@/components/GuideToolPanel";
import { FAQBlock } from "@/components/FAQBlock";
import { guideDepthFor } from "@/lib/guideDepth";
import { topicPages } from "@/lib/topics";

export function GuidePageLayout({ guide }: { guide: DecisionGuide }) {
  const depth = guideDepthFor(guide);
  const relatedTopics = depth.relatedTopics.map((slug) => topicPages.find((topic) => topic.slug === slug)).filter(Boolean);
  const relatedGuides = guide.relatedGuides
    .map((slug) => decisionGuides.find((item) => item.slug === slug))
    .filter(Boolean) as DecisionGuide[];

  const siteLinks = guide.relatedSiteLinks.map((href) => {
    const label = href.replace("/", "").split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return { title: label || "Home", href };
  });

  return (
    <>
      <section className="bg-earth-950 px-5 py-20 text-earth-50 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-earth-800 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-earth-200">{guide.category}</span>
            <span className="rounded-full bg-forest-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-earth-50">{guide.readingTime}</span>
          </div>
          <h1 className="mt-7 font-display text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">{guide.title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-earth-200">{guide.question}</p>
        </div>
      </section>

      <main className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-10">
            <section>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-forest-800">Short answer</p>
              <p className="mt-4 text-xl leading-9 text-earth-800">{guide.shortAnswer}</p>
            </section>
            <section className="mt-10 rounded-[2rem] bg-forest-100 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-forest-900">Quick verdict</p>
              <p className="mt-4 text-lg leading-8 text-forest-950">{depth.quickVerdict}</p>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-earth-950">Who this is for</h2>
              <p className="mt-4 text-lg leading-8 text-earth-700">{guide.whoThisIsFor}</p>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-earth-950">What to understand</h2>
              <div className="mt-5 space-y-5">{guide.whatToUnderstand.map((item) => <p key={item} className="text-lg leading-8 text-earth-700">{item}</p>)}</div>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-earth-950">Decision factors</h2>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">{depth.decisionFactors.map((item) => <li key={item} className="rounded-2xl border border-earth-200 bg-earth-50 p-4 text-sm leading-6 text-earth-700">{item}</li>)}</ul>
            </section>
            <section className="mt-10 rounded-[2rem] bg-earth-950 p-7 text-earth-50">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-300">Common mistake</p>
              <p className="mt-4 text-xl leading-8">{guide.commonMistake}</p>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-earth-950">Practical checklist</h2>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">{guide.practicalChecklist.map((item) => <li key={item} className="rounded-2xl border border-earth-200 bg-earth-50 p-4 text-sm leading-6 text-earth-700"><span className="font-bold text-earth-950">Check:</span> {item}</li>)}</ul>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-earth-950">Decision signal</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-forest-100 p-5"><p className="font-bold text-forest-950">Green signal</p><p className="mt-2 text-sm leading-6 text-forest-900">{guide.decisionSignal.green}</p></div>
                <div className="rounded-2xl bg-earth-100 p-5"><p className="font-bold text-earth-950">Yellow signal</p><p className="mt-2 text-sm leading-6 text-earth-700">{guide.decisionSignal.yellow}</p></div>
                <div className="rounded-2xl bg-stone-200 p-5"><p className="font-bold text-earth-950">Red signal</p><p className="mt-2 text-sm leading-6 text-earth-700">{guide.decisionSignal.red}</p></div>
              </div>
            </section>
            <FAQBlock faqs={depth.faqs} />
            <section className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-500">Educational disclaimer</p>
              <p className="mt-3 text-sm leading-7 text-earth-700">{guide.disclaimer}</p>
            </section>
          </article>
          <aside className="space-y-6">
            <GuideToolPanel category={guide.category} slug={guide.slug} />
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Related guides</h2>
              <div className="mt-5 space-y-3">{relatedGuides.map((item) => <Link key={item.slug} href={`/guides/${item.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800 transition hover:bg-earth-100">{item.title}</Link>)}</div>
            </div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Related topics</h2>
              <div className="mt-5 space-y-3">{relatedTopics.map((topic) => topic ? <Link key={topic.slug} href={`/topics/${topic.slug}`} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800 transition hover:bg-earth-100">{topic.title}</Link> : null)}</div>
            </div>
            <RelatedLinks title="Related site paths" links={[...siteLinks, { title: "Search related guides", href: "/search" }, { title: "View topic pages", href: "/topics" }, { title: "Start Here", href: "/start-here" }]} />
          </aside>
        </div>
      </main>
      <ReadinessBriefCTA />
    </>
  );
}
