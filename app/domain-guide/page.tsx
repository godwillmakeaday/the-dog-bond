import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LaunchCTA } from "@/components/LaunchCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Domain Migration Guide",
  description: "A static internal guide for moving The Dog Bond from Vercel subdomain to custom domain later.",
  pathname: "/domain-guide",
  noIndex: true,
});

const before = ["confirm final brand spelling", "confirm email address", "confirm homepage title", "confirm canonical URL plan", "confirm Vercel project settings"];
const after = ["update site.url in lib/site.ts", "update metadata", "update sitemap base URL", "test all pages", "submit sitemap to Google Search Console later", "use custom domain in public materials"];

export default function DomainGuidePage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Domain readiness" title="Domain Migration Guide" text="A static internal guide for moving from the Vercel subdomain to a custom domain later." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.55fr_0.45fr]">
          <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold text-earth-950">Current public URL</h2>
            <p className="mt-4 rounded-2xl bg-earth-50 p-5 font-mono text-sm text-earth-800">https://the-dog-bond.vercel.app</p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Future custom domain placeholder</h2>
            <p className="mt-4 rounded-2xl bg-earth-50 p-5 font-mono text-sm text-earth-800">thedogbond.com</p>

            <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Why custom domain matters</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {["trust", "memorability", "media sharing", "partner credibility", "SEO consistency"].map((item) => <p key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800">{item}</p>)}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">Before migration</h2>
              <div className="mt-5 space-y-3">{before.map((item) => <p key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">{item}</p>)}</div>
            </div>
            <div className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">After migration</h2>
              <div className="mt-5 space-y-3">{after.map((item) => <p key={item} className="rounded-2xl bg-earth-50 p-4 text-sm font-semibold leading-6 text-earth-800">{item}</p>)}</div>
            </div>
          </aside>
        </div>
      </section>
      <LaunchCTA />
      <Footer />
    </main>
  );
}
