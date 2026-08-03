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

export const searchAnalyticsStorageKey =
  "dogbond-search-analytics";

export const searchAnalyticsUpdateEventName =
  "dogbond-search-analytics-updated";

const searchAnalyticsLimit = 100;
const emptySearchAnalyticsEntries: SearchAnalyticsEntry[] = [];

let cachedRawValue: string | null = null;
let cachedEntries: SearchAnalyticsEntry[] =
  emptySearchAnalyticsEntries;

const isSearchAnalyticsEntry = (
  value: unknown,
): value is SearchAnalyticsEntry => {
  if (!value || typeof value !== "object") return false;

  const entry = value as Partial<SearchAnalyticsEntry>;

  return (
    typeof entry.query === "string" &&
    typeof entry.type === "string" &&
    typeof entry.resultCount === "number" &&
    typeof entry.zeroResults === "boolean" &&
    typeof entry.createdAt === "string"
  );
};

const resetSearchAnalyticsCache = () => {
  cachedRawValue = null;
  cachedEntries = emptySearchAnalyticsEntries;
};

const notifySearchAnalyticsUpdated = () => {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new Event(searchAnalyticsUpdateEventName),
  );
};

export const readSearchAnalytics =
  (): SearchAnalyticsEntry[] => {
    if (typeof window === "undefined") {
      return emptySearchAnalyticsEntries;
    }

    try {
      const rawValue = window.localStorage.getItem(
        searchAnalyticsStorageKey,
      );

      if (rawValue === cachedRawValue) {
        return cachedEntries;
      }

      cachedRawValue = rawValue;

      if (!rawValue) {
        cachedEntries = emptySearchAnalyticsEntries;
        return cachedEntries;
      }

      const parsed: unknown = JSON.parse(rawValue);

      cachedEntries = Array.isArray(parsed)
        ? parsed.filter(isSearchAnalyticsEntry)
        : emptySearchAnalyticsEntries;

      return cachedEntries;
    } catch {
      resetSearchAnalyticsCache();
      return cachedEntries;
    }
  };

export const getSearchAnalyticsServerSnapshot =
  (): SearchAnalyticsEntry[] =>
    emptySearchAnalyticsEntries;

export const subscribeToSearchAnalytics = (
  onStoreChange: () => void,
) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === searchAnalyticsStorageKey) {
      resetSearchAnalyticsCache();
      onStoreChange();
    }
  };

  const handleLocalUpdate = () => {
    resetSearchAnalyticsCache();
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(
    searchAnalyticsUpdateEventName,
    handleLocalUpdate,
  );

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(
      searchAnalyticsUpdateEventName,
      handleLocalUpdate,
    );
  };
};

export const clearSearchAnalytics = () => {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(
      searchAnalyticsStorageKey,
    );
  } catch {
    return;
  }

  resetSearchAnalyticsCache();
  notifySearchAnalyticsUpdated();
};

export const recordSearchAnalytics = (
  query: string,
  type: SearchAnalyticsType,
  resultCount: number,
) => {
  const trimmedQuery = query.trim();

  if (
    typeof window === "undefined" ||
    trimmedQuery.length < 2
  ) {
    return;
  }

  try {
    const currentEntries = readSearchAnalytics();
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

    const nextEntries = [
      entry,
      ...currentEntries,
    ].slice(0, searchAnalyticsLimit);

    window.localStorage.setItem(
      searchAnalyticsStorageKey,
      JSON.stringify(nextEntries),
    );

    resetSearchAnalyticsCache();
    notifySearchAnalyticsUpdated();
  } catch {
    return;
  }
};
