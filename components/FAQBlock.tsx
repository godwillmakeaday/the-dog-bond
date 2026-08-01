type FAQ = {
  question: string;
  answer: string;
};

export function FAQBlock({ faqs, title = "Frequently asked questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl font-semibold text-earth-950">{title}</h2>
      <div className="mt-5 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-earth-200 bg-earth-50 p-5">
            <summary className="cursor-pointer font-semibold text-earth-950">{faq.question}</summary>
            <p className="mt-3 leading-7 text-earth-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
