import { articles } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";

export function ArticleLibrary() {
  return (
    <section id="library" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Knowledge library"
            title="Article paths for authority, search, and public trust"
            text="The library is designed to grow into a serious content engine: behaviour guides, training notes, breed studies, safety essays, and African dog-life analysis."
          />
          <a href="#contact" className="rounded-full border border-earth-300 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-earth-900 transition hover:border-earth-900 hover:bg-earth-900 hover:text-earth-50">
            Submit a Question
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="flex min-h-72 flex-col justify-between rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-earth-500">Field note</p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-earth-950">{article.title}</h3>
                <p className="mt-4 leading-7 text-earth-700">{article.excerpt}</p>
              </div>
              <span className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-earth-700">Coming essay</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
