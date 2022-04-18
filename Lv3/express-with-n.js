function solution(N, number) {
  // 문제 조건
  // N은 1이상 9 이하
  // 최솟값이 8 초과일 때 return -1
  const table = Array.from({ length: 9 }, () => new Set()).map((el, idx) =>
    el.add(Number(String(N).repeat(idx)))
  );

  // 사칙연산 전부 수행한 다음에 number를 갖고 있는 최소 dp table 값 return하도록
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      for (let num1 of table[j]) {
        for (let num2 of table[i - j]) {
          table[i].add(num1 + num2);
          table[i].add(num1 - num2);
          table[i].add(num1 * num2);
          table[i].add(Math.floor(num1 / num2));
        }
      }
    }
    if (table[i].has(number)) return i;
  }
  return -1;
}

console.log(solution(5, 12));
console.log(solution(2, 11));
