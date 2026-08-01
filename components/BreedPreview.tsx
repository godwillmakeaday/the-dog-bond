import { breedDossiers } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function BreedPreview() {
  return (
    <section id="breeds" className="bg-earth-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Breed intelligence"
            title="Beauty is not enough. Character must be understood."
            text="The right dog is not only the dog you admire. It is the dog your home, space, time, discipline, budget, and public responsibility can support."
          />
          <a href="/breed-dossiers" className="rounded-full bg-earth-900 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-earth-50 transition hover:-translate-y-1 hover:bg-forest-900">
            Open Dossiers
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {breedDossiers.slice(0, 8).map((breed) => (
            <article key={breed.name} className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-earth-500">{breed.energy}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-earth-950">{breed.name}</h3>
              <p className="mt-4 text-sm leading-7 text-earth-700">{breed.temperament}</p>
              <div className="mt-5 rounded-2xl bg-earth-50 p-4 text-sm leading-6 text-earth-700">
                <strong className="text-earth-900">Warning:</strong> {breed.warning}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
