import type { SearchCount } from "@/lib/search/dashboard";

export type SearchOpportunityFormat =
  | "Article"
  | "Guide"
  | "Breed page"
  | "Tool"
  | "Glossary"
  | "Campaign";

export type SearchOpportunityStatus =
  | "new"
  | "reviewing"
  | "planned"
  | "dismissed";

export type SearchOpportunity = {
  query: string;
  frequency: number;
  suggestedFormat: SearchOpportunityFormat;
  reason: string;
  priorityScore: number;
  status: SearchOpportunityStatus;
};

const normalize = (value: string): string =>
  value.trim().toLowerCase();

const includesAny = (
  value: string,
  terms: string[],
): boolean => terms.some((term) => value.includes(term));

const inferFormat = (
  query: string,
): {
  format: SearchOpportunityFormat;
  reason: string;
  formatWeight: number;
} => {
  const normalizedQuery = normalize(query);

  if (
    includesAny(normalizedQuery, [
      "rottweiler",
      "boerboel",
      "german shepherd",
      "pitbull",
      "mastiff",
      "local african dog",
      "breed",
    ])
  ) {
    return {
      format: "Breed page",
      reason:
        "The query appears to require breed-specific ownership intelligence.",
      formatWeight: 18,
    };
  }

  if (
    includesAny(normalizedQuery, [
      "calculator",
      "estimator",
      "checker",
      "quiz",
      "assessment",
      "score",
      "planner",
      "compare",
      "comparison",
      "checklist",
    ])
  ) {
    return {
      format: "Tool",
      reason:
        "The query suggests that the user needs an interactive decision or calculation.",
      formatWeight: 20,
    };
  }

  if (
    includesAny(normalizedQuery, [
      "meaning",
      "definition",
      "what is",
      "term",
      "glossary",
    ])
  ) {
    return {
      format: "Glossary",
      reason:
        "The query appears to seek a concise definition or explanation of terminology.",
      formatWeight: 10,
    };
  }

  if (
    includesAny(normalizedQuery, [
      "campaign",
      "awareness",
      "public safety",
      "school",
      "estate",
      "church",
      "community",
    ])
  ) {
    return {
      format: "Campaign",
      reason:
        "The query may be better served through public education or institutional outreach.",
      formatWeight: 14,
    };
  }

  if (
    includesAny(normalizedQuery, [
      "how to",
      "should i",
      "before buying",
      "before owning",
      "readiness",
      "children",
      "training",
      "guard dog",
      "cost",
      "heat",
      "shelter",
      "feeding",
      "health",
    ])
  ) {
    return {
      format: "Guide",
      reason:
        "The query involves a practical ownership decision that needs structured guidance.",
      formatWeight: 16,
    };
  }

  return {
    format: "Article",
    reason:
      "The query appears suitable for a focused explanatory resource.",
    formatWeight: 12,
  };
};

const calculatePriorityScore = (
  query: string,
  frequency: number,
  formatWeight: number,
): number => {
  const normalizedQuery = normalize(query);

  const safetyWeight = includesAny(normalizedQuery, [
    "child",
    "children",
    "bite",
    "aggression",
    "guard dog",
    "danger",
    "training",
    "health",
    "heat",
    "shelter",
    "water",
    "neglect",
  ])
    ? 20
    : 0;

  const ownershipDecisionWeight = includesAny(normalizedQuery, [
    "buy",
    "owner",
    "ownership",
    "readiness",
    "cost",
    "breed",
    "compare",
    "puppy",
  ])
    ? 12
    : 0;

  const frequencyWeight = Math.min(frequency * 10, 40);

  return Math.min(
    100,
    frequencyWeight +
      formatWeight +
      safetyWeight +
      ownershipDecisionWeight,
  );
};

export const buildSearchOpportunityBacklog = (
  contentGaps: SearchCount[],
): SearchOpportunity[] =>
  contentGaps
    .map((gap) => {
      const recommendation = inferFormat(gap.label);

      return {
        query: gap.label,
        frequency: gap.count,
        suggestedFormat: recommendation.format,
        reason: recommendation.reason,
        priorityScore: calculatePriorityScore(
          gap.label,
          gap.count,
          recommendation.formatWeight,
        ),
        status: "new" as const,
      };
    })
    .sort(
      (left, right) =>
        right.priorityScore - left.priorityScore ||
        right.frequency - left.frequency ||
        left.query.localeCompare(right.query),
    );
