import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LaunchCTA } from "@/components/LaunchCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Public Launch Checklist",
  description: "A static launch readiness checklist for The Dog Bond platform, trust, SEO, distribution, domain, and first 30-day plan.",
  pathname: "/launch-checklist",
  noIndex: true,
});

const groups = [
  {
    title: "Platform readiness",
    items: ["homepage clear", "start-here page working", "search working", "tools accessible", "guides accessible", "topics accessible", "glossary accessible", "mistakes accessible", "breeds accessible", "partner pages accessible", "campaigns accessible", "footer links working"]
  },
  {
    title: "Trust readiness",
    items: ["about page", "editorial policy", "disclaimer", "contact page", "partner standards", "directory has no fake listings", "no fake testimonials", "no fake vet-review claims"]
  },
  {
    title: "SEO readiness",
    items: ["sitemap updated", "robots present", "page metadata present", "topic pages linked", "search page linked", "internal linking clear"]
  },
  {
    title: "Distribution readiness",
    items: ["share page ready", "campaign pages ready", "launch manifesto ready", "press page ready", "updates page ready", "partner page ready"]
  },
  {
    title: "Domain readiness",
    items: ["Vercel link working", "custom domain chosen", "DNS plan ready", "canonical URL plan ready", "old deployment links not used in public materials"]
  }
];

export default function LaunchChecklistPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Launch readiness" title="Public Launch Checklist" text="A static checklist for confirming that The Dog Bond is ready for serious public use." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card">
              <h2 className="font-display text-3xl font-semibold text-earth-950">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">
                    <span aria-hidden="true">□</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] bg-earth-950 p-8 text-earth-50 shadow-card">
          <h2 className="font-display text-4xl font-semibold">First 30-day launch plan</h2>
          <p className="mt-4 max-w-3xl leading-8 text-earth-100">The checklist connects directly to the first month of trust-building, testing, public education, partnership outreach, and positioning.</p>
          <a href="/launch-plan" className="mt-7 inline-block rounded-full bg-earth-50 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-950">Open launch plan</a>
        </div>
      </section>
      <LaunchCTA />
      <Footer />
    </main>
  );
}
