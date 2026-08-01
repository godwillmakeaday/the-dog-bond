"use client";

import { useMemo, useState } from "react";
import { RelatedLinks } from "@/components/RelatedLinks";

const weights = {
  size: { small: 1, medium: 2, large: 3, giant: 4 },
  feeding: { basic: 1, standard: 2, premium: 3 },
  housing: { apartment: 2, "family house": 2, compound: 3, farm: 3 },
  vet: { basic: 1, standard: 2, strong: 3 },
  training: { "self-guided": 1, "occasional trainer": 2, "regular trainer": 3 },
  purpose: { companionship: 1, "family dog": 2, protection: 3, "farm support": 3 }
};

export function CostEstimator() {
  const [size, setSize] = useState("medium");
  const [feeding, setFeeding] = useState("standard");
  const [housing, setHousing] = useState("compound");
  const [vet, setVet] = useState("standard");
  const [training, setTraining] = useState("self-guided");
  const [purpose, setPurpose] = useState("family dog");

  const result = useMemo(() => {
    const score = weights.size[size as keyof typeof weights.size] + weights.feeding[feeding as keyof typeof weights.feeding] + weights.housing[housing as keyof typeof weights.housing] + weights.vet[vet as keyof typeof weights.vet] + weights.training[training as keyof typeof weights.training] + weights.purpose[purpose as keyof typeof weights.purpose];
    const level = score <= 9 ? "Moderate" : score <= 13 ? "High" : "Very high";
    const redFlag = (size === "large" || size === "giant") && (feeding === "basic" || vet === "basic");
    return { score, level, redFlag };
  }, [size, feeding, housing, vet, training, purpose]);

  const Field = ({ label, value, setValue, options }: { label: string; value: string; setValue: (value: string) => void; options: string[] }) => (
    <label className="block rounded-2xl border border-earth-200 bg-white p-5">
      <span className="text-sm font-bold uppercase tracking-[0.18em] text-earth-500">{label}</span>
      <select value={value} onChange={(event) => setValue(event.target.value)} className="mt-3 w-full rounded-xl border border-earth-200 bg-earth-50 px-4 py-3 text-earth-900">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );

  return (
    <>
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Dog size" value={size} setValue={setSize} options={["small", "medium", "large", "giant"]} />
            <Field label="Feeding quality" value={feeding} setValue={setFeeding} options={["basic", "standard", "premium"]} />
            <Field label="Housing type" value={housing} setValue={setHousing} options={["apartment", "family house", "compound", "farm"]} />
            <Field label="Veterinary readiness" value={vet} setValue={setVet} options={["basic", "standard", "strong"]} />
            <Field label="Training support" value={training} setValue={setTraining} options={["self-guided", "occasional trainer", "regular trainer"]} />
            <Field label="Ownership purpose" value={purpose} setValue={setPurpose} options={["companionship", "family dog", "protection", "farm support"]} />
          </div>
          <aside className="rounded-[2.5rem] bg-earth-950 p-8 text-earth-50 shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-300">Estimated responsibility level</p>
            <h2 className="mt-4 font-display text-5xl font-semibold">{result.level}</h2>
            <p className="mt-5 text-lg leading-8 text-earth-100">This is a burden estimate, not a price quote. Larger dogs, protection uses, premium feeding, vet readiness, and trainer support increase the monthly responsibility.</p>
            {result.redFlag ? <p className="mt-5 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-earth-100"><span className="font-bold">Red flag:</span> a large or giant dog with basic feeding or vet readiness can quickly become welfare and safety pressure. Delay or prepare better.</p> : null}
          </aside>
        </div>
      </section>
      <RelatedLinks title="Next cost decisions" links={[{ title: "The Real Cost of Owning a Dog", href: "/guides/dog-cost-reality" }, { title: "Heat, Water, and Shade", href: "/guides/dog-heat-water-shade" }, { title: "Dog Readiness Checklist", href: "/tools/readiness-checklist" }]} />
    </>
  );
}
