// 첫 번째 풀이 - 정답
// function solution(balls, share) {
//   const nFactorial = Array.from({ length: balls }, (_, i) => i + 1).reduce(
//     (prev, curr) => prev * curr,
//     1
//   );
//   const rFactorial = Array.from({ length: share }, (_, i) => i + 1).reduce(
//     (prev, curr) => prev * curr,
//     1
//   );
//   const diffFactorial = Array.from(
//     { length: balls - share },
//     (_, i) => i + 1
//   ).reduce((prev, curr) => prev * curr, 1);

//   return Math.round(nFactorial / (rFactorial * diffFactorial));
// }

// 재귀함수 이용한 두 번째 풀이 - 정답
function solution(balls, share) {
  const factorial = (number) =>
    number === 0 ? 1 : number * factorial(number - 1);

  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

console.log(solution(3, 2));
console.log(solution(5, 3));
console.log(solution(30, 10));
