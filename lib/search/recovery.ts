import type { SearchItem } from "@/lib/search";
import { editDistance, fuzzyScore } from "@/lib/search/fuzzy";
import {
  expandQuery,
  matchesExpandedQuery,
} from "@/lib/search/synonyms";

type SuggestionOptions = {
  query: string;
  searchItems: SearchItem[];
  popularSearches: string[];
};

const suggestionLimit = 6;

const buildUniqueCandidates = (
  searchItems: SearchItem[],
  popularSearches: string[],
): string[] =>
  Array.from(
    new Map(
      [
        ...popularSearches,
        ...searchItems.flatMap((item) => [
          item.title,
          item.category,
          ...item.keywords,
        ]),
      ]
        .map((candidate) => candidate.trim())
        .filter(Boolean)
        .map((candidate) => [candidate.toLowerCase(), candidate]),
    ).values(),
  );

export const getAutocompleteSuggestions = ({
  query,
  searchItems,
  popularSearches,
}: SuggestionOptions): string[] => {
  const normalizedQuery = query.trim().toLowerCase();
  const expandedQueries = expandQuery(normalizedQuery);

  if (normalizedQuery.length < 2) return [];

  const uniqueCandidates = buildUniqueCandidates(
    searchItems,
    popularSearches,
  );

  return uniqueCandidates
    .filter((candidate) => {
      const normalizedCandidate = candidate.toLowerCase();

      return (
        normalizedCandidate !== normalizedQuery &&
        (
          matchesExpandedQuery(
            normalizedCandidate,
            expandedQueries,
          ) ||
          fuzzyScore(normalizedQuery, normalizedCandidate) > 0 ||
          normalizedCandidate
            .split(/\s+/)
            .some(
              (word) =>
                fuzzyScore(normalizedQuery, word) > 0,
            )
        )
      );
    })
    .sort((a, b) => {
      const normalizedA = a.toLowerCase();
      const normalizedB = b.toLowerCase();

      const aStarts = normalizedA.startsWith(normalizedQuery);
      const bStarts = normalizedB.startsWith(normalizedQuery);

      if (aStarts !== bStarts) return aStarts ? -1 : 1;

      const aContains = normalizedA.includes(normalizedQuery);
      const bContains = normalizedB.includes(normalizedQuery);

      if (aContains !== bContains) return aContains ? -1 : 1;

      const aDistance = Math.min(
        editDistance(normalizedQuery, normalizedA),
        ...normalizedA
          .split(/\s+/)
          .map((word) => editDistance(normalizedQuery, word)),
      );

      const bDistance = Math.min(
        editDistance(normalizedQuery, normalizedB),
        ...normalizedB
          .split(/\s+/)
          .map((word) => editDistance(normalizedQuery, word)),
      );

      if (aDistance !== bDistance) {
        return aDistance - bDistance;
      }

      return a.length - b.length || a.localeCompare(b);
    })
    .slice(0, suggestionLimit);
};

export const getSearchSuggestions = ({
  query,
  popularSearches,
}: Pick<SuggestionOptions, "query" | "popularSearches">): string[] => {
  const normalizedQuery = query.trim().toLowerCase();

  const contextualSuggestions =
    normalizedQuery.includes("vaccin") ||
    normalizedQuery.includes("health") ||
    normalizedQuery.includes("vet")
      ? [
          "Dog Health",
          "Puppy Care",
          "Vet Partner",
          "Dog Around Children",
        ]
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
          ? [
              "Rottweiler",
              "Boerboel",
              "German Shepherd",
              "Local African Dog",
            ]
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
    new Set([
      ...contextualSuggestions,
      ...popularSearches,
    ]),
  )
    .filter(
      (suggestion) =>
        suggestion.toLowerCase() !== normalizedQuery &&
        !suggestion.toLowerCase().includes(normalizedQuery),
    )
    .slice(0, suggestionLimit);
};

export const getRecoverySuggestions = ({
  query,
  searchItems,
  popularSearches,
}: SuggestionOptions): string[] => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return getSearchSuggestions({
      query,
      popularSearches,
    });
  }

  const expandedQueries = expandQuery(normalizedQuery);
  const candidates = buildUniqueCandidates(
    searchItems,
    popularSearches,
  );

  return candidates
    .filter(
      (candidate) =>
        candidate.toLowerCase() !== normalizedQuery,
    )
    .map((candidate) => {
      const normalizedCandidate = candidate.toLowerCase();
      let score = 0;

      if (normalizedCandidate.startsWith(normalizedQuery)) {
        score += 100;
      } else if (
        normalizedCandidate.includes(normalizedQuery)
      ) {
        score += 80;
      }

      if (
        matchesExpandedQuery(
          normalizedCandidate,
          expandedQueries,
        )
      ) {
        score += 65;
      }

      score += fuzzyScore(
        normalizedQuery,
        normalizedCandidate,
      );

      for (
        const word of normalizedCandidate
          .split(/\s+/)
          .filter(Boolean)
      ) {
        score += fuzzyScore(normalizedQuery, word);
      }

      for (
        const queryWord of normalizedQuery
          .split(/\s+/)
          .filter(Boolean)
      ) {
        if (normalizedCandidate.includes(queryWord)) {
          score += 18;
        }

        for (
          const candidateWord of normalizedCandidate
            .split(/\s+/)
            .filter(Boolean)
        ) {
          score += fuzzyScore(queryWord, candidateWord);
        }
      }

      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.candidate.length - b.candidate.length ||
        a.candidate.localeCompare(b.candidate),
    )
    .slice(0, suggestionLimit)
    .map(({ candidate }) => candidate);
};
