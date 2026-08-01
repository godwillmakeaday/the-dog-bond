import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MistakePageLayout } from "@/components/MistakePageLayout";
import { ownerMistakes } from "@/lib/mistakes";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return ownerMistakes.map((mistake) => ({ slug: mistake.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const mistake = ownerMistakes.find((item) => item.slug === params.slug);
  return mistake ? { title: `${mistake.title} | The Dog Bond`, description: mistake.shortDescription } : { title: "Dog Owner Mistake | The Dog Bond" };
}

export default function MistakePage({ params }: Params) {
  const mistake = ownerMistakes.find((item) => item.slug === params.slug);
  if (!mistake) notFound();
  return <main><Header /><MistakePageLayout mistake={mistake} /><Footer /></main>;
}
