import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { GlossaryCard } from "@/components/GlossaryCard";
import { glossaryTerms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Dog Ownership Glossary | The Dog Bond",
  description: "A structured glossary of dog ownership, training, protection, safety, and African dog-life terms."
};

export default function GlossaryPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Glossary" title="Dog Ownership Glossary" text="A structured dictionary of dog ownership terms used throughout The Dog Bond." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {glossaryTerms.map((term) => <GlossaryCard key={term.slug} term={term} />)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
