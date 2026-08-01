import Link from "next/link";
import type { TopicPage } from "@/lib/topics";

export function TopicCard({ topic }: { topic: TopicPage }) {
  return (
    <article className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
      <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-forest-900">Topic</span>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-earth-950">{topic.title}</h2>
      <p className="mt-4 text-base leading-7 text-earth-700">{topic.description}</p>
      <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-earth-500">Key question</p>
      <p className="mt-2 text-sm leading-6 text-earth-700">{topic.keyQuestions[0]}</p>
      <Link href={`/topics/${topic.slug}`} className="mt-6 inline-block rounded-full bg-earth-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-50 transition hover:bg-forest-900">
        Open topic
      </Link>
    </article>
  );
}
