import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CampaignPageLayout } from "@/components/CampaignPageLayout";
import { campaignPages } from "@/lib/campaigns";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return campaignPages.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const campaign = campaignPages.find((item) => item.slug === params.slug);
  return campaign ? createPageMetadata({ title: campaign.title, description: campaign.summary, pathname: `/campaigns/${campaign.slug}` }) : { title: "Dog Bond Campaign" };
}

export default async function CampaignPage(props: Params) {
  const params = await props.params;
  const campaign = campaignPages.find((item) => item.slug === params.slug);
  if (!campaign) notFound();
  return <main><Header /><CampaignPageLayout campaign={campaign} /><Footer /></main>;
}
