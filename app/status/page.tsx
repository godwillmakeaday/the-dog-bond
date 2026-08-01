import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LaunchCTA } from "@/components/LaunchCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Platform Status",
  description: "A static transparency page showing what is live, what is coming later, and what is not active yet on The Dog Bond.",
  pathname: "/status",
  noIndex: true,
});

const groups = [
  {
    title: "Live now",
    items: ["guides", "tools", "topics", "glossary", "mistake library", "breed pages", "African dog-life pages", "partner standards", "campaigns", "share page", "directory placeholder"]
  },
  {
    title: "Coming later",
    items: ["real partner intake forms", "real updates signup", "partner directory listings", "expert review process", "downloadable PDFs", "local events/campaigns", "custom domain"]
  },
  {
    title: "Not active yet",
    items: ["payments", "login", "user accounts", "real directory listings", "real appointment booking", "veterinary diagnosis", "emergency support"]
  }
];

export default function StatusPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Transparency" title="Platform Status" text="What exists, what is coming later, and what is not yet active on The Dog Bond." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card">
              <h2 className="font-display text-3xl font-semibold text-earth-950">{group.title}</h2>
              <div className="mt-6 space-y-3">
                {group.items.map((item) => <p key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{item}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <LaunchCTA />
      <Footer />
    </main>
  );
}
