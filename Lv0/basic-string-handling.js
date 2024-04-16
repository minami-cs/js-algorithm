function solution(s) {
  return s.length === 4 || s.length === 6
    ? s.split("").every((item) => Number.isInteger(Number(item)))
    : false;
}

console.log(solution("a234"));
console.log(solution("1234"));
