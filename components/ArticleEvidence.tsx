import {
  type ArticleEvidence as ArticleEvidenceRecord,
  evidenceKindLabels,
  evidenceStrengthLabels,
  getEvidenceSummary,
} from "@/lib/evidence";

type ArticleEvidenceProps = {
  evidence?: ArticleEvidenceRecord;
};

const evidenceLevelLabels: Record<
  ArticleEvidenceRecord["evidenceLevel"],
  string
> = {
  foundational: "Foundational evidence",
  strong: "Strong evidence",
  moderate: "Moderate evidence",
  developing: "Developing evidence",
  editorial: "Editorial analysis",
};

export function ArticleEvidence({ evidence }: ArticleEvidenceProps) {
  const summary = getEvidenceSummary(evidence);

  if (!evidence) {
    return (
      <aside
        aria-label="Article evidence information"
        className="mt-12 rounded-[1.75rem] border border-earth-200 bg-earth-50 p-6"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-600">
          Evidence record
        </p>

        <h2 className="mt-3 font-display text-2xl font-semibold text-earth-950">
          Sources and further reading
        </h2>

        <p className="mt-4 leading-7 text-earth-700">{summary.label}</p>
      </aside>
    );
  }

  return (
    <section
      aria-labelledby="article-evidence-heading"
      className="mt-10 rounded-[1.75rem] border border-earth-200 bg-earth-50 p-4 sm:p-6 md:p-8"
    >
      <div className="flex flex-col gap-3 border-b border-earth-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-600">
            Evidence record
          </p>

          <h2
            id="article-evidence-heading"
            className="mt-3 font-display text-3xl font-semibold text-earth-950"
          >
            Sources and further reading
          </h2>
        </div>

        <div className="rounded-2xl border border-earth-200 bg-white px-4 py-3 text-sm text-earth-700">
          <p className="font-semibold text-earth-950">
            {evidenceLevelLabels[evidence.evidenceLevel]}
          </p>
          <p className="mt-1">{summary.label}</p>
        </div>
      </div>

      {evidence.editorialNote ? (
        <div className="mt-5 rounded-2xl border border-earth-200 bg-white p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-600">
            Editorial note
          </p>
          <p className="mt-3 leading-6 text-earth-700 sm:leading-7">
            {evidence.editorialNote}
          </p>
        </div>
      ) : null}

      <ol className="mt-5 space-y-4">
        {evidence.sources.map((source, index) => {
          const attribution =
            source.author ?? source.organisation ?? "Source author not listed";

          return (
            <li
              key={source.id}
              className="rounded-2xl border border-earth-200 bg-white p-4 sm:p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-earth-950 text-xs font-bold text-white"
                >
                  {index + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold leading-6 text-earth-950 sm:text-lg sm:leading-7">
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-earth-300 underline-offset-4 transition hover:decoration-earth-700"
                      >
                        {source.title}
                      </a>
                    ) : (
                      source.title
                    )}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-earth-700 sm:leading-6">
                    {attribution}
                    {source.year ? ` · ${source.year}` : ""}
                    {source.jurisdiction ? ` · ${source.jurisdiction}` : ""}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-earth-100 px-3 py-1 text-xs font-semibold text-earth-700">
                      {evidenceKindLabels[source.kind]}
                    </span>

                    <span className="rounded-full bg-earth-950 px-3 py-1 text-xs font-semibold text-white">
                      {evidenceStrengthLabels[source.strength]}
                    </span>
                  </div>

                  {source.note ? (
                    <p className="mt-3 text-sm leading-6 text-earth-600">
                      {source.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
