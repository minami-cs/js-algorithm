function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

const a1 = [1, 2, 3, 4];
const b1 = [-3, -1, 0, 2];

const a2 = [-1, 0, 1];
const b2 = [1, 0, -1];

console.log(solution(a1, b1));
console.log(solution(a2, b2));
