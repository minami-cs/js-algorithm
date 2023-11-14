function solution(s1, s2) {
  return s1.reduce((prev, curr) => (s2.includes(curr) ? prev + 1 : prev), 0);
}
