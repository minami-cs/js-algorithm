function solution(s) {
  const array = s.split(" ").map((item) => Number(item));

  return [String(Math.min(...array)), String(Math.max(...array))].join(" ");
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
