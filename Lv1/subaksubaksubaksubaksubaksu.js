function solution(n) {
  let answer = "";
  let count = 1;

  while (count <= n) {
    count % 2 === 0 ? (answer += "박") : (answer += "수");
    count++;
  }

  return answer;
}
