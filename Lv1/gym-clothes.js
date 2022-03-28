function solution(n, lost, reserve) {
  let answer = n - lost.length;
  const tempLost = [];

  // 입력값 sort해주기
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 여유분 확인하기
  for (let el of lost) {
    if (reserve.includes(el)) {
      reserve = reserve.filter((student) => student !== el);
      answer++;
    } else {
      tempLost.push(el);
    }
  }

  // 갯수 세기
  for (let el of tempLost) {
    // 왼쪽과 오른쪽 학생 확인
    if (reserve.includes(el - 1)) {
      reserve = reserve.filter((student) => student !== el - 1);
      answer++;
    } else if (reserve.includes(el + 1)) {
      reserve = reserve.filter((student) => student !== el + 1);
      answer++;
    }
  }
  return answer;
}

console.log(solution(5, [1, 2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
console.log(solution(3, [1, 2, 3], [1, 2, 3]));
