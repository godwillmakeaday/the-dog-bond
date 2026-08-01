import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SuitabilityQuiz } from "@/components/SuitabilityQuiz";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Dog Suitability Engine",
  description: "An educational dog readiness and breed suitability tool for African households."
};

export default function SuitabilityEnginePage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Dog Suitability Engine"
        title="Think before choosing a dog."
        text="A front-end educational quiz for households considering space, children, protection needs, time, training capacity, budget, climate, and first-time owner risk."
      />
      <SuitabilityQuiz />
      <RelatedLinks
        links={[
          { title: "Breed Dossiers", href: "/breed-dossiers", text: "Compare breed temperament, training demand, heat reality, and owner suitability." },
          { title: "Ownership Standard", href: "/ownership-standard", text: "Read the humane and public-safety doctrine before buying." },
          { title: "First-Time Reality Check", href: "/articles/first-time-dog-owner-reality-check", text: "Count the practical cost of food, care, training, and time." }
        ]}
      />
      <ReadinessBriefCTA />
      <Footer />
    </main>
  );
}
