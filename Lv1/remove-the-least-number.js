// 첫 번째 풀이 - 정답
// function solution(arr) {
//   const sortedArray = [...arr].sort((a, b) => b - a);
//   const minimum = sortedArray[sortedArray.length - 1];

//   return sortedArray.slice(0, -1).length > 0
//     ? arr.filter((item) => item !== minimum)
//     : [-1];
// }

// 두 번쨰 풀이 - 정답
// Math.min을 이용해서 코드를 좀 더 간편하게 고침
function solution(arr) {
  const minimum = Math.min(...arr);

  return arr.length > 1 ? arr.filter((item) => item !== minimum) : [-1];
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([10]));
