function solution(arr) {
  const answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);

  return answer.length ? answer : [-1];
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
