import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreedPageLayout } from "@/components/BreedPageLayout";
import { breedPages } from "@/lib/breeds";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return breedPages.map((breed) => ({ slug: breed.slug }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const breed = breedPages.find((item) => item.slug === params.slug);
  return breed ? createPageMetadata({ title: breed.name, description: breed.summary, pathname: `/breeds/${breed.slug}` }) : { title: "Dog Breed" };
}

export default async function BreedPage(props: Params) {
  const params = await props.params;
  const breed = breedPages.find((item) => item.slug === params.slug);
  if (!breed) notFound();
  return <main><Header /><BreedPageLayout breed={breed} /><Footer /></main>;
}
