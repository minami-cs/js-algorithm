function solution(my_string) {
  const array = my_string.split(" ");
  let answer = Number(array[0]);

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] === "+") answer += Number(array[i + 1]);
    if (array[i] === "-") answer -= Number(array[i + 1]);
  }

  return answer;
}

console.log(solution("3 + 4"));
