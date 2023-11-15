function solution(n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const tempArr = [];

    for (let j = 0; j < n; j++) {
      tempArr.push(i === j ? 1 : 0);
    }

    answer.push(tempArr);
  }

  return answer;
}
