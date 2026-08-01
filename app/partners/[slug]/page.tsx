import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PartnerPageLayout } from "@/components/PartnerPageLayout";
import { partnerCategories } from "@/lib/partners";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return partnerCategories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const category = partnerCategories.find((item) => item.slug === params.slug);
  return category ? { title: `${category.title} | The Dog Bond Partners`, description: category.summary } : { title: "Partner Category | The Dog Bond" };
}

export default function PartnerCategoryPage({ params }: Params) {
  const category = partnerCategories.find((item) => item.slug === params.slug);
  if (!category) notFound();
  return <main><Header /><PartnerPageLayout category={category} /><Footer /></main>;
}
