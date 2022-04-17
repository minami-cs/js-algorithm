function solution(N, number) {
  const table = Array.from({ length: 9 }, () => new Set());
  table.map((el, idx) => el.add(Number(String(N).repeat(idx))));
  return table;
}

console.log(solution(5, 12));
console.log(solution(2, 11));
