export const synonymGroups = [
  ["alsatian", "german shepherd"],
  ["vet", "veterinarian", "veterinary"],
  ["guard dog", "protection dog", "security dog"],
  ["puppy", "young dog"],
  ["children", "kids"],
  ["cost", "price", "expense"],
  ["training", "obedience"],
  ["aggressive", "reactive"],
  ["local dog", "indigenous dog", "african village dog"],
];

export const expandQuery = (queryValue: string) => {
  const normalizedQuery = queryValue.trim().toLowerCase();

  if (!normalizedQuery) return [];

  const expandedQueries = new Set<string>([normalizedQuery]);

  for (const group of synonymGroups) {
    const groupMatches = group.some(
      (term) =>
        normalizedQuery === term ||
        normalizedQuery.includes(term) ||
        term.includes(normalizedQuery),
    );

    if (groupMatches) {
      for (const term of group) {
        expandedQueries.add(term);
      }
    }
  }

  return Array.from(expandedQueries);
};

export const matchesExpandedQuery = (
  candidateValue: string,
  expandedQueries: string[],
) => {
  const normalizedCandidate = candidateValue
    .trim()
    .toLowerCase();

  return expandedQueries.some(
    (expandedQuery) =>
      normalizedCandidate.includes(expandedQuery) ||
      expandedQuery.includes(normalizedCandidate),
  );
};
