function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 나머지가 1이 되는 수 찾기
function solution(n) {
  // n의 배수가 아닌 소수?
  // 1 2 3 5 7 11 13 17 19
  for (let i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }
}
