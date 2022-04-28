function solution(distance, rocks, n) {
  let min = 0;
  rocks.sort((a, b) => a - b);
  let left = 0;
  let right = rocks[rocks.length - 1];

  if (n === rocks.length) return distance;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
  }

  return rocks;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
