function solution(operations) {
  let answer = [];
  const queue = [];

  while (operations.length) {
    let operation = operations.shift().split(" ");
    let command = operation[0];
    let num = Number(operation[1]);

    if (command === "I") {
      queue.push(num);
      // 숫자를 삽입하면 매번 오름차순 정렬해주기
      queue.sort((a, b) => a - b);
    }
    if (command === "D" && queue.length) {
      if (num === 1) queue.pop();
      else if (num === -1) queue.shift();
    }
  }

  if (queue.length < 1) return [0, 0];
  else {
    answer = [queue.pop(), queue.shift()];
  }
  return answer;
}

console.log(solution(["I 16", "D 1"]));
console.log(solution(["I 7", "I 5", "I -5", "D -1"]));
