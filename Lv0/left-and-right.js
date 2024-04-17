// 첫 번째 풀이 - 정답
// function solution(str_list) {
//   let answer = [];

//   for (let i = 0; i < str_list.length; i++) {
//     if (str_list[i] === "l") {
//       answer = str_list.slice(0, i);
//       break;
//     }
//     if (str_list[i] === "r") {
//       answer = str_list.slice(i + 1);
//       break;
//     }
//   }

//   return answer;
// }

// 코드를 좀 더 단순하게 개선한 두 번째 풀이 - 정답
function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") return str_list.slice(0, i);
    if (str_list[i] === "r") return str_list.slice(i + 1);
  }

  return [];
}

console.log(solution(["u", "u", "l", "r"]));
console.log(solution(["l"]));
