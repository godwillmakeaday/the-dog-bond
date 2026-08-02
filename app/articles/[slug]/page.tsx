import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleAuthority } from "@/components/ArticleAuthority";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { articles } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) {
    return { title: "Article" };
  }
  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    pathname: `/articles/${article.slug}`,
  });
}

export default async function ArticleBriefPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedLinks = article.related ?? [
    { title: "Intelligence Vault", href: "/intelligence-vault" },
    { title: "Suitability Engine", href: "/suitability-engine" },
    { title: "Ownership Standard", href: "/ownership-standard" }
  ];

  return (
    <main>
      <Header />
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        pathname={`/articles/${article.slug}`}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
      />
      <article>
        <section className="bg-earth-900 px-5 py-20 text-earth-50 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-earth-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-earth-950">{article.category}</span>
              <span className="rounded-full border border-earth-100/20 px-3 py-1 text-xs font-bold text-earth-100">{article.readingTime}</span>
            </div>
            <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl">{article.title}</h1>
            <p className="mt-7 text-xl leading-9 text-earth-100">{article.intro}</p>
            <ArticleAuthority
              publishedAt={article.publishedAt}
              updatedAt={article.updatedAt}
            />
          </div>
        </section>

        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-3xl font-semibold leading-tight text-earth-950">{section.heading}</h2>
                  <p className="mt-4 text-lg leading-9 text-earth-700">{section.body}</p>
                </section>
              ))}
            </div>
            <div className="mt-14 rounded-[2rem] border border-earth-200 bg-earth-50 p-8 shadow-card">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-600">Practical takeaway</p>
              <p className="mt-4 font-display text-3xl leading-tight text-earth-950">{article.takeaway}</p>
            </div>
            {article.disclaimer ? (
              <div className="mt-8 rounded-[1.5rem] border border-forest-200 bg-forest-50 p-6 text-sm leading-7 text-forest-900">
                <strong>Educational note:</strong> {article.disclaimer}
              </div>
            ) : null}
          </div>
        </section>
      </article>
      <RelatedLinks links={relatedLinks.map((link) => ({ ...link, text: "Continue through the Dog Bond knowledge system." }))} />
      <ReadinessBriefCTA />
      <Footer />
    </main>
  );
}
