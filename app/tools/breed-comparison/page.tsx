import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BreedComparisonTool } from "@/components/tools/BreedComparisonTool";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Breed Comparison Tool",
  description: "Compare dog breeds by temperament, training difficulty, protection instinct, family suitability, climate fit, and ownership warnings."
};

export default function BreedComparisonPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Breed decision" title="Breed Comparison Tool" text="Compare breed suitability before choosing by image, status, fear, or popularity." />
      <BreedComparisonTool />
      <Footer />
    </main>
  );
}