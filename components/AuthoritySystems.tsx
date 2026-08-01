import { authoritySystems } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function AuthoritySystems() {
  return (
    <section className="bg-earth-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Platform architecture"
          title="The Four Authority Systems"
          text="The Dog Bond becomes useful when it moves beyond essays into tools, standards, dossiers, and a map of real dog life."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {authoritySystems.map((system, index) => (
            <a key={system.title} href={system.href} className="group flex min-h-80 flex-col justify-between rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-earth-900 font-bold text-earth-50">{index + 1}</span>
                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-earth-950">{system.title}</h3>
                <p className="mt-4 leading-7 text-earth-700">{system.text}</p>
              </div>
              <span className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-earth-700 group-hover:text-forest-700">Open system →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
