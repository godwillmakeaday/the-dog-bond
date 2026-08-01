import { atlasSections, fieldPrinciples } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function AfricanDogLife() {
  return (
    <section id="african-dog-life" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Distinct authority"
          title="African Dog Life Atlas"
          text="This is where The Dog Bond becomes more than another global dog site: dogs in compounds, estates, farms, streets, security posts, hot climates, and family life."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
          <div className="rounded-[2rem] bg-earth-900 p-8 text-earth-50 shadow-soft md:p-10">
            <p className="font-display text-4xl leading-tight">The African dog is often a security presence before it is treated as a trained companion.</p>
            <p className="mt-6 leading-8 text-earth-100">
              That gap creates a huge opportunity for education: humane care, structured feeding, compound safety, heat awareness, visitor control, and better training culture.
            </p>
            <a href="/african-dog-life" className="mt-8 inline-flex rounded-full bg-earth-50 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-earth-950 transition hover:-translate-y-1">
              Open Atlas
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {atlasSections.slice(0, 6).map((topic) => (
              <div key={topic.title} className="rounded-3xl border border-earth-200 bg-earth-50 p-6 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-earth-100 text-sm font-bold text-earth-900">✓</span>
                <h3 className="mt-5 text-lg font-semibold leading-7 text-earth-900">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-earth-700">{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-8">
          <h3 className="font-display text-3xl font-semibold text-earth-950">Field Principles</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {fieldPrinciples.map((principle) => (
              <div key={principle} className="rounded-2xl bg-white p-5 font-semibold text-earth-800 shadow-sm">
                {principle}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
