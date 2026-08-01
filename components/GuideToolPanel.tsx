import Link from "next/link";
import { toolForGuide } from "@/lib/tools";

export function GuideToolPanel({ category, slug }: { category: string; slug: string }) {
  const tool = toolForGuide(category, slug);

  if (!tool) return null;

  return (
    <div className="rounded-[2rem] border border-forest-200 bg-forest-50 p-6 shadow-card">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-forest-800">Useful tool for this guide</p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-earth-950">{tool.title}</h2>
      <p className="mt-3 text-sm leading-6 text-earth-700">{tool.purpose}</p>
      <Link href={tool.href} className="mt-5 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50 transition hover:bg-forest-900">
        Use tool
      </Link>
    </div>
  );
}
