// 첫 번째 풀이 - 정답
// function solution(price, money, count) {
//   let result = 0;

//   while (count > 0) {
//     result += count * price;
//     count--;
//   }

//   return result > money ? result - money : 0;
// }

// 등차수열 합 공식을 이용한 두 번째 풀이 - 정답
function solution(price, money, count) {
  const diff = ((count * (count + 1)) / 2) * price - money;

  return diff > 0 ? diff : 0;
}

console.log(solution(3, 20, 4));
