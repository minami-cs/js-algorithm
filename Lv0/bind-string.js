function solution(strArr) {
  const lengths = {};

  strArr.map((item) => {
    lengths[item.length] = lengths[item.length] + 1 || 1;
  });

  return Math.max(...Object.values(lengths));
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
