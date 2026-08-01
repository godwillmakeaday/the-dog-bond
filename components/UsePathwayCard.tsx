import Link from "next/link";
import type { ConversionPathway } from "@/lib/conversion";

export function UsePathwayCard({ pathway }: { pathway: ConversionPathway }) {
  return (
    <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
      <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-forest-900">Use pathway</span>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-earth-950">{pathway.title}</h2>
      <p className="mt-4 leading-7 text-earth-700">{pathway.summary}</p>
      <div className="mt-6 grid gap-2">
        {pathway.links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl bg-earth-50 p-4 text-sm font-bold leading-6 text-earth-800 transition hover:bg-earth-100">
            {link.title} →
          </Link>
        ))}
      </div>
    </article>
  );
}
