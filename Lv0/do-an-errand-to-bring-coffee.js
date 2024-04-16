// 첫 번째 풀이
// function solution(order) {
//   let answer = 0;

//   order.map((coffee) => {
//     if (coffee.includes("cafelatte")) answer += 5000;
//     if (coffee.includes("americano") || coffee.includes("anything"))
//       answer += 4500;
//   });

//   return answer;
// }

// 조건을 최소화한 두 번째 풀이
function solution(order) {
  let answer = 0;

  order.map((coffee) => {
    coffee.includes("cafelatte") ? (answer += 5000) : (answer += 4500);
  });

  return answer;
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
console.log(solution(["americanoice", "americano", "iceamericano"]));
