"use client";

import { useMemo, useState } from "react";
import { popularSearches, searchIndex } from "@/lib/search";

const types = ["All", "Guide", "Tool", "Article", "Topic", "Glossary", "Mistake", "Breed", "Partner", "Campaign", "Page"] as const;

type TypeFilter = (typeof types)[number];

export function SearchFinder({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState<TypeFilter>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return searchIndex.filter((item) => {
      const typeMatch = type === "All" || item.type === type;
      const text = [item.title, item.type, item.category, item.description, ...item.keywords].join(" ").toLowerCase();
      const queryMatch = !q || text.includes(q);
      return typeMatch && queryMatch;
    });
  }, [query, type]);

  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-earth-200 bg-white p-6 shadow-card md:p-8">
          <label htmlFor="dogbond-search" className="text-sm font-bold uppercase tracking-[0.24em] text-earth-500">Search guides, tools, articles, and pages</label>
          <input
            id="dogbond-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: guard dog, first-time owner, local African dog, heat water shade"
            className="mt-4 w-full rounded-2xl border border-earth-200 bg-earth-50 px-5 py-4 text-lg outline-none transition focus:border-earth-900"
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {types.map((item) => (
              <button key={item} type="button" onClick={() => setType(item)} className={type === item ? "rounded-full bg-earth-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-earth-50" : "rounded-full border border-earth-200 bg-earth-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-earth-700"}>
                {item}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-500">Popular searches</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {popularSearches.map((item) => (
                <button key={item} type="button" onClick={() => setQuery(item)} className="rounded-full bg-forest-100 px-4 py-2 text-sm font-semibold text-forest-900 transition hover:bg-forest-200">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item) => (
            <a key={item.href + item.title} href={item.href} className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-earth-900">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-earth-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-earth-700">{item.type}</span>
                <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-forest-900">{item.category}</span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-earth-950">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-earth-700">{item.description}</p>
              <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-earth-700">Open →</span>
            </a>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="mt-8 rounded-[2rem] border border-earth-200 bg-white p-8 text-center shadow-card">
            <h2 className="font-display text-3xl font-semibold text-earth-950">No exact match yet.</h2>
            <p className="mt-3 text-earth-700">Try a broader term like breed, guard dog, children, training, cost, local dog, or heat.</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
