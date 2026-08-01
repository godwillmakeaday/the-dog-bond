"use client";

import { useMemo, useState } from "react";
import { GuideCard } from "@/components/GuideCard";
import { decisionGuides } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(decisionGuides.map((guide) => guide.category)))] as const;

export function GuideFilter() {
  const [active, setActive] = useState<string>("All");
  const guides = useMemo(() => active === "All" ? decisionGuides : decisionGuides.filter((guide) => guide.category === active), [active]);

  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-500">Filter guides</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setActive(category)} className={active === category ? "rounded-full bg-earth-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-earth-50" : "rounded-full border border-earth-200 bg-earth-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-earth-700"}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
        </div>
      </div>
    </section>
  );
}
