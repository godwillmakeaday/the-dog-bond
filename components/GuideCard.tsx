import Link from "next/link";
import type { DecisionGuide } from "@/lib/data";

export function GuideCard({ guide }: { guide: DecisionGuide }) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card transition hover:-translate-y-1">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-earth-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-earth-700">{guide.category}</span>
        <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-forest-900">{guide.readingTime}</span>
      </div>
      <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-earth-950">{guide.title}</h2>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-earth-500">{guide.question}</p>
      <p className="mt-4 flex-1 text-base leading-7 text-earth-700">{guide.shortAnswer}</p>
      <p className="mt-5 text-sm leading-6 text-earth-600"><span className="font-bold text-earth-900">Audience:</span> {guide.audience}</p>
      <Link href={`/guides/${guide.slug}`} className="mt-6 rounded-full bg-earth-900 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-earth-50 transition hover:bg-forest-900">Open decision guide</Link>
    </article>
  );
}
