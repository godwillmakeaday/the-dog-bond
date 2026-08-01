"use client";

import { useMemo, useState } from "react";
import { breedDossiers } from "@/lib/data";
import { SelectField } from "@/components/tools/SelectField";

const names = breedDossiers.map((breed) => breed.name);

export function BreedComparisonTool() {
  const [a, setA] = useState(names[0]);
  const [b, setB] = useState(names[1]);
  const [c, setC] = useState("");

  const selected = useMemo(() => [a, b, c].filter(Boolean).map((name) => breedDossiers.find((breed) => breed.name === name)).filter(Boolean), [a, b, c]);
  const easiest = selected.find((breed) => breed?.firstTimeOwner.toLowerCase().includes("good") || breed?.firstTimeOwner.toLowerCase().includes("possible"));
  const caution = selected.find((breed) => breed?.trainingDifficulty.toLowerCase().includes("expert") || breed?.trainingDifficulty.toLowerCase().includes("advanced"));

  const rows = [
    ["Temperament", "temperament"],
    ["Energy level", "energy"],
    ["Training difficulty", "trainingDifficulty"],
    ["Protection instinct", "protectionInstinct"],
    ["Family suitability", "familySuitability"],
    ["Heat/climate note", "heatNote"],
    ["First-time owner suitability", "firstTimeOwner"],
    ["African household fit", "africanFit"],
    ["Ownership warning", "warning"]
  ] as const;

  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-3">
          <SelectField label="Breed A" value={a} setValue={setA} options={names} />
          <SelectField label="Breed B" value={b} setValue={setB} options={names} />
          <SelectField label="Optional Breed C" value={c} setValue={setC} options={names} optionalLabel="No third breed" />
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-earth-200 bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-earth-950 text-earth-50">
                <tr>
                  <th className="p-4 text-sm uppercase tracking-[0.18em]">Factor</th>
                  {selected.map((breed) => <th key={breed?.name} className="p-4 text-sm uppercase tracking-[0.18em]">{breed?.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, key]) => (
                  <tr key={label} className="border-t border-earth-200 align-top">
                    <td className="p-4 font-bold text-earth-950">{label}</td>
                    {selected.map((breed) => <td key={`${breed?.name}-${key}`} className="p-4 text-sm leading-6 text-earth-700">{breed?.[key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-card"><p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-500">Easiest for first-time owner</p><p className="mt-3 font-display text-2xl font-semibold text-earth-950">{easiest?.name || "Check suitability first"}</p></div>
          <div className="rounded-2xl bg-white p-6 shadow-card"><p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-500">Strongest caution</p><p className="mt-3 font-display text-2xl font-semibold text-earth-950">{caution?.name || "No major caution selected"}</p></div>
          <div className="rounded-2xl bg-white p-6 shadow-card"><p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-500">Family companionship</p><p className="mt-3 font-display text-2xl font-semibold text-earth-950">Prefer stable, social, trainable dogs.</p></div>
          <div className="rounded-2xl bg-white p-6 shadow-card"><p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-500">Local resilience</p><p className="mt-3 font-display text-2xl font-semibold text-earth-950">Local dogs deserve serious evaluation.</p></div>
        </div>
      </div>
    </section>
  );
}
