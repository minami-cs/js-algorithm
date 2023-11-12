function solution(numbers, n) {
  return numbers.reduce((prev, curr) => (prev > n ? prev : prev + curr), 0);
}
