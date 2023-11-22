function solution(arr, queries) {
  let answer = [...arr];

  queries.map((query) =>
    answer.map((number, idx) => {
      if (query[0] <= idx && query[1] >= idx) {
        answer[idx] += 1;
      }
    })
  );

  return answer;
}
