const recentSearchesStorageKey = "dogbond-recent-searches";
const recentSearchLimit = 6;

export const loadRecentSearches = (): string[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(recentSearchesStorageKey);
    const parsed: unknown = stored ? JSON.parse(stored) : [];

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((item): item is string => typeof item === "string")
      .slice(0, recentSearchLimit);
  } catch {
    return [];
  }
};

export const saveRecentSearch = (
  term: string,
  currentSearches: string[],
): string[] => {
  const trimmedTerm = term.trim();

  if (trimmedTerm.length < 2) return currentSearches;

  const nextSearches = [
    trimmedTerm,
    ...currentSearches.filter(
      (item) => item.toLowerCase() !== trimmedTerm.toLowerCase(),
    ),
  ].slice(0, recentSearchLimit);

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(
        recentSearchesStorageKey,
        JSON.stringify(nextSearches),
      );
    } catch {
      return nextSearches;
    }
  }

  return nextSearches;
};

export const clearRecentSearches = (): string[] => {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem(recentSearchesStorageKey);
    } catch {
      return [];
    }
  }

  return [];
};
