import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { TopicCard } from "@/components/TopicCard";
import { topicPages } from "@/lib/topics";

export const metadata: Metadata = { title: "Dog Ownership Topics", description: "Major dog ownership topics across first-time ownership, guard dogs, training, African dog life, local dogs, breed suitability, children, cost, and care." };
export default function TopicsPage() { return <main><Header /><PageHero eyebrow="Topics" title="Dog Ownership Topics" text="Major topic areas for dog ownership, safety, training, breed suitability, and African dog life." /><section className="bg-earth-50 px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">{topicPages.map((topic) => <TopicCard key={topic.slug} topic={topic} />)}</div></section><Footer /></main>; }
