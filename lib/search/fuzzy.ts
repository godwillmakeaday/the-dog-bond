export const editDistance = (left: string, right: string) => {
  const rows = left.length + 1;
  const columns = right.length + 1;
  const matrix = Array.from({ length: rows }, () =>
    Array<number>(columns).fill(0),
  );

  for (let row = 0; row < rows; row += 1) {
    matrix[row][0] = row;
  }

  for (let column = 0; column < columns; column += 1) {
    matrix[0][column] = column;
  }

  for (let row = 1; row < rows; row += 1) {
    for (let column = 1; column < columns; column += 1) {
      const substitutionCost =
        left[row - 1] === right[column - 1] ? 0 : 1;

      matrix[row][column] = Math.min(
        matrix[row - 1][column] + 1,
        matrix[row][column - 1] + 1,
        matrix[row - 1][column - 1] + substitutionCost,
      );
    }
  }

  return matrix[left.length][right.length];
};

export const fuzzyScore = (
  queryValue: string,
  candidateValue: string,
) => {
  const normalizedQuery = queryValue.trim().toLowerCase();
  const normalizedCandidate = candidateValue.trim().toLowerCase();

  if (
    normalizedQuery.length < 4 ||
    normalizedCandidate.length < 4
  ) {
    return 0;
  }

  const distance = editDistance(
    normalizedQuery,
    normalizedCandidate,
  );
  const allowedDistance = normalizedQuery.length >= 9 ? 2 : 1;

  if (distance > allowedDistance) return 0;

  return distance === 1 ? 22 : 14;
};
