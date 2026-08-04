import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlossaryPageLayout } from "@/components/GlossaryPageLayout";
import { glossaryTerms } from "@/lib/glossary";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const term = glossaryTerms.find((item) => item.slug === params.slug);
  return term ? createPageMetadata({ title: term.term, description: term.shortDefinition, pathname: `/glossary/${term.slug}`, noIndex: true, followWhenNoIndex: true }) : { title: "Dog Ownership Glossary" };
}

export default async function GlossaryTermPage(props: Params) {
  const params = await props.params;
  const term = glossaryTerms.find((item) => item.slug === params.slug);
  if (!term) notFound();
  return <main><Header /><GlossaryPageLayout term={term} /><Footer /></main>;
}
