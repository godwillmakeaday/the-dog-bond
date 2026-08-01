import type { Metadata } from "next";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Dog Behaviour, Training & Ownership Articles",
  description: "Dog behaviour, training, African dog life, breed suitability, protection, and responsible ownership article briefs from The Dog Bond."
};

const categories = ["Behaviour", "Training", "African Dog Life", "Breed Suitability", "Protection", "Responsible Ownership"];

export default function ArticlesPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Articles"
        title="Briefs for owners, trainers, families, and security-conscious households."
        text="A growing knowledge library for behaviour, training, breed suitability, protection, responsible ownership, and African dog life."
      />
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Categories"
            title="The library is structured around real ownership questions."
            text="Each brief is written to help a household think before buying, training, guarding, correcting, or mismanaging a dog."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-earth-200 bg-earth-50 px-4 py-2 text-sm font-bold text-earth-700">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ArticleGrid />
        </div>
      </section>
      <RelatedLinks
        links={[
          { title: "Intelligence Vault", href: "/intelligence-vault", text: "Use the central control room to decide what to read next." },
          { title: "Suitability Engine", href: "/suitability-engine", text: "Test whether your household is ready for the dog you want." },
          { title: "Ownership Standard", href: "/ownership-standard", text: "Read the public doctrine before choosing a breed." }
        ]}
      />
      <ReadinessBriefCTA />
      <Footer />
    </main>
  );
}
