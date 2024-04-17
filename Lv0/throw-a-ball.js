function solution(numbers, k) {
  return numbers[(k * 2 - 2) % numbers.length];
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3], 3));
