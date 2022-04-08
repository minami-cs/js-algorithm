// 앞에서부터 n개 단위로 잘라야 한다.
// n개는 1 ~ (문자열 길이 / 2)
function solution(s) {
  let answer = [s.length];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let cnt = 1;
    let str = "";

    for (let j = 0; j < s.length; j += i) {
      const tempStr = s.substring(j, j + i);
      const curStr = s.substring(j + i, j + i * 2);
      if (tempStr === curStr) {
        cnt++;
      } else {
        if (cnt > 1) str = str + cnt + tempStr;
        // cnt가 str에 안 더해지는 현상이 발생하다가 로직 수정 후 괜찮아졌는데 왜일까?
        else str = str + tempStr;
        cnt = 1;
      }
    }
    answer.push(str.length);
  }
  return Math.min(...answer);
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
