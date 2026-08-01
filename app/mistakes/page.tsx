import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { MistakeCard } from "@/components/MistakeCard";
import { ownerMistakes } from "@/lib/mistakes";

export const metadata: Metadata = {
  title: "Dog Owner Mistake Library | The Dog Bond",
  description: "Common dog ownership mistakes that create suffering, aggression, abandonment, neighbour conflict, and public risk."
};

export default function MistakesPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Mistake library" title="Dog Owner Mistake Library" text="Common ownership mistakes that create suffering, aggression, abandonment, neighbour conflict, and public risk." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ownerMistakes.map((mistake) => <MistakeCard key={mistake.slug} mistake={mistake} />)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
