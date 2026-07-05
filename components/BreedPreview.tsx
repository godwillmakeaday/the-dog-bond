import { breeds } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";

export function BreedPreview() {
  return (
    <section id="breeds" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Breed intelligence"
          title="Beauty is not enough. Character must be understood."
          text="The right dog is not only the dog you admire. It is the dog whose temperament, energy, protection instinct, and training demand you can responsibly govern."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {breeds.map((breed) => (
            <article key={breed.name} className="rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h3 className="font-display text-3xl font-semibold text-earth-950">{breed.name}</h3>
                  <p className="mt-2 text-earth-700">{breed.temperament}</p>
                </div>
                <span className="rounded-full bg-earth-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-earth-50">
                  {breed.protection} protection
                </span>
              </div>
              <dl className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">Energy</dt>
                  <dd className="mt-2 font-semibold text-earth-900">{breed.energy}</dd>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">Training</dt>
                  <dd className="mt-2 font-semibold text-earth-900">{breed.training}</dd>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">Family fit</dt>
                  <dd className="mt-2 font-semibold text-earth-900">{breed.family}</dd>
                </div>
              </dl>
              <p className="mt-5 rounded-2xl border border-earth-200 bg-white p-4 text-sm font-medium leading-6 text-earth-700">
                Ownership warning: {breed.warning}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
