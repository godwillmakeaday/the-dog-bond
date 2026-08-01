import type { SharePathway } from "@/lib/share";

export function SharePathwayCard({ pathway }: { pathway: SharePathway }) {
  return (
    <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
      <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-forest-900">Share pathway</span>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-earth-950">{pathway.title}</h2>
      <p className="mt-4 leading-7 text-earth-700">{pathway.summary}</p>
      <a href={pathway.href} className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Open pathway</a>
      <div className="mt-5 rounded-2xl bg-earth-50 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-500">Suggested share text</p>
        <p className="mt-2 text-sm leading-6 text-earth-800">{pathway.shareText}</p>
      </div>
    </article>
  );
}
