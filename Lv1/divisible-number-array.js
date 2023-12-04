function solution(arr, divisor) {
  const answer = [];

  arr.sort((a, b) => a - b);
  arr.map((number) => (number % divisor === 0 ? answer.push(number) : number));

  return answer.length ? answer : [-1];
}
