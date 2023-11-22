function solution(n) {
  let answer = 0;

  if (n < 4) return answer;

  for (let i = 4; i <= n; i++) {
    let compound = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        compound += 1;
      }
    }

    if (compound > 2) answer += 1;
  }

  return answer;
}
