// 내가 푼 정답에서 다른 풀이 참고하여 리팩토링
function solution(progresses, speeds) {
  let days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  let maxDay = days[0];
  let result = [0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      result[j] += 1;
    } else {
      maxDay = days[i];
      result[++j] = 1;
    }
  }
  return result;
}

const progresses1 = [93, 30, 55];
const speeds1 = [1, 30, 5];

const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds2 = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses1, speeds1));
console.log(solution(progresses2, speeds2));

// 내가 푼 정답
// function solution(progresses, speeds) {
//   let days = progresses.map((progress, idx) => {
//     return Math.ceil((100 - progress) / speeds[idx]);
//   });
//   let maxDay = days[0];
//   let count = 0;
//   let result = [];
//   for (let i = 0; i < days.length; i++) {
//     if (days[i] <= maxDay) {
//       count += 1;
//     } else {
//       maxDay = days[i];
//       result.push(count);
//       count = 1;
//     }
//     if (i === days.length - 1) result.push(count);
//   }
//   return result;
// }
// Math.round는 반올림, Math.ceil은 올림
