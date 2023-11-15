function solution(numbers, direction) {
  const answer = [...numbers];

  direction === "right"
    ? answer.unshift(answer.pop())
    : answer.push(answer.shift());

  return answer;
}
