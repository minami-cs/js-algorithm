function solution(arr, queries) {
  return queries.reduce((prev, curr) => {
    let tempArray = [...prev];

    return tempArray.map((number, i) => {
      return curr[0] <= i && curr[1] >= i && i % curr[2] === 0
        ? number + 1
        : number;
    });
  }, arr);
}
