function solution(keyinput, board) {
  const distance = { up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0] };
  const [maxX, maxY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  let answer = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    const [x, y] = distance[keyinput[i]];

    if (answer[0] + x <= maxX && answer[0] + x >= -maxX) {
      answer[0] += x;
    }
    if (answer[1] + y <= maxY && answer[1] + y >= -maxY) {
      answer[1] += y;
    }
  }

  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
console.log(
  solution(["right", "right", "right", "right", "right", "left"], [9, 5])
);
