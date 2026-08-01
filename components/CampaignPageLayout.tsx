import Link from "next/link";
import type { CampaignPage } from "@/lib/campaigns";
import { RelatedLinks } from "@/components/RelatedLinks";
import { StaticContactCTA } from "@/components/StaticContactCTA";

export function CampaignPageLayout({ campaign }: { campaign: CampaignPage }) {
  return (
    <>
      <section className="bg-earth-950 px-5 py-20 text-earth-50 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">Public education campaign</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">{campaign.title}</h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-earth-200">{campaign.summary}</p>
        </div>
      </section>

      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Why it matters</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">{campaign.whyItMatters}</p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Who should read it</h2>
            <p className="mt-4 text-lg leading-8 text-earth-700">{campaign.whoShouldRead}</p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Key messages</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {campaign.keyMessages.map((message) => <li key={message} className="rounded-2xl bg-forest-100 p-4 text-sm font-semibold leading-6 text-forest-950">{message}</li>)}
            </ul>

            <section className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Share copy</p>
              <p className="mt-3 text-lg leading-8 text-earth-800">{campaign.shareCopy}</p>
            </section>

            <section className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Educational disclaimer</p>
              <p className="mt-3 text-sm leading-7 text-earth-700">This campaign is educational. It does not replace veterinary care, professional training, behavioural assessment, or local legal guidance.</p>
            </section>
          </article>

          <aside className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
            <h2 className="font-display text-2xl font-semibold text-earth-950">Suggested guides and tools</h2>
            <div className="mt-5 space-y-3">
              {campaign.links.map((item) => <Link key={item.href} href={item.href} className="block rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{item.title}</Link>)}
            </div>
          </aside>
        </div>
      </section>

      <StaticContactCTA title="Support public education" text="Partners, schools, brands, trainers, vets, and community groups can express interest in responsible dog ownership education." email="partners@thedogbond.com" />
      <RelatedLinks title="Campaign pathways" links={[{ title: "All campaigns", href: "/campaigns" }, { title: "Share The Dog Bond", href: "/share" }, { title: "Partner With Us", href: "/partners" }]} />
    </>
  );
}
