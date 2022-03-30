function solution(name) {
  let count = 0;
  let aCount = 0;
  let minMove = name.length - 1;

  // 조이스틱 상하 조작시 횟수 측정
  const getUpDownCount = (letter) => (letter > 78 ? 91 - letter : letter - 65);

  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") count += getUpDownCount(name[i].charCodeAt());
    // 조이스틱 좌우 조작시 횟수 측정
    else {
      // name에서 A의 길이 구하기
      aCount = i + 1;
      while (aCount < name.length && name[aCount] === "A") {
        aCount++;
      }

      // 이동 최소거리 구하기
      const left = i === 0 ? 0 : i - 1;
      const right = name.length - aCount;
      minMove = Math.min(minMove, left + right + Math.min(left, right));
    }
  }

  count += minMove;

  return count;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
console.log(solution("ABAAAAAB"));

// alphabet 대문자 아스키코드 65 - 90
// 13번째 문자 M 아스키코드 = 77
