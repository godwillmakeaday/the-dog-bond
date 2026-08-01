import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { StaticContactCTA } from "@/components/StaticContactCTA";

export const metadata: Metadata = {
  title: "Get Dog Bond Updates | The Dog Bond",
  description: "A static updates page for future Dog Bond guides, breed pages, Nigerian dog ownership notes, public safety education, and partner announcements."
};

const updates = [
  "new guides",
  "new breed pages",
  "Nigerian dog ownership notes",
  "public safety education",
  "partner announcements",
  "responsible ownership campaigns"
];

export default function UpdatesPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Updates" title="Get Dog Bond Updates" text="A future updates pathway for responsible dog ownership education, new guides, campaigns, and partner announcements." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
          <h2 className="font-display text-4xl font-semibold text-earth-950">What updates may include</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {updates.map((item) => <div key={item} className="rounded-2xl bg-earth-50 p-5 text-sm font-bold leading-6 text-earth-800">{item}</div>)}
          </div>
          <div className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
            <label className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Email updates</label>
            <input disabled placeholder="Updates intake coming soon." className="mt-4 w-full rounded-2xl border border-earth-200 bg-white px-5 py-4 text-earth-500" />
            <p className="mt-4 text-sm leading-7 text-earth-700">Updates intake coming soon. The Dog Bond will not send spam or sell attention. Updates will focus on responsible dog ownership education.</p>
          </div>
        </div>
      </section>
      <StaticContactCTA title="Updates fallback" text="Until updates intake opens, send general notes or education interest by email." email="hello@thedogbond.com" />
      <Footer />
    </main>
  );
}
