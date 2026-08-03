import type { SearchItem } from "@/lib/search";

export type HighlightPart = {
  text: string;
  matched: boolean;
};

export const splitHighlightParts = (
  text: string,
  query: string,
): HighlightPart[] => {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [{ text, matched: false }];
  }

  const escapedQuery = trimmedQuery.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );

  return text
    .split(new RegExp(`(${escapedQuery})`, "gi"))
    .filter((part) => part.length > 0)
    .map((part) => ({
      text: part,
      matched:
        part.toLowerCase() === trimmedQuery.toLowerCase(),
    }));
};

export const getMatchContext = (
  item: SearchItem,
  query: string,
): string => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return "";

  const matchingKeyword = item.keywords.find((keyword) =>
    keyword.toLowerCase().includes(normalizedQuery),
  );

  if (item.title.toLowerCase().includes(normalizedQuery)) {
    return `Title matches “${query.trim()}”`;
  }

  if (matchingKeyword) {
    return `Related keyword: ${matchingKeyword}`;
  }

  if (
    item.category.toLowerCase().includes(normalizedQuery)
  ) {
    return `Found in ${item.category}`;
  }

  if (
    item.description.toLowerCase().includes(normalizedQuery)
  ) {
    return "Matched in the description";
  }

  return "Related to your search";
};

export const getResultSummary = (
  query: string,
  type: string,
  count: number,
): string => {
  const trimmedQuery = query.trim();
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
};
