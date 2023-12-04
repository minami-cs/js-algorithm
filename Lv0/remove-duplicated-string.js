function solution(my_string) {
  // 사실 my_string.split('')을 할 필요 없이 그냥 문자열을 그대로 set에 넘겨도 된다..!
  const answer = [...new Set(my_string.split(""))];

  return answer.join("");
}
