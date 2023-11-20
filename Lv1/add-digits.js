function solution(n) {
  return String(n)
    .split("")
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
}
