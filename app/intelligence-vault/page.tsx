import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { VaultSection } from "@/components/VaultSection";
import { vaultSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dog Ownership Intelligence Vault",
  description: "A structured knowledge system for choosing, training, managing, and living responsibly with dogs in African households."
};

export default function IntelligenceVaultPage() {
  return (
    <main>
      <Header />
      <PageHero
        eyebrow="Dog Ownership Intelligence Vault"
        title="A control room for responsible dog decisions."
        text="A structured knowledge system for choosing, training, managing, and living responsibly with dogs in African households."
        dark
      />
      <section className="bg-earth-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Authority architecture"
            title="Where the whole site becomes a system."
            text="The vault organizes The Dog Bond into decision readiness, breed intelligence, training discipline, protection ethics, African dog life, and responsible ownership."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {vaultSections.map((section) => (
              <a key={section.title} href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="rounded-[1.75rem] border border-earth-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-600">{section.label}</p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-earth-950">{section.title}</h2>
                <p className="mt-3 leading-7 text-earth-700">{section.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {vaultSections.map((section) => (
        <div key={section.title} id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}>
          <VaultSection {...section} />
        </div>
      ))}
      <RelatedLinks
        title="Expand the vault"
        links={[
          { title: "Knowledge Map", href: "/knowledge-map" },
          { title: "Dog Decision Guides", href: "/guides" },
          { title: "Should I Get a Dog?", href: "/guides/should-i-get-a-dog" },
          { title: "Before Buying a Powerful Breed", href: "/guides/before-buying-powerful-breed" }
        ]}
      />
      <ReadinessBriefCTA />
      <Footer />
    </main>
  );
}
