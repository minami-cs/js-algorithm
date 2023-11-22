function solution(a, b) {
  const sortedArray = Array(a, b).sort((a, b) => a - b);

  return Array.from(
    { length: Math.abs(sortedArray[1] - sortedArray[0]) + 1 },
    (_, idx) => idx + sortedArray[0]
  ).reduce((prev, curr) => prev + curr, 0);
}
