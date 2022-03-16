function solution(numbers) {
  const sum = numbers.reduce((prev, curr) => prev + curr, 0);
  return 45 - sum;
}

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 0];
const numbers2 = [5, 8, 4, 0, 6, 7, 9];

console.log(solution(numbers1));
console.log(solution(numbers2));

// 0 ~ 9의 합은 45
