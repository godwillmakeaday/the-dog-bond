import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import { campaignPages } from "@/lib/campaigns";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return campaignPages.map((campaign) => ({ slug: campaign.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const campaign = campaignPages.find((item) => item.slug === params.slug);
  return campaign ? { title: `${campaign.title} | The Dog Bond Campaigns`, description: campaign.summary } : { title: "Dog Bond Campaign | The Dog Bond" };
}

export default function CampaignPage({ params }: Params) {
  const campaign = campaignPages.find((item) => item.slug === params.slug);
  if (!campaign) notFound();
  return <main><Header /><CampaignPageLayout campaign={campaign} /><Footer /></main>;
}
