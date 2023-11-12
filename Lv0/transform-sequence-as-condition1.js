function solution(arr) {
  const answer = [];

  arr.map((num) => {
    if (num >= 50 && num % 2 === 0) {
      answer.push(num / 2);
    } else if (num < 50 && num % 2 === 1) {
      answer.push(num * 2);
    } else {
      answer.push(num);
    }
  });

  return answer;
}
