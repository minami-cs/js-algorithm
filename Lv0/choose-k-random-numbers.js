function solution(arr, k) {
  const answer = [...new Set(arr)].slice(0, k);

  return answer.concat(Array.from({ length: k - answer.length }, (_) => -1));
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
