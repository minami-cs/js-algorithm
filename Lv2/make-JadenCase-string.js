// 첫 번째 풀이 - 정답
function solution(s) {
  const array = s.toLowerCase().split(" ");

  return array
    .map((str) =>
      str.charCodeAt(0) > 57
        ? str.substring(0, 1).toUpperCase() + str.substring(1)
        : str
    )
    .join(" ");
}

// 간소화한 두 번째 풀이 - 정답
function solution(s) {
  return s
    .split(" ")
    .map(
      (str) =>
        str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
    )
    .join(" ");
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
