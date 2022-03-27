// 가로 >= 세로
// 가로와 세로 최소값은 3
// yellow는 (가로 - 2) * (세로 - 2)
function solution(brown, yellow) {
  const total = brown + yellow;
  const result = [];

  for (let i = 3; i < total; i++) {
    if (total % i === 0) {
      let width = total / i;
      if ((width - 2) * (i - 2) === yellow) {
        result.push(width);
        result.push(i);
        break;
      }
    }
  }
  return result;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
