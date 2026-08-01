import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlossaryPageLayout } from "@/components/GlossaryPageLayout";
import { glossaryTerms } from "@/lib/glossary";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const term = glossaryTerms.find((item) => item.slug === params.slug);
  return term ? { title: `${term.term} | The Dog Bond Glossary`, description: term.shortDefinition } : { title: "Dog Ownership Glossary | The Dog Bond" };
}

export default function GlossaryTermPage({ params }: Params) {
  const term = glossaryTerms.find((item) => item.slug === params.slug);
  if (!term) notFound();
  return <main><Header /><GlossaryPageLayout term={term} /><Footer /></main>;
}
