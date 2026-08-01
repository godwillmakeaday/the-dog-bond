import { articles } from "@/lib/data";

export function ArticleGrid({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? articles.slice(0, limit) : articles;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {shown.map((article) => (
        <article key={article.slug} className="flex min-h-72 flex-col justify-between rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-earth-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">{article.category}</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-earth-600">{article.readingTime}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-earth-950">{article.title}</h3>
            <p className="mt-4 leading-7 text-earth-700">{article.excerpt}</p>
          </div>
          <a href={`/articles/${article.slug}`} className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-earth-700 hover:text-forest-700">Open article</a>
        </article>
      ))}
    </div>
  );
}
