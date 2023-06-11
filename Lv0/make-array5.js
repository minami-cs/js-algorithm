function solution(intStrs, k, s, l) {
  const answer = [];

  intStrs.map((intStr) => {
    const number = Number(intStr.slice(s, s + l));

    if (number > k) {
      answer.push(number);
    }
  });

  return answer;
}
