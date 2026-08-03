

export type SearchCount = {
  label: string;
  count: number;
};

export const countValues = <T>(
  entries: T[],
  getValue: (entry: T) => string,
): SearchCount[] => {
  const counts = new Map<
    string,
    { label: string; count: number }
  >();

  for (const entry of entries) {
    const label = getValue(entry).trim();

    if (!label) continue;

    const key = label.toLowerCase();
    const current = counts.get(key);

    counts.set(key, {
      label: current?.label ?? label,
      count: (current?.count ?? 0) + 1,
    });
  }

  return Array.from(counts.values()).sort(
    (left, right) =>
      right.count - left.count ||
      left.label.localeCompare(right.label),
  );
};

export const formatDate = (value: string): string => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown time";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

export const percentage = (
  count: number,
  total: number,
): number => {
  if (total === 0) return 0;

  return Math.round((count / total) * 100);
};
