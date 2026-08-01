import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { UsePathwayCard } from "@/components/UsePathwayCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { conversionPathways } from "@/lib/conversion";

export const metadata: Metadata = {
  title: "Use The Dog Bond",
  description: "Different pathways for dog owners, first-time buyers, families, guard-dog buyers, breed buyers, African households, and future partners."
};

export default function UseTheDogBondPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Conversion hub" title="Use The Dog Bond" text="Choose the right pathway before buying, training, feeding, managing, or partnering around dogs." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {conversionPathways.map((pathway) => <UsePathwayCard key={pathway.slug} pathway={pathway} />)}
        </div>
      </section>
      <RelatedLinks title="Start with the safest action" links={[
        { title: "Start with the Readiness Checklist", href: "/tools/readiness-checklist", text: "Test owner capacity before action." },
        { title: "Search the Library", href: "/search", text: "Find the right guide, tool, breed page, term, or mistake." },
        { title: "Partner With Us", href: "/partners", text: "Explore trust-preserving partnership standards." }
      ]} />
      <Footer />
    </main>
  );
}
