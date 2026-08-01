import Link from "next/link";
import type { CampaignPage } from "@/lib/campaigns";

export function CampaignCard({ campaign }: { campaign: CampaignPage }) {
  return (
    <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
      <span className="rounded-full bg-earth-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Campaign</span>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-earth-950">{campaign.title}</h2>
      <p className="mt-4 leading-7 text-earth-700">{campaign.summary}</p>
      <Link href={`/campaigns/${campaign.slug}`} className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50 transition hover:bg-forest-900">
        Open campaign
      </Link>
    </article>
  );
}
