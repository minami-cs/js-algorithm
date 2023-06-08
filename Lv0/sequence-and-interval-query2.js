function solution(arr, queries) {
  const answer = [];

  for (const query of queries) {
    const filteredArray = arr
      .slice(query[0], query[1] + 1)
      .filter((number) => number > query[2])
      .sort((a, b) => a - b);

    answer.push(filteredArray[0] || -1);
  }

  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
