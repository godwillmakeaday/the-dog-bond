import type { Metadata } from "next";
import { BreedDossierCard } from "@/components/BreedDossierCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { VisualBlock } from "@/components/VisualBlock";
import { breedDossiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dog Breed Intelligence Dossiers",
  description: "Serious ownership profiles for popular, powerful, local, family, and working dogs."
};

const chips = ["Family-friendly", "Protection-oriented", "First-time caution", "High energy", "Local resilience", "Experienced handlers"];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BreedDossiersPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Breed Intelligence Dossiers"
        title="Choose by capacity, not status."
        text="Every breed carries tendencies: temperament, energy, training demand, guarding instinct, family suitability, climate realities, and public responsibility."
      />
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Category chips"
              title="A quick map of ownership risk and suitability."
              text="These chips are not rigid labels. They are warnings and orientation signs for households trying to think clearly before choosing a dog."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-earth-200 bg-earth-50 px-4 py-2 text-sm font-bold text-earth-700">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <VisualBlock src="/images/dog-bond/breed-dossier-editorial.jpg" title="Breed choice is a household decision, not a status display." eyebrow="Visual authority" />
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8">
          {breedDossiers.map((breed) => (
            <div key={breed.name} id={slugify(breed.name)}>
              <BreedDossierCard breed={breed} />
            </div>
          ))}
        </div>
      </section>
      <RelatedLinks
        links={[
          { title: "Suitability Engine", href: "/suitability-engine", text: "Test whether your home fits the breed you admire." },
          { title: "Guard Dog vs Dangerous Dog", href: "/articles/guard-dog-vs-dangerous-dog", text: "Understand protection before choosing a guardian breed." },
          { title: "Ownership Standard", href: "/ownership-standard", text: "Use the public doctrine as your ownership checklist." }
        ]}
      />
      <RelatedLinks title="Decision guides for this page" links={[{"title": "German Shepherd in a Nigerian Home", "href": "/guides/german-shepherd-in-nigerian-home"}, {"title": "Rottweiler in a Family House", "href": "/guides/rottweiler-in-family-house"}, {"title": "Boerboel Owner Readiness", "href": "/guides/boerboel-owner-readiness"}, {"title": "Before Buying a Powerful Breed", "href": "/guides/before-buying-powerful-breed"}]} />
      <ReadinessBriefCTA />
      <RelatedLinks title="Breed authority expansion" links={[{ title: "All Breed Pages", href: "/breeds" }, { title: "German Shepherd", href: "/breeds/german-shepherd" }, { title: "Rottweiler", href: "/breeds/rottweiler" }]} /><Footer />
    </main>
  );
}
