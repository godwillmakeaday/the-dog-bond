import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  editorialStandards,
  paulMagaji,
  publisher,
} from "@/lib/authority";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "The Dog Bond editorial standards for evidence, corrections, humane training, public safety, professional boundaries, and commercial independence.",
};

const standards = [
  {
    title: "People before clicks",
    text:
      "We publish to improve ownership decisions, not to manufacture fear, status, outrage, or reckless confidence.",
  },
  {
    title: "African context matters",
    text:
      "Housing, climate, security, veterinary access, household structure, public space, and local institutions shape responsible ownership.",
  },
  {
    title: "Humane treatment",
    text:
      "We reject cruelty, intimidation presented as expertise, and training claims that ignore welfare or foreseeable harm.",
  },
  {
    title: "Public safety",
    text:
      "We treat confinement, supervision, breed suitability, training, escape prevention, and neighbour safety as ownership duties.",
  },
  {
    title: "Evidence and uncertainty",
    text: editorialStandards.evidence,
  },
  {
    title: "Professional boundaries",
    text:
      "We do not diagnose illness or present general content as a substitute for veterinary, behavioural, legal, or emergency advice.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Trust standard"
        title="Editorial Policy"
        text="The Dog Bond publishes dog-ownership information around responsibility, humane care, African household reality, and public safety."
      />

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
              Publishing responsibility
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950 md:text-5xl">
              What governs our work
            </h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">
              {publisher.name} is published by {publisher.legalPublisher}. The
              publication is led by {paulMagaji.name}, whose editorial role
              covers responsible ownership, public responsibility,
              institutional policy, contracts, household decision-making, and
              the legal consequences of living with dogs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {standards.map((standard) => (
              <article
                key={standard.title}
                className="rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card"
              >
                <h3 className="font-display text-2xl font-semibold text-earth-950">
                  {standard.title}
                </h3>
                <p className="mt-4 leading-7 text-earth-700">
                  {standard.text}
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
              Review language
            </h2>
            <p className="mt-4 leading-7 text-earth-100">
              Veterinary, behavioural, training, and welfare material is not
              described as professionally reviewed unless a suitably qualified
              reviewer is expressly identified.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <h2 className="font-display text-2xl font-semibold">
              Corrections
            </h2>
            <p className="mt-4 leading-7 text-earth-100">
              {editorialStandards.corrections}
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <h2 className="font-display text-2xl font-semibold">
              Commercial independence
            </h2>
            <p className="mt-4 leading-7 text-earth-100">
              {editorialStandards.conflicts}
            </p>
          </article>
        </div>
      </section>

      <RelatedLinks
        title="Editorial accountability"
        links={[
          {
            title: "Disclaimer",
            href: "/disclaimer",
            text: "Understand the limits of the platform.",
          },
          {
            title: "About The Dog Bond",
            href: "/about",
            text: "See who publishes the platform and why.",
          },
          {
            title: "Contact",
            href: "/contact",
            text: "Send corrections, evidence, or feedback.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
