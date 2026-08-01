import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LaunchCTA } from "@/components/LaunchCTA";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The Dog Bond Manifesto",
  description: "The public launch doctrine behind The Dog Bond: responsibility before breed power, humane training, African dog-life reality, and public safety."
};

const beliefs = [
  "A dog is not a toy.",
  "A dog is not a weapon.",
  "A dog is not a status symbol.",
  "A dog is not only an alarm system.",
  "A dog is a living companion requiring care, control, training, and responsibility."
];

const sections = [
  {
    title: "Opening statement",
    body: "The Dog Bond exists because dog ownership is not only about dogs. It is about households, care, discipline, fear, protection, trust, children, neighbours, public safety, and responsibility."
  },
  {
    title: "The problem",
    body: "Many people buy dogs through emotion, status, fear, imitation, or weak information. The result can be neglected dogs, frightened visitors, confused children, neighbour conflict, and owners who are not ready for the responsibility."
  },
  {
    title: "The correction",
    body: "The Dog Bond turns dog ownership into a structured decision. It asks owners to think about readiness, breed suitability, cost, humane training, public safety, health responsibility, African household reality, and long-term care."
  },
  {
    title: "The standard",
    body: "Responsibility before breed power. A strong dog without owner capacity is not an achievement. It is a risk. The Dog Bond begins with judgment before desire."
  },
  {
    title: "The African reality",
    body: "Dogs in Africa often live around compounds, gates, heat, visitors, children, estates, farms, security posts, and local dog cultures. These realities deserve serious attention, not generic advice copied from somewhere else."
  },
  {
    title: "Public safety",
    body: "Responsible dog ownership protects dogs and people. A good dog system thinks about children, visitors, neighbours, workers, gates, shared roads, leash control, and emergency warning signs."
  },
  {
    title: "Humane training",
    body: "Training should build clarity, not fear. Discipline must not become cruelty. A dog that understands routine and boundaries is safer than a dog broken by confusion."
  },
  {
    title: "Local African dogs",
    body: "Local dogs deserve respect, care, training, and dignity. Adaptation is not inferiority. Every dog deserves humane treatment, clean water, shelter, food, health care, and responsible handling."
  },
  {
    title: "Partnership integrity",
    body: "The Dog Bond will not trade trust for reckless promotion. Partners must strengthen responsibility, not weaken it."
  },
  {
    title: "Closing pledge",
    body: "The Dog Bond will keep building tools, guides, standards, campaigns, and partnerships that help people live more responsibly with dogs."
  }
];

export default function ManifestoPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Launch doctrine" title="The Dog Bond Manifesto" text="A public statement of the philosophy behind responsible dog ownership intelligence." dark />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="rounded-[2rem] bg-earth-50 p-6">
                  <h2 className="font-display text-3xl font-semibold text-earth-950">{section.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-earth-700">{section.body}</p>
                </section>
              ))}
            </div>
          </article>
          <aside className="rounded-[2rem] bg-earth-950 p-7 text-earth-50 shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">What The Dog Bond believes</p>
            <div className="mt-5 space-y-3">
              {beliefs.map((belief) => <p key={belief} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold leading-6 text-earth-50">{belief}</p>)}
            </div>
          </aside>
        </div>
      </section>
      <RelatedLinks title="Continue from the manifesto" links={[
        { title: "Start Here", href: "/start-here" },
        { title: "Use The Dog Bond", href: "/use-the-dog-bond" },
        { title: "Read the Editorial Policy", href: "/editorial-policy" },
        { title: "Partner With Us", href: "/partners" }
      ]} />
      <LaunchCTA />
      <Footer />
    </main>
  );
}
