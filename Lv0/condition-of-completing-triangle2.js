// 첫 번째 시도 - 정답
// function solution(sides) {
//   sides.sort((a, b) => a - b);

//   return (
//     sides[1] - (sides[1] - sides[0]) + (sides[0] + sides[1] - sides[1] - 1)
//   ); // a초과 b이하인 자연수 개수 + a초과 b미만인 자연수 개수 공식 이용
// }

// 첫 번째 수식을 최적화한 두 번째 시도 - 정답
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
