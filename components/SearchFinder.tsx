"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  popularSearches,
  searchIndex,
  type SearchItem,
} from "@/lib/search";
import {
  editDistance,
  fuzzyScore,
} from "@/lib/search/fuzzy";
import {
  expandQuery,
  matchesExpandedQuery,
} from "@/lib/search/synonyms";
import { recordSearchAnalytics } from "@/lib/search/analytics";
import { rankSearchResults } from "@/lib/search/scoring";
import {
  getAutocompleteSuggestions,
  getRecoverySuggestions as buildRecoverySuggestions,
  getSearchSuggestions as buildSearchSuggestions,
} from "@/lib/search/recovery";
import {
  clearRecentSearches as clearStoredRecentSearches,
  loadRecentSearches,
  saveRecentSearch as saveStoredRecentSearch,
} from "@/lib/search/storage";
import {
  getMatchContext as buildMatchContext,
  getResultSummary,
  splitHighlightParts,
} from "@/lib/search/presentation";

const types = ["All", "Guide", "Tool", "Article", "Topic", "Glossary", "Mistake", "Breed", "Partner", "Campaign", "Page"] as const;

type TypeFilter = (typeof types)[number];

export function SearchFinder({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState<TypeFilter>("All");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
  const [recentSearches, setRecentSearches] =
    useState<string[]>(loadRecentSearches);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const saveRecentSearch = (term: string) => {
    setRecentSearches((current) =>
      saveStoredRecentSearch(term, current),
    );
  };

  const selectSearch = (term: string) => {
    setQuery(term);
    setActiveIndex(-1);
    setIsAutocompleteOpen(false);
    saveRecentSearch(term);
  };

  const clearRecentSearches = () => {
    setRecentSearches(clearStoredRecentSearches());
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      url.searchParams.set("q", trimmedQuery);
    } else {
      url.searchParams.delete("q");
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState(window.history.state, "", nextUrl);
  }, [query]);

  useEffect(() => {
    const restoreQueryFromUrl = () => {
      const url = new URL(window.location.href);
      setQuery(url.searchParams.get("q") ?? "");
      setActiveIndex(-1);
    };

    window.addEventListener("popstate", restoreQueryFromUrl);

    return () => {
      window.removeEventListener("popstate", restoreQueryFromUrl);
    };
  }, []);

  const autocompleteSuggestions = useMemo(
    () =>
      getAutocompleteSuggestions({
        query,
        searchItems: searchIndex,
        popularSearches,
      }),
    [query],
  );

  const results = useMemo(
    () => rankSearchResults(searchIndex, query, type),
    [query, type],
  );

  const moveToResult = (index: number) => {
    if (results.length === 0) return;

    const nextIndex = (index + results.length) % results.length;
    setActiveIndex(nextIndex);
    resultRefs.current[nextIndex]?.focus();
  };

  const handleSearchKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveToResult(activeIndex + 1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveToResult(activeIndex <= 0 ? results.length - 1 : activeIndex - 1);
      return;
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      saveRecentSearch(query);
      recordSearchAnalytics(query, type, results.length);
      resultRefs.current[activeIndex]?.click();
      return;
    }

    if (event.key === "Enter" && query.trim()) {
      event.preventDefault();
      saveRecentSearch(query);
      recordSearchAnalytics(query, type, results.length);
      return;
    }

    if (event.key === "Escape") {
      setQuery("");
      setActiveIndex(-1);
    }
  };


  const highlightMatch = (text: string) =>
    splitHighlightParts(text, query).map((part, index) =>
      part.matched ? (
        <mark
          key={`${part.text}-${index}`}
          className="rounded bg-forest-100 px-1 text-inherit"
        >
          {part.text}
        </mark>
      ) : (
        part.text
      ),
    );

  const getMatchContext = (item: SearchItem) =>
    buildMatchContext(item, query);

  const resultSummary = () =>
    getResultSummary(query, type, results.length);

  const getRecoverySuggestions = () =>
    buildRecoverySuggestions({
      query,
      searchItems: searchIndex,
      popularSearches,
    });

  const getSearchSuggestions = () =>
    buildSearchSuggestions({
      query,
      popularSearches,
    });

  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-earth-200 bg-white p-6 shadow-card md:p-8">
          <label htmlFor="dogbond-search" className="text-sm font-bold uppercase tracking-[0.24em] text-earth-500">Search guides, tools, articles, and pages</label>
          <input
              id="dogbond-search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(-1);
                setIsAutocompleteOpen(true);
              }}
              onFocus={() => setIsAutocompleteOpen(true)}
              onBlur={() => {
                window.setTimeout(() => setIsAutocompleteOpen(false), 120);
              }}
              onKeyDown={handleSearchKeyDown}
              aria-controls="dogbond-search-results"
              aria-activedescendant={
                activeIndex >= 0
                  ? `dogbond-result-${activeIndex}`
                  : undefined
              }
              aria-autocomplete="list"
              placeholder="Try: guard dog, first-time owner, local African dog, heat water shade"
              className="mt-4 w-full rounded-2xl border border-earth-200 bg-earth-50 px-5 py-4 text-lg outline-none transition focus:border-earth-900"
            />

            {isAutocompleteOpen && autocompleteSuggestions.length > 0 ? (
              <div
                id="dogbond-autocomplete"
                role="listbox"
                className="mt-2 overflow-hidden rounded-2xl border border-earth-200 bg-white shadow-card"
              >
                {autocompleteSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    role="option"
                    aria-selected="false"
                    onMouseDown={(event) => {
                      event.preventDefault();
                      selectSearch(suggestion);
                    }}
                    className="flex w-full items-center justify-between gap-4 border-b border-earth-100 px-5 py-3 text-left text-sm font-semibold text-earth-800 transition last:border-b-0 hover:bg-earth-50 hover:text-earth-950"
                  >
                    <span>{highlightMatch(suggestion)}</span>
                    <span
                      aria-hidden="true"
                      className="text-xs text-earth-400"
                    >
                      Search
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
{query && (
  <div className="mt-3 flex justify-end">
    <button
      type="button"
      onClick={() => {
        setQuery("");
        setActiveIndex(-1);
      }}
      className="rounded-full border border-earth-200 px-4 py-2 text-sm font-semibold text-earth-700 transition hover:border-earth-900 hover:text-earth-900"
    >
      Clear search
    </button>
  </div>
)}
          <div className="mt-5 flex flex-wrap gap-2">
            {types.map((item) => (
              <button key={item} type="button" onClick={() => setType(item)} className={type === item ? "rounded-full bg-earth-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-earth-50" : "rounded-full border border-earth-200 bg-earth-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-earth-700"}>
                {item}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-500">Popular searches</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {popularSearches.map((item) => (
                <button key={item} type="button" onClick={() => selectSearch(item)} className="rounded-full bg-forest-100 px-4 py-2 text-sm font-semibold text-forest-900 transition hover:bg-forest-200">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {recentSearches.length > 0 ? (
        <div className="mt-6 border-t border-earth-200 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-500">
              Recent searches
            </p>

            <button
              type="button"
              onClick={clearRecentSearches}
              className="text-xs font-bold uppercase tracking-[0.16em] text-earth-600 transition hover:text-earth-950"
            >
              Clear history
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {recentSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => selectSearch(term)}
                className="rounded-full border border-earth-200 bg-white px-4 py-2 text-sm font-semibold text-earth-700 transition hover:border-earth-900 hover:text-earth-950"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div
        id="dogbond-search-results"
        className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {results.map((item, index) => (
          <a
            key={item.href + item.title}
            id={`dogbond-result-${index}`}
            ref={(element) => {
              resultRefs.current[index] = element;
            }}
            href={item.href}
            onFocus={() => setActiveIndex(index)}
              className="group flex h-full flex-col rounded-[2rem] border border-earth-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-earth-900 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-earth-100 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-earth-700">
                  {item.type}
                </span>

                <span className="rounded-full bg-forest-100 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-forest-900">
                  {item.category}
                </span>
              </div>

              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-earth-950">
                {highlightMatch(item.title)}
              </h2>

              <p className="mt-3 text-base leading-7 text-earth-700">
                {highlightMatch(item.description)}
              </p>

              {query.trim() ? (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-forest-900">
                  Why this matched · {getMatchContext(item)}
                </p>
              ) : null}

              <span className="mt-6 inline-flex items-center gap-2 border-t border-earth-200 pt-4 text-xs font-bold uppercase tracking-[0.18em] text-earth-700 transition group-hover:text-earth-950">
                Open result
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-earth-200 bg-white shadow-card">
            <div className="border-b border-earth-200 bg-earth-50 p-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">
                Search recovery
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-earth-950">
                {query.trim()
                  ? `We could not find an exact result for “${query.trim()}”.`
                  : "No exact match yet."}
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-earth-700">
                Try one of the closest related searches below. These suggestions
                use nearby wording, recognised synonyms, and spelling similarity.
              </p>
            </div>

            <div className="p-8">
              <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-earth-500">
                Try these instead
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {getRecoverySuggestions().map((term, index) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => selectSearch(term)}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-earth-200 bg-white px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-earth-900 hover:shadow-card"
                  >
                    <span>
                      <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-earth-500">
                        {index === 0
                          ? "Closest suggestion"
                          : "Related search"}
                      </span>

                      <span className="mt-1 block font-semibold text-earth-950">
                        {term}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-earth-500"
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 border-t border-earth-200 pt-6">
                <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-earth-500">
                  Explore popular searches
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {getSearchSuggestions().map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => selectSearch(term)}
                      className="rounded-full bg-forest-100 px-4 py-2 text-sm font-semibold text-forest-900 transition hover:bg-forest-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
