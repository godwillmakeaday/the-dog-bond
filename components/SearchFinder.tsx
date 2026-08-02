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
const types = ["All", "Guide", "Tool", "Article", "Topic", "Glossary", "Mistake", "Breed", "Partner", "Campaign", "Page"] as const;

type TypeFilter = (typeof types)[number];

export function SearchFinder({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState<TypeFilter>("All");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const stored = window.localStorage.getItem("dogbond-recent-searches");
      const parsed: unknown = stored ? JSON.parse(stored) : [];

      if (!Array.isArray(parsed)) return [];

      return parsed
        .filter((item): item is string => typeof item === "string")
        .slice(0, 6);
    } catch {
      return [];
    }
  });
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const saveRecentSearch = (term: string) => {
    const trimmedTerm = term.trim();

    if (trimmedTerm.length < 2) return;

    setRecentSearches((current) => {
      const next = [
        trimmedTerm,
        ...current.filter(
          (item) => item.toLowerCase() !== trimmedTerm.toLowerCase(),
        ),
      ].slice(0, 6);

      window.localStorage.setItem(
        "dogbond-recent-searches",
        JSON.stringify(next),
      );

      return next;
    });
  };

  const selectSearch = (term: string) => {
    setQuery(term);
    setActiveIndex(-1);
    setIsAutocompleteOpen(false);
    saveRecentSearch(term);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    window.localStorage.removeItem("dogbond-recent-searches");
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

  const autocompleteSuggestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery.length < 2) return [];

    const candidates = [
      ...popularSearches,
      ...searchIndex.flatMap((item) => [
        item.title,
        item.category,
        ...item.keywords,
      ]),
    ];

    const uniqueCandidates = Array.from(
      new Map(
        candidates
          .map((candidate) => candidate.trim())
          .filter(Boolean)
          .map((candidate) => [candidate.toLowerCase(), candidate]),
      ).values(),
    );

    return uniqueCandidates
      .filter((candidate) => {
        const normalizedCandidate = candidate.toLowerCase();

        return (
          normalizedCandidate !== normalizedQuery &&
          normalizedCandidate.includes(normalizedQuery)
        );
      })
      .sort((a, b) => {
        const aStarts = a.toLowerCase().startsWith(normalizedQuery);
        const bStarts = b.toLowerCase().startsWith(normalizedQuery);

        if (aStarts !== bStarts) return aStarts ? -1 : 1;

        return a.length - b.length || a.localeCompare(b);
      })
      .slice(0, 6);
  }, [query]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    const scoreItem = (item: SearchItem) => {
      if (!q) return 1;

      const title = item.title.toLowerCase();
      const itemType = item.type.toLowerCase();
      const category = item.category.toLowerCase();
      const description = item.description.toLowerCase();
      const keywords = item.keywords.map((keyword) =>
        keyword.toLowerCase(),
      );

      let score = 0;

      if (title === q) score += 120;
      else if (title.startsWith(q)) score += 90;
      else if (title.includes(q)) score += 65;

      if (keywords.includes(q)) score += 55;

      for (const keyword of keywords) {
        if (keyword.startsWith(q)) score += 30;
        else if (keyword.includes(q)) score += 18;
      }

      if (category === q) score += 35;
      else if (category.includes(q)) score += 18;

      if (itemType === q) score += 25;
      else if (itemType.includes(q)) score += 10;

      if (description.includes(q)) score += 12;

      const queryWords = q.split(/\s+/).filter(Boolean);

      for (const word of queryWords) {
        if (title.includes(word)) score += 12;
        if (category.includes(word)) score += 5;
        if (description.includes(word)) score += 3;

        for (const keyword of keywords) {
          if (keyword.includes(word)) score += 6;
        }
      }

      return score;
    };

    return searchIndex
      .filter((item) => type === "All" || item.type === type)
      .map((item, index) => ({
        item,
        index,
        score: scoreItem(item),
      }))
      .filter(({ score }) => !q || score > 0)
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .map(({ item }) => item);
  }, [query, type]);
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
      resultRefs.current[activeIndex]?.click();
      return;
    }

    if (event.key === "Enter" && query.trim()) {
      event.preventDefault();
      saveRecentSearch(query);
      return;
    }

    if (event.key === "Escape") {
      setQuery("");
      setActiveIndex(-1);
    }
  };


  const highlightMatch = (text: string) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return text;

    const escapedQuery = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === trimmedQuery.toLowerCase() ? (
        <mark
          key={`${part}-${index}`}
          className="rounded bg-forest-100 px-1 text-inherit"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  const getMatchContext = (item: SearchItem) => {
    const q = query.trim().toLowerCase();

    if (!q) return "";

    const matchingKeyword = item.keywords.find((keyword) =>
      keyword.toLowerCase().includes(q),
    );

    if (item.title.toLowerCase().includes(q)) {
      return `Title matches “${query.trim()}”`;
    }

    if (matchingKeyword) {
      return `Related keyword: ${matchingKeyword}`;
    }
const resultSummary = (() => {
  const trimmedQuery = query.trim();
  const count = results.length;
  const resultLabel = count === 1 ? "result" : "results";

  if (!trimmedQuery && type === "All") {
    return `${count} ${resultLabel} available`;
  }

  if (!trimmedQuery) {
    return `${count} ${type.toLowerCase()} ${resultLabel}`;
  }

  if (type === "All") {
    return `${count} ${resultLabel} for “${trimmedQuery}”`;
  }

  return `${count} ${type.toLowerCase()} ${resultLabel} for “${trimmedQuery}”`;
})();

    if (item.category.toLowerCase().includes(q)) {
      return `Found in ${item.category}`;
    }

    if (item.description.toLowerCase().includes(q)) {
      return "Matched in the description";
    }

    return "Related to your search";
  };

  const getSearchSuggestions = () => {
    const normalizedQuery = query.trim().toLowerCase();

    const contextualSuggestions =
      normalizedQuery.includes("vaccin") ||
      normalizedQuery.includes("health") ||
      normalizedQuery.includes("vet")
        ? ["Dog Health", "Puppy Care", "Vet Partner", "Dog Around Children"]
        : normalizedQuery.includes("train") ||
            normalizedQuery.includes("aggress") ||
            normalizedQuery.includes("behaviour")
          ? [
              "Training",
              "Training Without Cruelty",
              "Guard Dog",
              "Dog Socialization",
            ]
          : normalizedQuery.includes("breed") ||
              normalizedQuery.includes("pitbull") ||
              normalizedQuery.includes("mastiff")
            ? ["Rottweiler", "Boerboel", "German Shepherd", "Local African Dog"]
            : normalizedQuery.includes("cost") ||
                normalizedQuery.includes("buy") ||
                normalizedQuery.includes("owner")
              ? [
                  "First-time Dog Owner",
                  "Dog Cost",
                  "Readiness Before Ownership",
                  "Breed Comparison",
                ]
              : [];

    return Array.from(
      new Set([...contextualSuggestions, ...popularSearches]),
    )
      .filter(
        (suggestion) =>
          suggestion.toLowerCase() !== normalizedQuery &&
          !suggestion.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, 6);
  };

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
        <div className="mt-8 rounded-[2rem] border border-earth-200 bg-white p-8 text-center shadow-card">
          <h2 className="font-display text-3xl font-semibold text-earth-950">
            {query.trim()
              ? `No exact match for “${query.trim()}”.`
              : "No exact match yet."}
          </h2>

          <p className="mt-3 text-earth-700">
            Try another phrase or continue with one of these related searches.
          </p>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-earth-500">
            Suggested searches
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
      ) : null}
      </div>
    </section>
  );
}
