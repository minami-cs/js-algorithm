function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      answer += 1;
    }
  }
  return answer;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));

// 아래 코드는 케이스 하나를 통과 못해서 위의 정답 코드처럼 일일이 하나씩 더했을 때는 정답임
// function solution(citations) {
//   let answer = 0;
//   citations.sort((a, b) => b - a);
//   for (let i = 0; i < citations.length; i++) {
//     if (citations[i] < i + 1) {
//       answer = i;
//       break;
//     }
//   }
//   return answer;
// }
