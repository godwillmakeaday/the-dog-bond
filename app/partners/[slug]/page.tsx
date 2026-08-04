import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PartnerPageLayout } from "@/components/PartnerPageLayout";
import { partnerCategories } from "@/lib/partners";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return partnerCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const category = partnerCategories.find((item) => item.slug === params.slug);
  return category ? createPageMetadata({ title: category.title, description: category.summary, pathname: `/partners/${category.slug}`, noIndex: true, followWhenNoIndex: true }) : { title: "Partner Category" };
}

export default async function PartnerCategoryPage(props: Params) {
  const params = await props.params;
  const category = partnerCategories.find((item) => item.slug === params.slug);
  if (!category) notFound();
  return <main><Header /><PartnerPageLayout category={category} /><Footer /></main>;
}
