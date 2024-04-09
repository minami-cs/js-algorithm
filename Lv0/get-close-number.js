function solution(array, n) {
  return array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
console.log(solution([3, 10, 11, 12, 10, 28], 20));
console.log(solution([1, 2, 3, 4], 4));
console.log(solution([1, 6, 4], 5));
