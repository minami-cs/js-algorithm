// 원본 배열 arr를 건드리지 않고 복사해서 사용하도록 했던 첫 번째 풀이 - 정답
// function solution(arr) {
//   let previous = [...arr];
//   let current = [];
//   let count = 0;

//   while (true) {
//     previous.map((item) => {
//       if (item >= 50 && item % 2 === 0) {
//         current.push(item / 2);
//       } else if (item < 50 && item % 2 === 1) {
//         current.push(item * 2 + 1);
//       } else {
//         current.push(item);
//       }
//     });
//     if (JSON.stringify(previous) !== JSON.stringify(current)) {
//       previous = [...current];
//       current = [];
//       count++;
//     } else {
//       break;
//     }
//   }

//   return count;
// }

// 원본 배열 arr를 그대로 사용하고 while문 조건을 수정한 두 번째 풀이 - 정답
function solution(arr) {
  let previous = [];
  let count = 0;

  while (!arr.every((item, idx) => item === previous[idx])) {
    previous = [...arr];

    arr = arr.map((item) => {
      if (item >= 50 && item % 2 === 0) {
        return item / 2;
      } else if (item < 50 && item % 2 === 1) {
        return item * 2 + 1;
      } else {
        return item;
      }
    });
    count++;
  }

  return --count;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
