function solution(before, after) {
  const sortedBefore = before.split("").sort();
  const sortedAfter = after.split("").sort();

  return Number(sortedBefore.every((str, idx) => str === sortedAfter[idx]));
}
