import { decisionGuides } from "@/lib/data";
import { GuideCard } from "@/components/GuideCard";
import { SectionHeader } from "@/components/SectionHeader";

const featured = ["should-i-get-a-dog", "first-time-dog-owner", "best-dog-for-compound", "before-buying-powerful-breed"];

export function GuideFeatureSection() {
  const guides = featured.map((slug) => decisionGuides.find((guide) => guide.slug === slug)).filter(Boolean);

  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Decision guides" title="Start with a decision guide" text="The Dog Bond is built around the moment before ownership: what to choose, what to avoid, and what responsibility requires." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((guide) => guide ? <GuideCard key={guide.slug} guide={guide} /> : null)}
        </div>
      </div>
    </section>
  );
}
