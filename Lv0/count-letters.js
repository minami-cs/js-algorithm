function solution(my_string) {
  const answer = Array.from({ length: 52 }, (_) => 0);

  my_string.split("").map((str) => {
    if (str.charCodeAt() >= 65 && str.charCodeAt() <= 90) {
      answer[str.charCodeAt() - 65] += 1;
    } else {
      answer[str.charCodeAt() - 97 + 26] += 1;
    }
  });

  return answer;
}
