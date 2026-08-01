import Link from "next/link";
import type { GlossaryTerm } from "@/lib/glossary";

export function GlossaryCard({ term }: { term: GlossaryTerm }) {
  return (
    <article className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card transition hover:-translate-y-1">
      <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-forest-900">{term.category}</span>
      <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-earth-950">{term.term}</h2>
      <p className="mt-4 text-base leading-7 text-earth-700">{term.shortDefinition}</p>
      <Link href={`/glossary/${term.slug}`} className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50 transition hover:bg-forest-900">
        Open term
      </Link>
    </article>
  );
}
