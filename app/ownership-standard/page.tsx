import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { VisualBlock } from "@/components/VisualBlock";
import { ownerChecklist, ownershipStandards } from "@/lib/data";

export const metadata: Metadata = {
  title: "Responsible Dog Ownership Standard",
  description: "A humane and public-safety framework for responsible dog ownership."
};

export default function OwnershipStandardPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Responsible Dog Ownership Standard"
        title="A dog is a living companion, not a toy, weapon, alarm system, or status symbol."
        text="The standard gives households a humane and public-safety framework for feeding, shelter, health, training, control, breed suitability, and lifelong responsibility."
        dark
      />
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <VisualBlock src="/images/dog-bond/ownership-standard.jpg" title="Care is the foundation of authority over a dog." eyebrow="Ownership standard" />
          <SectionHeader
            eyebrow="The public doctrine"
            title="Responsible ownership protects the dog, the household, and the public."
            text="The Dog Bond Standard gives a simple moral structure: care before control, suitability before status, training before protection, and lifelong responsibility before excitement."
          />
        </div>
      </section>
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The Ten Standards"
            title="The public doctrine of responsible ownership."
            text="Dog ownership becomes serious when care, control, health, and public safety are treated as duties, not suggestions."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ownershipStandards.map((standard, index) => (
              <article key={standard.title} className="rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-earth-900 font-bold text-earth-50">{index + 1}</span>
                <h2 className="mt-6 font-display text-3xl font-semibold text-earth-950">{standard.title}</h2>
                <p className="mt-4 leading-8 text-earth-700">{standard.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Owner’s checklist"
            title="Before getting a dog, can you provide these?"
            text="The checklist is intentionally practical. If the basics are missing, the dog will pay the price, the household may pay the price, and the public may face the risk."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {ownerChecklist.map((item) => (
              <div key={item} className="rounded-3xl border border-earth-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest-100 text-sm font-bold text-forest-900">✓</span>
                <p className="mt-4 text-lg font-semibold capitalize text-earth-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-earth-900 px-5 py-20 text-earth-50 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-earth-100/15 bg-white/10 p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">Public safety warning</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">A protective dog is not a weapon.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-earth-100">
            A dog that protects without discipline can become a danger. Responsible ownership protects the dog, the household, and the public.
          </p>
        </div>
      </section>
      <RelatedLinks
        dark
        links={[
          { title: "Suitability Engine", href: "/suitability-engine", text: "Apply the standard to your own household reality." },
          { title: "Powerful Dog Without Discipline", href: "/articles/powerful-dog-without-discipline", text: "Read the warning before choosing a powerful breed." },
          { title: "African Household Dog", href: "/articles/african-household-dog", text: "Connect the standard to African household life." }
        ]}
      />
      <RelatedLinks title="Decision guides for this page" links={[{"title": "Dog Neglect Warning Signs", "href": "/guides/dog-neglect-warning-signs"}, {"title": "Why Dog Abandonment Is Wrong", "href": "/guides/dog-abandonment"}, {"title": "Dogs and Neighbours", "href": "/guides/dogs-and-neighbours"}, {"title": "Visitor Safety With Dogs", "href": "/guides/visitor-safety-with-dogs"}]} />
      <ReadinessBriefCTA />
      <Footer />
    </main>
  );
}
