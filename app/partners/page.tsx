import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PartnerCategoryCard } from "@/components/PartnerCategoryCard";
import { StaticContactCTA } from "@/components/StaticContactCTA";
import { partnerCategories, partnerPrinciples } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partner With The Dog Bond",
  description: "Partnership standards for responsible trainers, vets, shelters, breeders, dog-care brands, estate managers, schools, and education partners."
};

const partnerTypes = [
  "dog trainers",
  "veterinarians and clinics",
  "shelters/rescue groups",
  "responsible breeders",
  "dog-food and dog-care brands",
  "estate managers",
  "security firms with humane standards",
  "schools and community groups",
  "media/public education partners"
];

const partnerActions = [
  "contribute educational notes",
  "help improve care standards",
  "support public safety education",
  "sponsor responsible ownership resources",
  "appear in future directories",
  "collaborate on local dog education",
  "help create Nigerian/African dog ownership standards"
];

const notSupport = [
  "cruelty-based training",
  "reckless guard dog promotion",
  "fake medical claims",
  "irresponsible breeding",
  "unsafe intimidation culture",
  "dog fighting",
  "abandonment",
  "misleading guarantees",
  "content that endangers children, visitors, neighbours, or dogs"
];

export default function PartnersPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Partnership system" title="Partner With The Dog Bond" text="A serious partnership page for trainers, vets, shelters, breeders, estate managers, brands, schools, and institutions that can strengthen responsible dog ownership." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_0.35fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Partnership philosophy</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">
              The Dog Bond may work with responsible trainers, vets, shelters, breeders, dog-care brands, estate managers, schools, and institutions, but trust and responsible ownership must remain the center.
            </p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Who can partner</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {partnerTypes.map((item) => <li key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">{item}</li>)}
            </ul>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">What partners can do</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {partnerActions.map((item) => <li key={item} className="rounded-2xl bg-forest-100 p-4 text-sm font-semibold leading-6 text-forest-950">{item}</li>)}
            </ul>

            <section className="mt-10 rounded-[2rem] bg-earth-950 p-7 text-earth-50">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">What The Dog Bond will not support</p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {notSupport.map((item) => <li key={item} className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-earth-50">{item}</li>)}
              </ul>
            </section>
          </article>

          <aside className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
            <h2 className="font-display text-2xl font-semibold text-earth-950">Partner principles</h2>
            <div className="mt-5 space-y-3">
              {partnerPrinciples.map((item) => <p key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">{item}</p>)}
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-500">Future partner categories</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950">Partnership pathways</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partnerCategories.map((category) => <PartnerCategoryCard key={category.slug} category={category} />)}
          </div>
        </div>
      </section>
      <StaticContactCTA title="Partner interest" text="Dedicated partner intake forms are coming soon. Send a short note about your category, standards, and education interest." email="partners@thedogbond.com" />
      <Footer />
    </main>
  );
}
