function solution(n) {
  return Array.from({ length: n }, (_, idx) => idx + 1).reduce(
    (prev, curr) => (curr % 2 === 0 ? prev + curr : prev),
    0
  );
}
