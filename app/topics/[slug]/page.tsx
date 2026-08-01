import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopicPageLayout } from "@/components/TopicPageLayout";
import { topicPages } from "@/lib/topics";

type Params = { params: { slug: string } };
export function generateStaticParams() { return topicPages.map((topic) => ({ slug: topic.slug })); }
export function generateMetadata({ params }: Params): Metadata { const topic = topicPages.find((item) => item.slug === params.slug); return topic ? { title: `${topic.title} | The Dog Bond`, description: topic.description } : { title: "Dog Ownership Topic | The Dog Bond" }; }
export default function TopicPage({ params }: Params) { const topic = topicPages.find((item) => item.slug === params.slug); if (!topic) notFound(); return <main><Header /><TopicPageLayout topic={topic} /><Footer /></main>; }
