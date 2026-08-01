import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { decisionGuides } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return decisionGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const guide = decisionGuides.find((item) => item.slug === params.slug);
  if (!guide) return { title: "Dog Decision Guide" };
  return createPageMetadata({
    title: guide.title,
    description: `A practical decision guide about ${guide.question.toLowerCase()} for responsible dog ownership.`,
    pathname: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage(props: Params) {
  const params = await props.params;
  const guide = decisionGuides.find((item) => item.slug === params.slug);
  if (!guide) notFound();
  return <main><Header /><GuidePageLayout guide={guide} /><Footer /></main>;
}
