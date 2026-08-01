import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CampaignCard } from "@/components/CampaignCard";
import { campaignPages } from "@/lib/campaigns";

export const metadata: Metadata = {
  title: "Dog Bond Public Education Campaigns | The Dog Bond",
  description: "Public education campaigns for readiness, humane training, responsible guard dogs, local African dogs, and dogs around children."
};

export default function CampaignsPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Public education" title="Dog Bond Public Education Campaigns" text="Campaign hubs for responsible dog ownership education, public safety, humane training, local African dogs, and family safety." />
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {campaignPages.map((campaign) => <CampaignCard key={campaign.slug} campaign={campaign} />)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
