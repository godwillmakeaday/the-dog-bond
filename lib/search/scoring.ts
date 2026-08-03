import type { SearchItem } from "@/lib/search";
import { fuzzyScore } from "@/lib/search/fuzzy";
import { expandQuery } from "@/lib/search/synonyms";

export const rankSearchResults = (
  searchItems: SearchItem[],
  query: string,
  type: string,
): SearchItem[] => {
  const q = query.trim().toLowerCase();
  const expandedQueries = expandQuery(q);

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

    for (const expandedQuery of expandedQueries) {
      if (expandedQuery === q) continue;

      if (title.includes(expandedQuery)) score += 28;
      if (category.includes(expandedQuery)) score += 18;
      if (itemType.includes(expandedQuery)) score += 12;
      if (description.includes(expandedQuery)) score += 10;

      for (const keyword of keywords) {
        if (keyword.includes(expandedQuery)) {
          score += 22;
        }
      }
    }

    score += fuzzyScore(q, title);
    score += fuzzyScore(q, category);

    for (const keyword of keywords) {
      score += fuzzyScore(q, keyword);
    }

    const titleWords = title.split(/\s+/).filter(Boolean);
    const categoryWords = category.split(/\s+/).filter(Boolean);

    for (const titleWord of titleWords) {
      score += fuzzyScore(q, titleWord);
    }

    for (const categoryWord of categoryWords) {
      score += fuzzyScore(q, categoryWord);
    }

    const queryWords = q.split(/\s+/).filter(Boolean);

    for (const word of queryWords) {
      if (title.includes(word)) score += 12;
      if (category.includes(word)) score += 5;
      if (description.includes(word)) score += 3;

      for (const titleWord of titleWords) {
        score += fuzzyScore(word, titleWord);
      }

      for (const categoryWord of categoryWords) {
        score += fuzzyScore(word, categoryWord);
      }

      for (const keyword of keywords) {
        if (keyword.includes(word)) score += 6;

        score += fuzzyScore(word, keyword);

        for (const keywordWord of keyword
          .split(/\s+/)
          .filter(Boolean)) {
          score += fuzzyScore(word, keywordWord);
        }
      }
    }

    return score;
  };

  return searchItems
    .filter((item) => type === "All" || item.type === type)
    .map((item, index) => ({
      item,
      index,
      score: scoreItem(item),
    }))
    .filter(({ score }) => !q || score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ item }) => item);
};
