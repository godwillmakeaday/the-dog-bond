"use client";

import {
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  clearSearchAnalytics,
  getSearchAnalyticsServerSnapshot,
  readSearchAnalytics,
  subscribeToSearchAnalytics,
  type SearchAnalyticsEntry,
} from "@/lib/search/analytics";
import {
  countValues,
  formatDate,
  percentage,
  type SearchCount,
} from "@/lib/search/dashboard";
import { searchIndex } from "@/lib/search";
import { classifySearchGap } from "@/lib/search/gaps";

export function SearchInsightsDashboard() {
  const entries = useSyncExternalStore(
    subscribeToSearchAnalytics,
    readSearchAnalytics,
    getSearchAnalyticsServerSnapshot,
  );

  const insights = useMemo(() => {
    const totalSearches = entries.length;
    const zeroResultEntries = entries.filter(
      (entry) => entry.zeroResults,
    );
    const totalResults = entries.reduce(
      (sum, entry) => sum + entry.resultCount,
      0,
    );
    const averageResults =
      totalSearches > 0
        ? totalResults / totalSearches
        : 0;

    const topSearches = countValues(
      entries,
      (entry) => entry.query,
    ).slice(0, 20);

    const classifiedGaps = zeroResultEntries.map((entry) => ({
  entry,
  classification: classifySearchGap({
    query: entry.query,
    searchItems: searchIndex,
    activeType: entry.type,
  }),
}));

const contentGaps = countValues(
  classifiedGaps
    .filter(
      ({ classification }) =>
        classification.type === "missing-content",
    )
    .map(({ entry }) => entry),
  (entry) => entry.query,
).slice(0, 20);

const gapTypes = countValues(
  classifiedGaps,
  ({ classification }) => classification.type,
);

    const filterUsage = countValues(
      entries,
      (entry) =>
        entry.type === "All" ? "All content" : entry.type,
    );

    const mostUsedFilter =
      filterUsage[0]?.label ?? "No filter data";

    return {
      totalSearches,
      zeroResultCount: zeroResultEntries.length,
      averageResults,
      topSearches,
      contentGaps,
gapTypes,
      filterUsage,
      mostUsedFilter,
      recentEntries: entries.slice(0, 20),
    };
  }, [entries]);

  const exportAnalytics = () => {
    const payload = JSON.stringify(entries, null, 2);
    const blob = new Blob([payload], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `dogbond-search-insights-${
      new Date().toISOString().split("T")[0]
    }.json`;

    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const clearAnalytics = () => {
    clearSearchAnalytics();
  };

  const renderRankedList = (
    items: SearchCount[],
    emptyMessage: string,
  ) => {
    if (items.length === 0) {
      return (
        <p className="mt-5 text-sm leading-6 text-earth-600">
          {emptyMessage}
        </p>
      );
    }

    const highestCount = items[0]?.count ?? 1;

    return (
      <ol className="mt-6 space-y-5">
        {items.map((item, index) => (
          <li key={item.label}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-3">
                <span className="mt-0.5 text-xs font-bold text-earth-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="break-words text-sm font-semibold text-earth-900">
                  {item.label}
                </span>
              </div>

              <span className="shrink-0 rounded-full bg-earth-100 px-3 py-1 text-xs font-bold text-earth-700">
                {item.count}
              </span>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-earth-100">
              <div
                className="h-full rounded-full bg-forest-700"
                style={{
                  width: `${Math.max(
                    8,
                    percentage(item.count, highestCount),
                  )}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <main className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-forest-800">
              Local intelligence
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-earth-950 md:text-6xl">
              Search Insights
            </h1>

            <p className="mt-5 text-lg leading-8 text-earth-700">
              Understand what people search for on this device,
              which searches succeed, and where the knowledge
              library still has gaps.
            </p>

            <p className="mt-4 text-sm leading-6 text-earth-500">
              These insights are stored only in this browser. They
              do not represent searches made by every visitor to
              the website.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={exportAnalytics}
              disabled={entries.length === 0}
              className="rounded-full bg-earth-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-earth-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Export JSON
            </button>

            <button
              type="button"
              onClick={clearAnalytics}
              disabled={entries.length === 0}
              className="rounded-full border border-earth-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-earth-700 transition hover:border-earth-900 hover:text-earth-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear local data
            </button>
          </div>
        </header>

        <section
          aria-label="Search metrics"
          className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {[
            {
              label: "Total searches",
              value: insights.totalSearches.toLocaleString(),
              note: "Committed searches recorded",
            },
            {
              label: "Zero-result searches",
              value: insights.zeroResultCount.toLocaleString(),
              note:
                insights.totalSearches > 0
                  ? `${percentage(
                      insights.zeroResultCount,
                      insights.totalSearches,
                    )}% of recorded searches`
                  : "No searches recorded",
            },
            {
              label: "Average results",
              value: insights.averageResults.toFixed(1),
              note: "Results returned per search",
            },
            {
              label: "Most-used filter",
              value: insights.mostUsedFilter,
              note: "Based on committed searches",
            },
          ].map((metric) => (
            <article
              key={metric.label}
              className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-500">
                {metric.label}
              </p>

              <p className="mt-4 break-words font-display text-3xl font-semibold text-earth-950">
                {metric.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-earth-600">
                {metric.note}
              </p>
            </article>
          ))}
        </section>

        {entries.length === 0 ? (
          <section className="mt-8 rounded-[2.5rem] border border-dashed border-earth-300 bg-white p-10 text-center shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">
              Awaiting data
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold text-earth-950">
              No committed searches have been recorded yet.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-earth-700">
              Search from the main search page and press Enter.
              Successful and zero-result searches will then appear
              in this dashboard on the same device.
            </p>

            <a
              href="/search"
              className="mt-7 inline-flex rounded-full bg-forest-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-forest-800"
            >
              Open search
            </a>
          </section>
        ) : (
          <>
            <section className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">
                  Demand
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-earth-950">
                  Top searches
                </h2>

                <p className="mt-3 text-sm leading-6 text-earth-600">
                  The terms most frequently committed on this
                  device.
                </p>

                {renderRankedList(
                  insights.topSearches,
                  "No search terms have been recorded.",
                )}
              </article>
<section className="mt-8 rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-8">
  <p className="text-xs font-bold uppercase tracking-[0.20em] text-earth-500">
    Failure diagnosis
  </p>

  <h2 className="mt-3 font-display text-3xl font-semibold text-earth-950">
    Why searches failed
  </h2>

  <p className="mt-3 max-w-3xl text-sm leading-6 text-earth-600">
    Zero-result searches are classified before they are treated as
    content opportunities. This separates genuine knowledge gaps from
    spelling, synonym, filter, and indexing problems.
  </p>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {insights.gapTypes.length === 0 ? (
      <p className="text-sm leading-6 text-earth-600">
        No classified search failures have been recorded.
      </p>
    ) : (
      insights.gapTypes.map((item) => (
        <article
          key={item.label}
          className="rounded-2xl border border-earth-100 bg-earth-50 p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-earth-900">
                {item.label
                  .split("-")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1),
                  )
                  .join(" ")}
              </p>

              <p className="mt-2 text-xs leading-5 text-earth-500">
                {item.label === "missing-content"
                  ? "A likely editorial or product opportunity."
                  : item.label === "spelling"
                    ? "The user may have entered a misspelled term."
                    : item.label === "synonym"
                      ? "The index may not recognise an equivalent term."
                      : item.label === "filter"
                        ? "The selected content filter may have hidden a match."
                        : item.label === "index"
                          ? "Relevant content may exist but be missing from the search index."
                          : "The cause could not yet be classified confidently."}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-earth-700">
              {item.count}
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-earth-200">
            <div
              className="h-full rounded-full bg-forest-700"
              style={{
                width: `${Math.max(
                  8,
                  percentage(
                    item.count,
                    insights.zeroResultCount || 1,
                  ),
                )}%`,
              }}
            />
          </div>
        </article>
      ))
    )}
  </div>
</section>

              <article className="rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">
                  Content opportunities
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-earth-950">
                  Zero-result gaps
                </h2>

                <p className="mt-3 text-sm leading-6 text-earth-600">
                  Repeated failed searches can reveal missing
                  guides, breeds, tools, terminology, or synonyms.
                </p>

                {renderRankedList(
                  insights.contentGaps,
                  "No zero-result searches have been recorded.",
                )}
              </article>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <article className="rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">
                  Search behaviour
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-earth-950">
                  Filter usage
                </h2>

                <div className="mt-6 space-y-4">
                  {insights.filterUsage.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-earth-100 bg-earth-50 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-earth-900">
                          {item.label}
                        </span>

                        <span className="text-xs font-bold text-earth-600">
                          {item.count} ·{" "}
                          {percentage(
                            item.count,
                            insights.totalSearches,
                          )}
                          %
                        </span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-earth-200">
                        <div
                          className="h-full rounded-full bg-forest-700"
                          style={{
                            width: `${percentage(
                              item.count,
                              insights.totalSearches,
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2.5rem] border border-earth-200 bg-white p-7 shadow-card md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">
                  Timeline
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-earth-950">
                  Recent search activity
                </h2>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[680px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-earth-200 text-xs font-bold uppercase tracking-[0.14em] text-earth-500">
                        <th className="pb-4 pr-5">Search</th>
                        <th className="pb-4 pr-5">Filter</th>
                        <th className="pb-4 pr-5">Results</th>
                        <th className="pb-4">Recorded</th>
                      </tr>
                    </thead>

                    <tbody>
                      {insights.recentEntries.map(
                        (entry, index) => (
                          <tr
                            key={`${entry.createdAt}-${entry.query}-${index}`}
                            className="border-b border-earth-100 text-sm text-earth-700"
                          >
                            <td className="py-4 pr-5 font-semibold text-earth-950">
                              {entry.query}
                            </td>

                            <td className="py-4 pr-5">
                              {entry.type === "All"
                                ? "All content"
                                : entry.type}
                            </td>

                            <td className="py-4 pr-5">
                              <span
                                className={
                                  entry.zeroResults
                                    ? "rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700"
                                    : "rounded-full bg-forest-100 px-3 py-1 text-xs font-bold text-forest-900"
                                }
                              >
                                {entry.resultCount}
                              </span>
                            </td>

                            <td className="py-4 text-earth-500">
                              {formatDate(entry.createdAt)}
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </article>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
