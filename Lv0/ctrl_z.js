function solution(s) {
  const strArray = s.split(" ");

  return strArray.reduce(
    (prev, curr, idx, strArray) =>
      curr === "Z" ? prev - Number(strArray[idx - 1]) : prev + Number(curr),
    0
  );
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
