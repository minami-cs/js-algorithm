function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;

    // Math.sqrt로 약수를 구하는 알고리즘 이용
    for (let j = 0; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count += 1;
        if (i / j !== j) {
          count += 1;
        }
      }
    }

    count % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
