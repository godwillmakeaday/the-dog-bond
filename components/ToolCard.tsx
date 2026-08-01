import Link from "next/link";
import type { DogTool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: DogTool }) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-forest-900">{tool.status}</span>
        <span className="rounded-full bg-earth-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-earth-700">Tool</span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-earth-950">{tool.title}</h2>
      <p className="mt-4 text-base leading-7 text-earth-700">{tool.purpose}</p>
      <p className="mt-5 text-sm leading-6 text-earth-600"><span className="font-bold text-earth-900">For:</span> {tool.forWhom}</p>
      <p className="mt-3 text-sm leading-6 text-earth-600"><span className="font-bold text-earth-900">Decision:</span> {tool.decision}</p>
      <Link href={tool.href} className="mt-7 rounded-full bg-earth-900 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-earth-50 transition hover:bg-forest-900">
        Open tool
      </Link>
    </article>
  );
}
