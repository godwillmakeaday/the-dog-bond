"use client";

import { useMemo, useState } from "react";

const groups = [
  { title: "Daily Care", items: ["food", "clean water", "safe shelter", "exercise", "cleaning"] },
  { title: "Health Responsibility", items: ["vaccination", "vet access", "emergency plan", "parasite control", "health monitoring"] },
  { title: "Training and Control", items: ["name recognition", "basic obedience", "leash control", "visitor control", "feeding discipline"] },
  { title: "Household Safety", items: ["children", "visitors", "neighbours", "gates", "shared spaces"] },
  { title: "Long-Term Commitment", items: ["relocation plan", "cost planning", "behaviour support", "ageing dog care", "no abandonment"] }
];

export function ReadinessChecklistTool() {
  const allItems = groups.flatMap((group) => group.items.map((item) => `${group.title}:${item}`));
  const [checked, setChecked] = useState<string[]>([]);
  const percent = useMemo(() => Math.round((checked.length / allItems.length) * 100), [checked.length, allItems.length]);
  const verdict = percent >= 80 ? "Strong readiness" : percent >= 50 ? "Partial readiness" : "Delay ownership and prepare";

  function toggle(key: string) {
    setChecked((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
  }

  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.64fr_0.36fr]">
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-earth-950">{group.title}</h2>
              <div className="mt-5 space-y-3">
                {group.items.map((item) => {
                  const key = `${group.title}:${item}`;
                  return (
                    <label key={key} className="flex items-center gap-3 rounded-xl bg-earth-50 p-3 text-sm font-medium text-earth-800">
                      <input type="checkbox" checked={checked.includes(key)} onChange={() => toggle(key)} className="h-5 w-5 accent-earth-900" />
                      {item}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <aside className="rounded-[2.5rem] bg-earth-950 p-8 text-earth-50 shadow-card">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-300">Readiness score</p>
          <h2 className="mt-4 font-display text-6xl font-semibold">{percent}%</h2>
          <p className="mt-4 text-2xl font-semibold">{verdict}</p>
          <p className="mt-5 leading-8 text-earth-100">Readiness is not perfection. It is evidence that the household can sustain care, control, safety, and humane responsibility after the excitement fades.</p>
        </aside>
      </div>
    </section>
  );
}
