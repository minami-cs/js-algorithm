function solution(n) {
  // 에라토스테네스의 체 이용
  const answer = [];

  for (let i = 0; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      answer.push(i);

      if (n / i !== i) {
        answer.push(n / i);
      }
    }
    continue;
  }

  return answer.sort((a, b) => a - b);
}
