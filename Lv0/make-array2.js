function solution(l, r) {
  const answer = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 === 0) {
      const temp = String(i)
        .split("")
        .every((str) => str === "5" || str === "0");

      if (temp) {
        answer.push(i);
      }
    }
  }

  if (answer.length < 1) {
    answer.push(-1);
  }

  return answer;
}

solution(5, 15);
