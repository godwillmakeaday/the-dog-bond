import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LaunchCTA } from "@/components/LaunchCTA";

export const metadata: Metadata = {
  title: "First 30 Days Launch Plan | The Dog Bond",
  description: "A static first 30-day content and distribution plan for launching The Dog Bond."
};

const weeks = [
  {
    title: "Week 1: Foundation and testing",
    items: ["test all major pages", "test mobile navigation", "test search", "review footer links", "share privately with trusted people", "correct broken routes"]
  },
  {
    title: "Week 2: Public education",
    items: ["share readiness-before-ownership campaign", "share training-without-cruelty campaign", "share responsible guard dogs campaign", "publish short posts from glossary and mistake library", "invite feedback"]
  },
  {
    title: "Week 3: Partnership outreach",
    items: ["send partner page to trainers", "send vet page to clinics", "send estate manager page to estate leaders", "send breeder standards page to responsible breeders", "ask for corrections and collaboration ideas"]
  },
  {
    title: "Week 4: Public positioning",
    items: ["share manifesto", "share press page", "announce directory standards", "invite responsible partners", "collect questions for future guides"]
  }
];

export default function LaunchPlanPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="30-day launch" title="First 30 Days Launch Plan" text="A practical content and distribution plan for launching The Dog Bond slowly, clearly, and responsibly." dark />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {weeks.map((week) => (
            <article key={week.title} className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card">
              <h2 className="font-display text-3xl font-semibold text-earth-950">{week.title}</h2>
              <ul className="mt-6 space-y-3">
                {week.items.map((item) => <li key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] bg-forest-100 p-8 shadow-card">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-900">Launch principle</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950">Launch should build trust slowly.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-earth-700">The Dog Bond should become known for responsibility, not noise.</p>
        </div>
      </section>
      <LaunchCTA />
      <Footer />
    </main>
  );
}
