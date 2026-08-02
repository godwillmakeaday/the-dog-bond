import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  defaultArticleAuthority,
  editorialStandards,
  publisher,
} from "@/lib/authority";

export const metadata: Metadata = {
  title: "Educational Disclaimer",
  description:
    "The Dog Bond disclaimer covering veterinary care, training, behaviour, legal information, emergencies, external links, partnerships, and user responsibility.",
};

const boundaries = [
  {
    title: "General educational content",
    text:
      "The Dog Bond provides general education, planning tools, commentary, and ownership frameworks. Content is not tailored to the complete facts of a particular dog, household, dispute, or emergency.",
  },
  {
    title: "Not veterinary advice",
    text:
      "Nothing on this platform diagnoses illness, prescribes treatment, interprets laboratory results, or replaces examination by a qualified veterinarian.",
  },
  {
    title: "Training and behaviour",
    text:
      "General training or behaviour material cannot replace direct assessment by a suitably qualified professional who can observe the dog, environment, handlers, triggers, and safety risks.",
  },
  {
    title: "Not case-specific legal advice",
    text:
      "Legal and public-responsibility content is general information. Laws, procedures, liabilities, and enforcement practices differ by place and circumstance. Formal legal advice requires a professional engagement based on the relevant facts and jurisdiction.",
  },
  {
    title: "Dangerous behaviour",
    text:
      "Do not rely on an article or online tool where a dog has bitten, repeatedly threatened people, escaped confinement, guarded resources dangerously, or created an immediate risk to children, neighbours, visitors, workers, or other animals.",
  },
  {
    title: "Emergency situations",
    text:
      "Suspected poisoning, heat distress, breathing difficulty, major injury, collapse, seizures, severe bleeding, or immediate attack risk requires urgent local professional or emergency assistance.",
  },
];

export default function DisclaimerPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Educational limits"
        title="Educational Disclaimer"
        text="The Dog Bond helps people think more clearly about dog ownership, but it does not replace case-specific professional judgment."
      />

      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
              Read before relying
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950 md:text-5xl">
              Education is not diagnosis, representation, or emergency care
            </h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">
              {publisher.name} is an educational publication. Its materials can
              improve preparation and decision-making, but they cannot account
              for every fact, medical condition, behavioural trigger, local
              rule, household circumstance, or safety risk.
            </p>
          </div>

          <div className="mt-10 rounded-[2.5rem] border border-amber-300 bg-amber-50 p-8 shadow-card md:p-10">
            <h2 className="font-display text-3xl font-semibold text-earth-950">
              Seek urgent help when necessary
            </h2>
            <p className="mt-4 text-lg leading-8 text-earth-800">
              If a dog shows signs of serious illness, poisoning, heat
              distress, injury, repeated aggression, biting behaviour, severe
              fear, escape risk, or immediate danger, contact an appropriate
              veterinarian, qualified behaviour or training professional,
              emergency service, or local authority without delay.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {boundaries.map((boundary) => (
              <article
                key={boundary.title}
                className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card"
              >
                <h2 className="font-display text-2xl font-semibold text-earth-950">
                  {boundary.title}
                </h2>
                <p className="mt-4 leading-7 text-earth-700">
                  {boundary.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-earth-950 px-5 py-16 text-earth-50 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <h2 className="font-display text-2xl font-semibold">
              Review status
            </h2>
            <p className="mt-4 leading-7 text-earth-100">
              {defaultArticleAuthority.veterinaryReviewStatus}. Veterinary,
              behavioural, welfare, and training claims are not described as
              professionally reviewed unless a qualified reviewer is expressly
              identified.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <h2 className="font-display text-2xl font-semibold">
              User responsibility
            </h2>
            <p className="mt-4 leading-7 text-earth-100">
              Readers remain responsible for supervision, confinement,
              veterinary care, compliance with applicable rules, professional
              consultation, and decisions made in relation to a particular dog.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <h2 className="font-display text-2xl font-semibold">
              Accuracy and correction
            </h2>
            <p className="mt-4 leading-7 text-earth-100">
              {editorialStandards.corrections}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <article>
            <h2 className="font-display text-3xl font-semibold text-earth-950">
              External links and third parties
            </h2>
            <p className="mt-4 leading-8 text-earth-700">
              Links to outside organisations, professionals, products, or
              services are provided for convenience or further investigation.
              Their inclusion does not guarantee accuracy, availability,
              suitability, competence, or a particular result.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl font-semibold text-earth-950">
              Partnerships and commercial relationships
            </h2>
            <p className="mt-4 leading-8 text-earth-700">
              Sponsorships, affiliate relationships, paid placements, and
              partnerships must be disclosed. Commercial participation does not
              purchase editorial conclusions or professional endorsement.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl font-semibold text-earth-950">
              Editorial and technological limitations
            </h2>
            <p className="mt-4 leading-8 text-earth-700">
              Research, drafting, editing, search, automation, and software
              tools may assist publication. Human editorial responsibility
              remains necessary, and no technological process eliminates the
              possibility of error, omission, outdated information, or
              misapplication.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl font-semibold text-earth-950">
              No guarantee of outcome
            </h2>
            <p className="mt-4 leading-8 text-earth-700">
              The Dog Bond does not guarantee health, temperament, training
              success, compatibility, safety, legal outcome, financial result,
              or suitability of any breed, dog, method, product, professional,
              or ownership decision.
            </p>
          </article>
        </div>
      </section>

      <RelatedLinks
        title="Trust and accountability"
        links={[
          {
            title: "Editorial Policy",
            href: "/editorial-policy",
            text: "Read the standards governing publication and correction.",
          },
          {
            title: "About The Dog Bond",
            href: "/about",
            text: "See who publishes the platform and its professional limits.",
          },
          {
            title: "Contact",
            href: "/contact",
            text: "Report an error, raise a concern, or submit supporting evidence.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
