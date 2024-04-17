// 문제 지문 그대로 작성한 첫 번째 풀이 방법 - 정답
// function solution(arr) {
//   const stk = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (stk.length > 0) {
//       if (stk[stk.length - 1] === arr[i]) stk.pop();
//       else stk.push(arr[i]);
//     } else {
//       stk.push(arr[i]);
//     }
//   }

//   return stk.length > 0 ? stk : [-1];
// }

// 조건을 단순화한 두 번째 풀이 방법 - 정답
function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk[stk.length - 1] === arr[i]) stk.pop();
    else stk.push(arr[i]);
  }

  return stk.length > 0 ? stk : [-1];
}

console.log(solution([0, 1, 1, 1, 0]));
console.log(solution([0, 1, 0, 1, 0]));
console.log(solution([0, 1, 1, 0]));
