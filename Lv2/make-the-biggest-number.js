// k개의 숫자를 제외한 number 중 제일 큰 수
// stack을 이용해야 시간초과가 안 난다
function solution(number, k) {
  let result = [];

  for (let i = 0; i < number.length; i++) {
    let temp = number[i];

    // stack의 맨 뒤 요소와 현재 숫자(temp)를 비교해서 마지막 요소가 더 작으면 stack에서 빼준다
    // 숫자를 뺄 때마다 k도 감소하게 한다
    while (k > 0 && result[result.length - 1] < temp) {
      result.pop();
      k--;
    }
    // 숫자를 stack에 채우기
    result.push(temp);
  }
  // solution(4321, 1)같은 경우에는 k가 그대로 남아있고 k만큼의 수가 빠지지 않으므로 처리해주기
  result.splice(result.length - k, k);

  return result.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("4321", 1));
