// 처음에 풀었던 답
function solution(emergency) {
  const answer = [];
  const orderedArray = [...emergency].sort((a, b) => b - a);

  emergency.map((item) => answer.push(orderedArray.indexOf(item) + 1));

  return answer;
}

// 다른 사람의 풀이를 보고 고친 것
// map() 메서드는 어차피 새로운 배열을 리턴하기 때문에 바로 return해줄 수 있다.
function solution(emergency) {
  const orderedArray = [...emergency].sort((a, b) => b - a);

  return emergency.map((item) => orderedArray.indexOf(item) + 1);
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
