import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LaunchCTA } from "@/components/LaunchCTA";

export const metadata: Metadata = {
  title: "Press & Media | The Dog Bond",
  description: "Public-facing media information for journalists, bloggers, partners, podcast hosts, schools, trainers, institutions, and community educators."
};

const covers = [
  "dog ownership readiness",
  "breed suitability",
  "humane training",
  "public safety",
  "Nigerian/African dog ownership realities",
  "local African dogs",
  "dog owner mistakes",
  "partnership standards",
  "public education campaigns"
];

const angles = [
  "Why many dog ownership problems begin before purchase",
  "Guard dogs, public safety, and responsible protection",
  "Dogs in Nigerian compounds and estates",
  "The hidden value of local African dogs",
  "Why humane training matters",
  "Children and dog safety",
  "Dog ownership as household responsibility"
];

export default function PressPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Media readiness" title="Press & Media" text="A public-facing media page for journalists, bloggers, partners, podcast hosts, schools, trainers, institutions, and community educators." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.64fr_0.36fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold text-earth-950">About The Dog Bond</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">
              The Dog Bond is an educational dog ownership intelligence platform helping African households choose, train, manage, and live responsibly with dogs. It includes guides, tools, topics, glossary terms, a mistake library, breed pages, African dog-life pages, partner standards, and public education campaigns.
            </p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">What The Dog Bond covers</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {covers.map((item) => <div key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{item}</div>)}
            </div>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Platform facts</h2>
            <div className="mt-5 space-y-3">
              <p className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">The Dog Bond is an educational dog ownership intelligence platform.</p>
              <p className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">It includes guides, tools, topics, glossary terms, mistake library, breed pages, African dog-life pages, partner standards, and campaigns.</p>
              <p className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">It is currently a static public platform.</p>
            </div>

            <section className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Media disclaimer</p>
              <p className="mt-3 text-sm leading-7 text-earth-700">The Dog Bond does not provide veterinary diagnosis, professional training replacement, emergency intervention, or legal advice.</p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-earth-950 p-7 text-earth-50 shadow-card">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">Suggested story angles</p>
              <div className="mt-5 space-y-3">
                {angles.map((item) => <p key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold leading-6 text-earth-50">{item}</p>)}
              </div>
            </div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Contact</h2>
              <p className="mt-3 leading-7 text-earth-700">For media, education, and public-interest questions:</p>
              <a href="mailto:hello@thedogbond.com" className="mt-5 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">hello@thedogbond.com</a>
            </div>
          </aside>
        </div>
      </section>
      <LaunchCTA />
      <Footer />
    </main>
  );
}
