function solution(board, k) {
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    if (i > k) break;
    for (let j = 0; j < board[i].length; j++) {
      if (i + j > k) break;
      result += board[i][j];
    }
  }

  return result;
}
