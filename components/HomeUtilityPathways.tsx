import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

const pathways = [
  {
    title: "I want to get a dog",
    text: "Move from desire to readiness: fit, checklist, cost, and first decision.",
    links: [
      { title: "Suitability Engine", href: "/suitability-engine" },
      { title: "Dog Readiness Checklist", href: "/tools/readiness-checklist" },
      { title: "Should I Get a Dog?", href: "/guides/should-i-get-a-dog" },
      { title: "Cost Estimator", href: "/tools/cost-estimator" }
    ]
  },
  {
    title: "I want a protection dog",
    text: "Check control, visitor safety, breed power, and public responsibility before acquisition.",
    links: [
      { title: "Guard Dog Checker", href: "/tools/guard-dog-checker" },
      { title: "Before Buying a Powerful Breed", href: "/guides/before-buying-powerful-breed" },
      { title: "Guard Dog vs Family Dog", href: "/guides/guard-dog-vs-family-dog" },
      { title: "Ownership Standard", href: "/ownership-standard" }
    ]
  },
  {
    title: "I already own a dog",
    text: "Build humane routine: training, feeding discipline, neighbour safety, and better control.",
    links: [
      { title: "Training Routine Planner", href: "/tools/training-routine-planner" },
      { title: "Dog Feeding Discipline", href: "/guides/dog-feeding-discipline" },
      { title: "Dogs and Neighbours", href: "/guides/dogs-and-neighbours" },
      { title: "Training Without Cruelty", href: "/guides/dog-training-without-cruelty" }
    ]
  }
];

export function HomeUtilityPathways() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Utility engine"
          title="Use The Dog Bond before you decide"
          text="The Dog Bond is not only a library. It is becoming a decision system for dog ownership, breed choice, training, protection, family safety, and African dog life."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pathways.map((pathway) => (
            <article key={pathway.title} className="rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card">
              <h3 className="font-display text-3xl font-semibold leading-tight text-earth-950">{pathway.title}</h3>
              <p className="mt-4 leading-7 text-earth-700">{pathway.text}</p>
              <div className="mt-6 space-y-3">
                {pathway.links.map((link) => (
                  <Link key={link.href} href={link.href} className="block rounded-2xl bg-white px-5 py-4 text-sm font-bold text-earth-800 transition hover:-translate-y-0.5 hover:shadow-card">
                    {link.title} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
