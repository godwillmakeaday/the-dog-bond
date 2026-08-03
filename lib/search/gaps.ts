import type { SearchItem } from "@/lib/search";
import { editDistance, fuzzyScore } from "@/lib/search/fuzzy";
import {
  expandQuery,
  matchesExpandedQuery,
} from "@/lib/search/synonyms";

export type SearchGapType =
  | "missing-content"
  | "spelling"
  | "synonym"
  | "filter"
  | "index"
  | "unknown";

export type SearchGapClassification = {
  type: SearchGapType;
  reason: string;
  suggestedQuery?: string;
};

type ClassifySearchGapOptions = {
  query: string;
  searchItems: SearchItem[];
  activeType?: string;
};

const normalize = (value: string): string =>
  value.trim().toLowerCase();

const getCandidateValues = (
  item: SearchItem,
): string[] => [
  item.title,
  item.category,
  item.description,
  item.type,
  ...item.keywords,
];

export const classifySearchGap = ({
  query,
  searchItems,
  activeType = "All",
}: ClassifySearchGapOptions): SearchGapClassification => {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return {
      type: "unknown",
      reason: "The search query was empty.",
    };
  }

  const expandedQueries = expandQuery(normalizedQuery);

  const exactOrPartialMatch = searchItems.some((item) =>
    getCandidateValues(item).some((value) =>
      normalize(value).includes(normalizedQuery),
    ),
  );

  if (exactOrPartialMatch) {
    if (
      activeType !== "All" &&
      !searchItems.some(
        (item) =>
          item.type === activeType &&
          getCandidateValues(item).some((value) =>
            normalize(value).includes(normalizedQuery),
          ),
      )
    ) {
      return {
        type: "filter",
        reason:
          "Matching content exists, but the selected filter excludes it.",
      };
    }

    return {
      type: "index",
      reason:
        "Matching content appears to exist in the search index but was not returned.",
    };
  }

  const synonymMatch = searchItems.find((item) =>
    getCandidateValues(item).some((value) =>
      matchesExpandedQuery(
        normalize(value),
        expandedQueries,
      ),
    ),
  );

  if (synonymMatch) {
    return {
      type: "synonym",
      reason:
        "A related indexed term exists, but synonym handling may be incomplete.",
      suggestedQuery: synonymMatch.title,
    };
  }

  const rankedCandidates = searchItems
    .flatMap((item) =>
      getCandidateValues(item).map((value) => ({
        value,
        normalizedValue: normalize(value),
      })),
    )
    .filter(({ normalizedValue }) => normalizedValue)
    .map(({ value, normalizedValue }) => {
      const words = normalizedValue
        .split(/\s+/)
        .filter(Boolean);

      const distance = Math.min(
        editDistance(normalizedQuery, normalizedValue),
        ...words.map((word) =>
          editDistance(normalizedQuery, word),
        ),
      );

      const score = Math.max(
        fuzzyScore(normalizedQuery, normalizedValue),
        ...words.map((word) =>
          fuzzyScore(normalizedQuery, word),
        ),
      );

      return {
        value,
        distance,
        score,
      };
    })
    .filter(
      ({ distance, score }) =>
        distance <= 2 || score > 0,
    )
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.distance - b.distance ||
        a.value.length - b.value.length ||
        a.value.localeCompare(b.value),
    );

  const bestCandidate = rankedCandidates[0];

  if (bestCandidate) {
    return {
      type: "spelling",
      reason:
        "The query is close to an indexed term and may contain a spelling error.",
      suggestedQuery: bestCandidate.value,
    };
  }

  return {
    type: "missing-content",
    reason:
      "No sufficiently close indexed content or known synonym was found.",
  };
};
