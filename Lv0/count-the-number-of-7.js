function solution(array) {
  let answer = 0;

  array.map((item) => {
    for (let i = 0; i < String(item).length; i++) {
      String(item)[i] === "7" ? answer++ : answer;
    }
  });

  return answer;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
