function solution(arr, queries) {
  let answer = [...arr];

  queries.map((query) => {
    const temp = answer[query[0]];
    answer.splice(query[0], 1, answer[query[1]]);
    answer.splice(query[1], 1, temp);
  });

  return answer;
}

solution(
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ]
);
