"use client";

import { useMemo, useState } from "react";
import { RelatedLinks } from "@/components/RelatedLinks";

const questions = [
  "I want protection, not intimidation or status.",
  "My gate, fence, or containment system is secure.",
  "Visitors are frequent and I have a visitor-control plan.",
  "Children are supervised around dogs.",
  "I can provide training or qualified support.",
  "I can control the dog physically and behaviourally.",
  "I can provide food, water, shade, shelter, and health care.",
  "I accept neighbour and public safety responsibility."
];

export function GuardDogChecker() {
  const [checked, setChecked] = useState<string[]>([]);
  const score = useMemo(() => Math.round((checked.length / questions.length) * 100), [checked.length]);
  const level = score >= 80 ? "Green: controlled protection pathway" : score >= 50 ? "Yellow: caution and preparation needed" : "Red: do not acquire a powerful guard dog yet";

  function toggle(item: string) {
    setChecked((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
  }

  return (
    <>
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-10">
            <h2 className="font-display text-3xl font-semibold text-earth-950">Responsibility questions</h2>
            <div className="mt-6 grid gap-3">
              {questions.map((item) => (
                <label key={item} className="flex items-start gap-3 rounded-2xl bg-earth-50 p-4 text-sm leading-6 text-earth-800">
                  <input type="checkbox" checked={checked.includes(item)} onChange={() => toggle(item)} className="mt-1 h-5 w-5 shrink-0 accent-earth-900" />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <aside className="rounded-[2.5rem] bg-earth-950 p-8 text-earth-50 shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-300">Protection readiness score</p>
            <h2 className="mt-4 font-display text-6xl font-semibold">{score}%</h2>
            <p className="mt-5 text-2xl font-semibold leading-tight">{level}</p>
            <p className="mt-5 rounded-2xl bg-white/10 p-4 leading-7 text-earth-100">A guard dog without control is not security. It is risk.</p>
          </aside>
        </div>
      </section>
      <RelatedLinks title="Protection decisions to read next" links={[{ title: "Guard Dog vs Family Dog", href: "/guides/guard-dog-vs-family-dog" }, { title: "Visitor Safety With Dogs", href: "/guides/visitor-safety-with-dogs" }, { title: "Before Buying a Powerful Breed", href: "/guides/before-buying-powerful-breed" }, { title: "Powerful Dog Status Mistake", href: "/guides/powerful-dog-status-mistake" }]} />
    </>
  );
}
