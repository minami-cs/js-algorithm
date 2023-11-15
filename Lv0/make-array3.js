function solution(arr, intervals) {
  const [interval1, interval2] = intervals;

  return arr
    .slice(interval1[0], interval1[1] + 1)
    .concat(arr.slice(interval2[0], interval2[1] + 1));
}
