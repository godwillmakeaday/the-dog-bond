import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopicPageLayout } from "@/components/TopicPageLayout";
import { topicPages } from "@/lib/topics";
import { createPageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return topicPages.map((topic) => ({ slug: topic.slug })); }
export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const topic = topicPages.find((item) => item.slug === params.slug);
  return topic ? createPageMetadata({ title: topic.title, description: topic.description, pathname: `/topics/${topic.slug}` }) : { title: "Dog Ownership Topic" };
}
export default async function TopicPage(props: Params) {
  const params = await props.params;
  const topic = topicPages.find((item) => item.slug === params.slug);
  if (!topic) notFound();
  return <main><Header /><TopicPageLayout topic={topic} /><Footer /></main>;
}
