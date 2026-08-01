import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { VisualBlock } from "@/components/VisualBlock";
import { atlasSections, fieldPrinciples } from "@/lib/data";

export const metadata: Metadata = {
  title: "African Dog Life Atlas",
  description: "Understanding dogs in compounds, estates, farms, security posts, streets, and family life."
};

const ids = ["compounds", "estates", "farms", "security-posts", "local-african-dogs", "street-dogs", "cultural-fear", "heat-water-shelter"];

export default function AfricanDogLifePage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="African Dog Life Atlas"
        title="Dogs in compounds, estates, farms, security posts, streets, and family life."
        text="The Dog Bond’s most distinctive authority section: a practical map of how dogs actually live across African households and public spaces."
        dark
      />
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Atlas sections"
            title="The places where dog ownership becomes real."
            text="Dog responsibility is not abstract. It appears at the gate, around children, near neighbours, under heat, in hunger, during visitors, and in the owner’s daily control."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {atlasSections.map((section, index) => (
              <article key={section.title} id={ids[index]} className="rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-earth-900 font-bold text-earth-50">{index + 1}</span>
                <h2 className="mt-6 font-display text-3xl font-semibold text-earth-950">{section.title}</h2>
                <p className="mt-4 leading-8 text-earth-700">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <VisualBlock src="/images/dog-bond/local-african-dog.jpg" title="Local dogs carry adaptation, alertness, and survival intelligence." eyebrow="Local African dog" />
          <VisualBlock src="/images/dog-bond/farm-dog-heat-shelter.jpg" title="Heat, water, shade, and shelter are ownership duties." eyebrow="Climate reality" />
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-earth-900 p-8 text-earth-50 shadow-soft md:p-12">
          <SectionHeader
            eyebrow="Field principles"
            title="Six rules for serious African dog ownership."
            text="These principles are simple because the problems are often basic: heat, hunger, fear, poor control, and the mistake of treating a dog like equipment."
            theme="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {fieldPrinciples.map((principle) => (
              <div key={principle} className="rounded-3xl border border-earth-100/15 bg-white/10 p-6 text-lg font-semibold leading-7 text-earth-50">
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>
      <RelatedLinks
        links={[
          { title: "Why Local African Dogs Deserve More Respect", href: "/articles/local-african-dogs-respect", text: "Read the respect argument for local and mixed dogs." },
          { title: "African Household Dog", href: "/articles/african-household-dog", text: "Study security, companionship, heat, visitors, and training gaps." },
          { title: "Ownership Standard", href: "/ownership-standard", text: "Turn context into daily duties of care and safety." }
        ]}
      />
      <RelatedLinks title="Decision guides for this page" links={[{"title": "Best Dog for a Compound", "href": "/guides/best-dog-for-compound"}, {"title": "Dog in an Estate", "href": "/guides/dog-in-estate"}, {"title": "Farm Dog Readiness", "href": "/guides/farm-dog-readiness"}, {"title": "Heat, Water, and Shade", "href": "/guides/dog-heat-water-shade"}]} />
      <ReadinessBriefCTA />
      <Footer />
    </main>
  );
}
