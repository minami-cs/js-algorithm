function solution(numbers) {
  const tempNumbers = numbers.map((number) => {
    return number.toString();
  });
  const answer = tempNumbers.sort((a, b) => b + a - (a + b)).join("");
  if (answer[0] === "0") return "0";
  return answer;
}

const numbers1 = [6, 10, 2];
const numbers2 = [3, 30, 34, 5, 9];

console.log(solution(numbers1));
console.log(solution(numbers2));

// 303보단 330이 큼
// 앞자리 수와 뒷자리 수를 나눠서 뒷자리 수가 앞자리 수보다 작으면...은 비교 연산에 시간이 많이 걸릴 듯하므로
// 처음부터 sort()에서 해결하기
// 배열의 요소가 모두 0인 경우 예외처리 하기
