import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreedPageLayout } from "@/components/BreedPageLayout";
import { breedPages } from "@/lib/breeds";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return breedPages.map((breed) => ({ slug: breed.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const breed = breedPages.find((item) => item.slug === params.slug);
  return breed ? { title: `${breed.name} | The Dog Bond`, description: breed.summary } : { title: "Dog Breed | The Dog Bond" };
}

export default function BreedPage({ params }: Params) {
  const breed = breedPages.find((item) => item.slug === params.slug);
  if (!breed) notFound();
  return <main><Header /><BreedPageLayout breed={breed} /><Footer /></main>;
}
