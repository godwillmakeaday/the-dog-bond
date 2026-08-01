import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "About The Dog Bond",
  description: "Mission, philosophy, scope, and standards of The Dog Bond dog ownership intelligence platform."
};

const covers = ["Breed suitability", "Training discipline", "Responsible protection", "Household safety", "African dog life", "Local African dogs", "Cost and care", "Ownership mistakes", "Decision tools", "Practical guides"];
const notDo = ["Veterinary diagnosis", "Dangerous handling instructions", "Cruelty-based training", "Reckless guard dog promotion", "Fake guarantees", "Replacement for qualified professionals"];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="About" title="About The Dog Bond" text="The Dog Bond exists to help households make wiser dog ownership decisions." />
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-earth-200 bg-earth-50 p-8 shadow-card">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Why it exists</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">Most dog decisions are made through emotion, status, fear, imitation, or weak information. The Dog Bond brings structure, responsibility, and African household reality into the decision.</p>
            <p className="mt-5 text-lg leading-8 text-earth-700">A dog is not a toy, weapon, alarm system, or status symbol. A dog is a living companion requiring care, control, training, and responsibility.</p>
          </div>
          <div className="rounded-[2.5rem] border border-earth-200 bg-earth-950 p-8 text-earth-50 shadow-card">
            <h2 className="font-display text-4xl font-semibold">What we cover</h2>
            <div className="mt-6 flex flex-wrap gap-3">{covers.map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">{item}</span>)}</div>
            <h2 className="mt-10 font-display text-4xl font-semibold">What we do not do</h2>
            <div className="mt-6 flex flex-wrap gap-3">{notDo.map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">No {item}</span>)}</div>
          </div>
        </div>
      </section>
      <RelatedLinks title="Continue from here" links={[{ title: "Start Here", href: "/start-here", text: "Choose the right pathway for your situation." }, { title: "Use the Tools", href: "/tools", text: "Move from reading to practical decision support." }, { title: "Ownership Standard", href: "/ownership-standard", text: "Read the moral center of the platform." }]} />
      <Footer />
    </main>
  );
}
