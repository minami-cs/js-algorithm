function solution(array, height) {
  return array.reduce((prev, curr) => (curr > height ? prev + 1 : prev), 0);
}
