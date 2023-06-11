function solution(my_strings, parts) {
  let answer = "";

  parts.map((part, idx) => {
    answer += my_strings[idx].slice(part[0], part[1] + 1);
  });

  return answer;
}
