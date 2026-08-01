import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SharePathwayCard } from "@/components/SharePathwayCard";
import { sharePathways, suggestedShareMessages } from "@/lib/share";

export const metadata: Metadata = {
  title: "Share The Dog Bond",
  description: "Share responsible dog ownership pathways with people considering dogs, guard dogs, breeds, compounds, estates, training, and care."
};

const whoToShareWith = [
  "wants to buy a dog",
  "wants a guard dog",
  "has children around dogs",
  "wants a Rottweiler, Boerboel, German Shepherd, or other powerful breed",
  "lives in a compound",
  "lives in an estate",
  "underestimates local African dogs",
  "is struggling with training",
  "thinks dog ownership is only purchase price"
];

export default function SharePage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Public distribution" title="Share The Dog Bond" text="Help people find responsible dog ownership guidance before purchase, guard-dog misuse, feeding failure, training mistakes, and abandonment." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.6fr_0.4fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Why share The Dog Bond</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">
              Many dog problems begin before purchase, before training, before feeding failure, before guard-dog misuse, and before abandonment. Sharing the right pathway can prevent confusion before it becomes harm.
            </p>
          </article>
          <aside className="rounded-[2rem] bg-earth-950 p-7 text-earth-50 shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">Share with someone who</p>
            <ul className="mt-5 grid gap-3">
              {whoToShareWith.map((item) => <li key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold leading-6 text-earth-50">{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-semibold text-earth-950">Share pathways</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sharePathways.map((pathway) => <SharePathwayCard key={pathway.slug} pathway={pathway} />)}
          </div>
        </div>
      </section>
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-earth-200 bg-white p-8 shadow-card">
          <h2 className="font-display text-4xl font-semibold text-earth-950">Suggested share messages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {suggestedShareMessages.map((message) => <p key={message} className="rounded-2xl bg-earth-50 p-5 text-sm font-bold leading-6 text-earth-800">{message}</p>)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
