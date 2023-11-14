function solution(numbers) {
  const answer = [];

  numbers.sort((a, b) => b - a);
  answer.push(numbers[0] * numbers[1]);
  answer.push(numbers[numbers.length - 1] * numbers[numbers.length - 2]);

  return Math.max(...answer);
}
