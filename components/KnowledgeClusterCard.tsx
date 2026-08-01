import Link from "next/link";
import { decisionGuides } from "@/lib/data";

type Cluster = {
  id: string;
  title: string;
  description: string;
  coreQuestion: string;
  audience: string;
  importance: string;
  status: string;
  guideSlugs: readonly string[];
  relatedRoutes: readonly string[];
};

export function KnowledgeClusterCard({ cluster }: { cluster: Cluster }) {
  const liveGuideCount = cluster.guideSlugs.length;
  const firstGuide = decisionGuides.find((guide) => guide.slug === cluster.guideSlugs[0]);

  return (
    <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-forest-900">{cluster.status}</span>
        <span className="rounded-full bg-earth-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-earth-700">{cluster.importance}</span>
        <span className="rounded-full bg-earth-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-earth-50">{liveGuideCount} guides</span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-earth-950">{cluster.title}</h2>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-earth-500">{cluster.coreQuestion}</p>
      <p className="mt-4 text-base leading-7 text-earth-700">{cluster.description}</p>
      <p className="mt-4 text-sm leading-6 text-earth-600"><span className="font-bold text-earth-900">Audience:</span> {cluster.audience}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {firstGuide ? <Link href={`/guides/${firstGuide.slug}`} className="rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50 transition hover:bg-forest-900">Start guide</Link> : null}
        <Link href="/guides" className="rounded-full border border-earth-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-800 transition hover:border-earth-900">View guides</Link>
      </div>
    </article>
  );
}
