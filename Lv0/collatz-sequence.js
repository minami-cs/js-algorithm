function solution(n) {
  const answer = [n];

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      console.log(n);
    } else {
      n = 3 * n + 1;
      console.log(n);
    }
    answer.push(n);
  }

  return answer;
}

solution(10);
