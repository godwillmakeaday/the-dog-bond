export type SearchAnalyticsType =
  | "All"
  | "Guide"
  | "Tool"
  | "Article"
  | "Topic"
  | "Glossary"
  | "Mistake"
  | "Breed"
  | "Partner"
  | "Campaign"
  | "Page";

export type SearchAnalyticsEntry = {
  query: string;
  type: SearchAnalyticsType;
  resultCount: number;
  zeroResults: boolean;
  createdAt: string;
};

const searchAnalyticsStorageKey = "dogbond-search-analytics";

export const recordSearchAnalytics = (
  query: string,
  type: SearchAnalyticsType,
  resultCount: number,
) => {
  const trimmedQuery = query.trim();

  if (trimmedQuery.length < 2) return;

  try {
    const stored = window.localStorage.getItem(
      searchAnalyticsStorageKey,
    );
    const parsed = stored ? JSON.parse(stored) : [];
    const currentEntries: SearchAnalyticsEntry[] =
      Array.isArray(parsed) ? parsed : [];

    const mostRecent = currentEntries[0];
    const now = Date.now();

    if (
      mostRecent &&
      mostRecent.query.toLowerCase() ===
        trimmedQuery.toLowerCase() &&
      mostRecent.type === type &&
      mostRecent.resultCount === resultCount &&
      now - new Date(mostRecent.createdAt).getTime() < 5000
    ) {
      return;
    }

    const entry: SearchAnalyticsEntry = {
      query: trimmedQuery,
      type,
      resultCount,
      zeroResults: resultCount === 0,
      createdAt: new Date(now).toISOString(),
    };

    const nextEntries = [entry, ...currentEntries].slice(0, 100);

    window.localStorage.setItem(
      searchAnalyticsStorageKey,
      JSON.stringify(nextEntries),
    );
  } catch {
    return;
  }
};
