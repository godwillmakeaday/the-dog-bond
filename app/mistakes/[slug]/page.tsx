import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MistakePageLayout } from "@/components/MistakePageLayout";
import { ownerMistakes } from "@/lib/mistakes";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ownerMistakes.map((mistake) => ({ slug: mistake.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const mistake = ownerMistakes.find((item) => item.slug === params.slug);
  return mistake ? createPageMetadata({ title: mistake.title, description: mistake.shortDescription, pathname: `/mistakes/${mistake.slug}`, noIndex: true, followWhenNoIndex: true }) : { title: "Dog Owner Mistake" };
}

export default async function MistakePage(props: Params) {
  const params = await props.params;
  const mistake = ownerMistakes.find((item) => item.slug === params.slug);
  if (!mistake) notFound();
  return <main><Header /><MistakePageLayout mistake={mistake} /><Footer /></main>;
}
