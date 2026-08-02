import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  defaultArticleAuthority,
  editorialStandards,
  paulMagaji,
  publisher,
} from "@/lib/authority";

export const metadata: Metadata = {
  title: "About The Dog Bond",
  description: "Mission, philosophy, scope, and standards of The Dog Bond dog ownership intelligence platform."
};

const covers = ["Breed suitability", "Training discipline", "Responsible protection", "Household safety", "African dog life", "Local African dogs", "Cost and care", "Ownership mistakes", "Decision tools", "Practical guides"];
const notDo = ["Veterinary diagnosis", "Dangerous handling instructions", "Cruelty-based training", "Reckless guard dog promotion", "Fake guarantees", "Replacement for qualified professionals"];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="About" title="About The Dog Bond" text="The Dog Bond exists to help households make wiser dog ownership decisions." />
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-earth-200 bg-earth-50 p-8 shadow-card">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Why it exists</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">Most dog decisions are made through emotion, status, fear, imitation, or weak information. The Dog Bond brings structure, responsibility, and African household reality into the decision.</p>
            <p className="mt-5 text-lg leading-8 text-earth-700">A dog is not a toy, weapon, alarm system, or status symbol. A dog is a living companion requiring care, control, training, and responsibility.</p>
          </div>
          <div className="rounded-[2.5rem] border border-earth-200 bg-earth-950 p-8 text-earth-50 shadow-card">
            <h2 className="font-display text-4xl font-semibold">What we cover</h2>
            <div className="mt-6 flex flex-wrap gap-3">{covers.map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{item}</span>)}</div>
            <h2 className="mt-10 font-display text-4xl font-semibold">What we do not do</h2>
            <div className="mt-6 flex flex-wrap gap-3">{notDo.map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">No {item}</span>)}</div>
          </div>
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
              Authority and accountability
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950 md:text-5xl">
              Who publishes The Dog Bond
            </h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">
              {publisher.name} is published as an educational dog-ownership
              platform by {publisher.legalPublisher}. Its founder and legal
              editor is {paulMagaji.name}, a Nigerian barrister whose work here
              focuses on ownership responsibility, household decisions,
              contracts, institutional policy, public safety, and the legal
              consequences of living with dogs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card">
              <h3 className="font-display text-2xl font-semibold text-earth-950">
                Editorial responsibility
              </h3>
              <p className="mt-4 leading-7 text-earth-700">
                {editorialStandards.evidence}
              </p>
            </article>

            <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card">
              <h3 className="font-display text-2xl font-semibold text-earth-950">
                Professional boundaries
              </h3>
              <p className="mt-4 leading-7 text-earth-700">
                {defaultArticleAuthority.veterinaryReviewStatus}. Veterinary,
                behavioural, training, and welfare claims are not described as
                professionally reviewed unless a qualified reviewer is
                expressly identified.
              </p>
            </article>

            <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card">
              <h3 className="font-display text-2xl font-semibold text-earth-950">
                Corrections and independence
              </h3>
              <p className="mt-4 leading-7 text-earth-700">
                {editorialStandards.corrections}{" "}
                {editorialStandards.conflicts}
              </p>
            </article>
          </div>
        </div>
      </section>
      <RelatedLinks title="Continue from here" links={[{ title: "Start Here", href: "/start-here", text: "Choose the right pathway for your situation." }, { title: "Use the Tools", href: "/tools", text: "Move from reading to practical decision support." }, { title: "Ownership Standard", href: "/ownership-standard", text: "Read the moral center of the platform." }]} />
      <Footer />
    </main>
  );
}
