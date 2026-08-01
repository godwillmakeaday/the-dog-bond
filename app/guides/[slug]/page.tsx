import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { decisionGuides } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return decisionGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const guide = decisionGuides.find((item) => item.slug === params.slug);
  if (!guide) return { title: "Dog Decision Guide | The Dog Bond" };
  return {
    title: `${guide.title} | The Dog Bond`,
    description: `A practical decision guide about ${guide.question.toLowerCase()} for responsible dog ownership.`
  };
}

export default function GuidePage({ params }: Params) {
  const guide = decisionGuides.find((item) => item.slug === params.slug);
  if (!guide) notFound();
  return <main><Header /><GuidePageLayout guide={guide} /><Footer /></main>;
}