function solution(board, moves) {
  let stack = [];
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        if (board[j][move] === stack[stack.length - 1]) {
          stack.pop();
          result += 2;
        } else {
          stack.push(board[j][move]);
        }
        board[j][move] = 0;
        break;
      }
    }
  }

  return result;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
//1  2  3  4  5  - 각 줄 번호
//15351214 - 순서
//4311324 -> 424 -> 답은 4개 (1번과 3번 인형이 사라짐)

console.log(solution(board, moves));

// 0이 아닐 때(인형이 있을 떼) stack의 마지막 인형과 같으면 stack 요소 제거 및 result에 2개 더하기
// 만약에 0이 아닐 때(인형이 있을 때) stack의 마지막 인형과 다르면 stack에 해당 인형 추가하고 board에 해당 인형 있던 자리 0으로 바꾸기
// 인형 있던 자리 0으로 바꿨으면 break 걸어주기
