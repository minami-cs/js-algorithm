function solution(n) {
  const answer = [];
  let divisor = 2;

  while (divisor <= n) {
    if (n % divisor === 0) {
      answer.push(divisor);
      n /= divisor;
    } else {
      divisor += 1;
    }
  }

  return Array.from(new Set(answer)).sort((a, b) => a - b);
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
