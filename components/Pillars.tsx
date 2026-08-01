import { pillars } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function Pillars() {
  return (
    <section id="pillars" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Core pillars"
          title="Not a pet blog. A serious map of the relationship."
          text="The Dog Bond treats the dog as a companion, learner, protector, behaviour system, breed character, and responsibility."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="group rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-earth-500">{pillar.kicker}</p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-earth-950">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-earth-700">{pillar.text}</p>
              <div className="mt-8 h-1 w-14 rounded-full bg-earth-300 transition group-hover:w-24 group-hover:bg-earth-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
