function solution(array, n) {
  return array.reduce((prev, curr) => (curr === n ? prev + 1 : prev), 0);
}
