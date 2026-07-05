import { africanDogTopics } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";

export function AfricanDogLife() {
  return (
    <section id="african-dog-life" className="bg-earth-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Distinct authority"
          title="African Dog Life"
          text="The Dog Bond gives special attention to dogs in African households, compounds, farms, streets, estates, security posts, and family life. This is where the platform becomes more than another global dog site."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
          <div className="rounded-[2rem] bg-earth-900 p-8 text-earth-50 shadow-soft md:p-10">
            <p className="font-display text-4xl leading-tight">The African dog is often a security presence before it is treated as a trained companion.</p>
            <p className="mt-6 leading-8 text-earth-100">
              That gap creates a huge opportunity for education: humane care, structured feeding, compound safety, heat awareness, visitor control, and better training culture.
            </p>
            <div className="mt-8 rounded-3xl border border-earth-100/15 bg-white/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-200">Editorial position</p>
              <p className="mt-3 leading-7 text-earth-100">
                A dog should not be feared because the owner is ignorant. A dog should be respected because the owner is responsible.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {africanDogTopics.map((topic) => (
              <div key={topic} className="rounded-3xl border border-earth-200 bg-white p-6 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-earth-100 text-sm font-bold text-earth-900">✓</span>
                <p className="mt-5 text-lg font-semibold leading-7 text-earth-900">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
