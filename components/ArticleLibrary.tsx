import { SectionHeader } from "@/components/SectionHeader";
import { ArticleGrid } from "@/components/ArticleGrid";

export function ArticleLibrary() {
  return (
    <section id="library" className="bg-earth-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Knowledge library"
            title="Article paths for authority, search, and public trust"
            text="The library is designed to grow into a serious content engine: behaviour guides, training notes, breed studies, safety essays, and African dog-life analysis."
          />
          <a href="/articles" className="rounded-full border border-earth-300 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-earth-900 transition hover:border-earth-900 hover:bg-earth-900 hover:text-earth-50">
            Open Articles
          </a>
        </div>
        <div className="mt-12">
          <ArticleGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
