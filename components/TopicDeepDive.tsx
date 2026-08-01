import type { TopicPage } from "@/lib/topics";
import { FAQBlock } from "@/components/FAQBlock";
import { PrincipleList } from "@/components/PrincipleList";
import { MistakeList } from "@/components/MistakeList";

export function TopicDeepDive({ topic }: { topic: TopicPage }) {
  return (
    <article className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-500">Who this is for</p>
      <p className="mt-3 text-lg leading-8 text-earth-700">{topic.audience}</p>

      <h2 className="mt-10 font-display text-4xl font-semibold text-earth-950">Core explanation</h2>
      <p className="mt-5 text-lg leading-8 text-earth-700">{topic.longIntro}</p>

      <div className="mt-8 space-y-7">
        {topic.sections.map((section) => (
          <section key={section.heading} className="rounded-[2rem] bg-earth-50 p-6">
            <h3 className="font-display text-2xl font-semibold text-earth-950">{section.heading}</h3>
            <p className="mt-3 leading-8 text-earth-700">{section.body}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-10 font-display text-3xl font-semibold text-earth-950">Key questions</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {topic.keyQuestions.map((question) => (
          <li key={question} className="rounded-2xl border border-earth-200 bg-white p-4 text-sm font-semibold leading-6 text-earth-800">
            {question}
          </li>
        ))}
      </ul>

      <PrincipleList principles={topic.principles} />
      <MistakeList mistakes={topic.mistakes} />
      <FAQBlock faqs={topic.faqs} />

      <section className="mt-10 rounded-[2rem] border border-earth-200 bg-earth-50 p-6">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Educational disclaimer</p>
        <p className="mt-3 text-sm leading-7 text-earth-700">
          This topic is educational. It does not replace veterinary care, professional dog training, behavioural assessment, or local legal guidance.
        </p>
      </section>
    </article>
  );
}
