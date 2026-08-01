import { breedDossiers } from "@/lib/data";

type BreedDossier = (typeof breedDossiers)[number];

export function BreedDossierCard({ breed }: { breed: BreedDossier }) {
  return (
    <article className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft md:p-7">
      <div className="flex flex-col justify-between gap-4 border-b border-earth-200 pb-6 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-earth-500">Ownership dossier</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-earth-950">{breed.name}</h3>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {breed.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-earth-100 px-3 py-1 text-xs font-bold text-earth-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ["Temperament", breed.temperament],
          ["Energy level", breed.energy],
          ["Training difficulty", breed.trainingDifficulty],
          ["Protection instinct", breed.protectionInstinct],
          ["Family suitability", breed.familySuitability],
          ["Heat / climate note", breed.heatNote],
          ["First-time owner suitability", breed.firstTimeOwner],
          ["African household fit", breed.africanFit]
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl bg-earth-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">{label}</p>
            <p className="mt-2 leading-7 text-earth-800">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-3xl border border-earth-200 bg-earth-900 p-5 text-earth-50">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-300">Ownership warning</p>
        <p className="mt-3 leading-7 text-earth-100">{breed.warning}</p>
      </div>
    </article>
  );
}
