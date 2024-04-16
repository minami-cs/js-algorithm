// ASCII 코드로 비교하도록 한 첫 번째 풀이 - 정답
// function solution(s) {
//   return s
//     .split("")
//     .map((item) => item.charCodeAt())
//     .sort((a, b) => b - a)
//     .map((item) => String.fromCharCode(item))
//     .join("");
// }

// sort()와 reverse()만으로 정렬하도록 한 두 번째 풀이 - 정답
// sort()만 사용할 때는 자동으로 유니코드 기준으로 정렬된다.
function solution(s) {
  return s.split("").sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
console.log(solution("evkaASD"));
